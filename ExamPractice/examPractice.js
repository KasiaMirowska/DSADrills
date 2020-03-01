//Given a document, implement an algorithm to count the number of word occurrences.
//- Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
// - Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

let countWords = (str)=> {
    let wordsArr = str.replace(/[^\w\s]/gi, '').toLowerCase().split(' ');
    console.log(wordsArr)
    const wordObjects = {};
    wordsArr.map(word => {
        if (!Object.keys(wordObjects).includes(word)) {
            wordObjects[word] = 1
        } else {
            wordObjects[word] = wordObjects[word] + 1;
        }
    });
    console.log(wordObjects)
}
console.log(countWords("Hello there, how are you? Can you tell me how to get to the nearest Starbucks?")) //O(n2)


class HashMap {
    constructor(initialCapacity = 20) {
        this.length = 0;
        this._hashTable = [];
        this.initialCapacity = initialCapacity;
        this._deleted = 0;
    }

    set(key,value) {
        const loadRatio = (this.length + this._deleted + 1)/this.initialCapacity;
        if(loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE_RATIO)
        }
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
    static _hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i);
            hash = hash & hash;
        }
        return hash >>> 0;
    }
}

let countingWords = (str) => {
    let wordsArr = str.replace(/[^\w\s]/gi, '').toLowerCase().split(' ');
    const wordsTable = new Map();
    MAX_LOAD_RATIO = 0.5;
    SIZE_RATIO = 3;
    
    wordsArr.forEach(word => {
        let count = wordsTable.get(word)
        if(count) {
            wordsTable.set(word, count +1)
        } else {
            console.log(word)
            wordsTable.set(word, 1);
        }
    })
    return wordsTable;
}
console.log(countingWords("Hello there, how are you? Can you tell me how  how to get to the nearest Starbucks?"))//what would be the bigO here? also doesnt fully build why?