"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot = void 0;
class Slot {
    constructor(slotId) {
        this.parkStatus = false;
        this.slotId = slotId;
    }
    parkCar(carTobeParked) {
        this.car = carTobeParked;
    }
    unParkCar() {
    }
}
exports.Slot = Slot;
//# sourceMappingURL=Slot.js.map