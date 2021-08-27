import {
  createParkingLot,
  getAllCarNumbersByColor,
  getAllParkingStatus,
  getAllSlotsByCarColor,
  getSlotByCarNo,
  parkCar,
  unParkCarBySlotNumber,
} from "./wrapper"

export function processUsercommands(input: string) {
  const userCommand: string = input.split(" ")[0]

  switch (userCommand) {
    case "create_parking_lot":
      console.log(createParkingLot(Number(input.split(" ")[1])))
      break
    case "park":
      console.log(parkCar(input))
      break
    case "leave":
      console.log(unParkCarBySlotNumber(Number(input.split(" ")[1])))
      break
    case "status":
      console.log(getAllParkingStatus())
      break
    case "registration_numbers_for_cars_with_colour":
      console.log(getAllCarNumbersByColor(input.split(" ")[1]))
      break
    case "slot_numbers_for_cars_with_colour":
      console.log(getAllSlotsByCarColor(input.split(" ")[1]))
      break
    case "slot_number_for_registration_number":
      console.log(getSlotByCarNo(input.split(" ")[1]))
      break
    case "quit":
      process.exit(0)
    default:
      console.log("Invalid command")
      break
  }
}
