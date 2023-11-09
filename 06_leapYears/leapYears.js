const leapYears = function(year) {

    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return true;
        }
        return false;
    } else if (year % 4 === 0) {
        return true;
    }
    return false;
};

console.log(leapYears(700));
console.log(leapYears(701));
console.log(leapYears(1600));
// Do not edit below this line
module.exports = leapYears;
