class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(value) {
        this.head = new _Node(value, this.head)
    }

    insertLast(value) {
        if (this.head === null) {
            this.insertFirst(value);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(value, null);
        }
    }
    insertAfter(key, itemToInsert) {
        let tempNode = this.head;
        while (tempNode !== null & tempNode.value !== key) {
            tempNode = tempNode.next;
        }
        if (tempNode !== null) {
            tempNode.next = new _Node(itemToInsert, tempNode.next)
        }
    }
    insertBefore(key, itemToInsert) {
        let tempNode = this.head;
        let prevNode = this.head;
        if (this.head === null) {
            return;
        }
        if (this.head.value === key) {
            isertFirst(itemToInsert);
        }
        while (tempNode !== null && tempNode.value !== key) {
            prevNode = tempNode;
            tempNode = tempNode.next;
        }
        if(tempNode === null) {
            console.log('key node not found')
            return;
        }
        prevNode.next = new _Node(itemToInsert, tempNode)
    }
}

let list = new LinkedList();

list.insertFirst('kasia')
list.insertFirst('jacob')
list.insertLast('gigi')
list.insertAfter('jacob', 'johny')
list.insertBefore('kasia', 'beforeKAsia')
console.log(JSON.stringify(list))
