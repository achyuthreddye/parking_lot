export class Car {
  carNumber: string
  carColor: string

  create(carNumber: string, carColor: string) {
    this.carNumber = carNumber
    this.carColor = carColor
    return this
  }

  isCarSameByCarNumber(carNumberTobeChecked: string) {
    return this.carNumber.toLowerCase() === carNumberTobeChecked.toLowerCase()
  }
  isCarSameByCarColor(carColorTobeChecked: string) {
    return this.carColor.toLowerCase() === carColorTobeChecked.toLowerCase()
  }
}
