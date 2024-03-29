function generateRandomNumbers() {
    //Generates random numbers from 1 to 100 and pushes each to teh array.
    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(Math.floor(Math.random() * 100) + 1);
    }
    return arr;
}

arr = generateRandomNumbers();//Makes an array with randomly generated number(Using function 'generateRandomNumbers').

console.log("Initial value of array:",arr)//Shows the value of array(Variable arr)

function bubbleSort(arr){
    //Sorting algorithm which uses bubble sort
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if (arr[j]>arr[j+1]) {
                //Swaps the value
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

arr = bubbleSort(arr);

console.log("Value of array after sorting by BubbleSort Algorithm:",arr);