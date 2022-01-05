import { Vehicle } from "./Vehicle"

export class Slot {
  constructor(slotId: number) {
    this.slotId = slotId
  }

  vehicle: Vehicle | null
  slotId: number

  allot(vehicleTobeParked: Vehicle) {
    this.vehicle = vehicleTobeParked
  }
  unallot() {
    this.vehicle = null
  }
  isSlotSame(slotNo: number) {
    return this.slotId === slotNo
  }

  isEmpty() {
    //FIXME: change this to getters
    return (
      !this.vehicle ||
      this.vehicle.vehicleColor === undefined ||
      this.vehicle.vehicleNumber === undefined
    )
  }
}
