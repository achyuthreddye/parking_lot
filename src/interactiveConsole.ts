import * as readLine from "readline"
import { processUsercommands } from "./processUserCommands"

export function interactiveConsole(interactiveMode: boolean) {
  var prompts = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  })
  if (interactiveMode) {
    prompts.question("Input: ", function (data: string) {
      processUsercommands(data)
      interactiveConsole(interactiveMode)
    })
  }
}
