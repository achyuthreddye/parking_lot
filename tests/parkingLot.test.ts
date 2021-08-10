// const Parking = require("../src/ParkingLot")
const ParkingLot = require("../dist/ParkingLot")
// ParkingLot

describe("Testing all the methods in the praking lot classes", function () {
  describe("creating the Parking lot", () => {
    test("No maximum parking lot size given ,passes", () => {
      const newParkingLot = new ParkingLot()
      expect(newParkingLot.createParkingLot()).toEqual(
        "please enter the valid to allot the no of parking slots"
      )
    })
    test("Negative maximum parking lot size given ,passes", () => {
      const newParkingLot = new ParkingLot()
      expect(newParkingLot.createParkingLot(-45)).toEqual(
        "please enter the valid to allot the no of parking slots"
      )
    })
    test("valid maximum parking lot size given ,passes", () => {
      const newParkingLot = new ParkingLot()
      expect(newParkingLot.createParkingLot(4)).toEqual([
        null,
        null,
        null,
        null,
      ])
    })
  })
})

// the number of parking slots entered should be more than zero
