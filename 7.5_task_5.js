class onOffDevices {
    constructor() {
        this.isPlugIntoSocket = false;
        this.onOff = function () {
            if (this.isPlugIntoSocket === false) {
                this.isPlugIntoSocket = true;
                console.log('is on')
            } else {
                this.isPlugIntoSocket = false;
                console.log('is off')
            }
        }
    }
}

class Device extends onOffDevices {
    constructor(name, amperage ,voltage) {
        super();
        this.name = name;
        this.amperage = amperage;
        this.voltage = voltage;
        this.power = function () {
            if (this.isPlugIntoSocket === false) {
                console.log(`${this.name} power rate 0w`);
            } else {
                console.log(`${this.name} power rate ${amperage * voltage}w`);
            }
        }
    }
}

let amdComputer = new Device('AMD Computer', 3 , 220);
let tableLamp = new Device('Xiaomi', 0.06, 220);