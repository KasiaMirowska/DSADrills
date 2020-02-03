class HashMap {
    constructor(initialCapasity = 8){
        this.length = 0;
        this._hasTable = [];
        this._capasity = initialCapasity;
        this._deleted = 0;
    }

    static _hashString(str) {
        let hash = 5381;
        for(let i = 0; i<str.length; i ++){
            hash = (hash << 5) + hash + str.charCodeAt(i);
            hash = hash & hash;
        }
        return hash >>> 0;
    }

    set(key, value){
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE_RATIO);
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

    
}