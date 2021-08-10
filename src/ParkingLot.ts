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
  //TODO: implement the car class for the object that is passed
  parkCar(carObj: any) {}

  unParkCar() {}
  getAllParkingStatus() {
    var arr = new Array()
    if (this.maxParkingSlots > 0) {
      // TODO: Implement the table functionality
      arr.push("Slot No. Registration No. Color ")

      // TODO: can be optimized here
      for (let i = 0; i < this.parkingSlots.length; i++) {
        // TODO: need to add element in the parking array as an object which makes it suitable to get the Number and color of the car
        if (this.parkingSlots[i] != null) {
          const temp = i + 1
          arr.push(
            temp +
              ".  " +
              this.parkingSlots[i].NUMBER +
              "  " +
              this.parkingSlots[i].COLOR
          )
        }
      }
      return arr
    } else {
      return "Parking Lot is Empty"
    }
  }
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
// const parkingObj = new ParkingLot()
// const abc = parkingObj.createParkingLot(4)
// console.log("abc", abc)

module.exports = ParkingLot
