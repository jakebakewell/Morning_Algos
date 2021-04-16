class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addToFront(value) {
        if (!this.head) {
            let newNode = new Node(value);
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            let newNode = new Node(value);
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    addToBack(value) {
        let runner = this.head;
        let newNode = new Node(value);
        newNode.next = null;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newNode;
            newNode.prev = runner;
            this.tail = newNode;
        }
    }

    removeFromFront() {
        if (!this.head) {
            console.log("No front node to remove");
        }
        else {
            if (this.head != this.tail) {
                this.head = this.head.next;
                this.head.prev = null;
            }
            else {
                this.tail = this.head;
                this.head = null;
            }
        }
    }

    removeFromBack() {
        if (!this.tail) {
            console.log("No back to remove");
        }
        else {
            if (this.head != this.tail) {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            else {
                this.head = this.tail;
                this.tail = null;
            }
        }
    }

    printValuesForward() {
        let runner = this.head;
        let str = "";
        while(runner) {
            if (runner.next) {
                str += `${runner.val} -> `;
            }
            else {
                str += runner.val;
            }
            runner = runner.next;
        }
        console.log(str);
    }

    printValuesBackward() {
        let runner = this.tail;
        let str = "";
        while(runner) {
            if (runner.prev) {
                str = " <- " + runner.val + str;
            }
            else {
                str = runner.val + str;
            }
            runner = runner.prev;
        }
        console.log(str);
    }

    lengthOfList() {
        if (this.head) {
            let runner = this.head;
            let length = 0;
            while(runner) {
                length += 1
                runner = runner.next;
            }
            console.log(`Length of doubly linked list: ${length}`);
            return length;
        }
        else {
            console.log("Doubly linked list is empty");
        }
    }
}


list = new DLL();
list.addToFront(3);
list.addToFront(6);
list.addToFront(9);
list.addToFront(12);
list.addToBack(15);
list.addToBack(18);
list.printValuesForward();
list.lengthOfList();
console.log("=====================");
list.printValuesBackward();
console.log("=====================");
list.removeFromBack();
list.removeFromFront();
list.printValuesForward();
console.log("=====================");
list.lengthOfList();