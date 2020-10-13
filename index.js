const { sum, substraction, division } = require("./functions/math/math");

function handleoperations(a, b) {
  console.log(`${a} + ${b} = `, sum(a, b));
  console.log(`${a} - ${b} = `, substraction(a, b));
  console.log(`${a} / ${b} = `, division(a, b));
}
function main() {
  console.log("Hello World!");
  handleoperations(5, 4);
}

main();
