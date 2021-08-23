export class Car {
  carNumber: string | undefined
  carColor: string | undefined
  create(carNumber: string, carColor: string) {
    this.carNumber = carNumber
    this.carColor = carColor
    return this
  }
}
