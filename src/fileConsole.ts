import { processUsercommands } from "./processUserCommands"
import * as fs from "fs"

export function fileConsole(commandLineInputs: string[]) {
  if (!fs.existsSync(commandLineInputs[2])) {
    return "Invalid file"
  }
  fs.readFile(commandLineInputs[2], "utf-8", (err, data) => {
    if (err) console.log("error in reading file")
    const inputArray = data.split("\n")
    inputArray.forEach((item) => {
      processUsercommands(item)
    })
    process.exit(0)
  })
}
