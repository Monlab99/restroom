import time, sys, requests, os, datetime
from PyQt5.QtWidgets import *
from PyQt5.QtCore import *
from PyQt5.QtGui import *
from threading import Timer, Thread, Event
import RPi.GPIO as GPIO
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)

from Ui_2room import *
room = 4
start_switch = [22, 23, 24, 25]  
# relay = [20, 21, 22, 27] 

# Get server time
try:
    response = requests.get("http://163.50.57.85:9999/get_datetime", timeout=3)
    response.encoding = "utf-8"
    datetimeee = response.json()
    f = os.popen(f"sudo date -s {datetimeee['datetime']}")
    result = f.read().strip()
    print(result)
    time.sleep(1)
except Exception as e:
    print(f"Error getting server time: {e}")

# Setup GPIO
for i in range(room):
    GPIO.setup(start_switch[i], GPIO.IN, pull_up_down=GPIO.PUD_UP)

for i in range(room):
    GPIO.setup(relay[i], GPIO.OUT)

for i in range(room):
    GPIO.output(relay[i], 0)

# Path for log file
log_file_path = "room_usage_log.txt"

# Create log file if it doesn't exist
if not os.path.exists(log_file_path):
    with open(log_file_path, "w") as f:
        f.write("Room,EntryTime,ExitTime,TotalTimeUsed(minutes)\n")

class MainWindow(QMainWindow):
    def __init__(self, parent=None):
        super(MainWindow, self).__init__(parent)
        self.ui = Ui_MainWindow()
        self.ui.setupUi(self)

        self.ui.pushButton.clicked.connect(self.resettime)
        
        self.resettime()
        self.colorflag = [0] * room
        self.m = [0] * room
        self.s = [0] * room
        
        # Track room usage state (0: not in use, 1: in use)
        self.room_in_use = [0] * room
        self.entry_times = [None] * room

        self.timer = QTimer()
        self.timer.setInterval(300)
        self.timer.timeout.connect(self.updateTime)
        self.timer.start()

    def resettime(self):
        self.start_time = [time.time()] * room

    def log_room_usage(self, room_num, entry_time, exit_time, total_time):
        """Log room usage to text file"""
        try:
            with open(log_file_path, "a") as f:
                entry_time_str = entry_time.strftime('%Y-%m-%d %H:%M:%S')
                exit_time_str = exit_time.strftime('%Y-%m-%d %H:%M:%S')
                f.write(f"{room_num},{entry_time_str},{exit_time_str},{total_time:.2f}\n")
            print(f"Logged usage for room {room_num}")
        except Exception as e:
            print(f"Error logging room usage: {e}")

    def updateTime(self):
        try:
            timenow = datetime.datetime.now()
            self.ui.label.setText(str(timenow.strftime('%H:%M')))
            
            for i in range(room):
                if GPIO.input(start_switch[i]) == 0:  # Switch is pressed (room is in use)
                    if self.colorflag[i] != 1:
                        exec('self.ui.lcd'+str(i+1)+'.setStyleSheet("background-color: rgb(255, 255, 0);")')
                        self.colorflag[i] = 1
                    
                    # Record entry time when room status changes from not in use to in use
                    if self.room_in_use[i] == 0:
                        self.room_in_use[i] = 1
                        self.entry_times[i] = datetime.datetime.now()
                        self.start_time[i] = time.time()
                        print(f"Room {i+1} entered at {self.entry_times[i]}")
                else:  # Switch is not pressed (room is not in use)
                    # Log when room status changes from in use to not in use
                    if self.room_in_use[i] == 1:
                        exit_time = datetime.datetime.now()
                        total_time_minutes = (time.time() - self.start_time[i]) / 60
                        self.log_room_usage(i+1, self.entry_times[i], exit_time, total_time_minutes)
                        self.room_in_use[i] = 0
                        GPIO.output(relay[i], 0)
                        
                    self.start_time[i] = time.time()
                    if self.colorflag[i] != 2:
                        exec('self.ui.lcd'+str(i+1)+'.setStyleSheet("background-color: rgb(0, 255, 0);")')
                        self.colorflag[i] = 2

                # Update displayed time for each room
                now = time.time() - self.start_time[i]
                self.m[i], self.s[i] = divmod(now, 60)

                if len(str(int(self.s[i]))) == 1:
                    s = '0'+str(int(self.s[i]))
                else:
                    s = str(int(self.s[i]))
                    
                if len(str(int(self.m[i]))) ==  1:
                    m = '0'+str(int(self.m[i]))
                else:
                    m = str(int(self.m[i]))

                timecount = m+':'+s
                exec('self.ui.lcd'+str(i+1)+'.display(timecount)')

                # Check if time exceeds threshold and change color to red (keeping this from original code)
                if int(self.m[i]) >= 15 and self.room_in_use[i] == 1:
                    if self.colorflag[i] != 3:
                        exec('self.ui.lcd'+str(i+1)+'.setStyleSheet("background-color: rgb(255, 0, 0);")')
                        self.colorflag[i] = 3

        except Exception as err:
            print(f"Error in updateTime: {err}")

if __name__ == "__main__":
    app = QApplication(sys.argv)
    app.setStyle("fusion")
    main = MainWindow()
    main.showFullScreen()
    sys.exit(app.exec_())