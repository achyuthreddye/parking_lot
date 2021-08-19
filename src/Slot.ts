import { Car } from "./Car"

export class Slot {
  constructor(slotId: number) {
    this.slotId = slotId
    this.car = new Car()
  }

  car: Car
  slotId: number

  park(carTobeParked: Car) {
    this.car = carTobeParked
  }
  unPark() {
    this.car = new Car()
  }
  isEmpty() {
    return this.car.carColor === undefined && this.car.carNumber === undefined
  }
}
