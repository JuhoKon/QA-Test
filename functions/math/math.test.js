const { sum, substraction, division } = require("./math");
const { expect } = require("@jest/globals");

test("adds 5 + 6 to equal 3", () => {
  expect(sum(5, 6)).toBe(11);
});
test("substraction 5 - 6 to equal -1", () => {
  expect(substraction(5, 6)).toBe(-1);
});
test("division 10 / 5 to equal 2", () => {
  expect(division(10, 5)).toBe(2);
});
