class ParkingLot {
    constructor() {
        this.maxParkingSlots = 0;
        this.parkingSlots = new Array();
    }
    createParkingLot(input) {
        if (!input || input <= 0)
            return "please enter the valid to allot the no of parking slots";
        for (let i = 0; i < input; i++) {
            this.parkingSlots.push(null);
        }
        return this.parkingSlots;
    }
    parkCar(carObj) { }
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
            return "Please enter the valid current parking array";
        for (let i = 0; i < currentParkingArray.length; i++) {
            if (currentParkingArray[i] === null)
                return { status: true, value: i };
        }
        return { status: false };
    }
}
module.exports = ParkingLot;
//# sourceMappingURL=ParkingLot.js.map