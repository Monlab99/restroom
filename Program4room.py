import time,sys,requests,os,datetime
from PyQt5.QtWidgets import *
from PyQt5.QtCore import *
from PyQt5.QtGui import *
from threading import Timer, Thread, Event
import RPi.GPIO as GPIO
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)

############### men 3_2 ###################

from Ui_2room import *
room = 4
start_switch = [23, 24, 25, 26]  
relay = [20, 21, 22, 27] 

response = requests.get("http://163.50.57.85:9999/get_datetime", timeout=3)
response.encoding = "utf-8"
datetimeee = response.json()
f = os.popen(f"sudo date -s {datetimeee['datetime']}")
result = f.read().strip()
print(result)
time.sleep(1)
# if abs((datetime.datetime.strptime((datetimeee['datetime'].replace('T',' '))[:19], '%Y-%m-%d %H:%M:%S')  - datetime.datetime.now()).total_seconds()) > 60 :
#     print('Wait 30 sec for start !!!') # waiting for date time update
#     time.sleep(30)

for i in range(room):
    GPIO.setup(start_switch[i],GPIO.IN, pull_up_down=GPIO.PUD_UP)

for i in range(room):
    GPIO.setup(relay[i],GPIO.OUT)

for i in range(room):
    GPIO.output(relay[i],0)

class MainWindow(QMainWindow):
    def __init__(self,parent=None):
            super(MainWindow,self).__init__(parent)
            self.ui = Ui_MainWindow()
            self.ui.setupUi(self)

            self.ui.pushButton.clicked.connect(self.resettime)
            
            self.resettime()
            self.colorflag = [0]*room
            self.m = [0]*room
            self.s = [0]*room
            MainWindow.alert = [0]*room
            MainWindow.alarm = [0]*room
            MainWindow.alertflag = 0
            MainWindow.alarmflag = 0

            self.timer = QTimer()
            self.timer.setInterval(300)
            self.timer.timeout.connect(self.updateTime)
            self.timer.start()

    def resettime(self):
        self.start_time = [time.time()]*room

    def updateTime(self):
        try:
            timenow = datetime.datetime.now()
            self.ui.label.setText(str(timenow.strftime('%H:%M')))
            for i in range(room):
                if GPIO.input(start_switch[i]) == 0 :
                    if self.colorflag[i] != 1 :
                        exec('self.ui.lcd'+str(i+1)+'.setStyleSheet("background-color: rgb(255, 255, 0);")')
                        self.colorflag[i] = 1
                else:
                    GPIO.output(relay[i],0)
                    self.start_time[i] = time.time()
                    if self.colorflag[i] != 2 :
                        exec('self.ui.lcd'+str(i+1)+'.setStyleSheet("background-color: rgb(0, 255, 0);")')
                        self.colorflag[i] = 2

                now = time.time() - self.start_time[i]
                self.m[i],self.s[i] = divmod(now,60)

                if len(str(int(self.s[i]))) == 1 :
                    s = '0'+str(int(self.s[i]))
                else:
                    s = str(int(self.s[i]))
                if len(str(int(self.m[i]))) == 1 :
                    m = '0'+str(int(self.m[i]))
                else:
                    m = str(int(self.m[i]))

                timecount = m+':'+s
                exec('self.ui.lcd'+str(i+1)+'.display(timecount)')

            sleeptime = 0
            for r in range(room):
                if int(self.m[r]) == 12 and int(self.s[r]) == 0 :
                    MainWindow.alert[r] = 1
                    sleeptime = 1
            if sleeptime == 1 and MainWindow.alertflag == 0 :
                MainWindow.alertflag = 1
                WORK333().start()

            alerttime = 0        
            for r in range(room):
                if int(self.m[r]) >= 15 :
                    if self.colorflag[r] != 3 :
                        exec('self.ui.lcd'+str(r+1)+'.setStyleSheet("background-color: rgb(255, 0, 0);")')
                        self.colorflag[r] = 3
                    MainWindow.alarm[r] = 1
                    alerttime = 1
            if alerttime == 1 and MainWindow.alarmflag == 0:
                MainWindow.alarmflag = 1
                WORK777().start()

        except Exception as err:
            print(err)

class WORK333(Thread):
    def run(self):
        for r in range(room):
            if MainWindow.alert[r] == 1 :
                GPIO.output(relay[r],1)
        time.sleep(0.1)
        for r in range(room):
            GPIO.output(relay[r],0)
            MainWindow.alert[r] = 0
        time.sleep(0.1)
        MainWindow.alertflag = 0

class WORK777(Thread):
    def run(self):
        for r in range(room):
            if MainWindow.alarm[r] == 1 :
                GPIO.output(relay[r],1)
        time.sleep(0.5)
        for r in range(room):
            GPIO.output(relay[r],0)
            MainWindow.alarm[r] = 0
        time.sleep(0.5)
        MainWindow.alarmflag = 0

if __name__ == "__main__":
    app = QApplication(sys.argv)
    app.setStyle("fusion")
    main = MainWindow()
    main.showFullScreen()
    sys.exit(app.exec_())