// This is array in which we want to find.
let arr = [];
// This represents start.
let start = 0;
// The number we want to find.
let target = 1234;

for (let i = 0; i <= 2048; i++) {
    arr.push(i);
}

// This variable contains the length of the variable and "-1" is because index starts at 0.
let end = arr.length -1;

// The main function.
function binarySearch(arr ,start, end, target) {
    // Prevents from infinite looping.
    if(start > end) return false;

    
    let midIndex = Math.floor((start + end)/2);

    if (arr[midIndex] == target) return true;

    if (arr[midIndex] > target) return binarySearch(arr, start, midIndex - 1, target);
    else return binarySearch(arr, midIndex + 1, end, target);
}

console.log(binarySearch(arr, start, end, target));
