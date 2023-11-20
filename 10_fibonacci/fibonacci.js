
// function takes in the INDEX of the fibonacci number.
const fibonacci = function(i) {
   
    // establish first two numbers in sequence as edge cases
    let arr = [1, 1];
    // negative numbers return OOPS string
    if (i < 0) {
        return "OOPS";
    // return first two numbers as edge cases
    } else if (i === 1 || i === 2) {
        return 1;
    } else {
        // any index requested above 2
        while (arr.length < i) {
            let addedNum = (arr[arr.length - 2] + arr[arr.length -1])
            arr = arr.concat([addedNum]);
        }
    }
    console.log(arr);
    // return arr[1-i] to avoid zero indexing issue
    return arr[i-1];
};

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
