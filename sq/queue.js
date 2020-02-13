class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }
        if (this.last) {
            this.last.next = node;
        }
        this.last = node
        // so if we start with an empty queue we have queue of node X2 in the end here?
    }

    dequeue() {
        if (this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}
function q() {
    const starTrekQ = new Queue();

    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Chekov');
    return starTrekQ;

}
const starTrek = q();
console.log(JSON.stringify(starTrek))

function peek(queue) {
    if (queue.first === null) {
        return null;
    }
    return queue.first;
}

console.log(peek(starTrek))

function isEmpty(queue) {
    if (queue.first === null) {
        return true;
    }
    return false;
}
console.log(isEmpty(starTrek))
//there is no way to see full queue without loosing the elemnets in the process

function display(queue) {
    let node;
    node = queue.dequeue();
    while (node) {
        console.log(node)
        node = queue.dequeue();
    }
    return null;
}
//console.log(display(starTrek), 'DISPLAY');

function remove(item, queue) {
    let node = queue.first;
    while (node) {
        if (node.value !== item) {
            node = queue.dequeue()
        }
        queue.dequeue(node)
        display(queue)
    }

}
console.log(remove('Spock', starTrek), "REMOVE")


//Drill 7:
//creating doubly linked list
class _DoubleNode {
    constructor(value, next, previous) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    //stack-up

    insertFirst(item) {//wens
        // newNode = new Node('Wens', null, null)
        let newNode = new _Node(item, this.head, this.tail);
        if (this.head !== null) {//when we have a node in the queue
            newNode.next = this.head; // 'Wens' -> 'Kasia'
            this.head.prev = newNode; // 'Wens' <- 'Kasia'
        }
        this.head = newNode; // 'Wens'
        if (this.tail === null) { //this get executed when the queue is empty
            this.tail = newNode;
        }
    }
    // //kind of enqueue
    // insertAfter(item) {
    //     let currNode = this.head;
    //     if (this.head === null) {
    //         this.insertFirst(item)
    //     }
    //     while (this.head !== null) {
    //         if (currNode.value === item) {
    //             return currNode.next = new _Node(item, currNode.next, currNode)
    //         }
    //         currNode = currNode.next;
    //     }
    //     return currNode.next = new _Node(item, null, null)
    // }
}

function makeQueueWithList() {
    let list = new DoublyLinkedList();
    console.log(list)
    list.insertFirst('Kirk');
    list.insertAfter('Joe')

}

console.log(makeQueueWithList(), 'LIST??????')
console.log(JSON.stringify(makeQueueWithList()), 'HERE????')

function makeDanceQueue() {
    let queue = new Queue();
    queue.enqueue('F Jane');
    queue.enqueue('M frank');
    queue.enqueue('M John');
    queue.enqueue('M Sherlock');
    queue.enqueue('F Madonna');
    queue.enqueue('M David');
    queue.enqueue('M Chris');
    queue.enqueue('F Kate');
    return queue;
}
const danceQueue = makeDanceQueue()
console.log(JSON.stringify(danceQueue));

function dancePairs(queue) {

    let node = queue.dequeue();
    let couples = [];
    let women = new Queue();
    let men = new Queue();
    //first evaluate then move forward ... not the other way round
    while (node !== undefined) {
        if (node[0] !== 'M') {
            women.enqueue(node)
        } else {
            men.enqueue(node)
        }
        node = queue.dequeue();
    }

    let woman = women.first;
    let man = men.first;
    while (man !== undefined || woman !== undefined) {
        let couple = [woman, man];
        couples.push(couple)
        woman = women.dequeue()
        man = men.dequeue()
    }
    return couples;
}
console.log(dancePairs(danceQueue));


function bankQueue() {

}