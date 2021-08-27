import { fileConsole } from "../src/fileConsole"

describe("Checking for reading the file and implementing the parking funcitons on same", () => {
  test("should return the invalid file status just to show the error if file given is invalid", () => {
    expect(
      fileConsole(["system specific", "system specific", "./fileInputs.tx"])
    ).toBe("Invalid file")
  })
})
// TODO: Try to implement the test case for the valid filename
