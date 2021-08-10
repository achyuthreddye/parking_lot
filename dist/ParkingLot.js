class ParkingLot {
    constructor() {
        this.maxParkingSlots = 0;
        this.parkingSlots = new Array();
    }
    createParkingLot(input) {
        console.log(input);
        if (this.maxParkingSlots === 0)
            return "the number of parking slots entered should be more than zero ";
        for (let i = 0; i < this.maxParkingSlots; i++) {
            this.parkingSlots.push(null);
        }
        return this.parkingSlots;
    }
    parkCar() { }
    unParkCar() { }
    getAllPrakingStatus() { }
    getSlotByCarNo() { }
    getAllCarNumbersByColor() { }
    getAllSlotsByCarColor() { }
    getNextNearestSlot() { }
}
const parkingObj = new ParkingLot();
const abc = parkingObj.createParkingLot(4);
console.log("abc", abc);
module.exports = ParkingLot;
//# sourceMappingURL=ParkingLot.js.map