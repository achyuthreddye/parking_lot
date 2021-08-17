# Parking Lot Problem

## Problem statement

- Registration numbers of all cars of a particular colour
- Slot number in which a car with a given registration number is parked.
- Slot numbers of all slots where a car of a particular colour is parked.

## Running this app

This is a command line application and can be run in two ways:

- **Using commands from the interactive prompt**
- **Using the commands from the file**

## Installing all the dependencies

```bash
1. npm install
```

## Running the app using the commands from the Interactive prompt

```bash
1. npm start
```

Running the app using the commands from the file

```bash
1. npm start filename
```

## List of User Commands

Users can interact with the Parking Lot system via a following simple set of commands which produce a specific output:

- **create_parking_lot**: `create_parking_lot 6` will create a parking lot with 6 slots.

- **park < car Number > < Car Color >**: `park KA-01-HH-1234 White` will allocate the nearest slot from entry gate.

- **leave**: `leave 4` will make slot number 4 free.

- **status**: `status` will display cars and their slot details

```bash
Slot No.  Registration No Color
1         KA-01-HH-1234  White
2         KA-01-HH-9999  Red
3         KA-01-BB-0001  White
5         KA-01-HH-2701  Black
6         KA-01-HH-3141  Black
```

- **registration_numbers_for_cars_with_colour < COLOR >**: `registration_numbers_for_cars_with_colour White` will display the registration number of the cars of white color e.g. `KA-01-HH-1234, KA-01-BB-0001`

- **slot_numbers_for_cars_with_colour < COLOR >**: `slot_numbers_for_cars_with_colour White` will display slot numbers of the cars of white color e.g. `1, 3`

- **slot_number_for_registration_number < REGISTRATION NUMBER >**: `slot_number_for_registration_number MH-04-AY-1111` will display the slot number for the car with registration number MH-04-AY-1111.

- **leave_car_by_registration_number**: `leave_car_by_registration_number JH-01-LT-0008` will free the slot occupied by car with registration number JH-01-LT-0008.

- **exit**: `quit` will quit the application and return to the console.

> **NOTE: Any commands which are not mentioned above will throw an error: `invalid command`**

## Things that I have to Work on

- Implementing the postgres database for the app
- using the orm to use the database
- changing the loops to iterables
- sanitizing the car input data and maintaining the list possible colors just to to be safe about the colors that are added by the users
