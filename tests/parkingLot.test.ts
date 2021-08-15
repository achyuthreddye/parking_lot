import { ParkingLot } from "../src/ParkingLot"

describe("creating the Parking lot", () => {
  // test("No maximum parking lot size given ,passes", () => {
  //   const newParkingLot = new ParkingLot()
  //   expect(newParkingLot.createParkingLot(56)).toEqual(
  //     "please enter the valid to allot the no of parking slots"
  //   )
  // })
  test("Negative maximum parking lot size given ,passes", () => {
    const newParkingLot = new ParkingLot()
    expect(newParkingLot.createParkingLot(-45)).toEqual(
      "please enter the valid to allot the no of parking slots"
    )
  })
  test("valid maximum parking lot size given ,passes", () => {
    const newParkingLot = new ParkingLot()
    expect(newParkingLot.createParkingLot(4)).toEqual([
      {
        parkStatus: false,
        car: { carColor: "", carNumber: "" },
        slotId: 1,
      },
      {
        parkStatus: false,
        car: { carColor: "", carNumber: "" },
        slotId: 2,
      },
      {
        parkStatus: false,
        car: { carColor: "", carNumber: "" },
        slotId: 3,
      },
      {
        parkStatus: false,
        car: { carColor: "", carNumber: "" },
        slotId: 4,
      },
    ])
  })
})

//TODO: car input data sanitization has to be performed
