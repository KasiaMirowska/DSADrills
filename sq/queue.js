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
        return node.value; //not getting why we return a value here?
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

function display(queue){
    let node;
    node = queue.dequeue();
    while(node !== null){
      console.log(node)
      node = queue.dequeue();
    }
    return null;
  }
  //console.log(display(starTrek), 'DISPLAY');