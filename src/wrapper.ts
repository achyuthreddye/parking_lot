import { ParkingLot } from "./Entities/ParkingLot"
import { Vehicle } from "./Entities/Vehicle"
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

export function parkVehicle(input: string) {
  const vehicleNumber: string = input.split(" ")[1]
  const vehicleColor: string = input.split(" ")[2]
  const vehicleType: string = input.split(" ")[3]
  if (!vehicleNumber || !vehicleColor) {
    return "Please enter a valid vehicle Number and vehicle Color"
  }

  const vehicle = new Vehicle(vehicleNumber, vehicleColor, vehicleType)

  const parkingStatus = parkingLot.parkVehicle(vehicle)

  if (
    parkingStatus.status === "failure" &&
    parkingStatus.message === "ParkingLotFilled"
  ) {
    return "Sorry, Parking Lot is filled"
  } else {
    return `Allocated the vehicle in the ${parkingStatus.message[0]} and in the slot number: ${parkingStatus.message[1]}`
  }
}

export function unParkVehicleBySlotNumber(input: string) {
  const floorNo: number = Number(input.split(" ")[1])
  const slotId: number = Number(input.split(" ")[2])

  const unparkStatus = parkingLot.unParkVehicleBySlotNumber(floorNo, slotId)
  if (
    unparkStatus.status === "failure" &&
    unparkStatus.message === "vehicleNotParked"
  ) {
    return "No vehicle is parked in the given slot"
  } else {
    return `Slot number ${slotId} is free`
  }
}
