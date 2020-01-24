class Memory {
    constructor() {
      this.memory = new Float64Array(1024);
      this.head = 0;
    }
  //what is head??????
    allocate(size) {
      if (this.head + size > this.memory.length) {
        return null;
      }
  
      let start = this.head;
  
      this.head += size;
      return start;
    }
  
    free(ptr) {}
  
    copy(toIdx, fromIdx, size) {
      if (fromIdx === toIdx) {
        return;
      }
  
      if (fromIdx > toIdx) {
        // Iterate forwards
        for (let i = 0; i < size; i++) {
          this.set(toIdx + i, this.get(fromIdx + i));
        }
      } else {
        // Iterate backwards
        for (let i = size - 1; i >= 0; i--) {
          this.set(toIdx + i, this.get(fromIdx + i));
        }
      }
    }
  // not understanding this: 'copy(to, from, size) - copies size boxes of data from the from pointer to the to pointer (for example, copy(10, 0, 3) would copy the values at boxes 0, 1 and 2 to the boxes at 10, 11 and 12 respectively)'
    get(ptr) {
      return this.memory[ptr];
    }
  
    set(ptr, value) {
      this.memory[ptr] = value;
    }
  }
  
  module.exports = Memory;
  