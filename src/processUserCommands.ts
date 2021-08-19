import { ParkingLot } from "./Entities/ParkingLot"

export function processUsercommands(input: string, parkingLot: ParkingLot) {
  const userCommand: string = input.split(" ")[0]

  switch (userCommand) {
    case "create_parking_lot":
      console.log(parkingLot.createParkingLot(Number(input.split(" ")[1])))
      break
    case "park":
      console.log(parkingLot.parkCar(input))
      break
    case "leave":
      console.log(parkingLot.unParkCarBySlotNumber(Number(input.split(" ")[1])))
      break
    case "status":
      const parkedCarsArray: string[] = parkingLot.getAllParkingStatus()
      console.log(parkedCarsArray.join("\n"))
      break
    case "registration_numbers_for_cars_with_colour":
      console.log(
        parkingLot.getAllCarNumbersByColor(input.split(" ")[1]).join("\n")
      )
      break
    case "slot_numbers_for_cars_with_colour":
      console.log(
        parkingLot.getAllSlotsByCarColor(input.split(" ")[1]).join("\n")
      )
      break
    case "slot_number_for_registration_number":
      console.log(parkingLot.getSlotByCarNo(input.split(" ")[1]))
      break
    case "quit":
      process.exit(0)
    default:
      console.log("Invalid command")
      break
  }
}
