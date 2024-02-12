//We are gonna an array which contains string
//We can use arr.sort to sort it but we will create it by ourselves to learn something. Where "arr" is the array we wanna sort.
//Note: This function uses bubbleSort algorithm

function sortStringArrays(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if (arr[j]>arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;//Returns the Array
}

let arr = ['b', 'c', 'd', 'e','q', 'a', 's','n', 'k', 'l', 'x', 't', 'u', 'z'];//Change it how you like

let sortedArr = sortStringArrays(arr);//This variable stores the sorted value of the unsorted array.

console.log("The initial value of array:", arr);//Shows the Initial value of the array
console.log("The sorted value of array:", sortedArr);//Shows the value of array after sorting it out