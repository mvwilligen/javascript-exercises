const convertToCelsius = function(Fahrenheit) {
  return Math.round(10 * ((5/9) * (Fahrenheit - 32))) / 10
};

const convertToFahrenheit = function(Celsius) {
  return Math.round(10 * ((Celsius * 9/5) + 32)) /10
};

console.log(0, convertToCelsius(32)) // fahrenheit to celsius, should return 0
console.log(0, convertToCelsius(33)) // fahrenheit to celsius, should return 0

console.log(32, convertToFahrenheit(0)) // celsius to fahrenheit, should return 32
console.log(32, convertToFahrenheit(1)) // celsius to fahrenheit, should return 32

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
