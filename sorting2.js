function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};
//[2,6,9,5,4]
//[2,6] [9,5,4]
//[2][6]          [9][5,4]
//                       [5]  [4]
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};
//[5] [4]  [5,4]
// [4,5]

// [9], [4,5], [9,5,4]
// [4,5,9]
function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0; //2
    let outputIndex = 0; //2
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

const arr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 2, 6, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5,];
//console.log(mergeSort(arr));

const LinkedList = require('./linkedLists/linkedLists');

let list = new LinkedList();
    list.insertLast(43);
    list.insertLast(4);
    list.insertLast(13);
    list.insertLast(6);
    list.insertLast(99);
    list.insertLast(2);
    list.insertLast(9);
    list.insertLast(11);
    class _Node {
        constructor(value, next) {
            this.value=value,
            this.next=next;
        }
    }

function sortingLinkedList(linkedList) {
    
    let countingList = (l) => {
        let node = l.head;
        let count = 1;
        while (node.next !== null) {
            node = node.next;
            count++;
        }
        return count;
    }
    let listLength = countingList(linkedList)

    const middle = Math.floor(listLength / 2);
    let count = 1;
    let node = linkedList.head;
    let leftList = new LinkedList(node);
    leftList.head = node;
    let rightList;

    while (count !== middle) {
        node = node.next;
        count++;
    }
    rightList = new LinkedList(node.next);
    rightList.head = node.next;
    node.next = null;
    
    console.log('RIGHTLIST', JSON.stringify(rightList), 'BETWEEN', JSON.stringify(leftList), 'LEFTLIST');

    //base case
    if (leftList.head.next === null) {
        return leftList;
    }
    if (rightList.head.next === null) {
        return rightList;
    }
    let left = sortingLinkedList(leftList);
    let right = sortingLinkedList(rightList);

    return listMerge(left, right);
}


function listMerge(left, right) {
    let leftNode = left.head;
    let rightNode = right.head;
    let tempNode = null;
    let result = new LinkedList();
   
    
    console.log(leftNode, 'LOGGING', rightNode)

    while (leftNode.next !==null && rightNode.next !==null) {
        
        if (leftNode.value < rightNode.value) {
            tempNode = leftNode;
            leftNode.next = rightNode;
            console.log(leftNode, rightNode, leftNode.next, 'JJJJJJ????????????')
        } else {
            tempNode = rightNode;
            rightNode.next = leftNode
            console.log(tempNode, 'HHHHHHHHHHH')
        }
        console.log(JSON.stringify(result), 'RESULT')
        if (result.head === null) {
            result.head = new _Node(tempNode);
            resultNode = result.head;
        } else {
            resultNode.next = new _Node(tempNode)
        }
    }
    console.log(resultNode, 'RESULTNODE', leftNode, 'LEFT')
    resultNode.next = leftNode;
    while (resultNode.next) {
        resultNode = resultNode.next;
    }
    resultNode.next = rightNode
    return result;

}
console.log(JSON.stringify(sortingLinkedList(list)))

//BUCKET SORT
// [8,6,9,1]
function bucketSort(arr, bucketCount) {
    const min = 1;
    const max = 98;
    const buckets = [];
    
    for(let i = 0; i<arr.length; i++) {
        let newIndex = Math.floor((arr[i] -min) / bucketCount);
        buckets[newIndex] = buckets[newIndex] || [];
        buckets[newIndex].push(arr[i]);
    }
    
    let index = 0;
    for (i = 0; i < buckets[i].length; i ++){
        mergeSort(buckets[i]);
        console.log(buckets,' KKKKKKKKKKKKK')
        for(let j = 0; j< buckets[i].length; j ++) {
            arr[index ++] = buckets[i][j]
        }
        return arr;
    }
        
}
//console.log(bucketSort(arr, 8))

//QUICKSORT
// [13, 5, 1]
// i = 2
// j = 0

// [1, 5, 13]
// i = 1
// j = 1

// 1, 5, 13
function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

    // [13, 5, 1]
    // start = 0
    // end = 3
    // pivot = 1
    // j = 0
    // i = 2

    // array = [1, 5, 13]
    // start = 1
    // end = 3
    // pivot = 13
    // j = 2
    // i = 2

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }

    swap(array, end - 1, j);
    // [1, 5, 13]
    return j;
};
    // ROUND 1
    // [1, 5, 13]
    // start = 0
    // end = 3
    // middle = 0

    // ROUND 2
    // [1, 5, 13]
    // start = 0
    // end = 0

    // ROUND 3
    // [1, 5, 13]
    // start = 1
    // end = 3
    // middle = 2

    // ROUND 4
    // []
// quickSort takes array, start = 0, end = array.length

function quickSort(array, start = 0, end = array.length) {
    // break case if start is greater or equal to end
    if (start >= end) {
        return array;
    }
    
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

//console.log(quickSort(arr), 'here?')
//Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array). => quickSort
const array = [1, 2, 3, 4, 5];
// i = 3
// temp = 5
// [ 1, 2, 3, 4, 5]
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array;
}
//console.log(shuffleArray(array))


const data = [
    'Atomic habits',
    'Eight limbs of yoga',
    'Watching you',
    'SQL for dummies',
    'Color theory',
    'Introduction to crafts',
  ];
function abcOrder (str1, str2, charIndex=0) {
    //returns true if str1 comes before str2 in abc order
    //returns false if str2 comes before str1 in abc order
    //if strings are identical, return true
    if (str1 === str2) {
      return true;
    }
    if (str1.toLowerCase().charCodeAt([charIndex]) < str2.toLowerCase().charCodeAt([charIndex])) {
      return true;
    }
    else if (str1.toLowerCase().charCodeAt([charIndex]) > str2.toLowerCase().charCodeAt([charIndex])) {
      return false;
    }
    else {
      return abcOrder (str1, str2, charIndex+1);
    }
  }
  
  //do a slightly modified merge sort on the array 
  //to account for the difference in input type
  
  function mSortStrings (arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const middle = Math.floor(arr.length/2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
  
    left = mSortStrings (left);
    right = mSortStrings (right);
    return mergeStringArr (left, right, arr);
  }
  
  function mergeStringArr (left, right, arr) {
    let leftI = 0;
    let rightI = 0;
    let outputI = 0;
    while (leftI < left.length && rightI < right.length) {
      if (abcOrder(left[leftI], right[rightI])) {
        arr[outputI++] = left[leftI++];
      }
      else {
        arr[outputI++] = right[rightI++];
      }
    }
    for (let i = leftI; i < left.length; i++) {
      arr[outputI++] = left[i];
    }
    for (let i = rightI; i < right.length; i++) {
      arr[outputI++] = right[i];
    }
    return arr;
  }
  console.log(mSortStrings(data))
  
  
  
  
    