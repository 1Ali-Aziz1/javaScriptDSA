

function quickSort(arr, start, last) {
    // if(last<=start) return;//Base case
    
    if (start < last) {
        let pivot = partition(arr, start, last);
        quickSort(arr, start, pivot-1);
        quickSort(arr, pivot+1, last);
    }
    return arr
}

function partition(arr, start, last) {
    let i = start -1
    console.log(start);
    let pivot = arr[last];
    
    for (let j = start; j <= last; j++) {
        if (arr[j] < pivot) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            console.log("hi");
            i++;
        }
    }
    i++;
	temp = arr[i];
	arr[i] = arr[last];
	arr[last] = temp;
    return i;
}

arr = [3, 5, 9, 8, 2, 1]

arr = quickSort(arr, 0, arr.length -1)
console.log(arr);
