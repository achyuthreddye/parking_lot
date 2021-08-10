class ParkingLot {
  constructor() {
    this.maxParkingSlots = 0
    this.parkingSlots = new Array()
  }
  maxParkingSlots: number
  parkingSlots: any[]

  createParkingLot(input: number) {
    if (!input || input <= 0)
      return "please enter the valid to allot the no of parking slots"

    for (let i = 0; i < input; i++) {
      this.parkingSlots.push(null)
    }
    return this.parkingSlots
  }
  parkCar() {}
  unParkCar() {}
  getAllPrakingStatus() {}
  getSlotByCarNo() {}
  getAllCarNumbersByColor() {}
  getAllSlotsByCarColor() {}
  getNextNearestSlot(currentParkingArray: string[]) {
    if (!currentParkingArray || currentParkingArray.length === 0)
      return "Please enter the valid current parking array"
    for (let i = 0; i < currentParkingArray.length; i++) {
      if (currentParkingArray[i] === null) return { status: true, value: i }
    }
    return { status: false }
  }
}
const parkingObj = new ParkingLot()
const abc = parkingObj.createParkingLot(4)
console.log("abc", abc)

module.exports = ParkingLot
