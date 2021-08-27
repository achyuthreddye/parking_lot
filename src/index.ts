import { interactiveConsole } from "./interactiveConsole"
import { fileConsole } from "./fileConsole"
import * as events from "events"

events.EventEmitter.defaultMaxListeners = 0
const commandLineInputs = process.argv
let interactiveMode: boolean = false

if (commandLineInputs[commandLineInputs.length - 1].endsWith(".txt")) {
  fileConsole(commandLineInputs)
} else {
  interactiveMode = true
  interactiveConsole(interactiveMode)
}
// TODO: Update the tests
// TODO: create encapsulation where ever needed or accessing the stuff
// TODO: testcases for wrapper
