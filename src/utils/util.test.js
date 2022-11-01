import { calculateTax, calculateSuper } from "./util";
import { SUPER_RATE } from "./constants";

test("Should test calculateTax function with different values", () => {
  expect(calculateTax(10000)).toBe(0);
  expect(calculateTax(20000)).toBe(342);
  expect(calculateTax(50000)).toBe(7797);
  expect(calculateTax(100000)).toBe(24497);
  expect(calculateTax(200000)).toBe(63097);
});

test("Should test calculateSuper function with different values", () => {
  expect(calculateSuper(10000, SUPER_RATE)).toBe(1050);
  expect(calculateSuper(20000, SUPER_RATE)).toBe(2100);
  expect(calculateSuper(50000, SUPER_RATE)).toBe(5250);
  expect(calculateSuper(100000, SUPER_RATE)).toBe(10500);
  expect(calculateSuper(200000, SUPER_RATE)).toBe(21000);
});
