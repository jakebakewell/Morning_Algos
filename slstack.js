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

    populateRandom(max, length) {
        for (let i = 1; i <= length; i++) {
            let temp = Math.floor(Math.random() * max) + 1;
            this.push(temp);
        }
        return this;
    }

    printVals() {
        let runner = this.head;
        while (runner) {
            console.log(runner.val)
            runner = runner.next;
        }
        console.log("*************")
        return this;
    }

    // push(val) {
    // push val to top of stack
    push(val) {
        const newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
            return this;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            return this;
        }
    }

    // SLStack: Top
    // Return (not remove) the stack’s top value.
    top() {
        let runner = this.head;
        console.log("**************")
        console.log(runner.val);
    }

    // SLStack: Is Empty
    // Return whether the stack is empty.
    isEmpty() {
        return this.head === null;
    }

    // SLStack: Pop
    // Create pop() to remove and return the top val.
    popTop() {
        let runner = this.head;
        let newHead = runner.next;
        this.head = newHead;
        console.log(runner.val);
        console.log("************")
        return runner.val, this;
    }


    // SLStack: Contains
    // Return whether given val is within the stack.
    contains(val) {
        let runner = this.head;
        while (runner) {
            if (runner.val === val) {
                console.log(`The stack contains the value ${val}`);
                return true;
            }
        }
        console.log(`The stack does not contain the value ${val}`);
        return false;
    }

    // SLStack: Size
    // Return the number of stacked values.
    size() {
        let len = 0;
        while (runner) {
            len += 1;
            runner = runner.next;
        }
        console.log(len);
        return len, this;
    }
}


mySlStack = new SLStack
mySlStack.push(9).push(10).push(30).push(15);
mySlStack.printVals();
mySlStack.top();
console.log(mySlStack.isEmpty());
mySlStack.popTop();
mySlStack.printVals();
