class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if (this.top === null) {
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
    if (stack.top !== null) {
        return node.data;
    }
    return null;
}
console.log(peek(starTreck), 'STACK')

function isEmpty(stack) {
    let node = stack.top;
    if (stack.top === null) {
        return null;
    }
    return node;
}
console.log(isEmpty(starTreck), 'STACK2')

function display(stack) {
    let node = stack.top;
    if (stack.top !== null) {
        console.log(node);
    }
    return null;//why do I still get null if stack is populated?
}
console.log(display(starTreck), "DISPLAY")

function remove(item, stack) {
    let node = stack.top;
    if (stack.top !== null) {
        if (node.data !== item) {
            stack.top = node.next;

        }
        stack.pop(node)
    }
    display(stack)
}
console.log(remove('McCoy', starTreck), 'REMOVE')


function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let wordStack = new Stack();
    for (let i = 0; i < s.length; i++) {
        wordStack.push(s[i]);
    }
    let reverse = '';
    while (wordStack.top !== null) {
        reverse += wordStack.pop()
    }
    if (s === reverse) {
        return true;
    }
    return false;
}
// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

//(())))())
//01234567
function isMatch(str){
    const stack = new Stack();
    for(let i = 0; i < str.length; i++){
      if(str[i] === '('){
        stack.push('(');
      }
      if(str[i] === ')'){
        const opening = peek(stack);
        if (!opening){
          return false;
        }
        stack.pop();
      }
    }
    if(peek(stack)){
      return false;
    }
    return true;
  }
console.log(isMatch('((())))))('))

// 3 -> 2 ->5->4->12->10
function sort(stack) {
    let tempStack = new Stack();
    
   

}


