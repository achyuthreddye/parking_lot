import { ParkingLot } from "./Entities/ParkingLot"
import { processUsercommands } from "./processUserCommands"
import * as fs from "fs"

export function fileConsole(
  parkingLot: ParkingLot,
  commandLineInputs: string[]
) {
  if (!fs.existsSync(commandLineInputs[2])) {
    console.log(
      "file doesn't exists Please enter the valid filename. Using ./fileInputs.txt is encouraged"
    )
    return
  }
  fs.readFile(commandLineInputs[2], "utf-8", (err, data) => {
    if (err) console.log("error in reading file")
    const inputArray = data.split("\n")
    inputArray.forEach((item) => {
      processUsercommands(item, parkingLot)
    })
    process.exit(0)
  })
}
