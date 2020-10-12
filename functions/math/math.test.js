const { sum, substraction } = require("./math");
const { expect } = require("@jest/globals");

test("adds 5 + 6 to equal 3", () => {
  expect(sum(5, 6)).toBe(11);
});
test("substraction 5 - 6 to equal -1", () => {
  expect(substraction(5, 6)).toBe(-1);
});
