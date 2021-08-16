import { ParkingLot } from "./ParkingLot"
import * as readLine from "readline"

const parkingLot = new ParkingLot()
// TODO: Interactive mode or read from the file
let interactiveMode: boolean = true

interactiveConsole()

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
      const parkingStatus = parkingLot.createParkingLot(
        Number(input.split(" ")[1])
      )
      console.log(parkingStatus)
  }
}
// processUsercomands()
