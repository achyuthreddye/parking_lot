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
      return {
        status: "failure",
        message: "Invalid Input",
      }
    }

    this.maxParkingSlots = input

    for (let i = 0; i < input; i++) {
      this.parkingSlots.push(new Slot(i + 1))
    }
    return {
      status: "success",
      message: this.parkingSlots.length,
    }
  }
  getNextNearestSlot(currentParkingArray: Slot[]) {
    if (!currentParkingArray || currentParkingArray.length === 0)
      return {
        status: false,
        value: "Please enter the valid current parking array",
      }
    for (let i = 0; i < currentParkingArray.length; i++) {
      if (currentParkingArray[i].isEmpty()) return { status: true, value: i }
    }
    return { status: false, value: "Parking lot is completely filled" }
  }

  parkCar(carInputString: string) {
    const nextNearestStatusObj = this.getNextNearestSlot(this.parkingSlots)
    if (nextNearestStatusObj.status === true) {
      const carNumber: string = carInputString.split(" ")[1]
      const carColor: string = carInputString.split(" ")[2]
      const carObj = new Car()
      carObj.create(carNumber, carColor)
      if (!carNumber || !carColor)
        return { status: "failure", message: "InvalidInput" }
      this.parkingSlots[Number(nextNearestStatusObj.value)].park(carObj)
    }
    return {
      status: "success",
      message: this.parkingSlots[Number(nextNearestStatusObj.value)].slotId,
    }
  }

  unParkCarByCarNumber(carNo: string) {
    if (this.maxParkingSlots === 0) return "Please Create a parking lot"
    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (this.parkingSlots[i].car.carNumber == carNo) {
        this.parkingSlots[i].unPark()
        return true
      }
    }
    return "the car is not parked "
  }
  unParkCarBySlotNumber(slotNo: number) {
    // if (this.maxParkingSlots === 0) return "Please Create a parking lot"
    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (this.parkingSlots[i].slotId === slotNo) {
        this.parkingSlots[i].car = new Car()
        return { status: "success", message: this.parkingSlots[i].slotId }
      }
    }
    return { status: "failure", message: "CarNotParked" }
  }

  getAllParkingStatus() {
    var arr: any[] = []

    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (!this.parkingSlots[i].isEmpty()) {
        arr.push([
          this.parkingSlots[i].slotId,
          this.parkingSlots[i].car.carNumber,
          this.parkingSlots[i].car.carColor,
        ])
      }
    }
    return arr
  }

  getSlotByCarNo(carNumber: string) {
    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (
        !this.parkingSlots[i].isEmpty() &&
        this.parkingSlots[i].car.carNumber === carNumber
      ) {
        return { status: "success", message: this.parkingSlots[i].slotId }
      }
    }

    return { status: "failure", message: "carNotParked" }
  }

  getAllCarNumbersByColor(carColor: string) {
    const carList: string[] = []

    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (
        !this.parkingSlots[i].isEmpty() &&
        this.parkingSlots[i].car.carColor.toLowerCase() ===
          carColor.toLowerCase()
      ) {
        carList.push(this.parkingSlots[i].car.carNumber)
      }
    }
    return carList.length > 1
      ? { status: "success", message: "", payload: carList }
      : { status: "failure", message: "NoCar", payload: carList }
  }
  getAllSlotsByCarColor(carColor: string) {
    const slotList: number[] = []
    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (
        !this.parkingSlots[i].isEmpty() &&
        this.parkingSlots[i].car.carColor.toLowerCase() ===
          carColor.toLowerCase()
      ) {
        slotList.push(this.parkingSlots[i].slotId)
      }
    }
    return slotList.length > 1
      ? { status: "failure", payload: slotList, message: "" }
      : {
          status: "success",
          message: "NoCar",
          payload: slotList,
        }
  }
}
