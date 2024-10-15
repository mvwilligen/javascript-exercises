const repeatString = function(string, num) { 
    let result = "";

    if (num < 0) { result = "ERROR"; }

    else

    { 
        for (i = 0; i < num; i++) 
            { result = result + string; } 
    }

    //console.log(result);

return result;
};

console.log(repeatString('hey', -1)) // returns 'heyheyhey'
console.log(repeatString('hey', 0)) // returns 'heyheyhey'
console.log(repeatString('hey', 1)) // returns 'heyheyhey'
console.log(repeatString('hey', 2)) // returns 'heyheyhey'
console.log(repeatString('hey', 3)) // returns 'heyheyhey'
console.log(repeatString('hey', 4)) // returns 'heyheyhey'

// Do not edit below this line
module.exports = repeatString;
