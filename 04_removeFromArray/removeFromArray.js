const removeFromArray = function(array, remove, r2 = 0, r3 = 0, r4 = 0) {

    console.log("")
    console.log("arguments.length: ", arguments.length)

    console.log("")
    for (a = 0; a < arguments.length; a++) {console.log("a: ", a, " arguments[a]: ", arguments[a], "typeof arguments[a]: ", typeof arguments[a])}
    console.log("")

    // Create new array to store remaining values
    let result = []
    let push = false

    console.log("-------------------------------------------------")

    // process the array
    for (i = 1; i <= array.length; i++) 
        {
        console.log("i: ", i, " array[i-1]: ", array[i-1], typeof array[i-1])
        // console.log("before - array[i-1]: ", array[i-1], "search(array[i-1].toString(): ", toberemoved.search(array[i-1].toString()))

        push = true

        for (j = 1; j < arguments.length; j++) {
            console.log("    j: ", j, " arguments[j]: ", arguments[j], typeof arguments[j])
            if ( arguments [j] === array [i-1] ) 
                     { push = false;
                        console.log ("    NO PUSH arguments [j]: ", arguments [j], "array [i-1]: ", array [i-1]) } 
                else 
                    { // push = true; 
                      console.log("    PUSH arguments [j]: ", arguments [j], "array [i-1]: ", array [i-1])}
        }

        if (push) { result.push( array[i - 1] ) }

        console.log("after  - array: ", array, " i: ", i, " remove: ", remove," result: ", result);  
        }

    return result;
};

console.log("Result: ", removeFromArray([1, 2, 3, 4], 3));
console.log("Result: ", removeFromArray([1, 2, 3, 4], 2, 3));
console.log("Result: ", removeFromArray([1, 2, 3, 4], 1,2,3,4));
console.log("Result: ", removeFromArray(["hey", 2, 3, "ho"], "hey", 3));
console.log("Result: ", removeFromArray([1, 2, 3, 4], "1", 3))

// Do not edit below this line
module.exports = removeFromArray;
