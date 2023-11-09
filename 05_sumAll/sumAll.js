const sumAll = function(a, b) {
    
    let lowNum;
    let highNum;
    let sum = 0;

    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR";
    }

    if (a > b) {
        highNum = a;
        lowNum = b;
    } else {
        highNum = b;
        lowNum = a;
    }

    for (i = lowNum; i <= highNum; i++) {
        sum += i;
    }
    return sum;
};



// Do not edit below this line
module.exports = sumAll;
