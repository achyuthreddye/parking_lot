import { Vehicle } from "./Vehicle"
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

  parkVehicle(vehicleObj: Vehicle): {
    status: string
    message: string | number
  } {
    const nextNearestStatusObj = this.getNextNearestSlot()

    if (nextNearestStatusObj.status === "success") {
      this.parkingSlots[Number(nextNearestStatusObj.value)].allot(vehicleObj)
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

  unParkVehicleBySlotNumber(slotNo: number): {
    status: string
    message: string | number
  } {
    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (
        this.parkingSlots[i].isSlotSame(slotNo) &&
        !this.parkingSlots[i].isEmpty()
      ) {
        this.parkingSlots[i].unallot()
        return { status: "success", message: this.parkingSlots[i].slotId }
      }
    }
    return { status: "failure", message: "vehicleNotParked" }
  }

  getAllParkingStatus(): string[] {
    var arr: string[] = []

    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (!this.parkingSlots[i].isEmpty()) {
        //FIXME: change this to the getters
        arr.push(
          [
            this.parkingSlots[i].slotId,
            this.parkingSlots[i].vehicle!.vehicleNumber,
            this.parkingSlots[i].vehicle!.vehicleColor,
          ].toString()
        )
      }
    }
    return arr
  }

  getSlotByRegNo(regNumber: string): {
    status: string
    message: string | number
  } {
    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (
        !this.parkingSlots[i].isEmpty() &&
        this.parkingSlots[i].vehicle!.isVehicleSameByRegNumber(regNumber)
      ) {
        return { status: "success", message: this.parkingSlots[i].slotId }
      }
    }

    return { status: "failure", message: "vehicleNotParked" }
  }

  getAllVehicleNumbersByColor(vehicleColor: string): {
    status: string
    message: string
    payload: string[]
  } {
    const vehicleList: string[] = []

    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (
        !this.parkingSlots[i].isEmpty() &&
        this.parkingSlots[i].vehicle!.isVehicleSameByColor(vehicleColor)
      ) {
        vehicleList.push(this.parkingSlots[i].vehicle!.vehicleNumber!)
      }
    }
    return vehicleList.length > 1
      ? { status: "success", message: "", payload: vehicleList }
      : { status: "failure", message: "NoVehicle", payload: vehicleList }
  }
  getAllSlotsByVehicleColor(vehicleColor: string): {
    status: string
    message: string
    payload: number[]
  } {
    const slotList: number[] = []
    for (let i = 0; i < this.parkingSlots.length; i++) {
      if (
        !this.parkingSlots[i].isEmpty() &&
        this.parkingSlots[i].vehicle!.isVehicleSameByColor(vehicleColor)
      ) {
        slotList.push(this.parkingSlots[i].slotId)
      }
    }
    return slotList.length > 1
      ? { status: "success", payload: slotList, message: "" }
      : {
          status: "failure",
          message: "NoVehicle",
          payload: slotList,
        }
  }
}
