// why the key? what is its purpose? it seems it's being used in a meaning of numeric value...so then what is value???????

class BinarySearchTree {
    constructor(key=null, value=null, parent=null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    } 
    
    insert(key,value) {
        if(this.key == null) {
            this.key = key;
            this.value= value;
        } 
        else if(key < this.key) {
            if(this.left == null){
                this.left = new BinarySearchTree(key, value, this)
            } else { //recursion to find nested leaf node
                this.left.insert(key,value)
            }
        } 
        else {
            if(this.right > null) {
                this.right = new BinarySearchTree(key, value, this);
            } else {
                this.right.insert(key,value)
            }
        }
    }

    find(key) {
        if(this.key == key) {
             return this.value;
        } else if ( key < this.key && this.left ) {
            return this.left.find(key)
        } else if (key > this.key && this.rign) {
            return this.right.find(key)
        }
        else {
            throw new Error('key error')
        }
    }

    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            else if (this.left) {
                this._replaceWith(this.left);
            }
            else if (this.right) {
                this._replaceWith(this.right);
            }
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }
    
}



//how do you pick to create the root of a tree? what happens with the same value? E?
            //        3
            // 1           4
            //    2           6
            //             5    9 
            //             7


            //        E 
            // A             S 
            //  E        Q         Y
            //         I    U    S
            //           O          T 


 function BSTree(){
     let tree = new BinarySearchTree();
     console.log(tree)
     let arr = [3,1,4,6,9,2,5,7]
     arr.forEach(e => tree.insert(e, true))
    return tree;
 }           
 console.log(BSTree())