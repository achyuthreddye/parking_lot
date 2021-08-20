import { ParkingLot } from "./Entities/ParkingLot"

export function createParkingLot(parkingLot: ParkingLot, lotSize: number) {
  const createParkLotStatus = parkingLot.createParkingLot(lotSize)
  if (createParkLotStatus.status === "success") {
    console.log(
      "Created a parking lot with ",
      createParkLotStatus.message,
      " slots"
    )
  } else {
    console.log(
      "please enter the valid number to allot the maximum no of parking slots"
    )
  }
}

export function parkCar(parkingLot: ParkingLot, input: string) {
  if (checkIfValidParkingLot(parkingLot)) return
  const parkCarStatus = parkingLot.parkCar(input)
  if (
    parkCarStatus.status === "failure" &&
    parkCarStatus.message === "InvalidInput"
  ) {
    console.log("Please Enter a valid car number and car Color")
  } else {
    console.log("Allocated slot number:", parkCarStatus.message)
  }
}

export function unParkCarBySlotNumber(
  parkingLot: ParkingLot,
  slotNumber: number
) {
  if (checkIfValidParkingLot(parkingLot)) return
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

export function getAllParkingStatus(parkingLot: ParkingLot) {
  if (checkIfValidParkingLot(parkingLot)) return
  const parkedCarsArray: any[] = parkingLot.getAllParkingStatus()
  if (parkedCarsArray.length === 0) {
    console.log("sorry the parking lot is empty")
  } else {
    console.log("Slot No   Registration Number   Color hehr")
    console.log(parkedCarsArray.join("\n"))
  }
}

export function getSlotByCarNo(inputString: string, parkingLot: ParkingLot) {
  if (checkIfValidParkingLot(parkingLot)) return
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
export function getAllSlotsByCarColor(color: string, parkingLot: ParkingLot) {
  if (checkIfValidParkingLot(parkingLot)) return
  const getAllSlotsByCarColorStatus = parkingLot.getAllSlotsByCarColor(color)
  if (
    getAllSlotsByCarColorStatus.status === "failure" &&
    getAllSlotsByCarColorStatus.message === "NoCar"
  ) {
    console.log("No Car with the given color exist in the parking lot")
  } else {
    console.log(getAllSlotsByCarColorStatus.payload.join("\n"))
  }
}

export function getAllCarNumbersByColor(color: string, parkingLot: ParkingLot) {
  if (checkIfValidParkingLot(parkingLot)) return
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

function checkIfValidParkingLot(parkingLot: ParkingLot) {
  console.log("Please Enter a valid Parking Lot")

  return parkingLot.parkingLotSize === 0
}
