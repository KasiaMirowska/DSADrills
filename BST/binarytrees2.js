class Node  {
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

    size() {
        return this.count;
    }

    insert(value) {
        this.count++;
        let newNode = new Node(value);

        const searchTree = (node) => {
            if(value < node.value){
                if(!node.left) {
                    node.left = newNode;
                } else {
                    searchTree(node.left)
                }
            };
            if(value > node.value) {
                if(!node.right) {
                    node.right = newNode;
                } else {
                    searchTree(node.right)
                }
            }
        }
        searchTree(this. root)
    }
    min() {
        //traversing along left node only util no children 
        let currNode = this.root;
        while(currNode.left) {
            currNode = currNode.left;
        }
        
        return currNode.value;
     }

    max() {
        let currNode = this.root;
        while(currNode.right) {
            currNode = currNode.right;
        }
       
        return currNode.value;
    }
    
    contains(value) { //could call it find and then instead of boolean return node or throw error
        let currNode = this.root;
        while(currNode) {
            if(value === currNode.value) {
                return true;
            } 
            if (value < currNode.value) {
                currNode = currNode.left
            } else {
                currNode = currNode.right
            }
        }
        return false;
    }

    // depth searches: looks brench by brench
    //in order: left, root,right
    // 2,3,12,15,28,36,39 (15 is our main root)
                                        
    dfsInOrder() {
        let result = [];
        const traverse = (node) => {
            if(node.left) {
                traverse(node.left)
             } 
            result.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    //pre-order: root,left, right
    //15,3,2,12,36,28,39 (following the edges)
    dfsPreOrder() {
        let result = [];
        const traverse = (node) => {
            result.push(node.value);
            if(node.left) traverse(node.left) 
            if(node.right) traverse(node.right);
        }
        traverse(this.root)
        return result;
    }


    //post-order: left,right,root
    //2,12,3,28,39,36,15 (following the width)
    dfsPostOrder() {
        let result = [];
        const traverse = (node) => {
            if(node.left) traverse(node.left) 
            if(node.right) traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root)
        return result;
    }


    //breadth search => level by level
    bfs() {
        let result = [];
        let queue = [];
        queue.push(this.root)
        //while queue has elements:
        while(queue.length) {
            let currNode = queue.shift();
            result.push(currNode.value);

            if(currNode.left) {
                queue.push(currNode.left);
            }
            if(currNode.right) {
                queue.push(currNode.right)
            }
        }
        return result;

    }
}

const bst = new BST(15);
bst.insert(15);
bst.insert(3);
bst.insert(36);
//bst.insert(1);
bst.insert(12);
bst.insert(28);
bst.insert(39);
bst.insert(7);
                                    //            15
                                    //     3            36
                                    //        12      28  39
 //                                              7                                             
console.log(bst);
console.log(bst.size())
console.log(bst.min())
console.log(bst.max())
console.log(bst.contains(2))
console.log(bst.dfsInOrder())
  // 2,3,12,15,28,36,39 
console.log(bst.dfsPreOrder())
//15,3,2,12,36,28,39  
console.log(bst.dfsPostOrder())
//2,12,3,28,39,36,15
console.log('WIDTH from TOP', bst.bfs())

function findHeight(node) {
    if(node == null) {
        return -1 ;
    }
   
    let lH = findHeight(node.left);
    let rH = findHeight(node.right);
    console.log(node.left, 'KKKKK', node.right)
    console.log(lH, rH, "HEIGHTS")
    return lH > rH ? lH + 1 : rH +1
    
}
//console.log(findHeight(bst.root), 'HERE RECURSION')//what is wrong? this is a copied solution



function checkIfBinarySearch(node){
    if(node === null){
        return true;
    }
    if(!node.left && !node.right) {
        return true; //we have no value but there is a property left and right
    }
    if(!node.left && node.right < node) {
        return false;
    }
    if(!node.right && node.left > node) {
        return false;
    }
    if(node.right && node.left) {
        if(node.right < node) {
            return false;
        }
        if(node.left > node) {
            return false;
        }
    }
    let leftTree = checkIfBinarySearch(node.left);
    let rightTree = checkIfBinarySearch(node.right);
    return leftTree && rightTree;
}
//console.log(checkIfBinarySearch(bst.root))


function find3rd(tree) {
    let array = tree.dfsPostOrder(tree)
    
    return array.sort((a, b) => a - b)[array.length-3];
}
//console.log(find3rd(bst))


function isBalanced(node) {
    if(node == null) {
        return true;
    }
   
    let lH = findHeight(node.left);
    let rH = findHeight(node.right);
    console.log(lH, rH, "HEIGHTS222222")
  
    if((rH - lH) <= 1 && isBalanced(node.left) && isBalanced(node.right)) {
        return true;
    }
    return false;
}

console.log(isBalanced(bst.root))

const array1 = [3, 5, 4, 6, 1, 0, 2];
const array2 = [3, 1, 5, 2, 4, 6, 0]

function checkForEqualTrees(arr1, arr2) {
    if(arr1.length === 0 && arr2.length === 0){
        return true;
    }
    if(arr1.length !== arr2.length) {
        return false;
    }
    
    if(arr1[0] === arr2[0]) {
        let arr1left = [];
        let arr1right = [];
        let arr2left = [];
        let arr2right = [];
        for (let i = 0; i < arr1.length; i ++) {
            if(arr1[i] < arr1[0]) {
                arr1left.push(arr1[i])
            } else {
                arr1right.push(arr1[i])
            }
        }
        for (let i = 0; i < arr2.length; i ++) {
            if(arr2[i] < arr2[0]) {
                arr2left.push(arr2[i])
            } else {
                arr2right.push(arr2[i])
            }
        }
        console.log(arr1left, 'LEFT', arr1right, 'RIGHT')
        console.log(arr2left, 'LEFT', arr2right, 'RIGHT')
        return checkIfBinarySearch(arr1right, arr2right) && checkForEqualTrees(arr1left, arr2left)
    }
   return false;
}
console.log(checkForEqualTrees(array1, array2))