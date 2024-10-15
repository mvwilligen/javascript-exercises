const sumAll = function(from, to) {
    let result = 0;

    if (to < from) { let temp = to; to = from; from = temp; }

    if (to > 0 && from > 0 ) {
        if ( Number.isInteger(to) && Number.isInteger(from) ) {
            if ( (! isNaN(to)) && (! isNaN(from)) ) {
                for ( i = from; i <= to; i++) { result = result + i; console.log(result -i, "+",i,"=", result) }
                }
                else
                    { result = "ERROR" }
            }
            else
                { result = "ERROR" }
        }   
        else 
            { result = "ERROR" }
    return result;
};

sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
sumAll(4, 1) // returns the sum of 1 + 2 + 3 + 4 which is 10


// Do not edit below this line
module.exports = sumAll;
