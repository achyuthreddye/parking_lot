import { ParkingLot } from "../src/Entities/ParkingLot"
import { Car } from "../src/Entities/Car"
import { Slot } from "../src/Entities/Slot"

describe("creating the Parking lot", () => {
  test("valid maximum parking lot size given ,passes", () => {
    const createNewParkingLot = new ParkingLot(4)
    const slot1 = new Slot(1)
    const slot2 = new Slot(2)
    const slot3 = new Slot(3)
    const slot4 = new Slot(4)
    expect(createNewParkingLot).toEqual({
      parkingSlots: [slot1, slot2, slot3, slot4],
    })
  })
})
const newParkingLot = new ParkingLot(6)
describe("Creating a new Parking lot and parking the cars in the parking slots", () => {
  test("park the car 1 , should be parked", () => {
    const validCar = new Car()
    validCar.create("KA40M8500", "white")
    const parkedSlot = newParkingLot.parkCar(validCar)
    expect(parkedSlot).toStrictEqual({
      status: "success",
      message: 1,
    })
  })
  test("park the car 2 , should be parked", () => {
    const validCar = new Car()
    validCar.create("KA40M8501", "red")
    const parkedSlot = newParkingLot.parkCar(validCar)
    expect(parkedSlot).toStrictEqual({
      status: "success",
      message: 2,
    })
  })
  test("park the car 3 , should be parked", () => {
    const validCar = new Car()
    validCar.create("KA40M8502", "white")
    const parkedSlot = newParkingLot.parkCar(validCar)
    expect(parkedSlot).toStrictEqual({
      status: "success",
      message: 3,
    })
  })
  test("park the car 4 , should be parked", () => {
    const validCar = new Car()
    validCar.create("KA40M8503", "green")
    const parkedSlot = newParkingLot.parkCar(validCar)
    expect(parkedSlot).toStrictEqual({
      status: "success",
      message: 4,
    })
  })
  test("park the car 5 , should be parked", () => {
    const validCar = new Car()
    validCar.create("KA40M8504", "white")
    const parkedSlot = newParkingLot.parkCar(validCar)
    expect(parkedSlot).toStrictEqual({
      status: "success",
      message: 5,
    })
  })
  test("park the car 6 , should be parked", () => {
    const validCar = new Car()
    validCar.create("KA40M8505", "blue")
    const parkedSlot = newParkingLot.parkCar(validCar)
    expect(parkedSlot).toStrictEqual({
      status: "success",
      message: 6,
    })
  })
  test("park the car 7, should not be parked", () => {
    const validCar = new Car()
    validCar.create("KA40M8506", "blue")
    const parkedSlot = newParkingLot.parkCar(validCar)
    expect(parkedSlot).toStrictEqual({
      status: "failure",
      message: "ParkingLotFilled",
    })
  })
  test("unpark the car that would return the slot id which freed", () => {
    const unparkStatus = newParkingLot.unParkCarBySlotNumber(2)
    expect(unparkStatus).toStrictEqual({
      status: "success",
      message: 2,
    })
  })
  test("unpark the car that doesnt exist in the slot  , should return an  error message", () => {
    const parkedSlot = newParkingLot.unParkCarBySlotNumber(9)
    expect(parkedSlot).toStrictEqual({
      status: "failure",
      message: "CarNotParked",
    })
  })
})
describe("Checking for the next nearest spot in the parking lot", () => {
  test("should return valid empty slot in the parking lot containing empty slots", () => {
    const nextParkingLotObj = newParkingLot.getNextNearestSlot(
      newParkingLot.parkingSlots
    )
    expect(nextParkingLotObj).toStrictEqual({
      status: true,
      value: 1,
    })
  })
  test("should park a car ", () => {
    const carObj = new Car()
    carObj.create("MH01M6787", "purple")
    const parkCarStatus = newParkingLot.parkCar(carObj)
    expect(parkCarStatus).toStrictEqual({
      status: "success",
      message: 2,
    })
  })
  test("should return parkinglot filles status", () => {
    const nextParkingLotObj = newParkingLot.getNextNearestSlot(
      newParkingLot.parkingSlots
    )
    expect(nextParkingLotObj).toStrictEqual({
      status: false,
      value: "Parking lot is completely filled",
    })
  })
})
describe("checking for the slot number based on the car registration number", () => {
  test("should return the car number", () => {
    expect(newParkingLot.getSlotByCarNo("KA40M8505")).toStrictEqual({
      status: "success",
      message: 6,
    })
  })
  test("should return the car not parkied status", () => {
    expect(newParkingLot.getSlotByCarNo("KA40M8599")).toStrictEqual({
      status: "failure",
      message: "carNotParked",
    })
  })
})

describe("checking for the car numbers based on the car registration numbers", () => {
  test("should return all the cars with the given color", () => {
    expect(newParkingLot.getAllCarNumbersByColor("white")).toStrictEqual({
      status: "success",
      message: "",
      payload: ["KA40M8500", "KA40M8502", "KA40M8504"],
    })
  })
  test("should return an empty array of cars with invalid car color given", () => {
    expect(
      newParkingLot.getAllCarNumbersByColor("invalidColor|colorNotInParkingLot")
    ).toStrictEqual({ status: "failure", message: "NoCar", payload: [] })
  })
})

describe("Checking for the slot numbers based on the car color", () => {
  test("Should return all the slots with the given color", () => {
    expect(newParkingLot.getAllSlotsByCarColor("white")).toStrictEqual({
      status: "success",
      message: "",
      payload: [1, 3, 5],
    })
  })
  test("should return an empty array and failure mesage for the invalid color", () => {
    expect(
      newParkingLot.getAllSlotsByCarColor("InvalidCarColor")
    ).toStrictEqual({
      status: "failure",
      message: "NoCar",
      payload: [],
    })
  })
})
describe("checking for the complete parking Slot status", () => {
  test("should return all the alloted parking slots", () => {
    expect(newParkingLot.getAllParkingStatus()).toStrictEqual([
      "1,KA40M8500,white",
      "2,MH01M6787,purple",
      "3,KA40M8502,white",
      "4,KA40M8503,green",
      "5,KA40M8504,white",
      "6,KA40M8505,blue",
    ])
  })
})
