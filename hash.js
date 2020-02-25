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

class HashMap {
    constructor(initialCapacity=8) {
        this.length = 0;
        this._hashTable = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
    }

    get(key) {
        const index = this._findSlot(key);
        if (this._hashTable[index] === undefined) {
            throw new Error('Key error');
        }
        return this._hashTable[index].value;
    }

    set(key, value){
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE_RATIO);
        }
        //Find the slot where this key should be in
        const index = this._findSlot(key);

        if(!this._hashTable[index]){
            this.length++;
        }
        this._hashTable[index] = {
            key,
            value,
            DELETED: false
        }; 
    }

    delete(key) {
        const index = this._findSlot(key);
        const slot = this._hashTable[index];
        if (slot === undefined) {
            throw new Error('Key error');
        }
        slot.DELETED = true;
        this.length--;
        this._deleted++;
    }

    _findSlot(key) {
        const hash = HashMap._hashString(key);
        const start = hash % this._capacity;

        for (let i=start; i<start + this._capacity; i++) {
            const index = i % this._capacity;
            const slot = this._hashTable[index];
            if (slot === undefined || (slot.key === key && !slot.DELETED)) {
                return index;
            }
        }
    }

    _resize(size) {
        const oldSlots = this._hashTable;
        this._capacity = size;
        // Reset the length - it will get rebuilt as you add the items back
        this.length = 0;
        this._deleted = 0;
        this._hashTable = [];

        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.DELETED) {
                this.set(slot.key, slot.value);
            }
        }
    }

    static _hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            //Bitwise left shift with 5 0s - this would be similar to
            //hash*31, 31 being the decent prime number
            //but bit shifting is a faster way to do this
            //tradeoff is understandability
            hash = (hash << 5) + hash + string.charCodeAt(i);
            //converting hash to a 32 bit integer
            hash = hash & hash;
        }
        //making sure hash is unsigned - meaning non-negtive number. 
        return hash >>> 0;
    }
}




function main() {
    const Lotr = new HashMap();
    MAX_LOAD_RATIO = 0.5; //always needs to be less than 1 to make sure that we dont exceed the capacity
    SIZE_RATIO = 3;
    
    Lotr.set('Hobbit', 'Bilbo'); 
    Lotr.set('Hobbit', 'Frodo'); 
    Lotr.set('Elf', 'Legolas'); 
    Lotr.set('Wizard', 'Gandolf'); 
    Lotr.set('Human', 'Aragorn'); 
    Lotr.set('Maiar', 'The Necromancer'); 
    Lotr.set('Maiar', 'Sauron'); 
    Lotr.set('RingBearer', 'Gollum'); 
    Lotr.set('LadyOfLight', 'Galadriel'); 
    Lotr.set('HalfElven', 'Arwen'); 
    Lotr.set('Ent', 'Treebeard'); 
    return Lotr;
}
console.log(main())

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1)); //returns 20
    console.log(map2.get(str3)); //returns 10
}
// shows ultimately how objects are mutated in javascript.


// 'kasia' , '40'

// {kasia: 40}  1234321  => 7
// {kasia: 'juice'}  => 7
// 0[]
// 1[]
// 2[]
// 3[]
// 4[]
// 5[]
// 6[]
// 7[kasia] -> linked list => kasia
// //how would i know which kasia to return when i'm looking?


// Drill 3
// 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length 11 ,    k= key m = length
//  open addressing hashtable[
//     index[0] -> {key: 22}(returns 0)
//     index[1] -> {key:88} (returns 0)
//     index[2] -> {key: 59}(returns 4)
//     index[3]-> {key: 15}(returns 4)
//     index[4] -> {key: 4}(returns 4)
//     index[5] -> {key: 17}(returns 6)
//     index[6] -> {key: 28}(returns 6)
//     index[7] 
//     index[8]  
//     index[9] -> {key: 31}
//     index[10] -> {key:10}
// ]

//keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map of a length m = 9, and let the hash function be k mod m.
//seperate chaining hashmap [
//     index[1] -> {key :28} -> {key:19} -> {key 10}
//     index[2] -> {key 20}
//     index[3] -> {key 12}
//     index[4]
//     index[5] -> {key:5}
//     index[6] -> {key:15} -> {key 33}
//     index[7]
//     index[8] -> {key 17}
//     index[9]
// ]

function findDuplicates(str) {
    let newMap = new HashMap();
    let strArr = str.split('')

    strArr.forEach(element => {
        if(element !== ' '){
            newMap.set(element, true)
        }
    });
    return newMap._hashTable;
}
console.log(findDuplicates('google')) //they are getting overwritten becasue they are KEYS not values



function palindrome(str) { // delete method finds/ checks i the slot is there, if it is it mean it's second one therefore it is getting deleted and we stay with one letter if the word is a palindrome
    let newMap = new HashMap();
    for(i=0; i<str.length; i++){
      try{
        newMap.delete(str[i]);
      }catch(e){
        newMap.set(str[i], true)
      }
    }
    return newMap.length <= 1;
}
console.log(palindrome('madam'));
console.log(palindrome('clilc'));
console.log(palindrome('aaxxis'));
console.log(palindrome('caabl'))

function anagramGroup(arr) {
    let newMap = new HashMap();
    arr.forEach(el => {
        let sortedKey = el.split('').sort().join('');
        try{
            const item =  newMap.get(sortedKey)//it will return error cause the map is empty, so we push in a new key
            item.push(el)
        }
        catch(e) {//we're catching that error
        newMap.set(sortedKey, [el])
        }
    })
    //first getting rid of empty slots in the map (undefined) then returning just the array
    return newMap._hashTable.filter(item => item!==undefined).map(item => item.value)
}
console.log(anagramGroup(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))


//a HashMap class for seperate chaining:

class HashMap2 {
    constructor(initialCapacity=8) {
        this.length = 0;
        this._hashTable = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
    }

    get(key) {
        const index = this._findSlot(key);
        if (this._hashTable[index] === undefined) {
            throw new Error('Key error');
        }
        return this._hashTable[index].value;
    }

    set(key, value){
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE_RATIO);
        }
        //Find the slot where this key should be in
        const index = this._findSlot(key);
        if(!this._hashTable[index]){
            this.length++;
        }
        
        let ll = this._hashTable[index];
        
        if(!ll){
          ll = new LinkedList();
          ll.insertLast({key, value, DELETED: false})
        }else{
          let node = ll.find(key);
          if(node){
            node.value = {key, value, DELETED: false};
          }else{
            ll.insertLast({key, value, DELETED: false});
          }
        }
        // console.log(JSON.stringify(ll));
        this._hashTable[index] = ll;
        /*
        this._hashTable[index] = {
            key,
            value,
            DELETED: false
        };*/ 
    }

    delete(key) {
        const index = this._findSlot(key);
        const slot = this._hashTable[index];
        if (slot === undefined) {
            throw new Error('Key error');
        }
        slot.DELETED = true;
        this.length--;
        this._deleted++;
    }

    _findSlot(key) {
        const hash = HashMap._hashString(key);
        const start = hash % this._capacity;
        return start;
        // for (let i=start; i<start + this._capacity; i++) {
        //     const index = i % this._capacity;
        //     const slot = this._hashTable[index];
        //     if (slot === undefined || (slot.key === key && !slot.DELETED)) {
        //         return index;
        //     }
        // }
    }

    _resize(size) {
        const oldSlots = this._hashTable;
        this._capacity = size;
        // Reset the length - it will get rebuilt as you add the items back
        this.length = 0;
        this._deleted = 0;
        this._hashTable = [];

        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.DELETED) {
                this.set(slot.key, slot.value);
            }
        }
    }

    static _hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            //Bitwise left shift with 5 0s - this would be similar to
            //hash*31, 31 being the decent prime number
            //but bit shifting is a faster way to do this
            //tradeoff is understandability
            hash = (hash << 5) + hash + string.charCodeAt(i);
            //converting hash to a 32 bit integer
            hash = hash & hash;
        }
        //making sure hash is unsigned - meaning non-negtive number. 
        return hash >>> 0;
    }
}


function main2(){
    const Lotr = new HashMap2();
    console.log(Lotr)
    MAX_LOAD_RATIO = 0.5; //always needs to be less than 1 to make sure that we dont exceed the capacity
    SIZE_RATIO = 3;
    
    Lotr.set('Hobbit', 'Bilbo'); 
    Lotr.set('Hobbit', 'Frodo'); 
    console.log(Lotr)
    // Lotr.set('Elf', 'Legolas'); 
    // Lotr.set('Wizard', 'Gandolf'); 
    // Lotr.set('Human', 'Aragorn'); 
    // Lotr.set('Maiar', 'The Necromancer'); 
    // Lotr.set('Maiar', 'Sauron'); 
    // Lotr.set('RingBearer', 'Gollum'); 
    // Lotr.set('LadyOfLight', 'Galadriel'); 
    // Lotr.set('HalfElven', 'Arwen'); 
    // Lotr.set('Ent', 'Treebeard'); 
    return Lotr;
}
console.log(( JSON.stringify(main2(), 'CHAINING?')))