import { ParkingLot } from "./Entities/ParkingLot"
import {
  createParkingLot,
  getAllCarNumbersByColor,
  getAllParkingStatus,
  getAllSlotsByCarColor,
  getSlotByCarNo,
  parkCar,
  unParkCarBySlotNumber,
} from "./wrapper"

export function processUsercommands(input: string, parkingLot: ParkingLot) {
  const userCommand: string = input.split(" ")[0]

  switch (userCommand) {
    case "create_parking_lot":
      createParkingLot(parkingLot, Number(input.split(" ")[1]))

      break
    case "park":
      parkCar(parkingLot, input)
      break
    case "leave":
      unParkCarBySlotNumber(parkingLot, Number(input.split(" ")[1]))
      break
    case "status":
      getAllParkingStatus(parkingLot)
      break
    case "registration_numbers_for_cars_with_colour":
      getAllCarNumbersByColor(input.split(" ")[1], parkingLot)
      break
    case "slot_numbers_for_cars_with_colour":
      getAllSlotsByCarColor(input.split(" ")[1], parkingLot)

      break
    case "slot_number_for_registration_number":
      getSlotByCarNo(input.split(" ")[1], parkingLot)
      break
    case "quit":
      process.exit(0)
    default:
      console.log("Invalid command")
      break
  }
}
