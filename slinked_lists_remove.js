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
}

let mySLL = new SinglyLinkedList()
mySLL.populateRandom(20, 5).printVals()
mySLL.removeHead().printVals()
mySLL.removeTail().printVals()