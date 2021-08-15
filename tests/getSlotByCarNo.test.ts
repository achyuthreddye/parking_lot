import { ParkingLot } from "../src/ParkingLot"

describe("checking for the slot number based on the car number", () => {
  const newParkingLot = new ParkingLot()
  expect(newParkingLot.getSlotByCarNo("KA40M8500")).toEqual(1)
})
