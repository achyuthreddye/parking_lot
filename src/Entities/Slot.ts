import { Car } from "./Car"

export class Slot {
  constructor(slotId: number) {
    this.slotId = slotId
  }

  car: Car | null
  slotId: number

  park(carTobeParked: Car) {
    this.car = carTobeParked
  }
  unpark() {
    this.car = null
  }
  isSlotSame(slotNo: number) {
    return this.slotId === slotNo
  }

  isEmpty() {
    return (
      !this.car ||
      this.car.carColor === undefined ||
      this.car.carNumber === undefined
    )
  }
}
