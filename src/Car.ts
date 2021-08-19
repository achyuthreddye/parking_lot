export class Car {
  carNumber: string
  carColor: string
  create(carNumber: string, carColor: string) {
    this.carNumber = carNumber
    this.carColor = carColor
    return this
  }
}
