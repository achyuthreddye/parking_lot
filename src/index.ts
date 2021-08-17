import { ParkingLot } from "./ParkingLot"
import * as readLine from "readline"
import * as fs from "fs"

const commandLineInputs = process.argv
let interactiveMode: boolean = false

const parkingLot = new ParkingLot()

if (commandLineInputs[commandLineInputs.length - 1].endsWith(".txt")) {
  interactiveMode = false
  fs.readFile(commandLineInputs[2], "utf-8", (err, data) => {
    if (err) console.log("error in reading file")
    const inputArray = data.split("\n")
    inputArray.forEach((item) => {
      processUsercommands(item)
    })
    process.exit(0)
  })
} else {
  interactiveMode = true
  interactiveConsole()
}

function interactiveConsole() {
  var prompts = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  })
  if (interactiveMode) {
    prompts.question("Input: ", function (data: string) {
      processUsercommands(data)
    })
  }
}

function processUsercommands(input: string) {
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
  }
  interactiveConsole()
}
