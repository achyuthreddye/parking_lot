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
const fs = __importStar(require("fs"));
const commandLineInputs = process.argv;
let interactiveMode = false;
const parkingLot = new ParkingLot_1.ParkingLot();
if (commandLineInputs[commandLineInputs.length - 1].endsWith(".txt")) {
    interactiveMode = false;
    fs.readFile(commandLineInputs[2], "utf-8", (err, data) => {
        if (err)
            console.log("error in reading file");
        const inputArray = data.split("\n");
        inputArray.forEach((item) => {
            processUsercommands(item);
        });
        process.exit(1);
    });
}
else {
    interactiveMode = true;
    interactiveConsole();
}
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
            console.log(parkingLot.createParkingLot(Number(input.split(" ")[1])));
            break;
        case "park":
            console.log(parkingLot.parkCar(input));
            break;
        case "leave":
            console.log(parkingLot.unParkCarBySlotNumber(Number(input.split(" ")[1])));
            break;
        case "status":
            const parkedCarsArray = parkingLot.getAllParkingStatus();
            console.log(parkedCarsArray.join("\n"));
            break;
        case "registration_numbers_for_cars_with_colour":
            console.log(parkingLot.getAllCarNumbersByColor(input.split(" ")[1]).join("\n"));
            break;
        case "slot_numbers_for_cars_with_colour":
            console.log(parkingLot.getAllSlotsByCarColor(input.split(" ")[1]).join("\n"));
            break;
        case "slot_number_for_registration_number":
            console.log(parkingLot.getSlotByCarNo(input.split(" ")[1]));
            break;
    }
    interactiveConsole();
}
//# sourceMappingURL=index.js.map