const palindromes = function (str) {

    strReduction = str.toLowerCase().replaceAll(/[!.,\s]/g, '');
    reversedStr = strReduction.split("").reverse().join("");
    //return `${strReduction}, ${reversedStr}`;
    if (reversedStr == strReduction) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
