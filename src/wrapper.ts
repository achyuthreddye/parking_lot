import { ParkingLot } from "./Entities/ParkingLot"
let parkingLot: ParkingLot

export function createParkingLot(
  noOfFloors: number,
  lotSize: number,
  noOfTrucksOnFloor?: number,
  noOfBikesOnFloor?: number
) {
  if (!lotSize || lotSize <= 0 || !noOfFloors || noOfFloors <= 0) {
    return "Please enter a valid lotsize to create the parking lot"
  }
  if (lotSize < noOfBikesOnFloor! + noOfTrucksOnFloor!) {
    return "Please enter the lotsize more than the no of slots alloted for trucks and bikes by default the no of trucks on floor is 1 and bikes are 2 so it has to be greater than 3"
  }

  parkingLot = new ParkingLot(
    noOfFloors,
    lotSize,
    noOfTrucksOnFloor,
    noOfBikesOnFloor
  )
  return [parkingLot.noOfFloors, parkingLot.noOfSlots]
}

// export function parkVehicle(input: string) {
//   if (checkIfValidParkingLot()) return
//   const vehicleNumber: string = input.split(" ")[1]
//   const vehicleColor: string = input.split(" ")[2]
//   if (!vehicleNumber || !vehicleColor) {
//     return "Please enter a valid vehicle Number and vehicle Color"
//   }
//   //FIXME: update the vehicleTYPE
//   const vehicleObj = new Vehicle(vehicleNumber, vehicleColor, "car")

//   const parkingStatus = parkingLot.parkVehicle(vehicleObj)

//   if (
//     parkingStatus.status === "failure" &&
//     parkingStatus.message === "ParkingLotFilled"
//   ) {
//     return "Sorry, Parking Lot is filled"
//   } else {
//     return `Allocated slot number: ${parkingStatus.message}`
//   }
// }

// export function unParkVehicleBySlotNumber(slotNumber: number) {
//   if (checkIfValidParkingLot()) return
//   const unparkStatus = parkingLot.unParkVehicleBySlotNumber(slotNumber)
//   if (
//     unparkStatus.status === "failure" &&
//     unparkStatus.message === "vehicleNotParked"
//   ) {
//     return "No vehicle is parked in the given slot"
//   } else {
//     return `Slot number ${slotNumber} is free`
//   }
// }

// export function getAllParkingStatus() {
//   if (checkIfValidParkingLot()) return
//   const parkedVehiclesArray: any[] = parkingLot.getAllParkingStatus()
//   if (parkedVehiclesArray.length === 0) {
//     return "sorry the parking lot is empty"
//   } else {
//     return [
//       "Slot No   Registration Number   Color",
//       ...parkedVehiclesArray,
//     ].join("\n")
//   }
// }

// export function getSlotByRegNo(inputString: string) {
//   if (checkIfValidParkingLot()) return
//   const getSlotByVehicleNoStatus = parkingLot.getSlotByRegNo(inputString)
//   if (
//     getSlotByVehicleNoStatus.status === "failure" &&
//     getSlotByVehicleNoStatus.message === "vehicleNotParked"
//   ) {
//     return "Vehicle is not parked in the parking lot"
//   } else {
//     return `Vehicle is parked in : ${getSlotByVehicleNoStatus.message}`
//   }
// }
// export function getAllSlotsByColor(color: string) {
//   if (checkIfValidParkingLot()) return
//   const getAllSlotsByVehicleColorStatus =
//     parkingLot.getAllSlotsByVehicleColor(color)
//   if (
//     getAllSlotsByVehicleColorStatus.status === "failure" &&
//     getAllSlotsByVehicleColorStatus.message === "NoVehicle"
//   ) {
//     return "No Vehicle with the given color exist in the parking lot"
//   } else {
//     return getAllSlotsByVehicleColorStatus.payload.join(" ")
//   }
// }

// export function getAllCarNumbersByColor(color: string) {
//   if (checkIfValidParkingLot()) return
//   const getAllVehicleNumbersByColorStatus =
//     parkingLot.getAllVehicleNumbersByColor(color)

//   if (
//     getAllVehicleNumbersByColorStatus.status === "failure" &&
//     getAllVehicleNumbersByColorStatus.message === "NoCar"
//   ) {
//     return "No Car with the given color exist in the parking lot"
//   } else {
//     return getAllVehicleNumbersByColorStatus.payload.join("\n")
//   }
// }

// function checkIfValidParkingLot() {
//   if (
//     !parkingLot ||
//     !parkingLot.parkingSlots ||
//     parkingLot.parkingSlots.length === 0
//   ) {
//     console.log("Please create a parking Lot first")
//     return true
//   } else {
//     return false
//   }
// }
