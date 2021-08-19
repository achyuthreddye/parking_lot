"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot = void 0;
const Car_1 = require("./Car");
class Slot {
    constructor(slotId) {
        this.slotId = slotId;
        this.car = new Car_1.Car();
    }
    park(carTobeParked) {
        this.car = carTobeParked;
    }
    unPark() {
        this.car = new Car_1.Car();
    }
    isEmpty() {
        return this.car.carColor === undefined && this.car.carNumber === undefined;
    }
}
exports.Slot = Slot;
//# sourceMappingURL=Slot.js.map