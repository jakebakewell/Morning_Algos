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
    addFront(val) {
        const newHead = new Node(val);
        newHead.next = this.head;
        this.head = newHead;
        return this;
    }
    addBack(val) {
        const newTail = new Node(val);
        let runner = this.head;
        if (runner === null) {
            this.head = newTail;
        }
        else {
            while(runner.next) {
                runner = runner.next;
            }
            runner.next = newTail;
        }
        return this;
    }
    printVals() {
        let runner = this.head;
        while(runner) {
            console.log(runner.val);
            runner = runner.next;
        }
        return this;
    }
    contains(val) {
        let runner = this.head;
        while(runner) {
            if (runner.val === val) {
                console.log(true);
                return true;
            }
            runner = runner.next;
        }
        console.log(false);
        return false;
    }
}

let mySLL = new SinglyLinkedList();

mySLL.addFront(4).addFront(2).addBack(3).addBack(11).addBack(20).printVals();
mySLL.contains(25);