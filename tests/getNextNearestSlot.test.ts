import { Car } from "../src/Entities/Car"
import { ParkingLot } from "../src/Entities/ParkingLot"
import { Slot } from "../src/Entities/Slot"

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

const parkingLotWithOutEmptySpace: Slot[] = [slot1, slot2, slot5, slot4]

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
  // test("valid current parking array is valid and no empty spaces, passes", () => {
  //   const newParkingLot = new ParkingLot()

  //   expect(
  //     newParkingLot.getNextNearestSlot(parkingLotWithOutEmptySpace)
  //   ).toEqual({
  //     status: false,
  //     value: "Parking lot is completely filled",
  //   })
  // })
})
