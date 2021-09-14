let onOffDevices = {
    isPlugIntoSocket: false,
    onOff: function () {
        if (this.isPlugIntoSocket === false){
            this.isPlugIntoSocket = true;
            console.log('is on')
        }else {
            this.isPlugIntoSocket = false;
            console.log('is off')
        }
    }
}

let Device = function (name, amperage,voltage) {
    this.name = name;
    this.amperage = amperage;
    this.voltage = voltage;
    this.power = function () {
        if (this.isPlugIntoSocket === false){
            console.log(`${this.name} power rate 0w`);
        }else {
            console.log(`${this.name} power rate ${amperage*voltage}w`);
        }
    }
}

Device.prototype = onOffDevices;

let amdComputer = new Device('AMD Computer', 3 , 220);
let tableLamp = new Device('Xiaomi', 0.06, 220);