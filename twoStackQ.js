// Two Stack Queue:
// Using only two stack objects for the underlying data storage, recreate a Queue class.

// Remember, queues are first in, first out (FIFO) and stacks are last in, first out (LIFO).
// Assume there is no limit to the amount of values this two stack queue can hold.

class twoStackQ {
    constructor() {
        // The two stack objects will be arrays.
        // Consider stack1[stack1.length-1] to be the front of the queue.
        this.stack1 = [];
        this.stack2 = [];
    }

    // Two Stack Queue: Is Empty
    // Create class method isEmpty() to return true if the queue is empty.
    isEmpty() {
        if (this.stack1.length == 0 && this.stack2.length == 0 ) {
            console.log("The two stack queue is empty.");
            return true, this;
        }
        else {
            console.log("The two stack queue is not empty.");
            return false, this;
        }
    }

    // Two Stack Queue: Enqueue
    // Create class method enqueue(val) to add a value to the queue.
    // Move all values from stack one to stack two.
    // Add val to stack one.
    // Move all values back to stack one from stack two.
    // Consider writing a populateRandom() method that calls enqueue(val) to quickly populate your queue.
    
    enqueue(val) {
        this.stack2 = this.stack1;
        this.stack1 = [];
        this.stack1.push(val);
        for (let i = 0; i < this.stack2.length; i++) {
            this.stack1.push(this.stack2[i]);
        }
        this.stack2 = [];
        return this;
    }

    // Two Stack Queue: Dequeue
    // Create class method dequeue(val) to remove and return the first value from the queue.
    dequeue() {
        let temp = this.stack1[(this.stack1.length - 1)];
        console.log("Popped value is", temp);
        return this.stack1.pop();
    }
    
    // Two Stack Queue: Peek/Front
    // Create class method peek() to return (not remove) the first value in the queue.
    peek() {
        console.log("First value is", this.stack1[(this.stack1.length - 1)]);
        return this.stack1[(this.stack1.length - 1)];
    }
    
    // Two Stack Queue: Print Values
    // Create class method printVals() to log all values in the queue to the console starting with the front.
    printVals() {
        console.log("************** Stack 1");
        console.log(this.stack1);
        console.log("************** Stack 2");
        console.log(this.stack2);
        return this;
    }

    // Two Stack Queue: Contains
    // Create class method contains(val) to return true if val is in the queue and false if it is not.
    contains(val) {
        for (let i = 0; i < this.stack1.length; i++) {
            if (this.stack1[i] === val) {
                console.log(`The value ${val} is in the two stack queue.`);
                return true, this;
            }
        }
        console.log(`The value ${val} is not in the two stack queue.`);
        return false, this;
    }
}

myTwoStack = new twoStackQ;
myTwoStack.enqueue(10).enqueue(4).enqueue(20).enqueue(7).printVals();
myTwoStack.dequeue();
myTwoStack.printVals();
myTwoStack.peek();
myTwoStack.contains(20);
myTwoStack.isEmpty();