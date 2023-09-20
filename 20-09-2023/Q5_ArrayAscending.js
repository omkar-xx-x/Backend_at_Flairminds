const customSort = (a, b) => {
    let diffA = Math.abs(a - 10);
    let diffB = Math.abs(b - 10);
    // If the difference is same , eg 8 and 12 in the following example has same absolute difference take the value with smallest number  
    if (diffA === diffB) {
        return a - b;
    }
    return diffA - diffB;
};
let inputArray = [5, 12, 13, 10, 8, 20, 1];
let sortedArray = inputArray.sort(customSort);
console.log(sortedArray);
