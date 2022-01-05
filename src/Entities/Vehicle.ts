export class Vehicle {
  constructor(
    vehicleNumber: string,
    vehicleColor: string,
    vehicleType: string
  ) {
    this.vehicleNumber = vehicleNumber
    this.vehicleColor = vehicleColor
    this.vehicleType = vehicleType
  }
  vehicleNumber: string
  vehicleColor: string
  vehicleType: string

  // create(carNumber: string, carColor: string) {
  //   this.carNumber = carNumber
  //   this.carColor = carColor
  //   return this
  // }

  isVehicleSameByRegNumber(carNumberTobeChecked: string) {
    return (
      this.vehicleNumber.toLowerCase() === carNumberTobeChecked.toLowerCase()
    )
  }
  isVehicleSameByColor(carColorTobeChecked: string) {
    return this.vehicleColor.toLowerCase() === carColorTobeChecked.toLowerCase()
  }
}
