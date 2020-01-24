const Memory = require('./memory');
const memory = new Memory();

class Array {
    constructor(){
        this.length = 0;
        this.capasity = 0;
        this.ptr = memory.allocate(this.length)
    }

    // push(value) {
    //     this._resize(this.length +1); //what does underscore mean?
    //     [1,2,3,4,5] push(20)
    //     memory.set(5 + 5, 20) //doesnt make sense, if array lenght is 4, that makes ptr 4, so we're setting of 8?????
    //     this.length++;
    // }
    push(value) {
        if(this.length>= this.capasity){
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.set(this.ptr + this.length, value);
        this.length++;
    }
    _resize(size){

        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if(this.ptr === null) {
            throw new Error('out of memory');
        };
        memory.copy(this.ptr, oldPtr, this.length)
        memory.free(oldPtr);
        this.capasity = size
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }

    pop(value) {
        if(this.length == 0) {
            throw new Error('index error')
        }
        value = memory.get(this.ptr + this.length -1);
        this.length--;
        return value;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    };

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }


}

Array.SIZE_RATIO = 3;
module.exports = Array;


