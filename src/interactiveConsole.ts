import * as readLine from "readline"
import { ParkingLot } from "./Entities/ParkingLot"
import { processUsercommands } from "./processUserCommands"

export function interactiveConsole(
  interactiveMode: boolean,
  parkingLot: ParkingLot
) {
  var prompts = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  })
  if (interactiveMode) {
    prompts.question("Input: ", function (data: string) {
      processUsercommands(data, parkingLot)
      interactiveConsole(interactiveMode, parkingLot)
    })
  }
}
