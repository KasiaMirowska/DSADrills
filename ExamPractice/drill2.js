//Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list.

class _Node {
    constructor(value,next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertLast(item) {
        if(this.head === null) {
            this.head = new _Node(item, this.head)
        } else {
            let tempNode = this.head;
            while(tempNode.next !== null){
                console.log(tempNode)
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null)
        }
    }
    remove(item) {
        if(this.head === null) {
            return null;
        } 
        if(this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        let tempNode = this.head;
        let previousNode = this.head;
        while(tempNode.next !== null && tempNode.value !== item) {
            previousNode = tempNode;
            tempNode = tempNode.next;
        }
        if(tempNode === null) {
            console.log('item not found')
            return;
        }
        previousNode.next = tempNode.next;


    }
}

let list = new LinkedList();
list.insertLast(1);

list.insertLast(2);
list.insertLast(3);
list.insertLast(3);
list.insertLast(3);
list.insertLast(4);

let removeDuplicates=(list)=>{
    let currNode = list.head;
    while(currNode!== null) {
        if(currNode.next.value === currNode.value) {
            console.log(currNode.next.value, 'CURRNEXT', prevNode, 'PREV????')
           list.remove(currNode)
        }
        currNode = currNode.next;
    }
    return list;
}
console.log(JSON.stringify(removeDuplicates(list)))