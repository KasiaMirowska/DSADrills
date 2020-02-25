
//linear search
function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
};

function binarySearch(array, value, start, end) {
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    console.log(index)
    const item = array[index];

    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};

//Drill 1:
const arr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
const value = 8;

// [3, 5, 6, 8, 11, 12, 14, 15, 17, 18], v=8, index = 5 s=0 e=5(arr.lenght not index);  index calculation 0+5=5/2=2
//[3, 5, 6, 8, 11, 12, 14, 15, 17, 18], v=8, index=2 s=3 e=4  index calculation  3+4 =7/2=3
//[3, 5, 6, 8, 11, 12, 14, 15, 17, 18], v=8, index =3 array[index] = 8 === value


//Drill2:  not getting exactly the split in half
const value2 = 16;
//[3, 5, 6, 8, 11, 12, 14, 15, 17, 18], v = 16, index = 5 s=6 e=10, index calculation 6+10(arr.lenght not index)=16/2=8
//[3, 5, 6, 8, 11, 12, 14, 15, 17, 18], v = 16, index =8 s=6 e=7, index calculation 6+7 =13/2=6
//[3, 5, 6, 8, 11, 12, 14, 15, 17, 18], v = 16, index =6 s=7 e=8 index cal 7+8=15/2=7
//[3, 5, 6, 8, 11, 12, 14, 15, 17, 18], v = 16, index = 7, s=7 e=index-1=6 so end is < start therefore returns -1

console.log(binarySearch(arr, 8))


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value);
        this.count = 1;
    }
    insert(value) {
        this.count++;
        let newNode = new Node(value);

        const searchTree = (node) => {
            if (value > node.value) {
                if (!node.left) {
                    node.left = newNode;
                } else {
                    searchTree(node.left)
                }
            }
            if (value < node.value) {
                if (!node.right) {
                    node.right = newNode;
                } else {
                    searchTree(node.right)
                }
            }
        }
        searchTree(this.root)
    }
    traverseInOrder() {
        let result = [];
        const traverse = (node) => {
            if (node.left) {
                traverse(node.left);
            }
            result.push(node.value);
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root)
        return result;
    }

    traversePreOrder() {
        let result = [];
        const traverse = (node) => {
            result.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root)
        return result;
    }

    traversePostOrder() {
        let result = [];
        const traverse = (node) => {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }
}
//DRILL 4:
//in-order : [14 15 19 25 27 35 79 89 90 91] left, root, right
//pre-order: [35 25 15 14 19 27 89 79 91 90] root, left, right, 35 is a root                 
//post-order: [14,19,15,27,25,79,90,91,89,35], left,right,root

//                 35
//         25                  89
//     15       27        79        91
// 14     19                     90

const bst = new BST(25);
bst.insert(25);
bst.insert(15);
bst.insert(50);
bst.insert(10);
bst.insert(24);
bst.insert(35);
bst.insert(70);
bst.insert(4);
bst.insert(12);
bst.insert(18);
bst.insert(31);
bst.insert(44);
bst.insert(66);
bst.insert(90);
bst.insert(22);
console.log(bst)
bst.traverseInOrder()
console.log(bst.traverseInOrder())
console.log(bst.traversePreOrder())
console.log(bst.traversePostOrder())

//this is not a search tree exactly because left branch values are higher than right...(I switched the BST class)
const bst2 = new BST("picard");
bst2.insert('riker');
bst2.insert('data');
bst2.insert('worf');
bst2.insert('LaForge');
bst2.insert('crusher');
bst2.insert('security-officer');
bst2.insert('selar');
console.log(bst2)

//making a list of names in ranking order (from smallest to highest)
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

}
function traverseBreadth() {
    let result = new Stack();
    let list = [];

    list.push(bst2.root)
   
    while (list.length) {
        let currNode = list.shift();
        console.log(currNode)
        
        if (currNode.left) {
            list.push(currNode.left)
        }
        if (currNode.right) {
            list.push(currNode.right)
        }
        result.push(currNode.value);
    }
   return JSON.stringify(result);
}
console.log(traverseBreadth())


const dailyValues = [128, 97, 121, 123, 98, 97, 105]
//find max profit if buying the stopck one day and selling subsequent...
//• need to find the lowest value (bought stock) => seperate array and sort
//• starting from lowest value index in original array, sort the remaining values
//• find the highest value and deduct the lowest to calculate the profit

function maxProfit(arr) {
let tempArr = [...arr].sort((a,b) => a-b)
let lowestPrice = arr[indexOf(arr, tempArr[0])]
let remainingDaysArr = arr.slice(1)
let highestAvailablePrice = remainingDaysArr.sort((a,b) => b-a)[0]
return highestAvailablePrice - lowestPrice;
}

console.log(maxProfit(dailyValues))