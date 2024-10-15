const reverseString = function(string) {

    let result = "";
    console.log("length: ", string.length);
    for (let i = string.length; i >= 0; i--) { result = result + string.charAt(i); console.log(i, result); }
    //result = "";
    //for (let i = 0; i < string.length; i++) { result = string.charAt(i) + result; console.log(i, result); }
    return result;
};

reverseString('hello there') // returns 'ereht olleh'
reverseString('hello there!') // returns 'ereht olleh'
reverseString('') // returns 'ereht olleh'

// Do not edit below this line
module.exports = reverseString;
