import { ParkingLot } from "../src/Entities/ParkingLot"
import { Car } from "../src/Entities/Car"
import { Slot } from "../src/Entities/Slot"

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

describe("Creating a new Parking lot and parking the cars in the parking slots", () => {
  const newParkingLot = new ParkingLot()

  test("create the new parking lot", () => {
    const totalParkings = newParkingLot.createParkingLot(6)
    expect(totalParkings).toEqual({
      status: "success",
      message: 6,
    })
  })
  test("send the invalid car details , should throw an error", () => {
    const parkedSlot = newParkingLot.parkCar("park  white")
    expect(parkedSlot).toStrictEqual({
      status: "failure",
      message: "InvalidInput",
    })
  })
  test("park the car 1 , should be parked", () => {
    const parkedSlot = newParkingLot.parkCar("park KA40M8500 white")
    expect(parkedSlot).toStrictEqual({
      status: "success",
      message: 1,
    })
  })
  test("park the car 2 , should be parked", () => {
    const parkedSlot = newParkingLot.parkCar("park KA40M8501 red")
    expect(parkedSlot).toStrictEqual({
      status: "success",
      message: 2,
    })
  })
  test("park the car 3 , should be parked", () => {
    const parkedSlot = newParkingLot.parkCar("park KA40M8502 white")
    expect(parkedSlot).toStrictEqual({
      status: "success",
      message: 3,
    })
  })
  test("park the car 4 , should be parked", () => {
    const parkedSlot = newParkingLot.parkCar("park KA40M8503 green")
    expect(parkedSlot).toStrictEqual({
      status: "success",
      message: 4,
    })
  })
  test("park the car 5 , should be parked", () => {
    const parkedSlot = newParkingLot.parkCar("park KA40M8504 white")
    expect(parkedSlot).toStrictEqual({
      status: "success",
      message: 5,
    })
  })
  test("park the car 6 , should be parked", () => {
    const parkedSlot = newParkingLot.parkCar("park KA40M8505 blue")
    expect(parkedSlot).toStrictEqual({
      status: "success",
      message: 6,
    })
  })
  test("park the car 7, should not be parked", () => {
    const parkedSlot = newParkingLot.parkCar("park KA40M8506 blue")
    expect(parkedSlot).toStrictEqual({
      status: "failure",
      message: "ParkingLotFilled",
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

const car1 = new Car()
car1.create("white", "KA40M8500")

const slot1 = new Slot(1)
slot1.car = car1

const car2 = new Car()
car2.create("green", "KA40M8501")
const slot2 = new Slot(2)
slot2.car = car2

const car3 = new Car()
const slot3 = new Slot(3)
slot3.car = car3

const car4 = new Car()
car4.create("red", "KA40M8502")
const slot4 = new Slot(4)
slot1.car = car4

const slot5 = new Slot(5)
const car5 = new Car()
car5.create("white", "KA40M8502")
slot5.car = car5

const parkingLotWithEmptySpace: Slot[] = [slot1, slot2, slot3, slot4]

// const parkingLotWithOutEmptySpace: Slot[] = [slot1, slot2, slot5, slot4]

describe("getting the nearest parking lot in the given parking array returns the index of the parking lot", () => {
  test("invalid current parking array is given", () => {
    const newParkingLot = new ParkingLot()
    let currentParkingArray: Array<Slot>
    currentParkingArray = []
    expect(newParkingLot.getNextNearestSlot(currentParkingArray)).toEqual({
      status: false,
      value: "Please enter the valid current parking array",
    })
  })
  test("valid current parking array is given", () => {
    const newParkingLot = new ParkingLot()

    let currentParkingArray: Array<Slot> = parkingLotWithEmptySpace
    expect(newParkingLot.getNextNearestSlot(currentParkingArray)).toEqual({
      status: true,
      value: 2,
    })
  })
})
//  starts here

const newParkingLot = new ParkingLot()
newParkingLot.createParkingLot(6)
newParkingLot.parkCar("park KA40M8501 red")
newParkingLot.parkCar("park KA40M8502 red")
newParkingLot.parkCar("park KA40M8503 white")
newParkingLot.parkCar("park KA40M8504 green")
newParkingLot.parkCar("park KA40M8505 green")

describe("getting the status of the parkign lot", () => {
  test("getting the  list of all the parking cars in the parking lot", () => {
    expect(newParkingLot.getAllParkingStatus()).toEqual([
      [1, "KA40M8501", "red"],
      [2, "KA40M8502", "red"],
      [3, "KA40M8503", "white"],
      [4, "KA40M8504", "green"],
      [5, "KA40M8505", "green"],
    ])
  })
})

describe("getting the car information based on the car number", () => {
  test("should return the slot id where the car is parked", () => {
    expect(newParkingLot.getSlotByCarNo("KA40M8501")).toEqual({
      message: 1,
      status: "success",
    })
  })
  test("should return the status of car not parked ", () => {
    expect(newParkingLot.getSlotByCarNo("KA40M8598")).toEqual({
      message: "carNotParked",
      status: "failure",
    })
  })
})
describe("getting the car data based on the car Color", () => {
  test("getting the car data array based on the valid car color", () => {
    expect(newParkingLot.getAllCarNumbersByColor("red")).toEqual({
      message: "",
      payload: ["KA40M8501", "KA40M8502"],
      status: "success",
    })
  })
  test("getting the car data array based on the invalid car color that doesnt exist", () => {
    expect(newParkingLot.getAllCarNumbersByColor("maroon")).toEqual({
      message: "NoCar",
      payload: [],
      status: "failure",
    })
  })
})
describe("Getting the slot array based on the car Color", () => {
  test("getting the slot id array based on the  valid car color", () => {
    expect(newParkingLot.getAllSlotsByCarColor("red")).toEqual({
      message: "",
      payload: [1, 2],
      status: "failure",
    })
  })
  test("getting the slot id array based on the invalid car color", () => {
    expect(newParkingLot.getAllSlotsByCarColor("maroon")).toEqual({
      message: "NoCar",
      payload: [],
      status: "success",
    })
  })
})
