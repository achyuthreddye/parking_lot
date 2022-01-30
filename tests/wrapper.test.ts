import {
  createParkingLot,
  // getAllCarNumbersByColor,
  // getAllParkingStatus,
  // getAllSlotsByColor,
  // getSlotByRegNo,
  // parkVehicle,
  // unParkVehicleBySlotNumber,
} from "../src/wrapper"

describe("Checking for creating Paking lot ", () => {
  test("should return the Invalid status for invlid input for creating parking lot", () => {
    expect(createParkingLot(-45, -56)).toBe(
      "Please enter a valid lotsize to create the parking lot"
    )
  })
  // test("should return the Invalid status for input lotsize is less than the default truck nos and bike", () => {
  //   expect(createParkingLot(1, 2, 1, 1)).toBe(
  //     "Please enter the lotsize more than the no of slots alloted for trucks and bikes by default the no of trucks on floor is 1 and bikes are 2 so it has to be greater than 3"
  //   )
  // })
  test("should return the size of the parking lot after creating the valid parking lot", () => {
    expect(createParkingLot(4, 5)).toStrictEqual([4, 5])
  })
})

// describe("checking for parking car", () => {
//   test("should return the slot id of parked car", () => {
//     expect(parkVehicle("park ka40m8500 white")).toBe("Allocated slot number: 1")
//   })

//   test("should return parking lot filled status", () => {
//     parkVehicle("park ka40m8501 white")
//     parkVehicle("park ka40m8502 white")
//     expect(parkVehicle("park ka40m8503 red")).toBe(
//       "Sorry, Parking Lot is filled"
//     )
//   })
// })

// describe("Checking for unparking vehicle", () => {
//   test("should return the slot id of the vehicle which is freed from the parking lot", () => {
//     expect(unParkVehicleBySlotNumber(1)).toBe("Slot number 1 is free")
//   })
//   test("should return the failure status for unparking the car which is not parked", () => {
//     expect(unParkVehicleBySlotNumber(1)).toBe(
//       "No vehicle is parked in the given slot"
//     )
//   })
// })

// describe("Checking for the slot number based on the car number", () => {
//   test("Should return the slot id of the car where it is parked", () => {
//     expect(getSlotByRegNo("KA40m8501")).toBe("Vehicle is parked in : 2")
//   })
//   test("Should return the failure status when car is not parked", () => {
//     expect(getSlotByRegNo("KA40m8500")).toBe(
//       "Vehicle is not parked in the parking lot"
//     )
//   })
// })

// describe("Checking for slot number array based on the car color", () => {
//   test("should return the array where the given color cars are parked", () => {
//     expect(getAllSlotsByColor("white")).toStrictEqual("2 3")
//   })
//   test("should return the failure status for the invalid color", () => {
//     expect(getAllSlotsByColor("Invalidcolor")).toBe(
//       "No Vehicle with the given color exist in the parking lot"
//     )
//   })
// })

// describe("checking for all the car numbers based on the car colors", () => {
//   test("should return the array of car numbers when the valid car color is given", () => {
//     expect(getAllCarNumbersByColor("white")).toStrictEqual(
//       "ka40m8501\nka40m8502"
//     )
//   })
// })

// describe("Checking for the status of parking lot", () => {
//   test("should display all the parked lot ", () => {
//     expect(getAllParkingStatus()).toBe(
//       "Slot No   Registration Number   Color\n2,ka40m8501,white\n3,ka40m8502,white"
//     )
//   })
// })
