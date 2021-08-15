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
    const dummyParkingSlots: Slot[] = []

    for (let i = 0; i < input; i++) {
      // TODO: add the empty slot objects in here
      dummyParkingSlots.push(new Slot(i + 1))

      // this.parkingSlots.push(null)
      this.parkingSlots.push(new Slot(i + 1))
    }
    console.log("dummyParkingSlots", dummyParkingSlots)

    return this.parkingSlots
  }
  //TODO: implement the car class for the object that is passed
  parkCar(carObj: Car) {
    //var len = this.parkingSlots.length // tells the current length

    // var car, carNumber, carColor
    // console.log("car object ", carObj)

    const nextNearestStatusObj = this.getNextNearestSlot(this.parkingSlots)
    if (nextNearestStatusObj.status === true) {
      const car = new Car(carObj.carNumber, carObj.carColor)
      // TODO:car data sanitization can be done here or when it is read from the input
      // if (nextNearestStatusObj.value) {
      this.parkingSlots[Number(nextNearestStatusObj.value)].car = car
      this.parkingSlots[Number(nextNearestStatusObj.value)].parkStatus = true
      return this.parkingSlots[Number(nextNearestStatusObj.value)].slotId
    } else {
      // TODO: implement the error in the getNextParking functionality itself
      // throw new Error("Sorry, parking lot is full")
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
  getSlotByCarNo() {}
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
const parkingObj = new ParkingLot()
const abc = parkingObj.createParkingLot(4)
const def = parkingObj.parkCar({
  carNumber: "KA40M8501",
  carColor: "red",
})

console.log("abc", abc)
console.log("def", def)
// TODO: change all the null objects to the car objects
// }
// for (var i = 0; i < len; i++) {
//   if (this.parkingSlots[i] == null) {
//     carNumber = carObj.carNo
//     carColor = carObj.carColor
//     if (carNumber && carColor) {
//       car = new Car(carNumber, carColor)
//       this.parkingSlots[i] = car
//       i = i + 1
//       return i
//     } else {
//       throw new Error("Please provide registration number and color both")
//     }
//   }
// }
