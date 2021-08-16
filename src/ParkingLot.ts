import { Car } from "./Car"
import { Slot } from "./Slot"
export class ParkingLot {
  constructor() {
    this.maxParkingSlots = 0
    this.parkingSlots = new Array()
  }
  maxParkingSlots: number
  parkingSlots: Slot[]

  createParkingLot(input: number) {
    if (!input || input <= 0)
      return "please enter the valid to allot the no of parking slots"
    this.maxParkingSlots = input

    for (let i = 0; i < input; i++) {
      this.parkingSlots.push(new Slot(i + 1))
    }

    return this.parkingSlots
  }

  parkCar(carObj: Car) {
    const nextNearestStatusObj = this.getNextNearestSlot(this.parkingSlots)
    if (nextNearestStatusObj.status === true) {
      const car = new Car(carObj.carNumber, carObj.carColor)

      // TODO:car data sanitization can be done here or when it is read from the input

      this.parkingSlots[Number(nextNearestStatusObj.value)].car = car
      this.parkingSlots[Number(nextNearestStatusObj.value)].parkStatus = true
      return this.parkingSlots[Number(nextNearestStatusObj.value)].slotId
    } else {
      return nextNearestStatusObj.value
    }
  }

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
              this.parkingSlots[i].car.carNumber +
              "  " +
              this.parkingSlots[i].car.carColor
          )
        }
      }
      return arr
    } else {
      return "Parking Lot is Empty"
    }
  }

  getSlotByCarNo(carNumber: string) {
    console.log("car number that is passed", carNumber)
    console.log("the given parking array is ", this.parkingSlots)

    // console.log("getSlotBycarNo", this.parkingSlots[0].car.carNumber)
    // console.log("getSlotBycarNo ends here")
    // const deleteme = carNumber == this.parkingSlots[0].car.carNumber
    // console.log("deleteMe", deleteme)

    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (
        this.parkingSlots[i].parkStatus &&
        this.parkingSlots[i].car.carNumber == carNumber
      ) {
        return this.parkingSlots[i].slotId
      }
    }

    // this.parkingSlots.forEach((slot) => {
    //   if (slot.car.carNumber === carNumber) return slot.slotId
    // })
    return "car is not parked"
  }

  getAllCarNumbersByColor() {}
  getAllSlotsByCarColor() {}

  getNextNearestSlot(currentParkingArray: Slot[]) {
    if (!currentParkingArray || currentParkingArray.length === 0)
      return {
        status: false,
        value: "Please enter the valid current parking array",
      }
    for (let i = 0; i < currentParkingArray.length; i++) {
      if (currentParkingArray[i].parkStatus === false)
        return { status: true, value: i }
    }
    return { status: false, value: "Parking lot is completely filled" }
  }
}
// const parkingObj = new ParkingLot()
// const abc = parkingObj.createParkingLot(4)
// const def = parkingObj.parkCar({
//   carNumber: "KA40M8501",
//   carColor: "red",
// })
// const deff = parkingObj.parkCar({
//   carNumber: "KA40M8502",
//   carColor: "red",
// })
// const ghi = parkingObj.getSlotByCarNo("KA40M8502")

// console.log("abc", abc)
// console.log("def", def)
// console.log("def", deff)
// console.log("ghi getSlot By CarNo", ghi)
