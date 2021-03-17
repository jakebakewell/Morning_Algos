class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    isEmpty() {
        return this.head === null
    }
    addBack(val) {
        const newTail = new Node(val);
        let runner = this.head;

        if (runner === null) {
            this.head = newTail
        } else {
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newTail;
        }
        return this;
    }
    populateRandom(max, length) {
        for (let i = 0; i < length; i++) {
            let temp = Math.floor(Math.random() * max) + 1;
            this.addBack(temp);
        }
        return this;
    }
    printVals() {
        if (this.isEmpty()) {
            console.log("This SLL is empty.")
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
    removeHead() {
        if (this.head !== null) {
            this.head = this.head.next;
            return this;
        }
        else {
            console.log("The list is empty.");
            return this;
        }
    }
    removeTail() {
        if (this.isEmpty()) {
            console.log("This SLL is empty.")
            return this;
        }
        else {
            let previous = this.head;
            let runner = this.head;
            while (runner.next) {
                previous = runner;
                runner = runner.next;
            }
            previous.next = null;
        }
        return this;
    }
    moveMinToHead() {
        let min = this.head;
        let runner = this.head;
        let previous = this.head;
        while (runner) {
            if (runner.val < min.val) {
                min = runner;
            }
            previous = runner;
            runner = runner.next;
        }
        if (min === this.head) {
            return this;
        }
        runner = this.head;
        while (runner != min) {
            previous = runner;
            runner = runner.next;
        }
        previous.next = runner.next;
        min.next = this.head;
        this.head = min;
        return this;
    }
    moveMaxToBack() {
        if (this.isEmpty()) {
            console.log("This list is empty");
            return this;
        }
        else {
            let maxNode = this.head;
            let runner =this.head;
            while (runner) {
                if (runner.val > maxNode.val) {
                    maxNode = runner;
                }
                runner = runner.next;
            }
            console.log(`The maxNode value is: ${maxNode.val}`);
            if (maxNode === this.head) {
                this.head = this.head.next;
                runner = this.head;

                while (runner.next) {
                    runner = runner.next;
                }
                runner.next = maxNode;
                maxNode.next = null;
            }
            else if (maxNode.next === null) {
                return this;
            }
            else {
                runner = this.head;
                while (runner.next) {
                    if (runner.next === maxNode) {
                        runner.next = maxNode.next;
                    }
                    runner = runner.next;
                }
                runner.next = maxNode;
                maxNode.next = null;
            }
        }
        return this;
    }
}

let mySLL = new SinglyLinkedList();
mySLL.populateRandom(20, 5).printVals();
mySLL.moveMinToHead().printVals();
mySLL.moveMaxToBack().printVals();