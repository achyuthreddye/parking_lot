import { ParkingLot } from "../src/ParkingLot"

describe("checking for the slot number based on the car number", () => {
  const newParkingLot = new ParkingLot()
  newParkingLot.createParkingLot(4)
  newParkingLot.parkCar({
    carNumber: "KA40M8501",
    carColor: "red",
  })
  newParkingLot.parkCar({
    carNumber: "KA40M8502",
    carColor: "red",
  })
  test("should return the slot id where the car is parked", () => {
    expect(newParkingLot.getSlotByCarNo("KA40M8501")).toEqual(1)
  })
  test("should return the status of car not parked ", () => {
    expect(newParkingLot.getSlotByCarNo("KA40M8504")).toEqual(
      "car is not parked"
    )
  })
})
