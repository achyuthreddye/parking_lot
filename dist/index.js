"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParkingLot_1 = require("./Entities/ParkingLot");
const interactiveConsole_1 = require("./interactiveConsole");
const fileConsole_1 = require("./fileConsole");
const commandLineInputs = process.argv;
let interactiveMode = false;
const parkingLot = new ParkingLot_1.ParkingLot();
if (commandLineInputs[commandLineInputs.length - 1].endsWith(".txt")) {
    fileConsole_1.fileConsole(parkingLot, commandLineInputs);
}
else {
    interactiveMode = true;
    interactiveConsole_1.interactiveConsole(interactiveMode, parkingLot);
}
//# sourceMappingURL=index.js.map