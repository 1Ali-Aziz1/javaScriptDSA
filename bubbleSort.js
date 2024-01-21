arr = []

function generateRandomNumbers() {
    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(Math.floor(Math.random() * 100) + 1);
    }
    return arr;
}

//Added comments

arr = generateRandomNumbers();

console.log(arr)

function bubbleSort(arr){
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

arr = bubbleSort(arr);

console.log(bubbleSort(arr));