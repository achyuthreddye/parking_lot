"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot = void 0;
const Car_1 = require("./Car");
class Slot {
    constructor(slotId) {
        this.parkStatus = false;
        this.car = new Car_1.Car("", "");
        this.slotId = slotId;
    }
}
exports.Slot = Slot;
//# sourceMappingURL=Slot.js.map