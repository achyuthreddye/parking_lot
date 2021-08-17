import { ParkingLot } from "../src/ParkingLot"

describe("Creating a new Parking lot and parking the cars in the parking slots", () => {
  const newParkingLot = new ParkingLot()

  test("create the new parking lot", () => {
    const totalParkings = newParkingLot.createParkingLot(6)
    expect(totalParkings).toEqual("Created a parking lot with 6 slots")
  })
  test("send the invalid car details , should throw an error", () => {
    const parkedSlot = newParkingLot.parkCar("park  white")
    expect(parkedSlot).toBe("please Enter a valid car number and car Color")
  })
  test("park the car 1 , should be parked", () => {
    const parkedSlot = newParkingLot.parkCar("park KA40M8500 white")
    expect(parkedSlot).toBe("Allocated slot number:" + 1)
  })
  test("park the car 2 , should be parked", () => {
    const parkedSlot = newParkingLot.parkCar("park KA40M8501 red")
    expect(parkedSlot).toBe("Allocated slot number:" + 2)
  })
  test("park the car 3 , should be parked", () => {
    const parkedSlot = newParkingLot.parkCar("park KA40M8502 white")
    expect(parkedSlot).toBe("Allocated slot number:" + 3)
  })
  test("park the car 4 , should be parked", () => {
    const parkedSlot = newParkingLot.parkCar("park KA40M8503 green")
    expect(parkedSlot).toBe("Allocated slot number:" + 4)
  })
  test("park the car 5 , should be parked", () => {
    const parkedSlot = newParkingLot.parkCar("park KA40M8504 white")
    expect(parkedSlot).toBe("Allocated slot number:" + 5)
  })
  test("park the car 6 , should be parked", () => {
    const parkedSlot = newParkingLot.parkCar("park KA40M8505 blue")
    expect(parkedSlot).toBe("Allocated slot number:" + 6)
  })
  test("park the car 7, should not be parked", () => {
    const parkedSlot = newParkingLot.parkCar("park KA40M8506 blue")
    expect(parkedSlot).toBe("Parking lot is completely filled")
  })
  test("unpark park the car 6 , should be removed from the list", () => {
    const parkedSlot = newParkingLot.unParkCarByCarNumber("KA40M8505")
    expect(parkedSlot).toBe(true)
  })
  test("unpark park the car 5 , should be removed from the list", () => {
    const parkedSlot = newParkingLot.unParkCarByCarNumber("KA40M8504")
    expect(parkedSlot).toBe(true)
  })
  test("unpark park the slot 6 , should be removed from the list", () => {
    const parkedSlot = newParkingLot.unParkCarBySlotNumber(2)
    expect(parkedSlot).toBe("Slot number 2 is free")
  })
  test("park the car that doesnt exist , should return an  error message", () => {
    const parkedSlot = newParkingLot.unParkCarByCarNumber("KA40M8598")
    expect(parkedSlot).toBe("the car is not parked ")
  })
})
