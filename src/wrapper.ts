import { Car } from "./Entities/Car"
import { ParkingLot } from "./Entities/ParkingLot"
let parkingLot: ParkingLot

export function createParkingLot(lotSize: number) {
  if (!lotSize || lotSize <= 0) {
    console.log("Please enter a valid lotsize to create the parking lot")
    return
  }

  parkingLot = new ParkingLot(lotSize)
  console.log(parkingLot.parkingSlots.length)
}

export function parkCar(input: string) {
  if (checkIfValidParkingLot()) return
  const carNumber: string = input.split(" ")[1]
  const carColor: string = input.split(" ")[2]
  if (!carNumber || !carColor) {
    console.log("Please enter a valid car Number and car Color")
    return
  }
  const carObj = new Car()
  carObj.create(carNumber, carColor)

  const parkCarStatus = parkingLot.parkCar(carObj)

  if (
    parkCarStatus.status === "failure" &&
    parkCarStatus.message === "ParkingLotFilled"
  ) {
    console.log("Sorry, Parking Lot is filled")
  } else {
    console.log("Allocated slot number:", parkCarStatus.message)
  }
}

export function unParkCarBySlotNumber(slotNumber: number) {
  if (checkIfValidParkingLot()) return
  const unparkStatus = parkingLot.unParkCarBySlotNumber(slotNumber)
  if (
    unparkStatus.status === "failure" &&
    unparkStatus.message === "CarNotParked"
  ) {
    console.log("No car is parked in the given slot")
  } else {
    console.log("Slot number ", slotNumber, "is free")
  }
}

export function getAllParkingStatus() {
  if (checkIfValidParkingLot()) return
  const parkedCarsArray: any[] = parkingLot.getAllParkingStatus()
  if (parkedCarsArray.length === 0) {
    console.log("sorry the parking lot is empty")
  } else {
    console.log("Slot No   Registration Number   Colorcle")
    console.log(parkedCarsArray.join("\n"))
  }
}

export function getSlotByCarNo(inputString: string) {
  if (checkIfValidParkingLot()) return
  const getSlotByCarNoStatus = parkingLot.getSlotByCarNo(inputString)
  if (
    getSlotByCarNoStatus.status === "failure" &&
    getSlotByCarNoStatus.message === "carNotParked"
  ) {
    console.log("Car is not parked in the parking lot")
  } else {
    console.log("Car is parked in :", getSlotByCarNoStatus.message)
  }
}
export function getAllSlotsByCarColor(color: string) {
  if (checkIfValidParkingLot()) return
  const getAllSlotsByCarColorStatus = parkingLot.getAllSlotsByCarColor(color)
  if (
    getAllSlotsByCarColorStatus.status === "failure" &&
    getAllSlotsByCarColorStatus.message === "NoCar"
  ) {
    console.log("No Car with the given color exist in the parking lot")
  } else {
    console.log(getAllSlotsByCarColorStatus.payload.join("\t"))
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
    console.log("No Car with the given color exist in the parking lot")
  } else {
    console.log(getAllCarNumbersByColorStatus.payload.join("\n"))
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
