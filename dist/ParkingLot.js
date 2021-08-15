"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingLot = void 0;
const Car_1 = require("./Car");
class ParkingLot {
    constructor() {
        this.maxParkingSlots = 0;
        this.parkingSlots = new Array();
    }
    createParkingLot(input) {
        if (!input || input <= 0)
            return "please enter the valid to allot the no of parking slots";
        this.maxParkingSlots = input;
        for (let i = 0; i < input; i++) {
            this.parkingSlots.push(null);
        }
        return this.parkingSlots;
    }
    parkCar(carObj) {
        const nextNearestStatusObj = this.getNextNearestSlot(this.parkingSlots);
        if (nextNearestStatusObj.status === true) {
            const car = new Car_1.Car(carObj.carNumber, carObj.carColor);
            this.parkingSlots[Number(nextNearestStatusObj.value)] = car;
            return Number(nextNearestStatusObj.value) + 1;
        }
        else {
            return nextNearestStatusObj.value;
        }
    }
    unParkCar() { }
    getAllParkingStatus() {
        var arr = new Array();
        if (this.maxParkingSlots > 0) {
            arr.push("Slot No. Registration No. Color ");
            for (let i = 0; i < this.parkingSlots.length; i++) {
                if (this.parkingSlots[i] != null) {
                    const temp = i + 1;
                    arr.push(temp +
                        ".  " +
                        this.parkingSlots[i].NUMBER +
                        "  " +
                        this.parkingSlots[i].COLOR);
                }
            }
            return arr;
        }
        else {
            return "Parking Lot is Empty";
        }
    }
    getSlotByCarNo() { }
    getAllCarNumbersByColor() { }
    getAllSlotsByCarColor() { }
    getNextNearestSlot(currentParkingArray) {
        if (!currentParkingArray || currentParkingArray.length === 0)
            return {
                status: false,
                value: "Please enter the valid current parking array",
            };
        for (let i = 0; i < currentParkingArray.length; i++) {
            if (currentParkingArray[i] === null)
                return { status: true, value: i };
        }
        return { status: false, value: "Parking lot is completely filled" };
    }
}
exports.ParkingLot = ParkingLot;
const parkingObj = new ParkingLot();
const abc = parkingObj.createParkingLot(4);
const def = parkingObj.parkCar("adfd");
console.log("abc", abc);
console.log("def", def);
//# sourceMappingURL=ParkingLot.js.map