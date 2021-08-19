import { ParkingLot } from "./Entities/ParkingLot"
import { processUsercommands } from "./processUserCommands"
import * as fs from "fs"

export function fileConsole(
  parkingLot: ParkingLot,
  commandLineInputs: string[]
) {
  fs.readFile(commandLineInputs[2], "utf-8", (err, data) => {
    if (err) console.log("error in reading file")
    const inputArray = data.split("\n")
    inputArray.forEach((item) => {
      processUsercommands(item, parkingLot)
    })
    process.exit(0)
  })
}