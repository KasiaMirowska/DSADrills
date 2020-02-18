//1. Understanding merge sort
// Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

// What is the resulting list that will be sorted after 3 recursive calls to mergesort? => [21, 1, 26, 45,]
// What is the resulting list that will be sorted after 16 recursive calls to mergesort? =>[28]
// What are the first 2 lists to be merged? => [1] and [21]
// Which two lists would be merged on the 7th merge? [1, 21, 26, 45,] and [2,9,28,29]




// half1 = [ 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
// // second run 
// [21, 1, 26, 45, 29, 28, 2, 9]
// //third run 
// [21, 1, 26, 45,]
// //forth
// [21, 1,]
// //5th 
// [21]
// //6th
// [1]
// //7th
// [1,21]//merge 1
// //8th
// [26,45]
// //9th
// [26]
// //10th
// [45]
// //11
// [26,45] //merge2
// //12th
// [1,21,26,45] //merge 3
// //13
// [ 29, 28, 2, 9]
// //14th
// [29,28]
// //15th
// [29]
// //16th
// [28]
// //17th
// [28,29] //merge4

//Drill2
//1. Pivot could be only 14 

//• PIVOT AS LAST ELEMENT
// [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]//12 is pivot, first partition
//  [10, 3, 9, 12, 14, 17, 13, 15, 19, 16] //12 gets put in its place and we start requesive calls
//     [10, 3, 9,] [14, 17, 13, 15, 19, 16]// 9 becomes a pivot, second partition
//     [3, 9,10] [14, 17, 13, 15, 19, 16]
    
    
//     [14, 17, 13, 15, 19, 16] //right side of the arr, 16 is pivot, third partition
//     [14,13,15,16] [19] //16 gets put in its place and we start reqursive calls
//     [14,13,15] [16,19]//15 is a pivot, forth partition
//     [13,14, 15]
    
    
//• PIVOT AS FIRST ELEMENT  
//     [14, 17, 13, 15, 19, 10, 3, 16, 9, 12] //14 is pivot
//     [13, 10,3,9,12,14] [17,15,19,16] //we put it in its place, first partition, 13 is pivot
//     [10,3,9,12,13][14] //13 found place,10 is pivot, second partition
//     [3,9,10] [12,13,14]//10 put into place 
//     //the other side, 17 is pivot
//     [15,16, 17, 19] //17 put to place, 

//[3,9,10] is a list after second partition in both cases

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
    [arr[pIndex], pivot] = [pivot, arr[pIndex]]
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
//console.log(quickSort(arr))


//MERGE SORT


function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);
console.log(left, '????????')
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

function merge(left, right, arr) {
    console.log(left, 'HERE??')
    // let left = left.length;
    // let right = right.length;
    let indexA = 0;
    let indexB = 0;
    let indexC = 0;
    while (indexA < left.length && indexB < right.lenght) {
        if (left[indexA] < rightA[indexB]) {
            arr[indexC] = left[indexA]
            leftA[indexA]++;
        }
        else {
            arr[indexC] = right[indexB];
            right[indexB]++;
        }
        arr[indexC]++;
    }
    while (indexA < left) {
        arr[indexC] = left[indexA]
        left[indexA]++;
        arr[indexC]++;
    }
    while (indexB < right) {
        arr[indexC] = right[indexB]
        right[indexB]++
        arr[indexC]++;
    }
    return arr;
}
console.log(mergeSort(arr))