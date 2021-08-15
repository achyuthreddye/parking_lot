import { Car } from "./Car"

export class Slot {
  constructor(slotId: number) {
    this.parkStatus = false
    this.car = new Car("", "")
    this.slotId = slotId
  }
  parkStatus: boolean
  car: Car
  slotId: number
}
