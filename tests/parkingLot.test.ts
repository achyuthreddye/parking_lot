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
  describe("checking for the getting the nearest parking lot in the given parking array", () => {
    test("if the current parking array is not valid, passes", () => {
      const newParkingLot = new ParkingLot()
      const currentParkingArray = []
      expect(newParkingLot.getNextNearestSlot(currentParkingArray)).toEqual(
        "Please enter the valid current parking array"
      )
    })
    test("valid current parking array is valid, passes", () => {
      const newParkingLot = new ParkingLot()
      const currentParkingArray = ["occupied", "occupied", null, "occupied"]
      expect(newParkingLot.getNextNearestSlot(currentParkingArray)).toEqual({
        status: true,
        value: 2,
      })
    })
    test("valid current parking array is valid and no empty spaces, passes", () => {
      const newParkingLot = new ParkingLot()
      const currentParkingArray = [
        "occupied",
        "occupied",
        "occupied",
        "occupied",
      ]
      expect(newParkingLot.getNextNearestSlot(currentParkingArray)).toEqual({
        status: false,
      })
    })
  })
})

// the number of parking slots entered should be more than zero
