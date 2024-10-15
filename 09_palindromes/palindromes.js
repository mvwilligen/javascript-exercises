const palindromes = function (text) {

    let result = "";
    let char = "";
    let clean = "";

    for (a = 0; a <= text.length; a++) {
        char = text.charAt(text.length - a)
        if (!" .,!".includes(char)) {
            result = result + char;
            clean  = char + clean;
        }
    }
    let palindrome = false;
    if (clean.toLowerCase() == result.toLowerCase()) { palindrome = true; } else { palindrome = false; }

    return palindrome;
};

console.log(palindromes("martin"));
console.log("")
console.log(palindromes("martin van willigen"));
console.log(palindromes("radar"));
console.log(palindromes("Animal loots foliated detail of stool lamina."))

// Do not edit below this line
module.exports = palindromes;
