class Heap{
    constructor(){
        this.heap = [null]
    }
    insert(val){
        this.heap.push(val)
        let childIdx = this.heap.length - 1;
        let parentIdx = Math.floor(childIdx/2);
        while (this.heap[parentIdx] > this.heap[childIdx]) {
            [this.heap[childIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[childIdx]];
            childIdx = parentIdx;
            parentIdx = Math.floor(childIdx/2);
        }
        // console.log(this.heap.indexOf(val));
        return this;
    }
}

h1 = new Heap()

h1.insert(5).insert(8).insert(3).insert(12).insert(4)
console.log(h1)