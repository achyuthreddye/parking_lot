import { ParkingLot } from "../src/ParkingLot"
const newParkingLot = new ParkingLot()
newParkingLot.createParkingLot(6)
newParkingLot.parkCar({
  carNumber: "KA40M8501",
  carColor: "red",
})
newParkingLot.parkCar({
  carNumber: "KA40M8502",
  carColor: "red",
})
newParkingLot.parkCar({
  carNumber: "KA40M8503",
  carColor: "white",
})
newParkingLot.parkCar({
  carNumber: "KA40M8504",
  carColor: "green",
})
newParkingLot.parkCar({
  carNumber: "KA40M8505",
  carColor: "green",
})
describe("getting the car information based on the car number", () => {
  test("should return the slot id where the car is parked", () => {
    expect(newParkingLot.getSlotByCarNo("KA40M8501")).toEqual(1)
  })
  test("should return the status of car not parked ", () => {
    expect(newParkingLot.getSlotByCarNo("KA40M8598")).toEqual(
      "car is not parked"
    )
  })
})
describe("getting the car data based on the car Color", () => {
  test("getting the car data array based on the valid car color", () => {
    expect(newParkingLot.getAllCarNumbersByColor("red")).toEqual([
      {
        carNumber: "KA40M8501",
        carColor: "red",
      },
      {
        carNumber: "KA40M8502",
        carColor: "red",
      },
    ])
  })
  test("getting the car data array based on the invalid car color that doesnt exist", () => {
    expect(newParkingLot.getAllCarNumbersByColor("maroon")).toEqual(
      "No car with the given color exist in the parking lot"
    )
  })
})
describe("Getting the slot array based on the car Color", () => {
  test("getting the slot id array based on the  valid car color", () => {
    expect(newParkingLot.getAllSlotsByCarColor("red")).toEqual([1, 2])
  })
  test("getting the slot id array based on the invalid car color", () => {
    expect(newParkingLot.getAllSlotsByCarColor("maroon")).toEqual(
      "No car with the given color exist in the parking lot"
    )
  })
})
