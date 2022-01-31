import { Slot } from "./Slot"

export class ParkingFloor {
  constructor(
    noOfSlots: number,
    noOfTrucksOnFloor: number,
    noOfBikesOnFloor: number
  ) {
    this.parkingFloor = new Array()

    for (let i = 0; i < noOfTrucksOnFloor; i++) {
      this.parkingFloor.push(new Slot(i + 1, "truck"))
    }
    for (let j = noOfTrucksOnFloor; j <= noOfBikesOnFloor; j++) {
      this.parkingFloor.push(new Slot(j + 1, "bike"))
    }
    for (let k = noOfBikesOnFloor; k < noOfSlots; k++) {
      this.parkingFloor.push(new Slot(k + 1, "car"))
    }
  }
  parkingFloor: Slot[]
  //FIXME: change the for loop
  getNextNearestSlotInFloor(vehicleTypeToCheck: string) {
    for (let slotId = 0; slotId < this.parkingFloor.length; slotId++) {
      if (
        !this.parkingFloor[slotId].isSlotAlloted() &&
        this.parkingFloor[slotId].isSlotSameType(vehicleTypeToCheck)
      )
        return { status: "success", value: slotId }
    }
    return { status: "failure", value: "ParkingFloorFilled" }
  }

  getFreeSlotsBasedOnVehicleType(vehicleTypeToCheck: string) {
    const freeSlotIds: number[] = []
    for (let slotId = 0; slotId < this.parkingFloor.length; slotId++) {
      if (
        !this.parkingFloor[slotId].isSlotAlloted() &&
        this.parkingFloor[slotId].isSlotSameType(vehicleTypeToCheck)
      ) {
        freeSlotIds.push(slotId)
      }
    }
    return freeSlotIds
  }
}
