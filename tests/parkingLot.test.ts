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
      expect(newParkingLot.getNextNearestSlot(currentParkingArray)).toEqual({
        status: false,
        value: "Please enter the valid current parking array",
      })
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
        value: "Parking lot is completely filled",
      })
    })
  })

  describe("Creating a new Parking lot and parking the cars in the parking slots", () => {
    const newParkingLot = new ParkingLot()

    test("create the new parking lot", () => {
      const totalParkings = newParkingLot.createParkingLot(6)
      expect(totalParkings).toEqual([null, null, null, null, null, null])
    })
    test("park the car 1 , should be parked", () => {
      const parkedSlot = newParkingLot.parkCar({
        carNumber: "KA40M8500",
        carColor: "white",
      })
      expect(parkedSlot).toBe(1)
    })
    test("park the car 2 , should be parked", () => {
      const parkedSlot = newParkingLot.parkCar({
        carNumber: "KA40M8501",
        carColor: "red",
      })
      expect(parkedSlot).toBe(2)
    })
    test("park the car 3 , should be parked", () => {
      const parkedSlot = newParkingLot.parkCar({
        carNumber: "KA40M8502",
        carColor: "white",
      })
      expect(parkedSlot).toBe(3)
    })
    test("park the car 4 , should be parked", () => {
      const parkedSlot = newParkingLot.parkCar({
        carNumber: "KA40M8503",
        carColor: "green",
      })
      expect(parkedSlot).toBe(4)
    })
    test("park the car 5 , should be parked", () => {
      const parkedSlot = newParkingLot.parkCar({
        carNumber: "KA40M8504",
        carColor: "white",
      })
      expect(parkedSlot).toBe(5)
    })
    test("park the car 6 , should be parked", () => {
      const parkedSlot = newParkingLot.parkCar({
        carNumber: "KA40M8505",
        carColor: "blue",
      })
      expect(parkedSlot).toBe(6)
    })
    test("park the car 7, should be parked", () => {
      const parkedSlot = newParkingLot.parkCar({
        carNumber: "KA40M8506",
        carColor: "blue",
      })
      expect(parkedSlot).toBe("Parking lot is completely filled")
    })
  })
})

//TODO: car input data sanitization has to be performed
