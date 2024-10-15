const leapYears = function(year) {
    let result = false;

    if (year%4 == 0 ) { result = true; }
    if (year%100 == 0 ) { result = false; }
    if (year%400 == 0 ) { result = true; }

    return result;
};

console.log(1984, true, leapYears(1984))
console.log(2004, true, leapYears(2004))
console.log(1800, false, leapYears(1800))
console.log(1900, false, leapYears(1900))
console.log(1600, true, leapYears(1600))

// Do not edit below this line
module.exports = leapYears;
