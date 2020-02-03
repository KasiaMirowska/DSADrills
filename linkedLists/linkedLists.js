class _Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        if(this.head === null){
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head;
            while(this.head !== null) {
                tempNode = tempNode.next; 
            }
            tempNode.next = new _Node(item, null )
        }
    }

    find(item) {
        let currNode = this.head;
        if(!this.head) {
            return null;
        }
        while(currNode.value !== item){
            if(currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        } 
        return currNode;
    }

    remove(item) {
        if(!this.head) {
            return null;
        }
        if(this.head.value === item) {
            this.head = this.head.next;
            return
        }
        let currNode = this.head;
        let previousNode = this.head;
        while((this.head !== null) && (currNode.value !== item)) {
           previousNode = currNode;
           currNode = currNode.next;           
        }
        if(currNode === null) {
            console.log('Item not found');
            return
        }
        previousNode.next = currNode.next
    }
    
    insertBefore(item, key) {
        let currNode = this.head;
        let previousNode = this.head;
        
        if(this.head === null || this.head.value === key) {
            this.insertFirst(item);
        }
        while(currNode.next !== null){
            if(currNode.value === key){
                return previousNode.next = new _Node(item, currNode) 
            }
            previousNode = currNode;
            currNode = currNode.next;
        }
        return currNode.next = new _Node(item,null);
    }
    insertAfter(item, key) {  ////must have an error here 
     
        let currNode = this.head;
       
        if(this.head === null ) {
            this.insertFirst()
        }
        while(currNode.next !== null) {
            if(currNode.value === key) {
                return currNode.next = new _Node(item, currNode.next)
            }
            currNode = currNode.next;
        }
        return currNode.next = new _Node(item, null)
    }
    
    insertAt(item, i) {
        let currNode = this.head;
        let prevNode =this.head;
        let index = 0 ;
     

        if(this.head === null || i === 0){
            this.insertFirst();
        }
        while(currNode.next !== null) {
            if(index < i){
                index++
                prevNode = currNode;
                currNode = currNode.next
            }
            else if(index === i){
                return prevNode.next = new _Node(item, currNode)
            }
        }
        return currNode = new _Node(item, null)
    }
}


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