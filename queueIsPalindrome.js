// Queue: Is Palindrome
// Given a Queue, return true if its values are a palindrome (if they are same in reverse order), else return false. Restore Queue to original state before exiting. For storage, use one additional Stack.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SLStack {
    constructor() {
        this.head = null;
    }

    // push(val) {
    // push val to top of stack
    push(val) {
        const newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return this;
    }

    // pop() {
    // remove and return val at top of stack
    pop() {
        if (this.head === null) {
            return null;
        } else {
            const removed = this.head;
            this.head = this.head.next;
            return removed.val;
        }
    }

    // printVals() {
    // print out the values of the SLStack
    printVals() {
        let runner = this.head;
        let output = `**********\n`
        while (runner) {
            output += `${runner.val.toString()} > `;
            runner = runner.next;
        }
        console.log(output);
        return this;
    }
}

// FIFO
// First In, First Out

class SLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
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
            let output = '**********\n'
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
    // SLQueue: Dequeue
    // Create SLQueue method dequeue() to remove and return the front value in the queue.
    dequeue() {
        if (this.isEmpty()) {
            console.log('Queue is empty.')
            return null;
        } else {
            // remove head and store it
            const dequeued = this.head;
            this.head = this.head.next;

            if (this.head === null) {
                this.tail = null;
            }

            this.size--;
            return dequeued.val;
        }
    }

    randomLetters(num) {
        const letters = 'abcdefghijklmnopqrstuvxyz';
        for (let i = 0; i < num; i++) {
            let randomIdx = Math.floor(Math.random() * letters.length);
            let tempLetter = letters[randomIdx];
            this.enqueue(tempLetter);
        }
        return this;
    }
    
    popPalindrome(num) {
        const letters = 'abcdefghijklmnopqrstuvxyz';
        let half = '';
        for (let i = 0; i < num / 2; i++) {
            let randomIdx = Math.floor(Math.random() * letters.length);
            let tempLetter = letters[randomIdx];
            half += tempLetter
            this.enqueue(tempLetter);
        }
        for (let i = half.length - 1 - (num % 2); i >= 0; i--) {
            this.enqueue(half[i]);
        }
        return this;
    }

    isPalindrome() {
        let stack = new SLStack;
        let runner = this.head;
        while (runner) {
            stack.push(runner.val);
            runner = runner.next;
        }
        stack.printVals();
        let current = this.head;
        let currentTwo = stack.head;
        while (current && currentTwo) {
            if (current.val != currentTwo.val) {
                console.log("This is not a palindrome.")
                return false;
            }
            current = current.next;
            currentTwo = currentTwo.next;
        }
        console.log("This is a palindrome.");
        return true;
    }
}

mySLQueue = new SLQueue
mySLQueue.enqueue(5).enqueue(0).enqueue(3).enqueue(0).enqueue(5).printVals();
mySLQueue.isPalindrome();