import {
  createParkingLot,
  getAllCarNumbersByColor,
  getAllParkingStatus,
  getAllSlotsByCarColor,
  getSlotByCarNo,
  parkCar,
  unParkCarBySlotNumber,
} from "../src/wrapper"

describe("Checking for creating Paking lot ", () => {
  test("should return the Invalid status for invlid input for creating parking lot", () => {
    expect(createParkingLot(-45)).toBe(
      "Please enter a valid lotsize to create the parking lot"
    )
  })
  test("should return the size of the parking lot after creating the valid parking lot", () => {
    expect(createParkingLot(3)).toBe(3)
  })
})

describe("checking for parking car", () => {
  test("should return the slot id of parked car", () => {
    expect(parkCar("park ka40m8500 white")).toBe("Allocated slot number: 1")
  })

  test("should return parkign lot filles status", () => {
    parkCar("park ka40m8501 white")
    parkCar("park ka40m8502 white")
    expect(parkCar("park ka40m8503 red")).toBe("Sorry, Parking Lot is filled")
  })
})

describe("Checking for unparking car", () => {
  test("should return the slot id of the car which is freed from the parking lot", () => {
    expect(unParkCarBySlotNumber(1)).toBe("Slot number 1 is free")
  })
  test("should return the failure status for unparking the car which is not parked", () => {
    expect(unParkCarBySlotNumber(1)).toBe("No car is parked in the given slot")
  })
})

describe("Checking for the slot number based on the car number", () => {
  test("Should return the slot id of the car where it is parked", () => {
    expect(getSlotByCarNo("KA40m8501")).toBe("Car is parked in : 2")
  })
  test("Should return the failure status when car is not parked", () => {
    expect(getSlotByCarNo("KA40m8500")).toBe(
      "Car is not parked in the parking lot"
    )
  })
})

describe("Checking for slot number array based on the car color", () => {
  test("should return the array where the given color cars are parked", () => {
    expect(getAllSlotsByCarColor("white")).toStrictEqual("2 3")
  })
  test("should return the failure status for the invalid color", () => {
    expect(getAllSlotsByCarColor("Invalidcolor")).toBe(
      "No Car with the given color exist in the parking lot"
    )
  })
})

describe("checking for all the car numbers based on the car colors", () => {
  test("should return the array of car numbers when the valid car color is given", () => {
    expect(getAllCarNumbersByColor("white")).toStrictEqual(
      "ka40m8501\nka40m8502"
    )
  })
})

describe("Checking for the status of parking lot", () => {
  test("should display all the parked lot ", () => {
    expect(getAllParkingStatus()).toBe(
      "Slot No   Registration Number   Color\n2,ka40m8501,white\n3,ka40m8502,white"
    )
  })
})
