const add = function(a,b) {
    return a + b;	
};

const subtract = function(a,b) {
	  return a - b;
};

const sum = function(array) {
  let result = 0
	for (i = 0; i < array.length; i++) { result = result + array[i]; }
  return result;
};

const multiply = function(array) {
  let result = array[0];
	for (i = 1; i < array.length; i++) { result = (result * array[i]); }
  return result;
};

const power = function(a,b) {
	  return a**b;
};

const factorial = function(num) {
    let result = 1;
    for (a = 1; a < num; a++) { 
        result = result + (result * (num-a));
    }
    return result;
  };

console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
