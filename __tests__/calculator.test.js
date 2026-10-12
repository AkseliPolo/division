import { divide } from "../src/calculator.js";

describe("divide", () => {
  // 1. Positive case: valid division
  test("divides two valid numbers correctly", () => {
    expect(divide(10, 2)).toBe(5);
  });

  // 2. Invalid: first argument is not a number
  test("throws TypeError when the first argument is not a number", () => {
    expect(() => divide("10", 2)).toThrow(TypeError);
    expect(() => divide("10", 2)).toThrow("Both arguments must be numbers");
  });

  // 3. Invalid: second argument is not a number
  test("throws TypeError when the second argument is not a number", () => {
    expect(() => divide(10, null)).toThrow(TypeError);
    expect(() => divide(10, null)).toThrow("Both arguments must be numbers");
  });

  // 4. Invalid: argument is NaN (typeof NaN is "number", so it needs its own check)
  test("throws TypeError when an argument is NaN", () => {
    expect(() => divide(NaN, 2)).toThrow(TypeError);
    expect(() => divide(NaN, 2)).toThrow("Arguments cannot be NaN");
    expect(() => divide(10, NaN)).toThrow("Arguments cannot be NaN");
  });

  // 5. Invalid: division by zero
  test("throws RangeError when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow(RangeError);
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
  });

  // 6. Invalid: arguments missing entirely (undefined)
  test("throws TypeError when arguments are missing", () => {
    expect(() => divide()).toThrow(TypeError);
    expect(() => divide(10)).toThrow("Both arguments must be numbers");
  });
});
