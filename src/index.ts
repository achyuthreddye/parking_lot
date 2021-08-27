import { interactiveConsole } from "./interactiveConsole"
import { fileConsole } from "./fileConsole"
import * as events from "events"

events.EventEmitter.defaultMaxListeners = 0
const commandLineInputs = process.argv
let interactiveMode: boolean = false

if (commandLineInputs[commandLineInputs.length - 1].endsWith(".txt")) {
  const filereadStatus = fileConsole(commandLineInputs)
  if (filereadStatus === "Invalid file")
    console.log(
      "file doesn't exists Please enter the valid filename. sing ./fileInputs.txt is encouraged"
    )
} else {
  interactiveMode = true
  interactiveConsole(interactiveMode)
}
