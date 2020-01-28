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
                tempNode = tempNode.next; //wahts tempNode.next
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
        while((this.head !== null) && (this.head.value !== item)) {
           previousNode = currNode;
           currNode = currNode.next;           

        }
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
    insertAfter(item, key) {
        let currNode = this.head;

        if(this.head === null || !this.head) {
            this.insertFirst()
        }
        while(currNode.next !== null) {
            if(currNode.value === key) {
                return currNode.next = new _Node(item, currNode)
            }
            currNode = currNode.next;
            console.log(currNode, currNode.next ,'CURRR + NEXT')
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
                return prevNode.next = new _Node(item, index)
            }
        }
        return currNode = new _Node(item, null)
    }
}

//create a linked list with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.

function main() {
    let SLL = new LinkedList()
    SLL.insertFirst("apollo");
    SLL.insertFirst("boomer");
    SLL.insertFirst('husker');
    SLL.insertFirst('Helo');
    SLL.insertFirst('Starbuck')
    console.log(SLL, 'LIST BEFORE ')
    // SLL.remove(item)
    
    SLL.insertBefore('HAAHA', 'boomer')
    
    SLL.insertAfter('Test', 'HAAHA')
    SLL.insertAt('Kasia', 2)
    console.log(SLL, "LIST AFTER")
    return SLL;
}
 console.log(main())   
  let newList = main()
  console.log(main(), '????????') 
//mystery program- is it creating copies of each element of the list? or checking for duplicates?




function findSize(list){
    let currNode = list.head;
    let count = 0;
    let size;
    if(!list.head) {
        return 0
    }
    while(currNode.next !== null) {
        count ++;
        size = count;
    }
    return size;
}
console.log(findSize(newList))