import { Car } from "./Car"

export class Slot {
  constructor(slotId: number) {
    this.slotId = slotId
  }

  car: Car
  slotId: number

  park(carTobeParked: Car) {
    this.car = carTobeParked
  }
  unpark() {
    this.car = new Car()
  }

  isEmpty() {
    return (
      !this.car ||
      this.car.carColor === undefined ||
      this.car.carNumber === undefined
    )
  }
}
