import {
  createParkingLot,
  parkVehicle,
  unParkVehicleBySlotNumber,
} from "./wrapper"

export function processUsercommands(input: string) {
  const userCommand: string = input.split(" ")[0]

  switch (userCommand) {
    case "create_parking_lot":
      console.log(
        createParkingLot(
          Number(input.split(" ")[1]),
          Number(input.split(" ")[2])
        )
      )
      break
    case "park":
      console.log(parkVehicle(input))
      break
    case "leave":
      console.log(unParkVehicleBySlotNumber(input))
      break
    case "quit":
      process.exit(0)
    default:
      console.log("Invalid command")
      break
  }
}
