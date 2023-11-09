const removeFromArray = (arr, ...args) => {
    let newArr = [...arr];
    
     for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < newArr.length; j++) {
            if (args[i] === newArr[j]) {
                newArr.splice(j, 1);
            }
        }
    }

/*     for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== remove) {
            resultArray.push(arr[i]);
        }
    } */
    console.log(newArr);
    return newArr;
};

removeFromArray([3,2,5], 3,2,4,4);
removeFromArray([76,5], 5,75,76);

// Do not edit below this line
module.exports = removeFromArray;
