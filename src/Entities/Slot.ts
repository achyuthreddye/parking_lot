import { Vehicle } from "./Vehicle"

export class Slot {
  constructor(slotId: number, slotType: string) {
    this.slotId = slotId
    this.slotType = slotType
  }

  vehicle: Vehicle | null
  isParked: boolean = false
  slotId: number
  slotType: string

  allot(vehicleTobeParked: Vehicle) {
    this.isParked = true
    this.vehicle = vehicleTobeParked
  }

  unallot() {
    this.isParked = false
    this.vehicle = null
  }

  isSlotSameType(slotTypeTobChecked: string) {
    return this.slotType.toLowerCase() === slotTypeTobChecked.toLowerCase()
  }

  isSlotSame(slotNo: number) {
    return this.slotId === slotNo
  }

  isSlotAlloted() {
    return this.isParked
  }
}
