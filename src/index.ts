import { ParkingLot } from "./Entities/ParkingLot"
import { interactiveConsole } from "./interactiveConsole"
import { fileConsole } from "./fileConsole"

const commandLineInputs = process.argv
let interactiveMode: boolean = false

const parkingLot = new ParkingLot()

if (commandLineInputs[commandLineInputs.length - 1].endsWith(".txt")) {
  fileConsole(parkingLot, commandLineInputs)
} else {
  interactiveMode = true
  interactiveConsole(interactiveMode, parkingLot)
}
