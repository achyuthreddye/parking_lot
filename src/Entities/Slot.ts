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
  unPark() {
    this.car.carColor = undefined
    this.car.carNumber = undefined
  }
  isEmpty() {
    return (
      !this.car ||
      this.car.carColor === undefined ||
      this.car.carNumber === undefined
    )
  }
}
