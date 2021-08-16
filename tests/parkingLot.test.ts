import { ParkingLot } from "../src/ParkingLot"

describe("creating the Parking lot", () => {
  test("Negative maximum parking lot size given ,passes", () => {
    const newParkingLot = new ParkingLot()
    expect(newParkingLot.createParkingLot(-45)).toEqual(
      "please enter the valid number to allot the maximum no of parking slots"
    )
  })
  test("valid maximum parking lot size given ,passes", () => {
    const newParkingLot = new ParkingLot()
    expect(newParkingLot.createParkingLot(4)).toEqual(
      "Created a parking lot with 4 slots"
    )
  })
})
