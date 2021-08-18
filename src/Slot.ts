import { Car } from "./Car"

export class Slot {
  constructor(slotId: number) {
    this.parkStatus = false
    this.slotId = slotId
  }
  parkStatus: boolean
  car: Car
  slotId: number

  parkCar(carTobeParked: Car) {
    this.car = carTobeParked
  }
  unParkCar() {
    // this.car = null
  }
}
