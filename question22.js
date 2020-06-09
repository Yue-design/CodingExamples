/*****************************
* RECURSION RANGE OF NUMBER
*/

// write a recursive function return an array of integers beginning with the startNum and end with the endNum
function rangeOfNumbers(startNum, endNum) { // assuming startNum is less than or equal to the endNum
    if (startNum === endNum) {
        return [startNum];
    } else {
        // let arr = rangeOfNumbers(startNum+1, endNum); // add to the end of the element
        let arr = rangeOfNumbers(startNum, endNum-1);
        arr.push(endNum);
        return arr;
    }
};

// test cases 
console.log(rangeOfNumbers(1, 5)); // [1, 2, 3, 4, 5]
console.log(rangeOfNumbers(6, 9)); // [6, 7, 8, 9]
console.log(rangeOfNumbers(4, 4)); // [4]
// console.log(rangeOfNumbers(6, 4)); // []
