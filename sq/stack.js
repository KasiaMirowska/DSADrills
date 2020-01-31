class _Node {
  constructor(data, next){
    this.data = data;
    this.next = next;
  }
}
class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if(this.top === null) {
            this.top = new _Node(data, null);
            return this.top
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
    
}

function stacking() {
    let starTreck = new Stack();
    console.log(starTreck)
    starTreck.push('Kirk');
    starTreck.push('Spock');
    starTreck.push('McCoy');
    starTreck.push('Scotty');
    return starTreck;
}
console.log(stacking())
let starTreck = stacking()
console.log(JSON.stringify(starTreck))

function peek(stack) {
    let node = stack.top;
    if(stack.top !== null){
        return node;
    }
    return {}
}
console.log(peek(starTreck), 'STACK')
 
function isEmpty(stack) {
    let node = stack.top;
    if(stack.top === null){
        return 'this stack is empty';
    }
    return node.data;
}
console.log(isEmpty(starTreck), 'STACK')

function display(stack) {
    let node = stack.top;
    console.log('hERE????')
    if(stack.top !== null){
        console.log(node);
    }
    console.log({});
}
console.log(display(starTreck), "DISPLAY")

function remove(item, stack) {
    let node = stack.top;
    if(stack.top !== null) {
        if(node.data !== item) {
            console.log(node.next)
            stack.top = node.next;
            
        }
       stack.pop(node)
    }
    return display(stack)
}
console.log(remove('McCoy', starTreck), 'REMOVE')