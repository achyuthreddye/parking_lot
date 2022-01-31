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

  isVehicleSameByRegNumber(carNumberTobeChecked: string) {
    return (
      this.vehicleNumber.toLowerCase() === carNumberTobeChecked.toLowerCase()
    )
  }
}
