function quickSort(arr, start, last) {
  //Main function.
  if (start < last) {
    let pivot = partition(arr, start, last);
    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, last);
  }
  return arr;
}

function partition(arr, start, last) {
  //This function is for partition of array.
  let i = start - 1;
  let pivot = arr[last];

  for (let j = start; j <= last; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  i++;
  temp = arr[i];
  arr[i] = arr[last];
  arr[last] = temp;
  return i;
}

function generateRandomNumbers() {
  //This function generates random number from 1 to 100
  let arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
  }
  return arr;
}

arr = generateRandomNumbers();

console.log("Initial value of the array:", arr);

arr = quickSort(arr, 0, arr.length - 1);
console.log("Sorted array:", arr);
