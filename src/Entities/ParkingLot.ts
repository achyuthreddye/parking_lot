import { Car } from "./Car"
import { Slot } from "./Slot"
export class ParkingLot {
  constructor(parkLotSize: number) {
    this.parkingSlots = new Array()
    for (let i = 0; i < parkLotSize; i++) {
      this.parkingSlots.push(new Slot(i + 1))
    }
  }

  parkingSlots: Slot[]

  getNextNearestSlot() {
    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (this.parkingSlots[i].isEmpty()) return { status: "success", value: i }
    }
    return { status: "failure", value: "ParkingLotFilled" }
  }

  parkCar(carObj: Car): { status: string; message: string | number } {
    const nextNearestStatusObj = this.getNextNearestSlot()

    if (nextNearestStatusObj.status === "success") {
      this.parkingSlots[Number(nextNearestStatusObj.value)].park(carObj)
      return {
        status: "success",
        message: this.parkingSlots[Number(nextNearestStatusObj.value)].slotId,
      }
    } else {
      return {
        status: "failure",
        message: "ParkingLotFilled",
      }
    }
  }

  unParkCarBySlotNumber(slotNo: number): {
    status: string
    message: string | number
  } {
    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (
        this.parkingSlots[i].isSlotSame(slotNo) &&
        !this.parkingSlots[i].isEmpty()
      ) {
        this.parkingSlots[i].unpark()
        return { status: "success", message: this.parkingSlots[i].slotId }
      }
    }
    return { status: "failure", message: "CarNotParked" }
  }

  getAllParkingStatus(): string[] {
    var arr: string[] = []

    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (!this.parkingSlots[i].isEmpty()) {
        arr.push(
          [
            this.parkingSlots[i].slotId,
            this.parkingSlots[i].car!.carNumber,
            this.parkingSlots[i].car!.carColor,
          ].toString()
        )
      }
    }
    return arr
  }

  getSlotByCarNo(carNumber: string): {
    status: string
    message: string | number
  } {
    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (
        !this.parkingSlots[i].isEmpty() &&
        this.parkingSlots[i].car!.isCarSameByCarNumber(carNumber)
      ) {
        return { status: "success", message: this.parkingSlots[i].slotId }
      }
    }

    return { status: "failure", message: "carNotParked" }
  }

  getAllCarNumbersByColor(carColor: string): {
    status: string
    message: string
    payload: string[]
  } {
    const carList: string[] = []

    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (
        !this.parkingSlots[i].isEmpty() &&
        this.parkingSlots[i].car!.isCarSameByCarColor(carColor)
      ) {
        carList.push(this.parkingSlots[i].car!.carNumber!)
      }
    }
    return carList.length > 1
      ? { status: "success", message: "", payload: carList }
      : { status: "failure", message: "NoCar", payload: carList }
  }
  getAllSlotsByCarColor(carColor: string): {
    status: string
    message: string
    payload: number[]
  } {
    const slotList: number[] = []
    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (
        !this.parkingSlots[i].isEmpty() &&
        this.parkingSlots[i].car!.isCarSameByCarColor(carColor)
      ) {
        slotList.push(this.parkingSlots[i].slotId)
      }
    }
    return slotList.length > 1
      ? { status: "success", payload: slotList, message: "" }
      : {
          status: "failure",
          message: "NoCar",
          payload: slotList,
        }
  }
}
