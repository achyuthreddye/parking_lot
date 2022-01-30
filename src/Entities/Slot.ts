import { Vehicle } from "./Vehicle"

export class Slot {
  constructor(slotId: number, slotType: string) {
    this.slotId = slotId
    this.slotType = slotType
  }

  vehicle: Vehicle | null
  parked: boolean = false
  slotId: number
  slotType: string

  allot(vehicleTobeParked: Vehicle) {
    this.parked = true
    this.vehicle = vehicleTobeParked
  }

  unallot() {
    this.parked = false
    this.vehicle = null
  }

  isSlotSameType(slotTypeTobChecked: string) {
    return this.slotType.toLowerCase() === slotTypeTobChecked.toLowerCase()
  }

  isSlotSame(slotNo: number) {
    return this.slotId === slotNo
  }

  isEmpty() {
    return this.parked
  }
}
