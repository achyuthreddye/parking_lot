export class Car {
  carNumber: string
  carColor: string
  createCar(carNumber: string, carColor: string) {
    this.carNumber = carNumber
    this.carColor = carColor
    return this
  }
}
