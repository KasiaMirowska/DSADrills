//1. Understanding merge sort
// Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

// What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// What are the first 2 lists to be merged?
// Which two lists would be merged on the 7th merge?




// half1 = [1, 2, 9, 21, 26, 28, 29, 45]
// half2 = [16, 27, 34, 39, 40, 43, 46, 49]
// // second run 
// [1, 2, 9, 21]
// [26, 28, 29, 45]
// [16, 27, 34, 39]
// [40, 43, 46, 49]
// //third run
// [1, 2][9, 21][26, 28][29, 45][16, 27][34, 39][40, 43][46, 49]
// 1, 2, 9, 21, 26, 28, 29, 45, 16, 27, 34, 39, 40, 43, 46, 49






//MERGE SORT

function merge(leftArr, rightArr, arr) {
    let left = leftArr.length;
    let right = rightArr.length;
    let indexA = 0;
    let indexB = 0;
    let indexC = 0;
    while (left[indexA] < left && right[indexB < right]) {
        if (left[indexA] <= right[indexB]) {
            arr[indexC] = left[indexA]
            left[indexA]++;
        }
        else {
            arr[indexC] = right[indexB];
            right[indexB]++;
        }
        arr[indexC]++;
    }
    while (left[indexA] < left) {
        arr[indexC] = left[indexA]
        left[indexA]++;
        arr[indexC]++;
    }
    while (right[indexB < right]) {
        arr[indexC] = right[indexB]
        right[indexB]++
        arr[indexC]++;
    }

}


//QUICK SORT
//we're NOT creating seperate arrays while sorting, we're working with the same array => 'in place sorting algorithm'
//find the middle and all smaller than pivot values are sorted on the left
function partition(arr, start, end) {
    // start = arr[0]
    // end = arr.length - 1;
    let pivot = arr[end];
    let pIndex = start;
    //going through the whole arr and placing all elements smaller than pivot on the left of the pivot
    for (let i = start; i < arr.length; i++) {//at the atart i and pIndex are 0. if i happens to be greater then pivot nothing happens and i just jumps forward, then if i is smaller than pivot we will swap position i with pIndex and incement both pIndex and i and they are one and the same again. when we reach the pivot we swap pIndex with pivot (pivot is not at the end of the arr any more)
        if (arr[i] <= pivot) {
            //swap(arr[i], arr[pIndex])
            [arr[i], arr[pIndex]] = [arr[pIndex], arr[i]]
            arr[pIndex]++
        } 
    }
    //swap(arr[pIndex], pivot);//pivot becomes partition index in the 'middle'
    [arr[pIndex], arr[end]] = [arr[end], arr[pIndex]]
    return [arr[pIndex]];
}

function quickSort(arr, start, end) {
    // start = arr[0]
    // end = arr.length - 1;
    
//recursion base case:
    if(start >= end) {
        return
    }

    const pIndex = partition(arr, start, end); //calling partition
    arr = quickSort(arr, start, pIndex);
    arr = quickSort(arr, pIndex+1, end);
    return array;
}


const arr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 2,6, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5,];
console.log(quickSort(arr))