class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    populateRandom(max, length) {
        for (let i = 1; i <= length; i++) {
            let temp = Math.floor(Math.random() * max) + 1;
            this.enqueue(temp);
        }
        return this;
    }

    isEmpty() {
        return this.head === null;
    }

    printVals() {
        if (this.isEmpty()) {
            console.log('Queue is empty.')
            return this;
        } else {
            let runner = this.head;
            let output = `**********\n`
            while (runner) {
                output += `${runner.val.toString()} > `;
                runner = runner.next;
            }
            console.log(output);
        }
        return this;
    }

    // SLQueue: Enqueue
    // Create SLQueue method enqueue(val) to add the given value to end of our queue.
    enqueue(val) {
        const newTail = new Node(val);

        if (this.isEmpty()) {
            this.head = newTail;
            this.tail = newTail;

        } else {
            this.tail.next = newTail;
            this.tail = newTail;
        }

        this.size++;
        return this;
    }

    dequeue() {
        if (this.head !== null) {
            let temp = this.head;
            this.head = temp.next;
            this.size--;
            return temp.val, this;
        }

        else {
            console.log("The queue is empty");
            return this;
        }
    }

    front() {
        if (this.head !== null) {
            console.log(this.head.val);
            return this.head.val, this;
        }

        else {
            console.log("The queue is empty");
            return this;
        }
    }

    contains(val) {
        if (this.head !== null) {
            let runner = this.head
            while (runner) {
                if (runner.val === val) {
                    console.log(true);
                    return true, this;
                }
                else if (runner.next === null) {
                    console.log(false);
                    return false, this;
                }
                runner = runner.next;
            }
        }
    }

    isQueueEmpty() {
        if (this.size === 0) {
            console.log("The queue is empty")
            return ("The queue is empty"), this;
        }

        else {
            console.log("The queue is not empty")
            return ("The queue is not empty"), this;
        }
    }

    returnSize() {
        let q_size = this.size;
        console.log(q_size);
        return q_size, this;
    }
}

myQ = new SLQueue
myQ.enqueue(10).enqueue(5).enqueue(30).enqueue(17).enqueue(43).printVals()
myQ.dequeue().printVals()
myQ.front()
myQ.contains(30)
myQ.isQueueEmpty()
myQ.returnSize()