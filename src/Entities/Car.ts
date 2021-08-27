export class Car {
  carNumber: string
  carColor: string

  create(carNumber: string, carColor: string) {
    this.carNumber = carNumber
    this.carColor = carColor
    return this
  }
  // public get carNumber() {
  //   return this._carNumber
  // }
  // public get carColor() {
  //   return this._carColor
  // }

  isCarSame(carNumberTobeChecked: string) {
    return this.carNumber.toLowerCase() === carNumberTobeChecked.toLowerCase()
  }
}
