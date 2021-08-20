"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ParkingLot_1 = require("./Entities/ParkingLot");
const interactiveConsole_1 = require("./interactiveConsole");
const fileConsole_1 = require("./fileConsole");
const events = __importStar(require("events"));
events.EventEmitter.defaultMaxListeners = 0;
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