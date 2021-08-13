import { Car } from "./Car"

export class Slot {
  constructor() {
    this.parkStatus = false
    this.car = new Car("", "")
  }
  parkStatus: boolean
  car: Car
}
