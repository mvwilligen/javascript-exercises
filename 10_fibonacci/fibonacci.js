const fibonacci = function(max) {

    let a = 0
    let b = 1
    let next = 0

    if (isNaN(max)) { max = +max}

    if (max >= 0) {

        for (i = 1; i <= max; i++) 
            {  console.log(a, b) ; next = a + b; a = b; b = next; }
        }
        else
            { a = "OOPS" }

    return a;
};

console.log(fibonacci(4)); // returns the 4th member of the series: 3  (1, 1, 2, 3)
console.log("")
console.log(fibonacci(6)); // returns 8
console.log("")
console.log(fibonacci("6")); // returns 8

// Do not edit below this line
module.exports = fibonacci;
