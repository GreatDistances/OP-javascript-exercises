const removeFromArray = function(arr, remove) {
    let resultArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== remove) {
            resultArray.push(arr[i]);
        }
    }
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
