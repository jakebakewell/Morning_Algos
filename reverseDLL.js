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

    // given a DLL reverse the list
    // NOT JUST swapping head and tail but also reverse the next and prev pointers
    reverseList() {
        if (this.head === null) {
            return "Cannot reverse empty list";
        }
        else {
            let runner = this.tail;
            this.head = runner;
            while(runner) {
                let next = runner.next;
                runner.next = runner.prev;
                runner.prev = next;
                if (runner.next) {
                    runner = runner.next;
                }
                else {
                    this.tail = runner;
                    return "Reversed list";
                }
            }
        }
    }

        // Given and value and index, insert a Node of that value before the given index
        insertBefore(value, index) {
            let newNode = new Node(value);
            if (this.head === null) {
                this.head = newNode;
            }
            else {
                if (index === 0) {
                    newNode.next = this.head;
                    this.head.prev = newNode;
                    this.head = newNode;
                }
                else {
                    let runner = this.head;
                    for (let i = 0; i < index; i++) {
                        runner = runner.next;
                    }
                    newNode.next = runner;
                    runner.prev.next = newNode;
                    newNode.prev = runner.prev;
                    runner.prev = newNode;
                    console.log(`${value} inserted before index ${index}`);
                }
            }
        }
    
        // Given and value and index, insert a Node of that value after the given index
        insertAfter(value, index) {
            let newNode = new Node(value);
            if (this.head === null) {
                this.head = newNode;
            }
            else {
                if(index != this.lengthOfList()) {
                    let runner = this.head;
                    for (let i = 0; i < index; i++) {
                        runner = runner.next;
                    }
                    newNode.next = runner.next;
                    runner.next.prev = newNode;
                    newNode.prev = runner;
                    runner.next = newNode;
                    console.log(`${value} inserted after index ${index}`);
                }
                else {
                    newNode = this.tail.next;
                    newNode.prev = this.tail;
                    this.tail = newNode;
                    console.log(`${value} inserted after tail`);
                }
            }
        }
}


list = new DLL();
list.addToFront(3);
list.addToFront(6);
list.addToFront(9);
list.addToFront(12);
list.addToFront(15);
list.printValuesForward();
list.insertBefore(50, 2);
list.insertAfter(30, 4);
list.printValuesForward();
list.reverseList();
list.printValuesForward();