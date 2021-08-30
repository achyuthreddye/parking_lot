import { Car } from "./Entities/Car"
import { ParkingLot } from "./Entities/ParkingLot"
let parkingLot: ParkingLot

export function createParkingLot(lotSize: number) {
  if (!lotSize || lotSize <= 0) {
    return "Please enter a valid lotsize to create the parking lot"
  }

  parkingLot = new ParkingLot(lotSize)
  return parkingLot.parkingSlots.length
}

export function parkCar(input: string) {
  if (checkIfValidParkingLot()) return
  const carNumber: string = input.split(" ")[1]
  const carColor: string = input.split(" ")[2]
  if (!carNumber || !carColor) {
    return "Please enter a valid car Number and car Color"
  }
  const carObj = new Car(carNumber, carColor)

  const parkCarStatus = parkingLot.parkCar(carObj)

  if (
    parkCarStatus.status === "failure" &&
    parkCarStatus.message === "ParkingLotFilled"
  ) {
    return "Sorry, Parking Lot is filled"
  } else {
    return `Allocated slot number: ${parkCarStatus.message}`
  }
}

export function unParkCarBySlotNumber(slotNumber: number) {
  if (checkIfValidParkingLot()) return
  const unparkStatus = parkingLot.unParkCarBySlotNumber(slotNumber)
  if (
    unparkStatus.status === "failure" &&
    unparkStatus.message === "CarNotParked"
  ) {
    return "No car is parked in the given slot"
  } else {
    return `Slot number ${slotNumber} is free`
  }
}

export function getAllParkingStatus() {
  if (checkIfValidParkingLot()) return
  const parkedCarsArray: any[] = parkingLot.getAllParkingStatus()
  if (parkedCarsArray.length === 0) {
    return "sorry the parking lot is empty"
  } else {
    return ["Slot No   Registration Number   Color", ...parkedCarsArray].join(
      "\n"
    )
  }
}

export function getSlotByCarNo(inputString: string) {
  if (checkIfValidParkingLot()) return
  const getSlotByCarNoStatus = parkingLot.getSlotByCarNo(inputString)
  if (
    getSlotByCarNoStatus.status === "failure" &&
    getSlotByCarNoStatus.message === "carNotParked"
  ) {
    return "Car is not parked in the parking lot"
  } else {
    return `Car is parked in : ${getSlotByCarNoStatus.message}`
  }
}
export function getAllSlotsByCarColor(color: string) {
  if (checkIfValidParkingLot()) return
  const getAllSlotsByCarColorStatus = parkingLot.getAllSlotsByCarColor(color)
  if (
    getAllSlotsByCarColorStatus.status === "failure" &&
    getAllSlotsByCarColorStatus.message === "NoCar"
  ) {
    return "No Car with the given color exist in the parking lot"
  } else {
    return getAllSlotsByCarColorStatus.payload.join(" ")
  }
}

export function getAllCarNumbersByColor(color: string) {
  if (checkIfValidParkingLot()) return
  const getAllCarNumbersByColorStatus =
    parkingLot.getAllCarNumbersByColor(color)

  if (
    getAllCarNumbersByColorStatus.status === "failure" &&
    getAllCarNumbersByColorStatus.message === "NoCar"
  ) {
    return "No Car with the given color exist in the parking lot"
  } else {
    return getAllCarNumbersByColorStatus.payload.join("\n")
  }
}

function checkIfValidParkingLot() {
  if (
    !parkingLot ||
    !parkingLot.parkingSlots ||
    parkingLot.parkingSlots.length === 0
  ) {
    console.log("Please create a parking Lot first")
    return true
  } else {
    return false
  }
}
