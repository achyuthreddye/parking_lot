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
const ParkingLot_1 = require("./ParkingLot");
const readLine = __importStar(require("readline"));
const parkingLot = new ParkingLot_1.ParkingLot();
let interactiveMode = true;
interactiveConsole();
function interactiveConsole() {
    var prompts = readLine.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false,
    });
    if (interactiveMode) {
        prompts.question("Input: ", function (data) {
            processUsercommands(data);
        });
    }
}
function processUsercommands(input) {
    const userCommand = input.split(" ")[0];
    switch (userCommand) {
        case "create_parking_lot":
            const parkingStatus = parkingLot.createParkingLot(Number(input.split(" ")[1]));
            console.log(parkingStatus);
            break;
        case "park":
            const a = parkingLot.parkCar(input);
            console.log(a);
    }
    interactiveConsole();
}
//# sourceMappingURL=index.js.map