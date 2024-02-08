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
    return arr;
}

let arr = ['b', 'c', 'd', 'e','q', 'a'];//Change it how you like

console.log(sortStringArrays(arr));