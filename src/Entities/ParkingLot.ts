import { Vehicle } from "./Vehicle"
import { ParkingFloor } from "./ParkingFloor"
export class ParkingLot {
  constructor(
    noOfFloors: number,
    noOfSlots: number,
    noofTrucksOnFloor: number = 1,
    noOfBikesOnFloor: number = 2
  ) {
    this.noOfFloors = noOfFloors
    this.noOfSlots = noOfSlots
    this.parkingLot = new Array()
    for (let i = 0; i < this.noOfFloors; i++) {
      this.parkingLot.push(
        new ParkingFloor(noOfSlots, noofTrucksOnFloor, noOfBikesOnFloor)
      )
    }
  }

  parkingLot: ParkingFloor[]
  noOfFloors: number
  noOfSlots: number

  public getParkingLot() {
    return {
      status: "success",
      noOfFloors: this.noOfFloors,
      noOfSlots: this.noOfSlots,
      totalNoOfSlots: this.noOfFloors * this.noOfSlots,
    }
  }

  getNextNearestSlot(vehicleTypeToCheck: string) {
    for (let i = 0; i < this.noOfFloors; i++) {
      let parkingStatus =
        this.parkingLot[i].getNextNearestSlotInFloor(vehicleTypeToCheck)
      if (parkingStatus.status == "success") {
        return {
          status: "success",
          parkingFloor: i,
          parkingSlot: Number(parkingStatus.value),
        }
      }
    }
    return {
      status: "failure",
      message: "NoSlotsAvailabale",
    }
  }

  parkVehicle(vehicleObj: Vehicle): {
    status: string
    message: string[] | number[] | string
  } {
    const nextNearestStatusObj = this.getNextNearestSlot(vehicleObj.vehicleType)

    if (nextNearestStatusObj.status == "success") {
      this.parkingLot[nextNearestStatusObj.parkingFloor!].parkingFloor[
        nextNearestStatusObj.parkingSlot!
      ].allot(vehicleObj)

      return {
        status: "success",
        message: [
          nextNearestStatusObj.parkingFloor!,
          nextNearestStatusObj.parkingSlot!,
        ],
      }
    } else {
      return {
        status: "failure",
        message: "ParkingLotFilled",
      }
    }
  }

  unParkVehicleBySlotNumber(
    floorNo: number,
    slotNo: number
  ): {
    status: string
    message: string | number
  } {
    if (this.parkingLot[floorNo]!.parkingFloor[slotNo].isSlotAlloted()) {
      this.parkingLot[floorNo].parkingFloor[slotNo].unallot()
      return { status: "success", message: "VehicleUnParked" }
    }

    return { status: "failure", message: "vehicleNotParked" }
  }

  getAllFreeSlots(vehicleType: string) {
    var freeSlots = []

    for (let i = 0; i < this.noOfFloors; i++) {
      freeSlots.push(
        this.parkingLot[i].getFreeSlotsBasedOnVehicleType(vehicleType)
      )
    }

    return freeSlots
  }
}
