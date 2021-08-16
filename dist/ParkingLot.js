"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingLot = void 0;
const Car_1 = require("./Car");
const Slot_1 = require("./Slot");
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
            this.parkingSlots.push(new Slot_1.Slot(i + 1));
        }
        return this.parkingSlots;
    }
    parkCar(carObj) {
        const nextNearestStatusObj = this.getNextNearestSlot(this.parkingSlots);
        if (nextNearestStatusObj.status === true) {
            const car = new Car_1.Car(carObj.carNumber, carObj.carColor);
            this.parkingSlots[Number(nextNearestStatusObj.value)].car = car;
            this.parkingSlots[Number(nextNearestStatusObj.value)].parkStatus = true;
            return this.parkingSlots[Number(nextNearestStatusObj.value)].slotId;
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
                        this.parkingSlots[i].car.carNumber +
                        "  " +
                        this.parkingSlots[i].car.carColor);
                }
            }
            return arr;
        }
        else {
            return "Parking Lot is Empty";
        }
    }
    getSlotByCarNo(carNumber) {
        console.log("car number that is passed", carNumber);
        console.log("the given parking array is ", this.parkingSlots);
        for (let i = 0; i < this.parkingSlots.length; i++) {
            if (this.parkingSlots[i].parkStatus &&
                this.parkingSlots[i].car.carNumber == carNumber) {
                return this.parkingSlots[i].slotId;
            }
        }
        return "car is not parked";
    }
    getAllCarNumbersByColor() { }
    getAllSlotsByCarColor() { }
    getNextNearestSlot(currentParkingArray) {
        if (!currentParkingArray || currentParkingArray.length === 0)
            return {
                status: false,
                value: "Please enter the valid current parking array",
            };
        for (let i = 0; i < currentParkingArray.length; i++) {
            if (currentParkingArray[i].parkStatus === false)
                return { status: true, value: i };
        }
        return { status: false, value: "Parking lot is completely filled" };
    }
}
exports.ParkingLot = ParkingLot;
//# sourceMappingURL=ParkingLot.js.map