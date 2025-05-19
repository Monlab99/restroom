[
    {
        "id": "38495f4349516fb6",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "259ccad58d4e6931",
        "type": "tab",
        "label": "Flow 2",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "84cd4f95eb1905c4",
        "type": "tab",
        "label": "Flow 7",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "b6e9a91b958c6e93",
        "type": "tab",
        "label": "Timezone",
        "disabled": false,
        "info": ""
    },
    {
        "id": "b6580a517abe60c7",
        "type": "tab",
        "label": "Dynamic switch",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "65f7ef7af8ab6672",
        "type": "ui_tab",
        "name": "Auto Oil Apply",
        "icon": "settings",
        "order": 1,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "a000adb26d0ff990",
        "type": "ui_base",
        "theme": {
            "name": "theme-light",
            "lightTheme": {
                "default": "#0094CE",
                "baseColor": "#0094CE",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "edited": true,
                "reset": false
            },
            "darkTheme": {
                "default": "#097479",
                "baseColor": "#097479",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "edited": false
            },
            "customTheme": {
                "name": "Untitled Theme 1",
                "default": "#4B7930",
                "baseColor": "#4B7930",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"
            },
            "themeState": {
                "base-color": {
                    "default": "#0094CE",
                    "value": "#0094CE",
                    "edited": false
                },
                "page-titlebar-backgroundColor": {
                    "value": "#0094CE",
                    "edited": false
                },
                "page-backgroundColor": {
                    "value": "#fafafa",
                    "edited": false
                },
                "page-sidebar-backgroundColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "group-textColor": {
                    "value": "#1bbfff",
                    "edited": false
                },
                "group-borderColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "group-backgroundColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "widget-textColor": {
                    "value": "#111111",
                    "edited": false
                },
                "widget-backgroundColor": {
                    "value": "#0094ce",
                    "edited": false
                },
                "widget-borderColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "base-font": {
                    "value": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"
                }
            },
            "angularTheme": {
                "primary": "indigo",
                "accents": "blue",
                "warn": "red",
                "background": "grey",
                "palette": "light"
            }
        },
        "site": {
            "name": "Node-RED Dashboard",
            "hideToolbar": "false",
            "allowSwipe": "false",
            "lockMenu": "false",
            "allowTempTheme": "true",
            "dateFormat": "DD/MM/YYYY",
            "sizes": {
                "sx": 48,
                "sy": 48,
                "gx": 6,
                "gy": 6,
                "cx": 6,
                "cy": 6,
                "px": 0,
                "py": 0
            }
        }
    },
    {
        "id": "92a4e30a2f1ece7e",
        "type": "ui_group",
        "name": "Settings",
        "tab": "1f2e8367eb26bc3f",
        "order": 1,
        "disp": true,
        "width": "7",
        "collapse": true,
        "className": ""
    },
    {
        "id": "3ba37fd4.6558f",
        "type": "ui_group",
        "name": "Example Flow",
        "tab": "4d8d2f83.26819",
        "order": 4,
        "disp": true,
        "width": "8",
        "collapse": false,
        "className": ""
    },
    {
        "id": "a1d8ed34.6a447",
        "type": "ui_group",
        "name": "Time",
        "tab": "4d8d2f83.26819",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "4d8d2f83.26819",
        "type": "ui_tab",
        "name": "Settings",
        "icon": "settings",
        "order": 3
    },
    {
        "id": "64eefd31.f05964",
        "type": "ui_group",
        "name": "Default",
        "tab": "4d8d2f83.26819",
        "order": 2,
        "disp": true,
        "width": "9",
        "collapse": false,
        "className": ""
    },
    {
        "id": "0950c6cea52fe237",
        "type": "modbus-client",
        "name": "",
        "clienttype": "tcp",
        "bufferCommands": true,
        "stateLogEnabled": false,
        "queueLogEnabled": false,
        "failureLogEnabled": true,
        "tcpHost": "127.0.0.1",
        "tcpPort": "502",
        "tcpType": "DEFAULT",
        "serialPort": "/dev/ttyUSB",
        "serialType": "RTU-BUFFERD",
        "serialBaudrate": "9600",
        "serialDatabits": "8",
        "serialStopbits": "1",
        "serialParity": "none",
        "serialConnectionDelay": "100",
        "serialAsciiResponseStartDelimiter": "0x3A",
        "unit_id": "1",
        "commandDelay": "1",
        "clientTimeout": "1000",
        "reconnectOnTimeout": true,
        "reconnectTimeout": "2000",
        "parallelUnitIdsAllowed": true,
        "showErrors": false,
        "showWarnings": true,
        "showLogs": true
    },
    {
        "id": "21fa9dcb251a769b",
        "type": "modbus-client",
        "name": "",
        "clienttype": "tcp",
        "bufferCommands": true,
        "stateLogEnabled": false,
        "queueLogEnabled": false,
        "failureLogEnabled": true,
        "tcpHost": "191.191.12.23:",
        "tcpPort": "502",
        "tcpType": "DEFAULT",
        "serialPort": "/dev/ttyUSB",
        "serialType": "RTU-BUFFERD",
        "serialBaudrate": "9600",
        "serialDatabits": "8",
        "serialStopbits": "1",
        "serialParity": "none",
        "serialConnectionDelay": "100",
        "serialAsciiResponseStartDelimiter": "0x3A",
        "unit_id": 1,
        "commandDelay": 1,
        "clientTimeout": 1000,
        "reconnectOnTimeout": true,
        "reconnectTimeout": 2000,
        "parallelUnitIdsAllowed": true,
        "showErrors": false,
        "showWarnings": true,
        "showLogs": true
    },
    {
        "id": "1960b20eeab2e29e",
        "type": "ui_group",
        "name": " ExDashboard",
        "tab": "4d8d2f83.26819",
        "order": 5,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "db6f9b3e.e5f338",
        "type": "modbus-client",
        "name": "local",
        "clienttype": "tcp",
        "bufferCommands": true,
        "stateLogEnabled": false,
        "tcpHost": "127.0.0.1",
        "tcpPort": "10502",
        "tcpType": "DEFAULT",
        "serialPort": "/dev/ttyUSB",
        "serialType": "RTU-BUFFERD",
        "serialBaudrate": "9600",
        "serialDatabits": "8",
        "serialStopbits": "1",
        "serialParity": "none",
        "serialConnectionDelay": "100",
        "unit_id": 1,
        "commandDelay": 1,
        "clientTimeout": 1000,
        "reconnectTimeout": 2000
    },
    {
        "id": "1fc0c274.125a6e",
        "type": "ui_group",
        "name": "Modbus Test",
        "tab": "4d8d2f83.26819",
        "order": 3,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "48496f3b.10762",
        "type": "modbus-client",
        "name": "local",
        "clienttype": "tcp",
        "bufferCommands": true,
        "stateLogEnabled": false,
        "tcpHost": "127.0.0.1",
        "tcpPort": "10502",
        "tcpType": "DEFAULT",
        "serialPort": "/dev/ttyUSB",
        "serialType": "RTU-BUFFERD",
        "serialBaudrate": "9600",
        "serialDatabits": "8",
        "serialStopbits": "1",
        "serialParity": "none",
        "serialConnectionDelay": "100",
        "unit_id": 1,
        "commandDelay": 1,
        "clientTimeout": 1000,
        "reconnectTimeout": 2000
    },
    {
        "id": "fac5ac0e7086f5a8",
        "type": "modbus-client",
        "name": "",
        "clienttype": "tcp",
        "bufferCommands": true,
        "stateLogEnabled": false,
        "queueLogEnabled": false,
        "failureLogEnabled": true,
        "tcpHost": "localhost",
        "tcpPort": "9090",
        "tcpType": "DEFAULT",
        "serialPort": "/dev/ttyUSB",
        "serialType": "RTU-BUFFERD",
        "serialBaudrate": "9600",
        "serialDatabits": "8",
        "serialStopbits": "1",
        "serialParity": "none",
        "serialConnectionDelay": "100",
        "serialAsciiResponseStartDelimiter": "0x3A",
        "unit_id": "1",
        "commandDelay": "1",
        "clientTimeout": "1000",
        "reconnectOnTimeout": true,
        "reconnectTimeout": "2000",
        "parallelUnitIdsAllowed": true,
        "showErrors": false,
        "showWarnings": true,
        "showLogs": true
    },
    {
        "id": "6dd3ede0ce591c2c",
        "type": "ui_group",
        "name": "PUS-EX",
        "tab": "60d4cd2f622135ea",
        "order": 1,
        "disp": true,
        "width": 6,
        "collapse": false,
        "className": ""
    },
    {
        "id": "2d2c7bac5c98f0fa",
        "type": "ui_group",
        "name": "HI-NEWGRP",
        "tab": "60d4cd2f622135ea",
        "order": 2,
        "disp": true,
        "width": 12,
        "collapse": false,
        "className": ""
    },
    {
        "id": "60d4cd2f622135ea",
        "type": "ui_tab",
        "name": "Control LED",
        "icon": "dashboard",
        "order": 6,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "0612222739d719fc",
        "type": "ui_group",
        "name": "Monitor",
        "tab": "65f7ef7af8ab6672",
        "order": 1,
        "disp": true,
        "width": "7",
        "collapse": true,
        "className": ""
    },
    {
        "id": "c668871f3c9988a8",
        "type": "ui_tab",
        "name": "Monitor Auto Oil Apply",
        "icon": "monitor",
        "order": 5,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "d0a4d80e5d984cdb",
        "type": "ui_group",
        "name": "text",
        "tab": "c668871f3c9988a8",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "3e8ea1e009eb6be3",
        "type": "ui_group",
        "name": "Dynamic Switch",
        "tab": "4d3aff296e53caa4",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false,
        "className": ""
    },
    {
        "id": "4d3aff296e53caa4",
        "type": "ui_tab",
        "name": "Dynamic switch",
        "icon": "dashboard",
        "order": 7,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "470e04a4.87c72c",
        "type": "ui_group",
        "name": "Device Status",
        "tab": "23994b37.39eb44",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "a7539552.a04768",
        "type": "ui_group",
        "name": "Device Management",
        "tab": "23994b37.39eb44",
        "order": 4,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "ab94b758.4be768",
        "type": "ui_group",
        "name": "Control Output 1",
        "tab": "23994b37.39eb44",
        "order": 2,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "a5e4e892.40d1b8",
        "type": "ui_group",
        "name": "O1 - O4 Output States",
        "tab": "23994b37.39eb44",
        "order": 3,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "23994b37.39eb44",
        "type": "ui_tab",
        "name": "NETIO AN30 (REST JSON)",
        "icon": "dashboard",
        "order": 4,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "1f2e8367eb26bc3f",
        "type": "ui_tab",
        "name": "Setup ",
        "icon": "dashboard",
        "order": 2,
        "disabled": false,
        "hidden": false
    },
    {
        "id": "92799e6ceb26ce4c",
        "type": "mqtt-broker",
        "name": "Vertical Farm MQTT Broker",
        "broker": "localhost",
        "port": "1883",
        "clientid": "edgebox",
        "autoConnect": true,
        "usetls": false,
        "protocolVersion": "4",
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": "",
        "birthMsg": {},
        "closeTopic": "",
        "closeQos": "0",
        "closePayload": "",
        "closeMsg": {},
        "willTopic": "",
        "willQos": "0",
        "willPayload": "",
        "willMsg": {},
        "userProps": "",
        "sessionExpiry": ""
    },
    {
        "id": "422d1c31d1be6a0f",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "illuminance 1",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "illuminance 1"
            },
            {
                "property": "icon",
                "value": "mdi:white-balance-sunny"
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": "illuminance"
            },
            {
                "property": "unit_of_measurement",
                "value": "lx"
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "984777e35fe5df41",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "UV Index 1",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "UV Index 1"
            },
            {
                "property": "icon",
                "value": "mdi:weather-sunny-alert"
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "aa2550ec5bd7e16d",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "415nm/Violet/1",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "415nm/Violet/1"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "1081ec4a87c3a11d",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "445nm//Indigo/1",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "445nm//Indigo/1"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "02922d147e24beeb",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "480nm//Blue/1",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "480nm//Blue/1"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "c1e52103b14fe733",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "515nm//Cyan/1",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "515nm//Cyan/1"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "ea32de18c7e2269b",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "555nm/Green/1",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "555nm/Green/1"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "b6ce10d64dcc146f",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "590nm/Yellow/1",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "590nm/Yellow/1"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "aaa61786adb256c4",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "630nm/Orange/1",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "630nm/Orange/1"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "7fd9e24935733b20",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "680nm/Red/1",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "680nm/Red/1"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "affc43c61adc4013",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "NIR/1",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "NIR/1"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "7b87367611c7ccc2",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "Clear/1",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "Clear/1"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "395fd36f11ce6f14",
        "type": "influxdb",
        "hostname": "127.0.0.1",
        "port": "8086",
        "protocol": "http",
        "database": "smart_vertical_farm",
        "name": "Vertical Farm Database",
        "usetls": false,
        "tls": "",
        "influxdbVersion": "1.x",
        "url": "http://localhost:8086",
        "rejectUnauthorized": true
    },
    {
        "id": "018cf03d8c3850df",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "illuminance 2",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "illuminance 2"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": "illuminance"
            },
            {
                "property": "unit_of_measurement",
                "value": "lx"
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "57817051aeb2255d",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "UV index 2",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "UV index 2"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "c6765543dcaafb48",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "415nm/Violet/2",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "415nm/Violet/2"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "81ba0e13b98240e7",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "445nm//Indigo/2",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "445nm//Indigo/2"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "29de4c58e6f5108b",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "480nm/Blue/2",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "480nm/Blue/2"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "4017b1b857862dd8",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "515nm//Cyan/2",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "515nm//Cyan/2"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "ef31e72248b0b703",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "555nm/Green/2",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "555nm/Green/2"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "0a95eacb1fe38d73",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "590nm/Yellow/2",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "590nm/Yellow/2"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "c83cae222b5e68a4",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "630nm/Orange/2",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "630nm/Orange/2"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "80038d5cf302ded1",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "680nm/Red/2",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "680nm/Red/2"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "2ed3f3fda3eda8b4",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "NIR/2",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "NIR/2"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "68419a0f24f0cb43",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "f28eba72f09759b3",
        "name": "Clear/2",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "Clear/2"
            },
            {
                "property": "icon",
                "value": ""
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": ""
            },
            {
                "property": "unit_of_measurement",
                "value": ""
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "02f69a47cc07b65e",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "09851782a7ed422a",
        "name": "Soil Moisture (Upper Tray)",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "Soil Moisture (Upper Tray)"
            },
            {
                "property": "icon",
                "value": "mdi:water"
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": "moisture"
            },
            {
                "property": "unit_of_measurement",
                "value": "%"
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "b9f6d3d801766d06",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "09851782a7ed422a",
        "name": "Soil Moisture (Lower Tray)",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "Soil Moisture (Lower Tray)"
            },
            {
                "property": "icon",
                "value": "mdi:water"
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": "moisture"
            },
            {
                "property": "unit_of_measurement",
                "value": "%"
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "387de940ba37d319",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "09c55b2769c2cbe1",
        "name": "Air Temperature",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "Air Temperature"
            },
            {
                "property": "icon",
                "value": "mdi:thermometer"
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": "temperature"
            },
            {
                "property": "unit_of_measurement",
                "value": "°C"
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "8dc3482d1cac1720",
        "type": "ha-entity-config",
        "server": "2ceaaf90.d3d6",
        "deviceConfig": "09c55b2769c2cbe1",
        "name": "Air Humidity",
        "version": "6",
        "entityType": "sensor",
        "haConfig": [
            {
                "property": "name",
                "value": "Air Humidity"
            },
            {
                "property": "icon",
                "value": "mdi:cloud-percent"
            },
            {
                "property": "entity_category",
                "value": ""
            },
            {
                "property": "entity_picture",
                "value": ""
            },
            {
                "property": "device_class",
                "value": "humidity"
            },
            {
                "property": "unit_of_measurement",
                "value": "%"
            },
            {
                "property": "state_class",
                "value": "measurement"
            }
        ],
        "resend": false,
        "debugEnabled": false
    },
    {
        "id": "2ceaaf90.d3d6",
        "type": "server",
        "name": "Home Assistant",
        "addon": true
    },
    {
        "id": "f28eba72f09759b3",
        "type": "ha-device-config",
        "name": "Light Node",
        "hwVersion": "1",
        "manufacturer": "Cytron",
        "model": "1",
        "swVersion": "1"
    },
    {
        "id": "09851782a7ed422a",
        "type": "ha-device-config",
        "name": "Soil Node",
        "hwVersion": "1",
        "manufacturer": "Node-RED",
        "model": "1",
        "swVersion": "1"
    },
    {
        "id": "09c55b2769c2cbe1",
        "type": "ha-device-config",
        "name": "Air Node",
        "hwVersion": "1",
        "manufacturer": "Node-RED",
        "model": "1",
        "swVersion": "1"
    },
    {
        "id": "8174dd2718709b8c",
        "type": "modbus-read",
        "z": "38495f4349516fb6",
        "name": "",
        "topic": "",
        "showStatusActivities": false,
        "logIOActivities": false,
        "showErrors": false,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "HoldingRegister",
        "adr": "130",
        "quantity": "5",
        "rate": "1",
        "rateUnit": "s",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "fac5ac0e7086f5a8",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": false,
        "x": 610,
        "y": 120,
        "wires": [
            [
                "6424cf4d5764c7cf",
                "9a063b0fa68dd92d",
                "c5078536d2ef1ef6",
                "c3b29a181d75e1f1",
                "e0a31105ce571c07"
            ],
            []
        ]
    },
    {
        "id": "6424cf4d5764c7cf",
        "type": "modbus-response",
        "z": "38495f4349516fb6",
        "name": "",
        "registerShowMax": 20,
        "x": 870,
        "y": 40,
        "wires": []
    },
    {
        "id": "64f8e3753a84c417",
        "type": "modbus-write",
        "z": "38495f4349516fb6",
        "name": "",
        "showStatusActivities": false,
        "showErrors": false,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "HoldingRegister",
        "adr": "130",
        "quantity": "1",
        "server": "fac5ac0e7086f5a8",
        "emptyMsgOnFail": false,
        "keepMsgProperties": false,
        "delayOnStart": false,
        "startDelayTime": "",
        "x": 840,
        "y": 300,
        "wires": [
            [
                "9afd99d0421af413"
            ],
            [
                "f2b158941fc75c1d"
            ]
        ]
    },
    {
        "id": "00c1112b16a688c2",
        "type": "inject",
        "z": "38495f4349516fb6",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "100",
        "payloadType": "num",
        "x": 630,
        "y": 240,
        "wires": [
            [
                "64f8e3753a84c417"
            ]
        ]
    },
    {
        "id": "34f8206897153d3a",
        "type": "inject",
        "z": "38495f4349516fb6",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "200",
        "payloadType": "num",
        "x": 610,
        "y": 300,
        "wires": [
            [
                "64f8e3753a84c417"
            ]
        ]
    },
    {
        "id": "ea7898abee79ab12",
        "type": "inject",
        "z": "38495f4349516fb6",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "300",
        "payloadType": "num",
        "x": 630,
        "y": 360,
        "wires": [
            [
                "64f8e3753a84c417"
            ]
        ]
    },
    {
        "id": "9afd99d0421af413",
        "type": "modbus-response",
        "z": "38495f4349516fb6",
        "name": "",
        "registerShowMax": 20,
        "x": 1110,
        "y": 300,
        "wires": []
    },
    {
        "id": "f2b158941fc75c1d",
        "type": "debug",
        "z": "38495f4349516fb6",
        "name": "debug 1",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1080,
        "y": 360,
        "wires": []
    },
    {
        "id": "9e91779d44690d43",
        "type": "modbus-write",
        "z": "38495f4349516fb6",
        "name": "",
        "showStatusActivities": false,
        "showErrors": false,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "MHoldingRegisters",
        "adr": "131",
        "quantity": "3",
        "server": "fac5ac0e7086f5a8",
        "emptyMsgOnFail": false,
        "keepMsgProperties": false,
        "delayOnStart": false,
        "startDelayTime": "",
        "x": 1020,
        "y": 420,
        "wires": [
            [],
            []
        ]
    },
    {
        "id": "4deb74ed43d0f0e3",
        "type": "function",
        "z": "38495f4349516fb6",
        "name": "function 1",
        "func": "let val = Math.random();\nlet dataList = []\nfor (let i = 0 ; i <3 ; i++){\n    \n    \n    \n    let data1 = val * 100\n    dataList.push(data1)\n}\nmsg.payload = dataList\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 820,
        "y": 420,
        "wires": [
            [
                "9e91779d44690d43",
                "4325a96d681a11b0"
            ]
        ]
    },
    {
        "id": "4f36bb7ff731aa71",
        "type": "inject",
        "z": "38495f4349516fb6",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "1",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 650,
        "y": 420,
        "wires": [
            [
                "4deb74ed43d0f0e3"
            ]
        ]
    },
    {
        "id": "9a063b0fa68dd92d",
        "type": "function",
        "z": "38495f4349516fb6",
        "name": "function 2",
        "func": "let T1 = msg.payload[1]\nmsg.payload = T1\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 840,
        "y": 120,
        "wires": [
            [
                "ce640529a98b11f1"
            ]
        ]
    },
    {
        "id": "c5078536d2ef1ef6",
        "type": "function",
        "z": "38495f4349516fb6",
        "name": "function 3",
        "func": "let T1 = msg.payload[2]\nmsg.payload = T1\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 840,
        "y": 160,
        "wires": [
            [
                "9e2fed3fb6ac6e10"
            ]
        ]
    },
    {
        "id": "ce640529a98b11f1",
        "type": "ui_text",
        "z": "38495f4349516fb6",
        "group": "6dd3ede0ce591c2c",
        "order": 1,
        "width": 6,
        "height": 1,
        "name": "",
        "label": "lnwzaa",
        "format": "{{msg.payload}}",
        "layout": "row-center",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": "",
        "color": "#000000",
        "x": 1040,
        "y": 100,
        "wires": []
    },
    {
        "id": "4325a96d681a11b0",
        "type": "debug",
        "z": "38495f4349516fb6",
        "name": "debug 3",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1000,
        "y": 480,
        "wires": []
    },
    {
        "id": "9e2fed3fb6ac6e10",
        "type": "ui_gauge",
        "z": "38495f4349516fb6",
        "name": "",
        "group": "6dd3ede0ce591c2c",
        "order": 2,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "gauge",
        "label": "units",
        "format": "{{value}}",
        "min": 0,
        "max": "100",
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "diff": false,
        "className": "",
        "x": 1030,
        "y": 160,
        "wires": []
    },
    {
        "id": "19144aaf4dba6722",
        "type": "ui_chart",
        "z": "38495f4349516fb6",
        "name": "",
        "group": "2d2c7bac5c98f0fa",
        "order": 1,
        "width": 12,
        "height": 6,
        "label": "chart",
        "chartType": "line",
        "legend": "true",
        "xformat": "HH:mm:ss",
        "interpolate": "linear",
        "nodata": "",
        "dot": false,
        "ymin": "",
        "ymax": "",
        "removeOlder": 1,
        "removeOlderPoints": "",
        "removeOlderUnit": "3600",
        "cutout": 0,
        "useOneColor": false,
        "useUTC": false,
        "colors": [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5"
        ],
        "outputs": 1,
        "useDifferentColor": false,
        "className": "",
        "x": 1030,
        "y": 220,
        "wires": [
            []
        ]
    },
    {
        "id": "c3b29a181d75e1f1",
        "type": "function",
        "z": "38495f4349516fb6",
        "name": "function 4",
        "func": "let T1 = msg.payload[2]\nmsg.payload = T1\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 840,
        "y": 200,
        "wires": [
            [
                "19144aaf4dba6722"
            ]
        ]
    },
    {
        "id": "e0a31105ce571c07",
        "type": "function",
        "z": "38495f4349516fb6",
        "name": "function 5",
        "func": "let T2 = msg.payload[3]\nmsg.payload = T2\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 840,
        "y": 240,
        "wires": [
            [
                "19144aaf4dba6722"
            ]
        ]
    },
    {
        "id": "7d336ce23ddd776f",
        "type": "modbus-server",
        "z": "38495f4349516fb6",
        "name": "",
        "logEnabled": false,
        "hostname": "0.0.0.0",
        "serverPort": "9090",
        "responseDelay": 100,
        "delayUnit": "ms",
        "coilsBufferSize": 10000,
        "holdingBufferSize": 10000,
        "inputBufferSize": 10000,
        "discreteBufferSize": 10000,
        "showErrors": false,
        "x": 160,
        "y": 160,
        "wires": [
            [],
            [],
            [],
            [],
            []
        ]
    },
    {
        "id": "2e9be386ea3b1ba6",
        "type": "inject",
        "z": "259ccad58d4e6931",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "0",
        "payloadType": "num",
        "x": 182,
        "y": 40,
        "wires": [
            [
                "cb5171abb7ee41d0"
            ]
        ]
    },
    {
        "id": "cb5171abb7ee41d0",
        "type": "change",
        "z": "259ccad58d4e6931",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "cnt",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 370,
        "y": 40,
        "wires": [
            [
                "dbf6374faf757448"
            ]
        ]
    },
    {
        "id": "dbf6374faf757448",
        "type": "debug",
        "z": "259ccad58d4e6931",
        "name": "debug 198",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 562,
        "y": 40,
        "wires": []
    },
    {
        "id": "609a482ac0522334",
        "type": "switch",
        "z": "259ccad58d4e6931",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "0",
                "vt": "num"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 210,
        "y": 460,
        "wires": [
            [
                "cf19946e5499dd14"
            ]
        ]
    },
    {
        "id": "cf19946e5499dd14",
        "type": "function",
        "z": "259ccad58d4e6931",
        "name": "Counter",
        "func": "var data = flow.get('cnt')\nif(data >= 6)\n{\n    data = 0\n    \n} else {\n    flow.set('cnt', data)\n}\nvar count = data + 1;\n \nflow.set('cnt',count);\nmsg.payload = count;\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 360,
        "y": 460,
        "wires": [
            [
                "a55f91d679393356",
                "a7acd3901aa32ce1",
                "d6c69c10964ab0a3",
                "12efdaf7b079e8c8",
                "d83f3337367880c7",
                "5758ab61aaf139d2"
            ]
        ]
    },
    {
        "id": "3e35b888066c57b4",
        "type": "inject",
        "z": "259ccad58d4e6931",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "v": "0",
                "vt": "num"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 220,
        "y": 420,
        "wires": [
            [
                "cf19946e5499dd14"
            ]
        ]
    },
    {
        "id": "d6c69c10964ab0a3",
        "type": "switch",
        "z": "259ccad58d4e6931",
        "name": "Counter main",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "5",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 560,
        "y": 320,
        "wires": [
            [
                "dc94ae7d67146261",
                "af68eac26f98e406",
                "f0553f8c5c07df0e"
            ]
        ]
    },
    {
        "id": "a55f91d679393356",
        "type": "debug",
        "z": "259ccad58d4e6931",
        "name": "debug 231",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 550,
        "y": 280,
        "wires": []
    },
    {
        "id": "12efdaf7b079e8c8",
        "type": "switch",
        "z": "259ccad58d4e6931",
        "name": "Counter Pump1",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "5",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 560,
        "y": 460,
        "wires": [
            [
                "fc841db93479a521",
                "a2996e6f1b23d38a",
                "b0df9305748173ea"
            ]
        ]
    },
    {
        "id": "d83f3337367880c7",
        "type": "switch",
        "z": "259ccad58d4e6931",
        "name": "Counter Pump2",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "5",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 560,
        "y": 620,
        "wires": [
            [
                "76f20ae83ca3feda",
                "6e30be08560803c3",
                "72a844fc293be551"
            ]
        ]
    },
    {
        "id": "dc94ae7d67146261",
        "type": "change",
        "z": "259ccad58d4e6931",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "1",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 780,
        "y": 320,
        "wires": [
            [
                "eb4c47e71ac22a92"
            ]
        ]
    },
    {
        "id": "af68eac26f98e406",
        "type": "change",
        "z": "259ccad58d4e6931",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "1",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 780,
        "y": 240,
        "wires": [
            [
                "c3c6599fce09d8cf",
                "fa4dd0246df61aa1"
            ]
        ]
    },
    {
        "id": "fc841db93479a521",
        "type": "change",
        "z": "259ccad58d4e6931",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "1",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 780,
        "y": 400,
        "wires": [
            [
                "7d3d8f05cfbe47a6",
                "7ec3f8ce3c985974"
            ]
        ]
    },
    {
        "id": "76f20ae83ca3feda",
        "type": "change",
        "z": "259ccad58d4e6931",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "1",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 760,
        "y": 560,
        "wires": [
            [
                "31a06f41d5ae0ea5",
                "ceead7a98c526bda"
            ]
        ]
    },
    {
        "id": "93a4e9fb009a1885",
        "type": "change",
        "z": "259ccad58d4e6931",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1460,
        "y": 320,
        "wires": [
            [
                "c3c6599fce09d8cf",
                "fa4dd0246df61aa1"
            ]
        ]
    },
    {
        "id": "7d21358481321569",
        "type": "change",
        "z": "259ccad58d4e6931",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1500,
        "y": 460,
        "wires": [
            [
                "7d3d8f05cfbe47a6",
                "7ec3f8ce3c985974"
            ]
        ]
    },
    {
        "id": "a27aa5b2d7af0cd2",
        "type": "ui_numeric",
        "z": "259ccad58d4e6931",
        "name": "",
        "label": "Set Time Oil in Mold",
        "tooltip": "",
        "group": "92a4e30a2f1ece7e",
        "order": 2,
        "width": 0,
        "height": 0,
        "wrap": true,
        "passthru": true,
        "topic": "topic",
        "topicType": "msg",
        "format": "{{value}}",
        "min": 0,
        "max": 10,
        "step": 1,
        "className": "",
        "x": 2600,
        "y": 340,
        "wires": [
            [
                "50a6da7bb67d13f2"
            ]
        ]
    },
    {
        "id": "36eac85d8e7de997",
        "type": "change",
        "z": "259ccad58d4e6931",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1520,
        "y": 620,
        "wires": [
            [
                "31a06f41d5ae0ea5",
                "ceead7a98c526bda"
            ]
        ]
    },
    {
        "id": "ab567946089689f3",
        "type": "ui_numeric",
        "z": "259ccad58d4e6931",
        "name": "",
        "label": "Set Time Dispen ",
        "tooltip": "",
        "group": "92a4e30a2f1ece7e",
        "order": 3,
        "width": 0,
        "height": 0,
        "wrap": true,
        "passthru": true,
        "topic": "topic",
        "topicType": "msg",
        "format": "{{value}}",
        "min": 0,
        "max": 10,
        "step": 1,
        "className": "",
        "x": 2580,
        "y": 460,
        "wires": [
            [
                "f05a8b4745cd6c26"
            ]
        ]
    },
    {
        "id": "626123d67794fc4f",
        "type": "delay",
        "z": "259ccad58d4e6931",
        "name": "",
        "pauseType": "delayv",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "allowrate": false,
        "outputs": 1,
        "x": 1300,
        "y": 300,
        "wires": [
            [
                "93a4e9fb009a1885"
            ]
        ]
    },
    {
        "id": "1391fca09b77f973",
        "type": "delay",
        "z": "259ccad58d4e6931",
        "name": "",
        "pauseType": "delayv",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "allowrate": false,
        "outputs": 1,
        "x": 1320,
        "y": 480,
        "wires": [
            [
                "7d21358481321569"
            ]
        ]
    },
    {
        "id": "232812301536d9d2",
        "type": "function",
        "z": "259ccad58d4e6931",
        "name": "function 50",
        "func": "var payload = msg.payload\nvar message = {TimeSet: + payload}\nvar send = {payload: message}\nmsg.payload = 'true'\nmsg.delay = payload*1000\nreturn msg",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1170,
        "y": 460,
        "wires": [
            [
                "1391fca09b77f973"
            ]
        ]
    },
    {
        "id": "b1add463c8488583",
        "type": "delay",
        "z": "259ccad58d4e6931",
        "name": "",
        "pauseType": "delayv",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "allowrate": false,
        "outputs": 1,
        "x": 1340,
        "y": 620,
        "wires": [
            [
                "36eac85d8e7de997"
            ]
        ]
    },
    {
        "id": "b949c90c6acdc1ed",
        "type": "function",
        "z": "259ccad58d4e6931",
        "name": "function 51",
        "func": "var payload = msg.payload\nvar message = {TimeSet: + payload}\nvar send = {payload: message}\nmsg.payload = 'true'\nmsg.delay = payload*1000\nreturn msg",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1170,
        "y": 620,
        "wires": [
            [
                "b1add463c8488583"
            ]
        ]
    },
    {
        "id": "4d73ec0c2968aedb",
        "type": "function",
        "z": "259ccad58d4e6931",
        "name": "function 52",
        "func": "var payload = msg.payload\nvar message = {TimeSet: + payload}\nvar send = {payload: message}\nmsg.payload = 'true'\nmsg.delay = payload*1000\nreturn msg",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1150,
        "y": 320,
        "wires": [
            [
                "626123d67794fc4f"
            ]
        ]
    },
    {
        "id": "b01d653774e912d8",
        "type": "ui_numeric",
        "z": "259ccad58d4e6931",
        "name": "",
        "label": "Set Time Oil Front Materail and Soleniod",
        "tooltip": "",
        "group": "92a4e30a2f1ece7e",
        "order": 1,
        "width": 0,
        "height": 0,
        "wrap": true,
        "passthru": true,
        "topic": "topic",
        "topicType": "msg",
        "format": "{{value}}",
        "min": 0,
        "max": 10,
        "step": 1,
        "className": "",
        "x": 2660,
        "y": 220,
        "wires": [
            [
                "293ddd74ba24c916"
            ]
        ]
    },
    {
        "id": "293ddd74ba24c916",
        "type": "file",
        "z": "259ccad58d4e6931",
        "name": "",
        "filename": "/home/pi/Data/a.txt",
        "filenameType": "str",
        "appendNewline": true,
        "createDir": false,
        "overwriteFile": "true",
        "encoding": "none",
        "x": 2930,
        "y": 220,
        "wires": [
            []
        ]
    },
    {
        "id": "50a6da7bb67d13f2",
        "type": "file",
        "z": "259ccad58d4e6931",
        "name": "",
        "filename": "/home/pi/Data/b.txt",
        "filenameType": "str",
        "appendNewline": true,
        "createDir": false,
        "overwriteFile": "true",
        "encoding": "none",
        "x": 2810,
        "y": 340,
        "wires": [
            []
        ]
    },
    {
        "id": "f05a8b4745cd6c26",
        "type": "file",
        "z": "259ccad58d4e6931",
        "name": "",
        "filename": "/home/pi/Data/c.txt",
        "filenameType": "str",
        "appendNewline": false,
        "createDir": false,
        "overwriteFile": "true",
        "encoding": "none",
        "x": 2790,
        "y": 460,
        "wires": [
            []
        ]
    },
    {
        "id": "eb4c47e71ac22a92",
        "type": "file in",
        "z": "259ccad58d4e6931",
        "name": "",
        "filename": "/home/pi/Data/a.txt",
        "filenameType": "str",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "encoding": "none",
        "allProps": false,
        "x": 970,
        "y": 300,
        "wires": [
            [
                "4d73ec0c2968aedb"
            ]
        ]
    },
    {
        "id": "fca08cd3592a849c",
        "type": "file in",
        "z": "259ccad58d4e6931",
        "name": "",
        "filename": "/home/pi/Data/b.txt",
        "filenameType": "str",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "encoding": "utf8",
        "allProps": false,
        "x": 970,
        "y": 480,
        "wires": [
            [
                "232812301536d9d2"
            ]
        ]
    },
    {
        "id": "558e936eb7dcc02a",
        "type": "file in",
        "z": "259ccad58d4e6931",
        "name": "",
        "filename": "/home/pi/Data/c.txt",
        "filenameType": "str",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "encoding": "none",
        "allProps": false,
        "x": 970,
        "y": 620,
        "wires": [
            [
                "b949c90c6acdc1ed"
            ]
        ]
    },
    {
        "id": "a2996e6f1b23d38a",
        "type": "change",
        "z": "259ccad58d4e6931",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "1",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 760,
        "y": 500,
        "wires": [
            [
                "fca08cd3592a849c"
            ]
        ]
    },
    {
        "id": "6e30be08560803c3",
        "type": "change",
        "z": "259ccad58d4e6931",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "1",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 760,
        "y": 620,
        "wires": [
            [
                "558e936eb7dcc02a"
            ]
        ]
    },
    {
        "id": "7d3d8f05cfbe47a6",
        "type": "rpi-gpio out",
        "z": "259ccad58d4e6931",
        "name": "",
        "pin": "20",
        "set": "",
        "level": "0",
        "freq": "",
        "out": "out",
        "bcm": true,
        "x": 1720,
        "y": 420,
        "wires": []
    },
    {
        "id": "31a06f41d5ae0ea5",
        "type": "rpi-gpio out",
        "z": "259ccad58d4e6931",
        "name": "",
        "pin": "16",
        "set": "",
        "level": "0",
        "freq": "",
        "out": "out",
        "bcm": true,
        "x": 1740,
        "y": 580,
        "wires": []
    },
    {
        "id": "c3c6599fce09d8cf",
        "type": "rpi-gpio out",
        "z": "259ccad58d4e6931",
        "name": "",
        "pin": "21",
        "set": "",
        "level": "0",
        "freq": "",
        "out": "out",
        "bcm": true,
        "x": 1720,
        "y": 260,
        "wires": []
    },
    {
        "id": "abed4587377576bf",
        "type": "rpi-gpio in",
        "z": "259ccad58d4e6931",
        "name": "",
        "pin": "12",
        "intype": "tri",
        "debounce": "25",
        "read": false,
        "bcm": true,
        "x": 90,
        "y": 460,
        "wires": [
            [
                "609a482ac0522334"
            ]
        ]
    },
    {
        "id": "58728f0c029d6685",
        "type": "ui_button",
        "z": "259ccad58d4e6931",
        "name": "",
        "group": "92a4e30a2f1ece7e",
        "order": 5,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Reset",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "0",
        "payloadType": "str",
        "topic": "topic",
        "topicType": "msg",
        "x": 2290,
        "y": 340,
        "wires": [
            [
                "b01d653774e912d8",
                "ab567946089689f3",
                "a27aa5b2d7af0cd2"
            ]
        ]
    },
    {
        "id": "1d6afff7bf6434ed",
        "type": "ui_button",
        "z": "259ccad58d4e6931",
        "name": "",
        "group": "92a4e30a2f1ece7e",
        "order": 4,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Update",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "1",
        "payloadType": "num",
        "topic": "topic",
        "topicType": "msg",
        "x": 2280,
        "y": 260,
        "wires": [
            [
                "3aeb6cd26762903e",
                "a0063598c218caf8",
                "b59ec5a9d411a6e6"
            ]
        ]
    },
    {
        "id": "3aeb6cd26762903e",
        "type": "file in",
        "z": "259ccad58d4e6931",
        "name": "",
        "filename": "/home/pi/Data/c.txt",
        "filenameType": "str",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "encoding": "none",
        "allProps": false,
        "x": 2590,
        "y": 400,
        "wires": [
            [
                "ab567946089689f3"
            ]
        ]
    },
    {
        "id": "a0063598c218caf8",
        "type": "file in",
        "z": "259ccad58d4e6931",
        "name": "",
        "filename": "/home/pi/Data/b.txt",
        "filenameType": "str",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "encoding": "utf8",
        "allProps": false,
        "x": 2590,
        "y": 280,
        "wires": [
            [
                "a27aa5b2d7af0cd2"
            ]
        ]
    },
    {
        "id": "b59ec5a9d411a6e6",
        "type": "file in",
        "z": "259ccad58d4e6931",
        "name": "",
        "filename": "/home/pi/Data/a.txt",
        "filenameType": "str",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "encoding": "utf8",
        "allProps": false,
        "x": 2590,
        "y": 160,
        "wires": [
            [
                "b01d653774e912d8"
            ]
        ]
    },
    {
        "id": "5758ab61aaf139d2",
        "type": "switch",
        "z": "259ccad58d4e6931",
        "name": "Counter 3",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "6",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 540,
        "y": 760,
        "wires": [
            [
                "831c3b967dcbc874",
                "0b0dc49a87430fdc"
            ]
        ]
    },
    {
        "id": "831c3b967dcbc874",
        "type": "change",
        "z": "259ccad58d4e6931",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "1",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 760,
        "y": 700,
        "wires": [
            [
                "29e32b3de09794b9"
            ]
        ]
    },
    {
        "id": "0b0dc49a87430fdc",
        "type": "change",
        "z": "259ccad58d4e6931",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "1",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 760,
        "y": 760,
        "wires": [
            [
                "907a62afea875f84"
            ]
        ]
    },
    {
        "id": "29e32b3de09794b9",
        "type": "rpi-gpio out",
        "z": "259ccad58d4e6931",
        "name": "",
        "pin": "26",
        "set": "",
        "level": "0",
        "freq": "",
        "out": "out",
        "bcm": true,
        "x": 1700,
        "y": 700,
        "wires": []
    },
    {
        "id": "907a62afea875f84",
        "type": "file in",
        "z": "259ccad58d4e6931",
        "name": "",
        "filename": "/home/pi/Data/d.txt",
        "filenameType": "str",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "encoding": "none",
        "allProps": false,
        "x": 970,
        "y": 760,
        "wires": [
            [
                "def0f63ff80c6232"
            ]
        ]
    },
    {
        "id": "506fcd020331158a",
        "type": "change",
        "z": "259ccad58d4e6931",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1520,
        "y": 760,
        "wires": [
            [
                "29e32b3de09794b9"
            ]
        ]
    },
    {
        "id": "def0f63ff80c6232",
        "type": "function",
        "z": "259ccad58d4e6931",
        "name": "function 64",
        "func": "var payload = msg.payload\nvar message = {TimeSet: + payload}\nvar send = {payload: message}\nmsg.payload = 'true'\nmsg.delay = payload*1000\nreturn msg",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1170,
        "y": 760,
        "wires": [
            [
                "1bceb11ad9cff477"
            ]
        ]
    },
    {
        "id": "1bceb11ad9cff477",
        "type": "delay",
        "z": "259ccad58d4e6931",
        "name": "",
        "pauseType": "delayv",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "allowrate": false,
        "outputs": 1,
        "x": 1340,
        "y": 760,
        "wires": [
            [
                "506fcd020331158a"
            ]
        ]
    },
    {
        "id": "fa4dd0246df61aa1",
        "type": "function",
        "z": "259ccad58d4e6931",
        "name": "function 67",
        "func": "var J = msg.payload\nif(J == 1){\n    msg.payload = 'ON'\n\n}\nelse{\n    msg.payload = 'OFF'\n}\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1710,
        "y": 220,
        "wires": [
            [
                "a674874dd7d14850",
                "247e0846c21134f5"
            ]
        ]
    },
    {
        "id": "a674874dd7d14850",
        "type": "debug",
        "z": "259ccad58d4e6931",
        "name": "debug 254",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1890,
        "y": 220,
        "wires": []
    },
    {
        "id": "247e0846c21134f5",
        "type": "ui_text",
        "z": "259ccad58d4e6931",
        "group": "0612222739d719fc",
        "order": 4,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Signal Pump1 And Solinoid",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 1940,
        "y": 180,
        "wires": []
    },
    {
        "id": "7ec3f8ce3c985974",
        "type": "function",
        "z": "259ccad58d4e6931",
        "name": "function 68",
        "func": "var J = msg.payload\nif(J == 1){\n    msg.payload = 'ON'\n\n}\nelse{\n    msg.payload = 'OFF'\n}\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1730,
        "y": 380,
        "wires": [
            [
                "6b24ee5d2d001893",
                "1d61dd34c10762eb"
            ]
        ]
    },
    {
        "id": "6b24ee5d2d001893",
        "type": "debug",
        "z": "259ccad58d4e6931",
        "name": "debug 255",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1890,
        "y": 380,
        "wires": []
    },
    {
        "id": "1d61dd34c10762eb",
        "type": "ui_text",
        "z": "259ccad58d4e6931",
        "group": "0612222739d719fc",
        "order": 7,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Signal Pump 2",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 1900,
        "y": 340,
        "wires": []
    },
    {
        "id": "ceead7a98c526bda",
        "type": "function",
        "z": "259ccad58d4e6931",
        "name": "function 69",
        "func": "var J = msg.payload\nif(J == 1){\n    msg.payload = 'ON'\n\n}\nelse{\n    msg.payload = 'OFF'\n}\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1750,
        "y": 540,
        "wires": [
            [
                "7ce02d1a86783301",
                "f99bfbbefdcc202c"
            ]
        ]
    },
    {
        "id": "7ce02d1a86783301",
        "type": "debug",
        "z": "259ccad58d4e6931",
        "name": "debug 256",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1910,
        "y": 540,
        "wires": []
    },
    {
        "id": "f99bfbbefdcc202c",
        "type": "ui_text",
        "z": "259ccad58d4e6931",
        "group": "0612222739d719fc",
        "order": 10,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Signal Dispenser",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 1930,
        "y": 480,
        "wires": []
    },
    {
        "id": "a7acd3901aa32ce1",
        "type": "ui_text",
        "z": "259ccad58d4e6931",
        "group": "0612222739d719fc",
        "order": 1,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Count",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 570,
        "y": 420,
        "wires": []
    },
    {
        "id": "f0553f8c5c07df0e",
        "type": "ui_text",
        "z": "259ccad58d4e6931",
        "group": "0612222739d719fc",
        "order": 2,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Count Pump1 and Solinoid",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "Gill Sans,Geneva,sans-serif",
        "fontSize": 16,
        "color": "#4bfa00",
        "x": 800,
        "y": 360,
        "wires": []
    },
    {
        "id": "b0df9305748173ea",
        "type": "ui_text",
        "z": "259ccad58d4e6931",
        "group": "0612222739d719fc",
        "order": 5,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Count Pump 2",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 760,
        "y": 460,
        "wires": []
    },
    {
        "id": "72a844fc293be551",
        "type": "ui_text",
        "z": "259ccad58d4e6931",
        "group": "0612222739d719fc",
        "order": 8,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Count Dispenser",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 770,
        "y": 660,
        "wires": []
    },
    {
        "id": "7cd04e5d2186100b",
        "type": "inject",
        "z": "259ccad58d4e6931",
        "name": "OFF",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "v": "0",
                "vt": "num"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 2290,
        "y": 660,
        "wires": [
            [
                "49f9f4932009e0fb"
            ]
        ]
    },
    {
        "id": "49f9f4932009e0fb",
        "type": "change",
        "z": "259ccad58d4e6931",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2540,
        "y": 660,
        "wires": [
            [
                "df43ba4f0fbeeec1",
                "7b05e0f4f6644ab8",
                "92d4edc23ae661ad"
            ]
        ]
    },
    {
        "id": "df43ba4f0fbeeec1",
        "type": "rpi-gpio out",
        "z": "259ccad58d4e6931",
        "name": "",
        "pin": "20",
        "set": "",
        "level": "0",
        "freq": "",
        "out": "out",
        "bcm": true,
        "x": 2800,
        "y": 660,
        "wires": []
    },
    {
        "id": "7b05e0f4f6644ab8",
        "type": "rpi-gpio out",
        "z": "259ccad58d4e6931",
        "name": "",
        "pin": "16",
        "set": "",
        "level": "0",
        "freq": "",
        "out": "out",
        "bcm": true,
        "x": 2800,
        "y": 700,
        "wires": []
    },
    {
        "id": "92d4edc23ae661ad",
        "type": "function",
        "z": "259ccad58d4e6931",
        "name": "function 101",
        "func": "var J = msg.payload\nif(J == 1){\n    msg.payload = 'ON'\n\n}\nelse{\n    msg.payload = 'OFF'\n}\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 2770,
        "y": 620,
        "wires": [
            [
                "81ad6471c7cbb5f2",
                "0f1e6e7b7c59938a"
            ]
        ]
    },
    {
        "id": "a3fc9adc1dd3574e",
        "type": "change",
        "z": "259ccad58d4e6931",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "1",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 2540,
        "y": 700,
        "wires": [
            [
                "7b05e0f4f6644ab8",
                "df43ba4f0fbeeec1",
                "92d4edc23ae661ad"
            ]
        ]
    },
    {
        "id": "81ad6471c7cbb5f2",
        "type": "debug",
        "z": "259ccad58d4e6931",
        "name": "debug 282",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 2950,
        "y": 580,
        "wires": []
    },
    {
        "id": "41e06c4b1f963979",
        "type": "inject",
        "z": "259ccad58d4e6931",
        "name": "ON",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "v": "1",
                "vt": "num"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 2290,
        "y": 700,
        "wires": [
            [
                "a3fc9adc1dd3574e"
            ]
        ]
    },
    {
        "id": "f31ee3dc35e2ca0f",
        "type": "ui_button",
        "z": "259ccad58d4e6931",
        "name": "",
        "group": "92a4e30a2f1ece7e",
        "order": 7,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": " ON",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "1",
        "payloadType": "num",
        "topic": "topic",
        "topicType": "msg",
        "x": 2290,
        "y": 740,
        "wires": [
            [
                "a3fc9adc1dd3574e"
            ]
        ]
    },
    {
        "id": "79417d8c3bf8e663",
        "type": "ui_button",
        "z": "259ccad58d4e6931",
        "name": "",
        "group": "92a4e30a2f1ece7e",
        "order": 8,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "OFF",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "0",
        "payloadType": "num",
        "topic": "topic",
        "topicType": "msg",
        "x": 2290,
        "y": 620,
        "wires": [
            [
                "49f9f4932009e0fb"
            ]
        ]
    },
    {
        "id": "0f1e6e7b7c59938a",
        "type": "ui_text",
        "z": "259ccad58d4e6931",
        "group": "92a4e30a2f1ece7e",
        "order": 6,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Pump 1,2",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 2940,
        "y": 620,
        "wires": []
    },
    {
        "id": "f7803ace2bdf87ba",
        "type": "comment",
        "z": "259ccad58d4e6931",
        "name": "Expelling the wind",
        "info": "",
        "x": 2330,
        "y": 560,
        "wires": []
    },
    {
        "id": "78fc9f649bd70db7",
        "type": "rpi-gpio in",
        "z": "259ccad58d4e6931",
        "name": "",
        "pin": "23",
        "intype": "tri",
        "debounce": "25",
        "read": false,
        "bcm": true,
        "x": 510,
        "y": 920,
        "wires": [
            [
                "fbf6f0c5bf7b718c"
            ]
        ]
    },
    {
        "id": "9d1fb011b9273f93",
        "type": "function",
        "z": "259ccad58d4e6931",
        "name": "function 72",
        "func": "msg.flowrate = msg.payload.total / 7.5;\nmsg.flowrate = msg.flowrate.toFixed(3);\nmsg.rate = \" \"\nmsg.flowrate += \" l/min\";\nmsg.rate += msg.flowrate; \nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 920,
        "wires": [
            [
                "a77826a808928f9a"
            ]
        ]
    },
    {
        "id": "fbf6f0c5bf7b718c",
        "type": "totaliser",
        "z": "259ccad58d4e6931",
        "output": "sum",
        "interval": "2",
        "intervalUnits": "seconds",
        "name": "",
        "x": 640,
        "y": 920,
        "wires": [
            [
                "9d1fb011b9273f93"
            ]
        ]
    },
    {
        "id": "a77826a808928f9a",
        "type": "function",
        "z": "259ccad58d4e6931",
        "name": "function 73",
        "func": "msg.payload =  msg.rate\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 970,
        "y": 920,
        "wires": [
            [
                "d27b57b49f7746ca"
            ]
        ]
    },
    {
        "id": "d27b57b49f7746ca",
        "type": "ui_text",
        "z": "259ccad58d4e6931",
        "group": "0612222739d719fc",
        "order": 3,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Flow Rate Water1",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 1190,
        "y": 920,
        "wires": []
    },
    {
        "id": "3cb62791c4b8a440",
        "type": "rpi-gpio in",
        "z": "259ccad58d4e6931",
        "name": "",
        "pin": "18",
        "intype": "tri",
        "debounce": "25",
        "read": false,
        "bcm": true,
        "x": 510,
        "y": 1000,
        "wires": [
            [
                "cb2fecc4b4d8fb27"
            ]
        ]
    },
    {
        "id": "83acc48b1798f5e3",
        "type": "function",
        "z": "259ccad58d4e6931",
        "name": "function 74",
        "func": "msg.flowrate = msg.payload.total / 7.5;\nmsg.flowrate = msg.flowrate.toFixed(3);\nmsg.rate = \" \"\nmsg.flowrate += \" l/min\";\nmsg.rate += msg.flowrate; \nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 1000,
        "wires": [
            [
                "44f98bf8124c1a69"
            ]
        ]
    },
    {
        "id": "cb2fecc4b4d8fb27",
        "type": "totaliser",
        "z": "259ccad58d4e6931",
        "output": "sum",
        "interval": "2",
        "intervalUnits": "seconds",
        "name": "",
        "x": 640,
        "y": 1000,
        "wires": [
            [
                "83acc48b1798f5e3"
            ]
        ]
    },
    {
        "id": "44f98bf8124c1a69",
        "type": "function",
        "z": "259ccad58d4e6931",
        "name": "function 75",
        "func": "msg.payload =  msg.rate\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 970,
        "y": 1000,
        "wires": [
            [
                "312cd3a922c4c767"
            ]
        ]
    },
    {
        "id": "312cd3a922c4c767",
        "type": "ui_text",
        "z": "259ccad58d4e6931",
        "group": "0612222739d719fc",
        "order": 6,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Flow Rate Water2",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 1190,
        "y": 1000,
        "wires": []
    },
    {
        "id": "025ff0256fb10f00",
        "type": "rpi-gpio in",
        "z": "259ccad58d4e6931",
        "name": "",
        "pin": "24",
        "intype": "tri",
        "debounce": "25",
        "read": false,
        "bcm": true,
        "x": 510,
        "y": 1080,
        "wires": [
            [
                "1475f62c21ae2ab4"
            ]
        ]
    },
    {
        "id": "a69f85998fd34427",
        "type": "function",
        "z": "259ccad58d4e6931",
        "name": "function 76",
        "func": "msg.flowrate = msg.payload.total / 7.5;\nmsg.flowrate = msg.flowrate.toFixed(3);\nmsg.rate = \" \"\nmsg.flowrate += \" ft³/min\";\nmsg.rate += msg.flowrate; \nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 790,
        "y": 1080,
        "wires": [
            [
                "f71deb68939e2612"
            ]
        ]
    },
    {
        "id": "1475f62c21ae2ab4",
        "type": "totaliser",
        "z": "259ccad58d4e6931",
        "output": "sum",
        "interval": "2",
        "intervalUnits": "seconds",
        "name": "",
        "x": 640,
        "y": 1080,
        "wires": [
            [
                "a69f85998fd34427"
            ]
        ]
    },
    {
        "id": "f71deb68939e2612",
        "type": "function",
        "z": "259ccad58d4e6931",
        "name": "function 77",
        "func": "msg.payload =  msg.rate\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 970,
        "y": 1080,
        "wires": [
            [
                "c0ba85aff411d696"
            ]
        ]
    },
    {
        "id": "c0ba85aff411d696",
        "type": "ui_text",
        "z": "259ccad58d4e6931",
        "group": "0612222739d719fc",
        "order": 9,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Flow Rate Dispenser",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": 16,
        "color": "#000000",
        "x": 1200,
        "y": 1080,
        "wires": []
    },
    {
        "id": "fd382a9da49d84c2",
        "type": "comment",
        "z": "259ccad58d4e6931",
        "name": "Sensor",
        "info": "",
        "x": 510,
        "y": 880,
        "wires": []
    },
    {
        "id": "9ffd7636239ad966",
        "type": "modbus-flex-server",
        "z": "84cd4f95eb1905c4",
        "name": "",
        "logEnabled": false,
        "serverAddress": "0.0.0.0",
        "serverPort": "502",
        "responseDelay": 100,
        "unitId": 1,
        "delayUnit": "ms",
        "coilsBufferSize": 20000,
        "registersBufferSize": 20000,
        "minAddress": 0,
        "splitAddress": 10000,
        "funcGetCoil": "function getFlexCoil(addr, unitID) {\n\tif (unitID === node.unitId && \n\t\taddr >= node.minAddress && \n\t\taddr <= node.splitAddress) { \n\n\t\treturn node.coils.readUInt8(addr * node.bufferFactor) \n\t}  \n}",
        "funcGetDiscreteInput": "function getFlexDiscreteInput(addr, unitID) {\n\taddr += node.splitAddress\n\tif (unitID === node.unitId && \n\t\taddr >= node.splitAddress && \n\t\taddr <= node.splitAddress * 2) { \n\n\t\treturn node.coils.readUInt8(addr * node.bufferFactor) \n\t}  \n}",
        "funcGetInputRegister": "function getFlexInputRegister(addr, unitID) { \n\tif (unitID === node.unitId && \n\t\taddr >= node.minAddress && \n\t\taddr <= node.splitAddress) { \n\n\t\treturn node.registers.readUInt16BE(addr * node.bufferFactor)  \n\t} \n}",
        "funcGetHoldingRegister": "function getFlexHoldingRegsiter(addr, unitID) { \n\taddr += node.splitAddress\n\tif (unitID === node.unitId && \n\t\taddr >= node.splitAddress && \n\t\taddr <= node.splitAddress * 2) { \n\n\t\treturn node.registers.readUInt16BE(addr * node.bufferFactor)  \n\t} \n}",
        "funcSetCoil": "function setFlexCoil(addr, value, unitID) { \n\tif (unitID === node.unitId && \n\t\taddr >= node.minAddress && \n\t\taddr <= node.splitAddress) { \n\n\t\tnode.coils.writeUInt8(value, addr * node.bufferFactor)  \n\t} \n}",
        "funcSetRegister": "function setFlexRegister(addr, value, unitID) { \n\taddr += node.splitAddress\n\tif (unitID === node.unitId && \n\t\taddr >= node.splitAddress && \n\t\taddr <= node.splitAddress * 2) { \n\n\t\tnode.registers.writeUInt16BE(value, addr * node.bufferFactor)  \n\t} \n}",
        "showErrors": false,
        "x": 200,
        "y": 140,
        "wires": [
            [],
            [],
            [],
            [],
            []
        ]
    },
    {
        "id": "fa893fec2e32724b",
        "type": "modbus-read",
        "z": "84cd4f95eb1905c4",
        "name": "",
        "topic": "",
        "showStatusActivities": false,
        "logIOActivities": false,
        "showErrors": false,
        "showWarnings": true,
        "unitid": "1",
        "dataType": "InputRegister",
        "adr": "502",
        "quantity": "3",
        "rate": "5",
        "rateUnit": "s",
        "delayOnStart": false,
        "startDelayTime": "",
        "server": "fac5ac0e7086f5a8",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": false,
        "x": 530,
        "y": 120,
        "wires": [
            [
                "314ff922e1d6c396"
            ],
            []
        ]
    },
    {
        "id": "314ff922e1d6c396",
        "type": "modbus-response",
        "z": "84cd4f95eb1905c4",
        "name": "",
        "registerShowMax": 20,
        "x": 750,
        "y": 120,
        "wires": []
    },
    {
        "id": "f0d269cb26f417c2",
        "type": "inject",
        "z": "84cd4f95eb1905c4",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": true,
        "topic": "",
        "payload": "true",
        "payloadType": "bool",
        "x": 90,
        "y": 1280,
        "wires": [
            [
                "e3388d914103b941",
                "c1700612b9cfe1dc"
            ]
        ]
    },
    {
        "id": "e3388d914103b941",
        "type": "function",
        "z": "84cd4f95eb1905c4",
        "name": "Startup Values",
        "func": "msg.payload = { value:[false, false, false, false], \n'fc': 15, \n'unitid': 1, \n'address': 0, \n'quantity': 4 } \nreturn msg",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 280,
        "y": 1260,
        "wires": [
            [
                "93edb3d5b0113346"
            ]
        ]
    },
    {
        "id": "c1700612b9cfe1dc",
        "type": "function",
        "z": "84cd4f95eb1905c4",
        "name": "Startup Values",
        "func": "msg.payload = { value:[100,90,100,200,100,200], \n'fc': 16, \n'unitid': 1, \n'address': 1, \n'quantity': 6 } \nreturn msg",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 280,
        "y": 1300,
        "wires": [
            [
                "dd664ca634f69482"
            ]
        ]
    },
    {
        "id": "93edb3d5b0113346",
        "type": "debug",
        "z": "84cd4f95eb1905c4",
        "name": "debug 212",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 470,
        "y": 1200,
        "wires": []
    },
    {
        "id": "dd664ca634f69482",
        "type": "debug",
        "z": "84cd4f95eb1905c4",
        "name": "debug 213",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 470,
        "y": 1340,
        "wires": []
    },
    {
        "id": "003f77334fe1c0a1",
        "type": "inject",
        "z": "b6e9a91b958c6e93",
        "name": "init",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 198,
        "y": 122,
        "wires": [
            [
                "66a1b2415b991cde"
            ]
        ]
    },
    {
        "id": "66a1b2415b991cde",
        "type": "function",
        "z": "b6e9a91b958c6e93",
        "name": "Read locales",
        "func": "var TZ = [\"Africa\",\"Asia\",\"Canada\",\"Indian\",\"US\",\"America\",\"Atlantic\",\"Chile\",\"Mexico\",\"Antarctica\",\"Australia\",\"Pacific\",\"Arctic\",\"Brazil\",\"Europe\"]\n\nfor(let i=0;i<TZ.length;i++) {\n    node.send({topic: TZ[i], payload: '/usr/share/zoneinfo/' + TZ[i] + '/', init: i === TZ.length-1})\n}\n",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 417,
        "y": 121,
        "wires": [
            [
                "43523c0af44694f3"
            ]
        ]
    },
    {
        "id": "43523c0af44694f3",
        "type": "exec",
        "z": "b6e9a91b958c6e93",
        "command": "ls ",
        "addpay": "payload",
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "oldrc": false,
        "name": "",
        "x": 589,
        "y": 121,
        "wires": [
            [
                "c3b635689c2145ac",
                "158bac3e0462b811"
            ],
            [],
            []
        ]
    },
    {
        "id": "c3b635689c2145ac",
        "type": "function",
        "z": "b6e9a91b958c6e93",
        "name": "set flow vars",
        "func": "var areas = msg.payload.split('\\n').filter(a => !!a)\n\nflow.set(msg.topic, areas)",
        "outputs": 0,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 760,
        "y": 107,
        "wires": []
    },
    {
        "id": "158bac3e0462b811",
        "type": "switch",
        "z": "b6e9a91b958c6e93",
        "name": "if init",
        "property": "init",
        "propertyType": "msg",
        "rules": [
            {
                "t": "true"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 757,
        "y": 167,
        "wires": [
            [
                "4fb2ab9eec61ab1e"
            ]
        ]
    },
    {
        "id": "7d8e9177a9566a94",
        "type": "ui_dropdown",
        "z": "b6e9a91b958c6e93",
        "name": "",
        "label": "Area",
        "tooltip": "",
        "place": "Select area",
        "group": "a1d8ed34.6a447",
        "order": 2,
        "width": 0,
        "height": 0,
        "passthru": true,
        "multiple": false,
        "options": [
            {
                "label": "",
                "value": "",
                "type": "str"
            }
        ],
        "payload": "",
        "topic": "",
        "topicType": "str",
        "className": "",
        "x": 1084,
        "y": 166,
        "wires": [
            [
                "2c44daa1c7c4d8fa",
                "0e12099aa15c68da"
            ]
        ]
    },
    {
        "id": "4fb2ab9eec61ab1e",
        "type": "function",
        "z": "b6e9a91b958c6e93",
        "name": "Set options",
        "func": "var msg = {\n    options: flow.keys()\n}\n\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 918,
        "y": 166,
        "wires": [
            [
                "7d8e9177a9566a94"
            ]
        ]
    },
    {
        "id": "150a3f5d2a6fa7ca",
        "type": "ui_dropdown",
        "z": "b6e9a91b958c6e93",
        "name": "",
        "label": "City",
        "tooltip": "",
        "place": "Select city",
        "group": "a1d8ed34.6a447",
        "order": 3,
        "width": 0,
        "height": 0,
        "passthru": true,
        "options": [
            {
                "label": "",
                "value": "",
                "type": "str"
            }
        ],
        "payload": "",
        "topic": "",
        "x": 1167,
        "y": 250,
        "wires": [
            [
                "98212b54f97b37c4",
                "0f9f4ff7eb9e0a2c"
            ]
        ]
    },
    {
        "id": "2c44daa1c7c4d8fa",
        "type": "function",
        "z": "b6e9a91b958c6e93",
        "name": "Set cities",
        "func": "global.set(\"area\", msg.payload)\nglobal.set(\"city\", \"\")\n\nmsg = {options: flow.get(msg.payload)}\nreturn msg;",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1237,
        "y": 166,
        "wires": [
            [
                "150a3f5d2a6fa7ca"
            ]
        ]
    },
    {
        "id": "98212b54f97b37c4",
        "type": "function",
        "z": "b6e9a91b958c6e93",
        "name": "Set cities",
        "func": "global.set(\"city\", msg.payload)",
        "outputs": 0,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1312,
        "y": 250,
        "wires": []
    },
    {
        "id": "10699bd222da9c96",
        "type": "inject",
        "z": "b6e9a91b958c6e93",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "area",
        "payloadType": "global",
        "x": 933,
        "y": 203,
        "wires": [
            [
                "7d8e9177a9566a94"
            ]
        ]
    },
    {
        "id": "622b49a02b2f83d8",
        "type": "inject",
        "z": "b6e9a91b958c6e93",
        "name": "",
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "city",
        "payloadType": "global",
        "x": 999,
        "y": 262,
        "wires": [
            [
                "150a3f5d2a6fa7ca"
            ]
        ]
    },
    {
        "id": "e1ea87e8c1b1134e",
        "type": "inject",
        "z": "b6e9a91b958c6e93",
        "name": "",
        "repeat": "1",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 219,
        "y": 207,
        "wires": [
            [
                "e7a2ab08bdd42ea4"
            ]
        ]
    },
    {
        "id": "e7a2ab08bdd42ea4",
        "type": "exec",
        "z": "b6e9a91b958c6e93",
        "command": "date",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "oldrc": false,
        "name": "",
        "x": 373,
        "y": 207,
        "wires": [
            [
                "2b346f43b804f11e"
            ],
            [],
            []
        ]
    },
    {
        "id": "2b346f43b804f11e",
        "type": "ui_text",
        "z": "b6e9a91b958c6e93",
        "group": "a1d8ed34.6a447",
        "order": 1,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Date",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "style": false,
        "font": "",
        "fontSize": "",
        "color": "#000000",
        "x": 560,
        "y": 194,
        "wires": []
    },
    {
        "id": "b7474b9c6cd036b0",
        "type": "ui_button",
        "z": "b6e9a91b958c6e93",
        "name": "",
        "group": "a1d8ed34.6a447",
        "order": 8,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "UPDATE",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "topicType": "str",
        "x": 175,
        "y": 319,
        "wires": [
            [
                "8d58662f38ab4c4f"
            ]
        ]
    },
    {
        "id": "8d58662f38ab4c4f",
        "type": "function",
        "z": "b6e9a91b958c6e93",
        "name": "update timezone",
        "func": "var command = '/usr/share/zoneinfo/'+global.get(\"area\")+'/'+global.get(\"city\")+' /etc/localtime'\nnode.send({payload: command})\n",
        "outputs": 1,
        "timeout": "",
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 357,
        "y": 319,
        "wires": [
            [
                "8a3d86db551eff8d"
            ]
        ]
    },
    {
        "id": "8a3d86db551eff8d",
        "type": "exec",
        "z": "b6e9a91b958c6e93",
        "command": "sudo ln -sf",
        "addpay": "payload",
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "winHide": false,
        "oldrc": false,
        "name": "",
        "x": 552,
        "y": 319,
        "wires": [
            [
                "9783cc5482dc7bdc"
            ],
            [
                "4f14a466876a89ea"
            ],
            []
        ]
    },
    {
        "id": "9fa07ddfbd293ca0",
        "type": "ui_toast",
        "z": "b6e9a91b958c6e93",
        "position": "top right",
        "displayTime": "3",
        "highlight": "",
        "sendall": true,
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "raw": false,
        "className": "",
        "topic": "",
        "name": "success",
        "x": 860,
        "y": 300,
        "wires": []
    },
    {
        "id": "817a28ac012296d9",
        "type": "ui_toast",
        "z": "b6e9a91b958c6e93",
        "position": "top right",
        "displayTime": "3",
        "highlight": "",
        "sendall": true,
        "outputs": 0,
        "ok": "OK",
        "cancel": "",
        "topic": "",
        "name": "error",
        "x": 851,
        "y": 346,
        "wires": []
    },
    {
        "id": "9783cc5482dc7bdc",
        "type": "change",
        "z": "b6e9a91b958c6e93",
        "name": "success",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Timezone updated successfully",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 720,
        "y": 300,
        "wires": [
            [
                "9fa07ddfbd293ca0"
            ]
        ]
    },
    {
        "id": "4f14a466876a89ea",
        "type": "change",
        "z": "b6e9a91b958c6e93",
        "name": "error",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "Error while updating timezone",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 719,
        "y": 346,
        "wires": [
            [
                "817a28ac012296d9"
            ]
        ]
    },
    {
        "id": "0e12099aa15c68da",
        "type": "debug",
        "z": "b6e9a91b958c6e93",
        "name": "debug 214",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1210,
        "y": 100,
        "wires": []
    },
    {
        "id": "0f9f4ff7eb9e0a2c",
        "type": "debug",
        "z": "b6e9a91b958c6e93",
        "name": "debug 215",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1310,
        "y": 320,
        "wires": []
    },
    {
        "id": "f340c94c5e0f865a",
        "type": "ui_slider",
        "z": "b6580a517abe60c7",
        "name": "",
        "label": "Set less_than variable",
        "tooltip": "",
        "group": "3e8ea1e009eb6be3",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": true,
        "outs": "all",
        "topic": "variable",
        "topicType": "msg",
        "min": "1",
        "max": "10",
        "step": 1,
        "className": "",
        "x": 200,
        "y": 100,
        "wires": [
            [
                "f99fe7af4fd404fa"
            ]
        ]
    },
    {
        "id": "865eaaf2a93904ac",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "7",
        "payloadType": "num",
        "x": 170,
        "y": 180,
        "wires": [
            [
                "47d813c9c1764e08"
            ]
        ]
    },
    {
        "id": "28ee57d998195550",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "1",
        "payloadType": "num",
        "x": 170,
        "y": 220,
        "wires": [
            [
                "47d813c9c1764e08"
            ]
        ]
    },
    {
        "id": "f99fe7af4fd404fa",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "Set less_than",
        "func": "global.set(\"less_than\", msg.payload);\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 440,
        "y": 100,
        "wires": [
            [
                "8ed2bc49ce3a39d4"
            ]
        ]
    },
    {
        "id": "8ed2bc49ce3a39d4",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "Read less_than",
        "func": "var env_var = global.get(\"less_than\");\nmsg.payload = env_var;\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 660,
        "y": 100,
        "wires": [
            []
        ]
    },
    {
        "id": "9b18d72ebc6a2ab9",
        "type": "ui_slider",
        "z": "b6580a517abe60c7",
        "name": "",
        "label": "Set greater_than variable",
        "tooltip": "",
        "group": "3e8ea1e009eb6be3",
        "order": 1,
        "width": 0,
        "height": 0,
        "passthru": true,
        "outs": "all",
        "topic": "variable",
        "topicType": "msg",
        "min": "0",
        "max": "5",
        "step": 1,
        "className": "",
        "x": 210,
        "y": 140,
        "wires": [
            [
                "ed0db12053fb9bcd"
            ]
        ]
    },
    {
        "id": "ed0db12053fb9bcd",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "Set less_than",
        "func": "global.set(\"greater_than\", msg.payload);\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 440,
        "y": 140,
        "wires": [
            [
                "ae9d79eafa8e9205"
            ]
        ]
    },
    {
        "id": "ae9d79eafa8e9205",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "Read less_than",
        "func": "var env_var = global.get(\"greater_than\");\nmsg.payload = env_var;\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 660,
        "y": 140,
        "wires": [
            []
        ]
    },
    {
        "id": "106e347db64c7f72",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "greater_than",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1170,
        "y": 300,
        "wires": []
    },
    {
        "id": "47d813c9c1764e08",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "Evaluate",
        "func": "var lessThanValue = global.get(\"less_than\");\nvar greaterThanValue = global.get(\"greater_than\");\nvar incomingNumber = msg.payload;\n\nif (incomingNumber < lessThanValue) {\n    msg.payload = \"Incoming number is less than 'less_than' value.\";\n} else if (incomingNumber > greaterThanValue) {\n    msg.payload = \"Incoming number is greater than 'greater_than' value.\";\n} else {\n    msg.payload = \"Incoming number is within the range.\";\n}\n\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 360,
        "y": 200,
        "wires": [
            []
        ]
    },
    {
        "id": "d1fc9e569b0a07d8",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "Result",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1770,
        "y": 460,
        "wires": []
    },
    {
        "id": "ab21f7336330b740",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "function 79",
        "func": "var payload = msg.payload\nvar message = {TimeSet: + payload}\nvar send = {payload: message}\nmsg.payload = 'true'\nmsg.delay = payload*1000\nreturn msg",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1230,
        "y": 240,
        "wires": [
            [
                "0bfd9efb69f711bc"
            ]
        ]
    },
    {
        "id": "feba235c980abde8",
        "type": "change",
        "z": "b6580a517abe60c7",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "1",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 860,
        "y": 160,
        "wires": [
            [
                "2e279935210b93aa",
                "ed0e6ae1ce28dde7"
            ]
        ]
    },
    {
        "id": "603187fd33b20c85",
        "type": "change",
        "z": "b6580a517abe60c7",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "1",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 860,
        "y": 240,
        "wires": [
            [
                "0c8e2e0bd866e5d3"
            ]
        ]
    },
    {
        "id": "0c8e2e0bd866e5d3",
        "type": "file in",
        "z": "b6580a517abe60c7",
        "name": "",
        "filename": "/home/pi/Data/a.txt",
        "filenameType": "str",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "encoding": "none",
        "allProps": false,
        "x": 1050,
        "y": 240,
        "wires": [
            [
                "ab21f7336330b740"
            ]
        ]
    },
    {
        "id": "0bfd9efb69f711bc",
        "type": "delay",
        "z": "b6580a517abe60c7",
        "name": "",
        "pauseType": "delayv",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "allowrate": false,
        "outputs": 1,
        "x": 1380,
        "y": 240,
        "wires": [
            [
                "33fa08346f7371e7"
            ]
        ]
    },
    {
        "id": "33fa08346f7371e7",
        "type": "change",
        "z": "b6580a517abe60c7",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1540,
        "y": 240,
        "wires": [
            []
        ]
    },
    {
        "id": "2e279935210b93aa",
        "type": "rpi-gpio out",
        "z": "b6580a517abe60c7",
        "name": "",
        "pin": "21",
        "set": "",
        "level": "0",
        "freq": "",
        "out": "out",
        "bcm": true,
        "x": 1020,
        "y": 180,
        "wires": []
    },
    {
        "id": "ed0e6ae1ce28dde7",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "function 80",
        "func": "var J = msg.payload\nif(J == 1){\n    msg.payload = 'ON'\n\n}\nelse{\n    msg.payload = 'OFF'\n}\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1030,
        "y": 140,
        "wires": [
            [
                "7bf78822d66087c9"
            ]
        ]
    },
    {
        "id": "7bf78822d66087c9",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "debug 261",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1190,
        "y": 140,
        "wires": []
    },
    {
        "id": "886c54ed7675adcf",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "Counter",
        "func": "var data = flow.get('cnt')\nif(data >= 6)\n{\n    data = 0\n    \n} else {\n    flow.set('cnt', data)\n}\nvar count = data + 1;\n \nflow.set('cnt',count);\n\n\n \nmsg.payload = count;\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 320,
        "y": 940,
        "wires": [
            [
                "9e76e66893be3902"
            ]
        ]
    },
    {
        "id": "a45f673ed9936d4b",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "v": "0",
                "vt": "num"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 180,
        "y": 940,
        "wires": [
            [
                "886c54ed7675adcf"
            ]
        ]
    },
    {
        "id": "ea57d45566b7ee91",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "function 81",
        "func": "msg.payload = {\n    F : msg.payload\n    \n};\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1290,
        "y": 500,
        "wires": [
            [
                "aa7d49d7a0bfc502",
                "6378f89cf6842e66"
            ]
        ]
    },
    {
        "id": "40c791abae0b22d1",
        "type": "file",
        "z": "b6580a517abe60c7",
        "name": "",
        "filename": "/home/pi/Data/d.txt",
        "filenameType": "str",
        "appendNewline": true,
        "createDir": false,
        "overwriteFile": "true",
        "encoding": "utf8",
        "x": 950,
        "y": 300,
        "wires": [
            [
                "106e347db64c7f72"
            ]
        ]
    },
    {
        "id": "dec0718892c13b21",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "function 82",
        "func": "var env_var = global.get(\"/home/pi/Data/d.txt\");\nmsg.payload = env_var;\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 630,
        "y": 940,
        "wires": [
            []
        ]
    },
    {
        "id": "43b6ee817d74b573",
        "type": "file in",
        "z": "b6580a517abe60c7",
        "name": "",
        "filename": "/home/pi/Data/d.txt",
        "filenameType": "str",
        "format": "lines",
        "chunk": false,
        "sendError": false,
        "encoding": "utf8",
        "allProps": false,
        "x": 350,
        "y": 540,
        "wires": [
            [
                "f8ca8184caf161af"
            ]
        ]
    },
    {
        "id": "9e76e66893be3902",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "function 83",
        "func": "var data = flow.get('cnt')\nif(data = 6)\n{\n    data = (\"/home/pi/Data/d.txt\")\n    \n} else {\n    flow.set('cnt', data)\n}\nvar count = data + 1;\n \nflow.set('cnt',count);\n\n\n \nmsg.payload = count;\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 470,
        "y": 940,
        "wires": [
            [
                "dec0718892c13b21"
            ]
        ]
    },
    {
        "id": "55a24964d91cc856",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "debug 262",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 730,
        "y": 720,
        "wires": []
    },
    {
        "id": "ceaf19c9c8c26387",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "0",
        "payloadType": "num",
        "x": 862,
        "y": 100,
        "wires": [
            [
                "809cf73fbbdbb341"
            ]
        ]
    },
    {
        "id": "809cf73fbbdbb341",
        "type": "change",
        "z": "b6580a517abe60c7",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "cnt",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1050,
        "y": 100,
        "wires": [
            [
                "34fe3dbea580b986"
            ]
        ]
    },
    {
        "id": "34fe3dbea580b986",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "debug 266",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1242,
        "y": 100,
        "wires": []
    },
    {
        "id": "db4d8276116dbd7e",
        "type": "change",
        "z": "b6580a517abe60c7",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "nal",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 350,
        "y": 420,
        "wires": [
            [
                "56ab5783ef610b3d"
            ]
        ]
    },
    {
        "id": "6378f89cf6842e66",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "function 84",
        "func": "if(msg.count == msg.payload)\n{\n\n    msg.payload = 1;\n    \n}else{\n    msg.payload = 0;\n}\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1490,
        "y": 460,
        "wires": [
            [
                "0de2b0644a290747",
                "a79ad7855e086832"
            ]
        ]
    },
    {
        "id": "8fab1a19c2bdec95",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "debug 267",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1290,
        "y": 580,
        "wires": []
    },
    {
        "id": "7c7133de7206d585",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "debug 268",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 730,
        "y": 680,
        "wires": []
    },
    {
        "id": "beaf2b707140d9ee",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "0",
        "payloadType": "num",
        "x": 170,
        "y": 420,
        "wires": [
            [
                "db4d8276116dbd7e"
            ]
        ]
    },
    {
        "id": "56ab5783ef610b3d",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "debug 269",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 550,
        "y": 420,
        "wires": []
    },
    {
        "id": "97dab5e2f74aff26",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "8",
        "payloadType": "num",
        "x": 770,
        "y": 300,
        "wires": [
            [
                "40c791abae0b22d1"
            ]
        ]
    },
    {
        "id": "e8f96983a3463bd5",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "function 85",
        "func": "var temperatures = msg.payload.split('\\n');\nvar sum = 0;\nfor(var i = 0; i < temperatures.length; i++) {\n    sum += parseFloat(temperatures[i]);\n}\nvar average = sum / temperatures.length;\nmsg.payload = \"ค่าเฉลี่ยของอุณหภูมิคือ: \" + average + \" องศาเซลเซียส\";\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 750,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "23f8c55d637a7ec3",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "debug 270",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1250,
        "y": 380,
        "wires": []
    },
    {
        "id": "1246f314ea1c9e44",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "6",
        "payloadType": "num",
        "x": 170,
        "y": 380,
        "wires": [
            [
                "db4d8276116dbd7e"
            ]
        ]
    },
    {
        "id": "51b58885d532294e",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "show number",
        "func": "// ใน node function\nvar numbers = msg.payload.split('\\n'); // แบ่งข้อมูลเป็น array\nvar sum = 0;\nsum = parseInt(numbers); // แสดงตัวเลข\nflow.set('sum');\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1540,
        "y": 820,
        "wires": [
            []
        ]
    },
    {
        "id": "51c65dac6a846072",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": " check function",
        "func": "if(msg.payload == 1){\n    msg.payload = 1\n}\nelse{\n    msg.payload = 0\n}\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 560,
        "y": 720,
        "wires": [
            [
                "55a24964d91cc856"
            ]
        ]
    },
    {
        "id": "5018c32e4135d071",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "function 88",
        "func": " msg.son;\nvar cc = msg.payload;\n\nif(msg.son == cc)\n{\n    msg.payload = 0;\n\n}\nreturn msg;\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 550,
        "y": 680,
        "wires": [
            [
                "7c7133de7206d585"
            ]
        ]
    },
    {
        "id": "d32ad446465c330e",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 180,
        "y": 540,
        "wires": [
            [
                "43b6ee817d74b573"
            ]
        ]
    },
    {
        "id": "a4f578930788c21b",
        "type": "change",
        "z": "b6580a517abe60c7",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "sum",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 350,
        "y": 380,
        "wires": [
            []
        ]
    },
    {
        "id": "1d74eb757a39a0e5",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "function 89",
        "func": "msg.payload;\nmsg.son = msg.payload;\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 550,
        "y": 760,
        "wires": [
            []
        ]
    },
    {
        "id": "a79ad7855e086832",
        "type": "switch",
        "z": "b6580a517abe60c7",
        "name": "",
        "property": "result",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "false",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 1650,
        "y": 460,
        "wires": [
            [
                "d1fc9e569b0a07d8"
            ]
        ]
    },
    {
        "id": "ef7354d55e4e98d6",
        "type": "ui_button",
        "z": "b6580a517abe60c7",
        "name": "",
        "group": "a1d8ed34.6a447",
        "order": 5,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "button",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "",
        "payloadType": "str",
        "topic": "topic",
        "topicType": "msg",
        "x": 190,
        "y": 500,
        "wires": [
            [
                "43b6ee817d74b573"
            ]
        ]
    },
    {
        "id": "b2fac6c84c12e496",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "Check Information",
        "func": "global.get('sum');\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 570,
        "y": 880,
        "wires": [
            []
        ]
    },
    {
        "id": "20b7f94bf078b9d3",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "debug 271",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 350,
        "y": 700,
        "wires": []
    },
    {
        "id": "893ed2434346d1de",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "saveTime",
        "payloadType": "flow",
        "x": 190,
        "y": 700,
        "wires": [
            [
                "20b7f94bf078b9d3"
            ]
        ]
    },
    {
        "id": "f8ca8184caf161af",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "Save Information",
        "func": "{\n    // Access data from Rade file node\n    const data = msg.payload;\n\n    // Process the data\n    const processedData = data.filter;\n\n    // Save the processed data to context\n    context.set(\"processedData\", processedData);\n\n    // Return the processed data to the next node\n    return msg;\n}",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 570,
        "y": 540,
        "wires": [
            []
        ]
    },
    {
        "id": "2a99a1573a1d06ad",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "Convert values",
        "func": " {\n    // รับค่า string\n    var strValue = msg.payload;\n\n    // แปลงเป็น integer\n    var intValue = parseInt(strValue);\n\n    // ส่งค่าที่แปลงแล้วกลับไป\n    msg.payload = intValue;\n    return msg;\n}",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1180,
        "y": 860,
        "wires": [
            [
                "5eb655a357ec40e2"
            ]
        ]
    },
    {
        "id": "7704b190ab8d3113",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "context",
        "func": " {\n    // บันทึกค่าปัจจุบันของ count เพิ่มขึ้น 1\n    var currentCount = context.get(\"count\") || 0; // ถ้ายังไม่มีค่า จะเริ่มต้นที่ 0\n    context.set(\"count\", currentCount + 1);\n\n    // ส่งค่ากลับไปยัง Node ถัดไป\n    msg.payload = \"ค่าปัจจุบันของ count คือ: \" + currentCount;\n    return msg;\n}",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 540,
        "y": 640,
        "wires": [
            [
                "085a5b843dba12db"
            ]
        ]
    },
    {
        "id": "b783b64b090f863b",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "v": "0",
                "vt": "num"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 180,
        "y": 620,
        "wires": [
            [
                "9fa8b1183c124371"
            ]
        ]
    },
    {
        "id": "8fc2eadfc6d093e8",
        "type": "ui_numeric",
        "z": "b6580a517abe60c7",
        "name": "",
        "label": "numeric",
        "tooltip": "",
        "group": "a1d8ed34.6a447",
        "order": 6,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": true,
        "topic": "topic",
        "topicType": "msg",
        "format": "{{value}}",
        "min": 0,
        "max": 10,
        "step": 1,
        "className": "",
        "x": 760,
        "y": 340,
        "wires": [
            [
                "40c791abae0b22d1"
            ]
        ]
    },
    {
        "id": "5f0bc67040d54e10",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "function 90",
        "func": "var currentCount = context.get(\"count\") || 0;\ncontext.set(\"count\", currentCount + 1);\nmsg.payload = \"ค่าปัจจุบันของ count คือ: \" + currentCount;\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 750,
        "y": 420,
        "wires": [
            []
        ]
    },
    {
        "id": "874838b7b0e4f790",
        "type": "change",
        "z": "b6580a517abe60c7",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "saveTime",
                "pt": "flow",
                "to": "payload",
                "tot": "msg",
                "dc": true
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 330,
        "y": 660,
        "wires": [
            []
        ]
    },
    {
        "id": "7cf31795ea6ca96b",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "4",
        "payloadType": "num",
        "x": 170,
        "y": 660,
        "wires": [
            [
                "874838b7b0e4f790"
            ]
        ]
    },
    {
        "id": "085a5b843dba12db",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "debug 272",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 730,
        "y": 640,
        "wires": []
    },
    {
        "id": "9fa8b1183c124371",
        "type": "change",
        "z": "b6580a517abe60c7",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "Count",
                "pt": "flow",
                "to": "payload",
                "tot": "msg"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 360,
        "y": 600,
        "wires": [
            [
                "59f090a939299904"
            ]
        ]
    },
    {
        "id": "a1f13218a01298a6",
        "type": "join",
        "z": "b6580a517abe60c7",
        "name": "",
        "mode": "auto",
        "build": "object",
        "property": "payload",
        "propertyType": "msg",
        "key": "topic",
        "joiner": "\\n",
        "joinerType": "str",
        "accumulate": true,
        "timeout": "",
        "count": "",
        "reduceRight": false,
        "reduceExp": "",
        "reduceInit": "",
        "reduceInitType": "",
        "reduceFixup": "",
        "x": 1090,
        "y": 380,
        "wires": [
            [
                "23f8c55d637a7ec3"
            ]
        ]
    },
    {
        "id": "6226afa0e71292c6",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "function 91",
        "func": "{\n  var data = flow.get('cnt') || 0; // Initialize data to 0 if not set\n  var sum = 0; // Initialize sum to 0\n\n  if (data >= 6) {\n    data = 0;\n  } else {\n    data++; // Increment data directly\n  }\n  flow.set('cnt', data);\n\n  sum = data; // Assign updated data to sum\n\n  msg.payload =  data; // Send both data and sum in payload\n  return msg;\n}",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 930,
        "y": 380,
        "wires": [
            [
                "a1f13218a01298a6",
                "87c455bfa48307e0"
            ]
        ]
    },
    {
        "id": "87c455bfa48307e0",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "debug 273",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1110,
        "y": 340,
        "wires": []
    },
    {
        "id": "d9c617bc7fec87e3",
        "type": "json",
        "z": "b6580a517abe60c7",
        "name": "",
        "property": "payload",
        "action": "obj",
        "pretty": false,
        "x": 330,
        "y": 740,
        "wires": [
            []
        ]
    },
    {
        "id": "a2fe0fc8.095e1",
        "type": "json",
        "z": "b6580a517abe60c7",
        "name": "",
        "property": "payload",
        "action": "obj",
        "pretty": false,
        "x": 1130,
        "y": 500,
        "wires": [
            [
                "ea57d45566b7ee91"
            ]
        ]
    },
    {
        "id": "9a4ce2b8.47698",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 1330,
        "y": 820,
        "wires": []
    },
    {
        "id": "80032e2.7c92cd",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "Object",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"a\":1}",
        "payloadType": "json",
        "x": 170,
        "y": 780,
        "wires": [
            [
                "cd40a0f4.4f5ac"
            ]
        ]
    },
    {
        "id": "cd40a0f4.4f5ac",
        "type": "json",
        "z": "b6580a517abe60c7",
        "name": "",
        "property": "payload",
        "action": "obj",
        "pretty": false,
        "x": 290,
        "y": 780,
        "wires": [
            []
        ]
    },
    {
        "id": "478b4106.4fd7c",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 730,
        "y": 760,
        "wires": []
    },
    {
        "id": "634256b7.2d6818",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "JSON String",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "4",
        "payloadType": "str",
        "x": 190,
        "y": 740,
        "wires": [
            [
                "d9c617bc7fec87e3"
            ]
        ]
    },
    {
        "id": "ae85880b1915d050",
        "type": "ui_numeric",
        "z": "b6580a517abe60c7",
        "name": "",
        "label": "test",
        "tooltip": "",
        "group": "a1d8ed34.6a447",
        "order": 5,
        "width": 0,
        "height": 0,
        "wrap": false,
        "passthru": true,
        "topic": "topic",
        "topicType": "msg",
        "format": "{{value}}",
        "min": 0,
        "max": 10,
        "step": 1,
        "className": "",
        "x": 930,
        "y": 1040,
        "wires": [
            [
                "7069a07b4a9918e3"
            ]
        ]
    },
    {
        "id": "0de2b0644a290747",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "debug 274",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1670,
        "y": 500,
        "wires": []
    },
    {
        "id": "a703e8c3ea382e2f",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "function 92",
        "func": "var pp = msg.payload;\nmsg.son;\nif( pp == msg.son){\n    msg.payload = 1;\n}\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 750,
        "y": 460,
        "wires": [
            []
        ]
    },
    {
        "id": "9b40e45baecbebf2",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "v": "payload",
                "vt": "msg"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 760,
        "y": 500,
        "wires": [
            [
                "1261ce3a8c630c01"
            ]
        ]
    },
    {
        "id": "c3a6829325548b55",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "v": "0",
                "vt": "num"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 1080,
        "y": 460,
        "wires": [
            [
                "74272b3e5573ee39"
            ]
        ]
    },
    {
        "id": "74272b3e5573ee39",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "Counter",
        "func": "var data = flow.get('cnt')\nif(data >= 6)\n{\n    data = 0\n    \n} else {\n    flow.set('cnt', data)\n}\nvar count = data + 1;\n \nflow.set('cnt',count);\nmsg.payload = count;\n\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1280,
        "y": 460,
        "wires": [
            [
                "58bd151201abac24",
                "6378f89cf6842e66"
            ]
        ]
    },
    {
        "id": "58bd151201abac24",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "debug 275",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1450,
        "y": 420,
        "wires": []
    },
    {
        "id": "aa7d49d7a0bfc502",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "debug 276",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 1470,
        "y": 500,
        "wires": []
    },
    {
        "id": "1261ce3a8c630c01",
        "type": "file in",
        "z": "b6580a517abe60c7",
        "name": "",
        "filename": "/home/pi/Data/d.txt",
        "filenameType": "str",
        "format": "lines",
        "chunk": false,
        "sendError": false,
        "encoding": "none",
        "allProps": false,
        "x": 950,
        "y": 500,
        "wires": [
            [
                "a2fe0fc8.095e1"
            ]
        ]
    },
    {
        "id": "7069a07b4a9918e3",
        "type": "file",
        "z": "b6580a517abe60c7",
        "name": "",
        "filename": "/home/pi/Data/d.txt",
        "filenameType": "str",
        "appendNewline": true,
        "createDir": false,
        "overwriteFile": "true",
        "encoding": "utf8",
        "x": 1110,
        "y": 1040,
        "wires": [
            []
        ]
    },
    {
        "id": "659d678bab184217",
        "type": "file in",
        "z": "b6580a517abe60c7",
        "name": "",
        "filename": "/home/pi/Data/d.txt",
        "filenameType": "str",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "encoding": "none",
        "allProps": false,
        "x": 990,
        "y": 860,
        "wires": [
            [
                "2a99a1573a1d06ad"
            ]
        ]
    },
    {
        "id": "c04a7b7c23ce2f00",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "function 93",
        "func": "\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 550,
        "y": 800,
        "wires": [
            []
        ]
    },
    {
        "id": "a09b0495e87f5e4a",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "function 102",
        "func": "node.context().flow.set('myNumber');\nreturn msg;\n\n\n\n\n\n\n\n\n\n\n\n\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1290,
        "y": 540,
        "wires": [
            [
                "241554966a892ec1",
                "615da570580d13d3"
            ]
        ]
    },
    {
        "id": "241554966a892ec1",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "function 103",
        "func": "var savedNumber = context.flow.get('myNumber');\nif (savedNumber > 10) {\n\n    msg.payload = 1\n    \n}else{\n\n    msg.payload = 0\n\n}",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1450,
        "y": 540,
        "wires": [
            [
                "15089f93c124cdb3"
            ]
        ]
    },
    {
        "id": "15089f93c124cdb3",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "debug 283",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1610,
        "y": 540,
        "wires": []
    },
    {
        "id": "d33a1ddc510b5b52",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "v": "0",
                "vt": "num"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 760,
        "y": 540,
        "wires": [
            [
                "ee130713eccae091"
            ]
        ]
    },
    {
        "id": "615da570580d13d3",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "debug 284",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1470,
        "y": 580,
        "wires": []
    },
    {
        "id": "ee130713eccae091",
        "type": "file in",
        "z": "b6580a517abe60c7",
        "name": "",
        "filename": "/home/pi/Data/d.txt",
        "filenameType": "str",
        "format": "lines",
        "chunk": false,
        "sendError": false,
        "encoding": "none",
        "allProps": false,
        "x": 930,
        "y": 540,
        "wires": [
            []
        ]
    },
    {
        "id": "59f090a939299904",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "Counter",
        "func": "var data = flow.get('cnt')\nif(data >= 6)\n{\n    data = 0\n    \n}\nif(data == flow.Count)\n{\n    msg.payload = 1\n\n\n}  else {\n    flow.set('cnt', data)\n}\nvar count = data + 1;\n \nflow.set('cnt',count);\nmsg.payload;\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 540,
        "y": 600,
        "wires": [
            []
        ]
    },
    {
        "id": "e79e72ca5e128e58",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "3",
        "payloadType": "num",
        "x": 170,
        "y": 580,
        "wires": [
            [
                "9fa8b1183c124371"
            ]
        ]
    },
    {
        "id": "ca8f320be79558c4",
        "type": "file in",
        "z": "b6580a517abe60c7",
        "name": "",
        "filename": "/home/pi/Data/d.txt",
        "filenameType": "str",
        "format": "utf8",
        "chunk": false,
        "sendError": false,
        "encoding": "none",
        "allProps": false,
        "x": 330,
        "y": 820,
        "wires": [
            []
        ]
    },
    {
        "id": "c1a13aad3ee8d704",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "Convert values",
        "func": " {\n    // รับค่า string\n    var strValue = msg.payload;\n\n    // แปลงเป็น integer\n    var intValue = parseInt(strValue);\n\n    // ส่งค่าที่แปลงแล้วกลับไป\n    msg.payload = intValue;\n    msg.int = msg.payload\n    return msg;\n}",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 560,
        "y": 840,
        "wires": [
            []
        ]
    },
    {
        "id": "ee2844d04687bb43",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "debug 285",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1090,
        "y": 600,
        "wires": []
    },
    {
        "id": "a50774fa9fff586b",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "debug 286",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1510,
        "y": 860,
        "wires": []
    },
    {
        "id": "5bbf7c9df916e70f",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "Counter",
        "func": "var data = flow.get('cnt')\nif(data >= 6)\n{\n    data = 0\n    \n} else {\n    flow.set('cnt', data)\n}\nvar count = data + 1;\n \nflow.set('cnt',count);\nmsg.payload = count;\n\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 940,
        "y": 600,
        "wires": [
            [
                "ee2844d04687bb43"
            ]
        ]
    },
    {
        "id": "6295b4b10a00f604",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "Count",
        "payloadType": "flow",
        "x": 180,
        "y": 460,
        "wires": [
            []
        ]
    },
    {
        "id": "4588761a21dd184c",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "function 104",
        "func": "// ใน function node\nvar flowContext = context.get(\"myData\") || {};\nflowContext.timestamp = new Date().toISOString();\nflowContext.value = msg.payload;\ncontext.set(\"myData\", flowContext);",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 370,
        "y": 260,
        "wires": [
            [
                "81a77f9aeafc4fe5"
            ]
        ]
    },
    {
        "id": "14e6321d937928e1",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "7",
        "payloadType": "num",
        "x": 170,
        "y": 260,
        "wires": [
            [
                "4588761a21dd184c"
            ]
        ]
    },
    {
        "id": "81a77f9aeafc4fe5",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "debug 287",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 570,
        "y": 260,
        "wires": []
    },
    {
        "id": "12fc7083a5f915de",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "function 105",
        "func": "// ใน function node อีกตัว\nvar data = context.get(\"myData\");\nif (data) {\n    node.warn(\"ค่าล่าสุด: \" + data.value + \" เวลา: \" + data.timestamp);\n}",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 370,
        "y": 300,
        "wires": [
            [
                "7d2ed7eb4b1346ac"
            ]
        ]
    },
    {
        "id": "9353b7d16c411391",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 180,
        "y": 300,
        "wires": [
            [
                "12fc7083a5f915de"
            ]
        ]
    },
    {
        "id": "7d2ed7eb4b1346ac",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "debug 288",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 570,
        "y": 300,
        "wires": []
    },
    {
        "id": "173c2537910df429",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "function 106",
        "func": "// ใน function node\nvar fs = require('fs');\nvar data = JSON.stringify(msg.payload);\nfs.writeFile(\"data.json\", data, (err) => {\n    if (err) {\n        console.error(err);\n    } else {\n        console.log(\"Data written to file successfully\");\n    }\n});",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 370,
        "y": 340,
        "wires": [
            [
                "cf1c29685cd80ba6"
            ]
        ]
    },
    {
        "id": "cf1c29685cd80ba6",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "debug 289",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 570,
        "y": 340,
        "wires": []
    },
    {
        "id": "f56127ec01f1f254",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 180,
        "y": 340,
        "wires": [
            [
                "173c2537910df429"
            ]
        ]
    },
    {
        "id": "10370eb037df933c",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 180,
        "y": 1040,
        "wires": [
            [
                "f4dc59c786f50a37"
            ]
        ]
    },
    {
        "id": "d0c9ae33ab7402b2",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 180,
        "y": 1120,
        "wires": [
            [
                "147d98436941242b"
            ]
        ]
    },
    {
        "id": "f4dc59c786f50a37",
        "type": "change",
        "z": "b6580a517abe60c7",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 400,
        "y": 1060,
        "wires": [
            [
                "5d405ed569f3034b"
            ]
        ]
    },
    {
        "id": "147d98436941242b",
        "type": "change",
        "z": "b6580a517abe60c7",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "1",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 400,
        "y": 1100,
        "wires": [
            [
                "5d405ed569f3034b"
            ]
        ]
    },
    {
        "id": "5d405ed569f3034b",
        "type": "rpi-gpio out",
        "z": "b6580a517abe60c7",
        "name": "",
        "pin": "5",
        "set": "",
        "level": "0",
        "freq": "",
        "out": "out",
        "bcm": true,
        "x": 640,
        "y": 1080,
        "wires": []
    },
    {
        "id": "b138b603c8f94cf8",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "Temperature sensor",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "5",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "$random() * 100",
        "payloadType": "jsonata",
        "x": 1080,
        "y": 740,
        "wires": [
            [
                "ab41b0f6e6fa58aa"
            ]
        ]
    },
    {
        "id": "ab41b0f6e6fa58aa",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "Convert Celsius to Fahrenheit",
        "func": "// Extract temperature reading from the incoming message\nconst temperatureCelsius = msg.payload;\n\n// Convert Celsius to Fahrenheit\nconst temperatureFahrenheit = (temperatureCelsius * 9 / 5) + 32;\n\n// Round the temperature Fahrenheit to two decimal places and convert it back to a number\nconst roundedTemperatureFahrenheit = parseFloat(temperatureFahrenheit.toFixed(2));\n\n// Update the message payload with the temperature in Fahrenheit\nmsg.payload = roundedTemperatureFahrenheit;\n\n// Return the modified message object\nreturn msg;\n\n\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1350,
        "y": 740,
        "wires": [
            []
        ]
    },
    {
        "id": "b7271bd3259bc56d",
        "type": "debug",
        "z": "b6580a517abe60c7",
        "name": "debug 1",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 1600,
        "y": 740,
        "wires": []
    },
    {
        "id": "8f553a15e4f5a8dd",
        "type": "comment",
        "z": "b6580a517abe60c7",
        "name": "Convert received temperature from Celsius to Fahrenheit and format it",
        "info": "",
        "x": 1350,
        "y": 680,
        "wires": []
    },
    {
        "id": "f7f8d83b32c392ea",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "function 107",
        "func": "const intValue = msg.payload \n\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1150,
        "y": 940,
        "wires": [
            []
        ]
    },
    {
        "id": "5eb655a357ec40e2",
        "type": "function",
        "z": "b6580a517abe60c7",
        "name": "Counter",
        "func": "var data = flow.get('cnt')\nif(data >= 6)\n{\n    data = 0\n    \n}  else {\n    flow.set('cnt', data)\n}\nvar count = data + 1;\n \nflow.set('cnt',count);\nif (data == msg.payload) {\n    msg.payload = 1;\n\n\n}\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 1360,
        "y": 860,
        "wires": [
            [
                "a50774fa9fff586b"
            ]
        ]
    },
    {
        "id": "b47f40ddea4720ac",
        "type": "inject",
        "z": "b6580a517abe60c7",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "v": "0",
                "vt": "num"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 820,
        "y": 860,
        "wires": [
            [
                "659d678bab184217"
            ]
        ]
    },
    {
        "id": "d1f3afc98cd4510f",
        "type": "change",
        "z": "b6580a517abe60c7",
        "name": "",
        "rules": [
            {
                "t": "set",
                "p": "payload",
                "pt": "msg",
                "to": "0",
                "tot": "num"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 1840,
        "y": 780,
        "wires": [
            []
        ]
    }
]