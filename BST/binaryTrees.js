



class BinarySearchTree {
    constructor(key=null, value = null, parent = null){
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        //creates root in empty tree
        if(this.key == null) {
            this.key = key;
            this.value = value;
        }
        //tree not empty:
        //left side check
        else if(key < this.key){
            if(this.left == null){
                this.left = new BinarySearchTree(key, value, this);
            }
            else {
                this.left.insert(key, value)
            }
        }
        //right side check:
        else {
            if(this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value)
            }
        }
    }
    find(key) {
        if(this.key == key) {
            return this.value;
        }
        else if(key < this.key && this.left) {
            return this.left.find(key);
        }
        else if(key > this.key && this.right) {
            return this.right.find(key);
        }
        else {
            throw new Error('key error')
        }
     }
     remove(key) {
         //if the key is a root node
         if(this.key == key) {
            if(this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key); //not getting the purpose of this line...we're not removing succesor but a given key. this is as if removing itself...
            }
            else if(this.left) {
                this._replaceWith(this.left);
            }
            else if(this.right) {
                this._replaceWith(this.right);
            }
            //if no children
            else {
                this._replaceWith(null);
            }
         }
         else if(key < this.key && this.left) { //why are we repeating the logic here again?
             this.left.remove(key)
         }
         else if(key > this.key && this.right) {
             this.right.remove(key)
         }
     }
     _replaceWith(node) {
        if (this.parent) { 
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent;
            }//not clear about how this one works ^ 
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }
    }

function mainBST() {
    const tree = new BinarySearchTree();
    //why do we have a key and value if they are the same? or if not when are they different?
    tree.insert(3, 3, this);
    tree.insert(1,1, this);
    tree.insert(4,4, this);
    tree.insert(6,6, this);
    tree.insert(9,9, this);
    tree.insert(2,2, this);
    tree.insert(5,5, this);
    tree.insert(7,7, this);
    //console.log(tree) 

    function treeSum(t){
        if(!t){
            return 0;
        }
        return treeSum(t.left) + t.value + treeSum(t.right)
    }
    let found = tree.find(5) 
    //tree.remove(3);
    //console.log(found, tree, 'AFTER REMOVAL') 
    return tree;
}
//console.log(mainBST(6))
   

                        //         3

                        //               4
                        //                    6
                        //                  5      9
                        //                      7
                        //                    2       




//to find height of a tree = finding the hight of the root node which consists of the heighest height of its subtrees + 1
//if parent of subtree = 0 then it has no children , returns -1 => base case of recursion
const tree = new BinarySearchTree();
    //why do we have a key and value if they are the same? or if not when are they different?
    tree.insert(3, 3, this);
    tree.insert(1,1, this);
    tree.insert(4,4, this);
    tree.insert(6,6, this);
    tree.insert(9,9, this);
    tree.insert(2,2, this);
    tree.insert(5,5, this);
    tree.insert(7,7, this);
    console.log(tree) 

function findHeight(node) {
    let count = 0;
     //how do I refer to the first node in a tree? 
    
    if(tree.left === null && tree.right === null){
        return;
    }
    console.log(tree.left)
    if(tree.left === null){
        count = -1;
    }
    if(tree.right === null){
        count = -1
    }
    count++;

    let lH = findHeight(tree.left);
    let rH = findHeight(tree.right);
    console.log(lH, rH, "HEIGHTS")
    let treeHeight = lH > rH ? lH + 1 : Rh +1
    return treeHeight;
}
//console.log(findHeight(tree), 'HERE')


function checkIfBinarySearch(tree, node) {
    if(!tree.value){
        return ;
    }
    if(tree.left && tree.left.value > tree.value ){
        return false;
    }
    if(tree.right && tree.right.value < tree.value){
        return false;
    }
    if(!checkIfBinarySearch(tree, tree.left)|| !checkIfBinarySearch(tree, tree.right)) {
        return false;
    }
    return true;
}
//console.log(checkIfBinarySearch(tree, 3))

function find3rdMax(tree) {
    //how do I refer to the first node in a tree?
    let result = [];
    const traverse = (node) => {
        if(!tree.left || !tree.right){
            return;
        }
        if(tree.left) traverse(tree.left)
        result.push(node.value);
        if(tree.right) traverse(tree.right);
    }
    traverse(tree.root)
     return result.sort()[result.length-3];   
    
    
    
}
console.log(find3rdMax(tree), 'ARRAY???????')