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
    if (!input || input <= 0) {
      return "please enter the valid number to allot the maximum no of parking slots"
    }

    this.maxParkingSlots = input

    for (let i = 0; i < input; i++) {
      this.parkingSlots.push(new Slot(i + 1))
    }

    return "Created a parking lot with " + this.parkingSlots.length + " slots"
  }

  parkCar(carInputString: string) {
    const nextNearestStatusObj = this.getNextNearestSlot(this.parkingSlots)
    if (nextNearestStatusObj.status === true) {
      const carNumber: string = carInputString.split(" ")[1]
      const carColor: string = carInputString.split(" ")[2]
      if (!carNumber || !carColor)
        return "please Enter a valid car number and car Color"
      const car = new Car(carNumber, carColor)

      this.parkingSlots[Number(nextNearestStatusObj.value)].car = car
      this.parkingSlots[Number(nextNearestStatusObj.value)].parkStatus = true
      return this.parkingSlots[Number(nextNearestStatusObj.value)].slotId
    } else {
      return nextNearestStatusObj.value
    }
  }

  unParkCarByCarNumber(carNo: string) {
    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (
        this.parkingSlots[i].parkStatus &&
        this.parkingSlots[i].car.carNumber == carNo
      ) {
        this.parkingSlots[i].parkStatus = false
        this.parkingSlots[i].car = new Car("", "")
        return true
      }
    }
    return "the car is not parked "
  }
  // unParkCar

  getAllParkingStatus() {
    var arr = new Array()
    if (this.maxParkingSlots > 0) {
      arr.push("Slot No. Registration No. Color ")

      for (let i = 0; i < this.parkingSlots.length; i++) {
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
    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (
        this.parkingSlots[i].parkStatus &&
        this.parkingSlots[i].car.carNumber === carNumber
      ) {
        return this.parkingSlots[i].slotId
      }
    }

    return "car is not parked"
  }

  getAllCarNumbersByColor(carColor: string) {
    const carList: Car[] = []

    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (
        this.parkingSlots[i].parkStatus &&
        this.parkingSlots[i].car.carColor === carColor
      ) {
        carList.push(this.parkingSlots[i].car)
      }
    }
    return carList.length > 1
      ? carList
      : "No car with the given color exist in the parking lot"
  }
  getAllSlotsByCarColor(carColor: string) {
    const slotList: number[] = []
    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (
        this.parkingSlots[i].parkStatus &&
        this.parkingSlots[i].car.carColor === carColor
      ) {
        slotList.push(this.parkingSlots[i].slotId)
      }
    }
    return slotList.length > 1
      ? slotList
      : "No car with the given color exist in the parking lot"
  }

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
// const def = parkingObj.parkCar("park KA40M8501 red")

// const deff = parkingObj.parkCar("park KA40M8502 red")
// console.log("abc before parking", abc)
// // const ghi = parkingObj.unParkCar("KA40M8502")
// // const ghi = parkingObj.getSlotByCarNo("KA40M8502")

// console.log("abc after unparking", abc)
// console.log("def", def)
// console.log("def", deff)
// console.log(parkingObj.getAllParkingStatus())
// console.log("ghi getSlot By CarNo", ghi)
