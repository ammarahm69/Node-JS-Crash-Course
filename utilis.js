function generateNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
function CelicusToFareheit(celicus) {
  return (celicus * 9) / 5 + 32;
}
function Multiply(a, b) {
  return a * b;
}
function Add(a,b){
    return a + b;
}
module.exports = {
  generateNumber,
  CelicusToFareheit,
  Multiply,
  Add
};
