import { ParkingLot } from "../src/Entities/ParkingLot"

describe("creating the Parking lot", () => {
  test("Negative maximum parking lot size given ,passes", () => {
    const newParkingLot = new ParkingLot()
    expect(newParkingLot.createParkingLot(-45)).toEqual({
      status: "failure",
      message: "Invalid Input",
    })
  })
  test("valid maximum parking lot size given ,passes", () => {
    const newParkingLot = new ParkingLot()
    expect(newParkingLot.createParkingLot(4)).toEqual({
      status: "success",
      message: 4,
    })
  })
})
