import { ParkingLot } from "../src/Entities/ParkingLot"
import { Vehicle } from "../src/Entities/Vehicle"

describe("creating the Parking lot", () => {
  test("valid maximum no of floors and parking lot size given ,passes", () => {
    const createNewParkingLot = new ParkingLot(1, 4, 1, 2)
    const expectedParkingLot = {
      status: "success",
      noOfFloors: 1,
      noOfSlots: 4,
      totalNoOfSlots: 4,
    }

    expect(createNewParkingLot.getParkingLot()).toEqual(expectedParkingLot)
  })
  test("valid maximum no of floors and parking lot size given ,passes", () => {
    const createNewParkingLot = new ParkingLot(4, 4, 1, 2)
    const expectedParkingLot = {
      status: "success",
      noOfFloors: 4,
      noOfSlots: 4,
      totalNoOfSlots: 16,
    }

    expect(createNewParkingLot.getParkingLot()).toEqual(expectedParkingLot)
  })
})
const newParkingLot = new ParkingLot(2, 4)
describe("Creating a new Parking lot and parking the cars in the parking slots", () => {
  test("park the truck , should be parked", () => {
    const validCar = new Vehicle("KA40M8500", "white", "truck")
    const parkedSlot = newParkingLot.parkVehicle(validCar)
    expect(parkedSlot).toStrictEqual({
      status: "success",
      message: [0, 0],
    })
  })
  test("park the truck , should be parked in first", () => {
    const validCar = new Vehicle("KA40M8500", "white", "truck")
    const parkedSlot = newParkingLot.parkVehicle(validCar)
    expect(parkedSlot).toStrictEqual({
      status: "success",
      message: [1, 0],
    })
  })

  test("park the truck , should not be parked", () => {
    const validCar = new Vehicle("KA40M8501", "white", "truck")
    const parkedSlot = newParkingLot.parkVehicle(validCar)
    expect(parkedSlot).toStrictEqual({
      status: "failure",
      message: "ParkingLotFilled",
    })
  })

  test("park the bike , should be parked", () => {
    const validCar = new Vehicle("KA40M8502", "red", "bike")
    const parkedSlot = newParkingLot.parkVehicle(validCar)
    expect(parkedSlot).toStrictEqual({
      status: "success",
      message: [0, 1],
    })
  })
  test("park the bike , should be parked", () => {
    const validCar = new Vehicle("KA40M8503", "white", "bike")
    const parkedSlot = newParkingLot.parkVehicle(validCar)
    expect(parkedSlot).toStrictEqual({
      status: "success",
      message: [0, 2],
    })
  })
  test("park the bike  , should not be parked in first floor", () => {
    const validCar = new Vehicle("KA40M8504", "green", "bike")
    const parkedSlot = newParkingLot.parkVehicle(validCar)
    expect(parkedSlot).toStrictEqual({
      status: "success",
      message: [1, 1],
    })
  })
  test("park the bike  , should not be parked in second floor", () => {
    const validCar = new Vehicle("KA40M8504", "green", "bike")
    const parkedSlot = newParkingLot.parkVehicle(validCar)
    expect(parkedSlot).toStrictEqual({
      status: "success",
      message: [1, 2],
    })
  })
  test("park the car , should be parked", () => {
    const validCar = new Vehicle("KA40M8505", "red", "car")
    const parkedSlot = newParkingLot.parkVehicle(validCar)
    expect(parkedSlot).toStrictEqual({
      status: "success",
      message: [0, 3],
    })
  })
  test("park the car , should be parked", () => {
    const validCar = new Vehicle("KA40M8506", "red", "car")
    const parkedSlot = newParkingLot.parkVehicle(validCar)
    expect(parkedSlot).toStrictEqual({
      status: "success",
      message: [0, 4],
    })
  })

  test("unpark any vehicle, should not be unparked", () => {
    const unParkingStatus = newParkingLot.unParkVehicleBySlotNumber(0, 1)
    expect(unParkingStatus).toStrictEqual({
      status: "success",
      message: "VehicleUnParked",
    })
  })
  test("unpark any vehicle, should not be unparked", () => {
    const unParkingStatus = newParkingLot.unParkVehicleBySlotNumber(0, 1)
    expect(unParkingStatus).toStrictEqual({
      status: "failure",
      message: "vehicleNotParked",
    })
  })
})

describe("getting the parking lot status", () => {
  test("testing for the free slots in the parking lot", () => {
    const freeSlots = newParkingLot.getAllFreeSlots("car")

    expect(freeSlots).toStrictEqual([[], [3, 4]])
  })
  test("testing for the occupied slots in the parking lot", () => {
    const occupiedSlots = newParkingLot.getAllOccupiedSlots("car")

    expect(occupiedSlots).toStrictEqual([[3, 4], []])
  })
})
