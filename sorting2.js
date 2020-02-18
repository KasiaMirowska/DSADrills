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
    let resultNode = result.head;
    
    console.log(leftNode, 'LOGGING', rightNode)

    while (leftNode && rightNode) {
        
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

// function bucketSort(arr, bucketCount) {
//     const min = 1;
//     const max = 98;
//     const buckets = [];
//     const bucketCount = max || 200;
// }

