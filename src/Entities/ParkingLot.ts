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
    console.log(this.parkingSlots)

    return "Created a parking lot with " + this.parkingSlots.length + " slots"
  }
  getNextNearestSlot(currentParkingArray: Slot[]) {
    if (!currentParkingArray || currentParkingArray.length === 0)
      return {
        status: false,
        value: "Please enter the valid current parking array",
      }
    for (let i = 0; i < currentParkingArray.length; i++) {
      if (currentParkingArray[i].isEmpty())
        // return { status: true, value: currentParkingArray[i].slotId }
        return { status: true, value: i }
    }
    return { status: false, value: "Parking lot is completely filled" }
  }

  parkCar(carInputString: string) {
    const nextNearestStatusObj = this.getNextNearestSlot(this.parkingSlots)
    if (nextNearestStatusObj.status === true) {
      const carNumber: string = carInputString.split(" ")[1]
      const carColor: string = carInputString.split(" ")[2]
      if (!carNumber || !carColor)
        return "please Enter a valid car number and car Color"
      const car = new Car()
      car.create(carNumber, carColor)
      console.log("hey")

      console.log(nextNearestStatusObj.value)
      console.log("bye")

      // this.parkingSlots[Number(nextNearestStatusObj.value)].park(car)
      this.parkingSlots[Number(nextNearestStatusObj.value)].park(car)
      console.log("Afte parking", this.parkingSlots)

      return (
        "Allocated slot number:" +
        this.parkingSlots[Number(nextNearestStatusObj.value)].slotId
      )
    } else {
      return nextNearestStatusObj.value
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
    if (this.maxParkingSlots === 0) return "Please Create a parking lot"
    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (this.parkingSlots[i].slotId === slotNo) {
        this.parkingSlots[i].car = new Car()
        return "Slot number " + this.parkingSlots[i].slotId + " is free"
      }
    }
    return "the car is not parked "
  }

  getAllParkingStatus() {
    if (this.maxParkingSlots === 0) return ["Please Create a parking lot"]
    var arr: string[] = []

    arr.push("Slot No. Registration No. Color ")

    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (!this.parkingSlots[i].isEmpty()) {
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
    if (arr.length === 1) return ["sorry the parking lot is empty"]
    return arr
  }

  getSlotByCarNo(carNumber: string) {
    if (this.maxParkingSlots === 0) return "Please Create a parking lot"
    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (
        !this.parkingSlots[i].isEmpty() &&
        this.parkingSlots[i].car.carNumber === carNumber
      ) {
        return this.parkingSlots[i].slotId
      }
    }

    return "car is not parked"
  }

  getAllCarNumbersByColor(carColor: string) {
    if (this.maxParkingSlots === 0) return ["Please Create a parking lot"]
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
      ? carList
      : ["No car with the given color exist in the parking lot"]
  }
  getAllSlotsByCarColor(carColor: string) {
    if (this.maxParkingSlots === 0) return ["Please Create a parking lot"]
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
      ? slotList
      : ["No car with the given color exist in the parking lot"]
  }
}
