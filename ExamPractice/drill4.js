
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
    
}
//B->i->l->b->o->a 
// B->i->l->b->o
let list1 = new LinkedList();
list1.insertLast('B');
list1.insertLast('i');
list1.insertLast('l');
list1.insertLast('b');
list1.insertLast('o');
list1.insertLast('a');
// console.log(JSON.stringify(list1))

let list2 = new LinkedList();
list2.insertLast('B');
list2.insertLast('i');
list2.insertLast('l');
list2.insertLast('b');
list2.insertLast('o');
list2.insertLast('a');
// console.log(JSON.stringify(list2))

let compare =(list1, list2) => {
    let currNode1 = list1.head;
    let currNode2 = list2.head;

    while (currNode1.next !== null && currNode2.next !== null) {
        if(currNode1.value === currNode2.value) {
            currNode1 = currNode1.next;
            currNode2 = currNode2.next
        } else if(currNode1.value > currNode2.value) {
            return -1;
        }
        else {
            return 1;
        }
    }
    if (currNode1.next !==null) {
        return 1;
    } else if(currNode2.next !==null){
        return -1;
    } else {
        return 0;
    }

}
console.log(compare(list1, list2));
