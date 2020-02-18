class _Node {
    constructor(value, next) {
        this.value=value,
        this.next=next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item){
        this.head = new _Node(item, this.head);
    }

    insertLast(item){
        if(this.head === null){
            this.insertFirst(item);
        }
        else{
            let tempNode = this.head;
            while(tempNode.next !== null){
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    /**Inserts a new node after a node containing the key.*/
    insertAfter(key, itemToInsert){
        let tempNode = this.head;
        while(tempNode !== null && tempNode.value !== key){
            tempNode = tempNode.next;
        } 
        if(tempNode !== null){
            tempNode.next = new _Node(itemToInsert, tempNode.next);
        }  
    }
    /* Inserts a new node before a node containing the key.*/
    insertBefore(key, itemToInsert){
        if(this.head == null){
            return;
        }
        if(this.head.value == key){
            this.insertFirst(itemToInsert);
            return;
        }
        let prevNode = null;
        let currNode = this.head;
        while(currNode !== null && currNode.value !== key){
            prevNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null){
            console.log('Node not found to insert');
            return;
        }
        //insert between current and previous
        prevNode.next = new _Node(itemToInsert, currNode);
    }
    insertAt(nthPosition, itemToInsert) {
        if (nthPosition < 0) {
            throw new Error('Position error');
        }
        if (nthPosition === 0) {
            this.insertFirst(itemToInsert);
        }else {
            // Find the node which we want to insert after
            const node = this._findNthElement(nthPosition - 1);
            const newNode = new _Node(itemToInsert, null);
            newNode.next = node.next; 
            node.next = newNode;
        }
    }
    _findNthElement(position) {
        let node = this.head;
        for (let i=0; i<position; i++) {
            node = node.next;
        }
        return node;
    }
    remove(item){ 
        //if the list is empty
        if (!this.head){
            return null;
        }
        //if the node to be removed is head, make the next node head
        if(this.head.value === item){
            this.head = this.head.next;
            return;
        }
        //start at the head
        let currNode = this.head;
        //keep track of previous
        let previousNode = this.head;
        while ((currNode !== null) && (currNode.value !== item)) {
            //save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null){
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
    find(key) { //get
        //start at the head
        let currNode = this.head;
        //if the list is empty
        if (!this.head){
            return null;
        }
        while(currNode.value.key !== key) {
            //return null if end of the list 
            // and the item is not on the list
            if (currNode.next === null) {
                return null;
            }
            else {
                //keep looking 
                currNode = currNode.next;
            }
        }
        //found it
        return currNode;
    }
}
module.exports = LinkedList;

//mystery program- is it creating copies of each element of the list? or checking for duplicates?

function cia() {
    let newList = new LinkedList();
    console.log(newList)
    newList.insertFirst('Boomer');
    newList.insertFirst('Kasia');
    newList.insertFirst('Jake');
    newList.insertBefore('Gigi', 'Kasia')
    newList.insertAt('bs',2);
    newList.insertAt('Coco', 2)
    newList.remove('bs')
    newList.insertAfter('AfterTest', 'Gigi')
    return newList;
}
console.log(JSON.stringify(cia()), 'HERE????')
let outsideL = cia();




function findSize(list){
    let currNode = list.head;
    let count = 0;
    if(list.head === null) {
        return 0
    }
    while(currNode.next !== null) {
        currNode = currNode.next;
        count ++;
    }
    return count +1;
}
console.log(findSize(outsideL), "SIZE?????")

function display(list) {
    let currNode = list.head;
    while(currNode.next !== null) {
        console.log(currNode);
        currNode = currNode.next
    }
    console.log(currNode.value)
}

display(outsideL), console.log("CONTENT????")

function isEmpty(list) {
    if(list.head === null) // or if(!list.head) 
    {
       return true;
    }
    return false
}

let testList = new LinkedList();
console.log(isEmpty(testList))

function findPrevious(list, item) {
    let currNode = list.head;
    let previousNode = list.head;
    if(list.head === null) {
        return null;
    }
    
    while(currNode.next !== null) {
        if(currNode.value === item){
            return previousNode;
        }
        previousNode = currNode;
        currNode = currNode.next;
    }
    return null;
        // Same as line 187 and we return null because we were not able to found the previous of the searched item
        // so we return null;
}
console.log(findPrevious(outsideL, 'Gigi'), "FIND PREVIOUS")

function findLast(list) {
    let currNode = list.head;
    if(list.head === null) {
        return null;
    }
    while(currNode.next !== null) {
        currNode = currNode.next
    }
    return currNode;
}
console.log(JSON.stringify(outsideL))
console.log(findLast(outsideL), "LAST ELEMENT")
 

function reverse(list) {
    //To solve this you should use a "backup" variable to keep safe the nextNode variable
    // And another one to accumulate the reversed nodes
    // reversed starts as null
    // the currentNode start as the head
    // while the currentNode is not null
    // backup next of node so you don't miss the connection
    // the next of the currentNode is your reversed variable
    // the currentNode becames the reversed
    // the next backup becames currentNode
    //Last, you should reassing the head to the value of the reversed
    // 1 -> 2 -> 3
    let reversed = null;
    let currentNode = list.head; // 1
    while(currentNode !== null){ //2
        let next  = currentNode.next; // 3
        currentNode.next = reversed // 2 -> 1 -> null
        reversed = currentNode // 2 -> 1 -> null
        currentNode = next // 3
    }
    list.head = reversed;
    return list;
}
console.log(reverse(outsideL), 'REVERSE') 


function thirdFromEnd(list) {
    let currNode = list.head;
    let previousNode = null;
    let afterPrevNode = null;
    if(list.head === null) {
        return null;
    }
    while(currNode.next !== null) {
        afterPrevNode = previousNode;
        previousNode = currNode;
        currNode = currNode.next;
    }
    return afterPrevNode;
}
console.log(thirdFromEnd(outsideL), "THIRD")

function middle(list) {
    let fastNode = list.head;
    let slowNode =list.head;
   
    if(list.head === null) {
        return null;
    }
    console.log(fastNode.next)
    while(fastNode && fastNode.next !== null) {
        fastNode = fastNode.next.next;
        slowNode = slowNode.next;
    }
    return slowNode;
   
}
console.log(JSON.stringify(outsideL))
console.log(middle(outsideL), 'MIDDLE~~~~~~~~');


function cycleListMaker() {
    let cycleList = new LinkedList();
    cycleList.insertFirst('kasia')
    cycleList.insertFirst('jake')
    cycleList.insertFirst('dog')
    let currNode = cycleList.head;
    console.log(JSON.stringify(cycleList), 'LISTLIST');
    while(currNode.next !== null) {
        currNode = currNode.next
    }
    currNode.next = cycleList.head;
    return cycleList;
}
console.log(cycleListMaker()," CYCLE??????");
let c = cycleListMaker()
// console.log(JSON.stringify(c), 'MAI??????');


function cycleTest(list){
    console.log(list, 'CYCLE LIST?')
    let currNode = list.head;
    if(list.head === null) {
        return null;
    }
    let valueRecord = [];
    console.log(currNode, 'UNDEFINED?????')
    while(currNode.next !== null) {
        if(valueRecord.includes(currNode.value)) {
            return true;
        }
            valueRecord.push(currNode.value);
            currNode= currNode.next;
    }
    return false;
}
console.log(cycleTest(c) ,'DID I FINSh IT??????')