import { ParkingLot } from "../src/ParkingLot"
import { Slot } from "../src/Slot"

describe("getting the nearest parking lot in the given parking array", () => {
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
    let currentParkingArray: Array<Slot> = [
      {
        parkStatus: true,
        car: { carColor: "white", carNumber: "KA40M8500" },
        slotId: 1,
      },
      {
        parkStatus: true,
        car: { carColor: "green", carNumber: "KA40M8501" },
        slotId: 2,
      },
      {
        parkStatus: false,
        car: { carColor: "", carNumber: "" },
        slotId: 3,
      },
      {
        parkStatus: true,
        car: { carColor: "red", carNumber: "KA40M8502" },
        slotId: 4,
      },
    ]
    expect(newParkingLot.getNextNearestSlot(currentParkingArray)).toEqual({
      status: true,
      value: 2,
    })
  })
  test("valid current parking array is valid and no empty spaces, passes", () => {
    const newParkingLot = new ParkingLot()

    let currentParkingArray: Array<Slot>
    currentParkingArray = [
      {
        parkStatus: true,
        car: { carColor: "white", carNumber: "KA40M8500" },
        slotId: 1,
      },
      {
        parkStatus: true,
        car: { carColor: "white", carNumber: "KA40M8501" },
        slotId: 2,
      },
      {
        parkStatus: true,
        car: { carColor: "white", carNumber: "KA40M8502" },
        slotId: 3,
      },
      {
        parkStatus: true,
        car: { carColor: "white", carNumber: "KA40M8503" },
        slotId: 4,
      },
    ]
    expect(newParkingLot.getNextNearestSlot(currentParkingArray)).toEqual({
      status: false,
      value: "Parking lot is completely filled",
    })
  })
})
