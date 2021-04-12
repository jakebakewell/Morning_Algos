class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    addToFront(value){
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    addToBack(value) {
        var newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
        } else {
            var runner = this.head;
            while (runner.next){
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }

// Given a Singly Linked List of Nodes, reverse the order of the list
//           this.head
// Example:      4 --> -12 --> 43 --> 8 --> 67 --> -27 --> 19 --> null
//           this.head
// Becomes:     19 --> -27 --> 67 --> 8 --> 43 --> -12 --> 4 --> null

    reverseListCreateNew() {
        let reverseSLL = new SLL;
        let runner = this.head;
        while(runner) {
            reverseSLL.addToFront(runner.val);
            runner = runner.next;
        }
        reverseSLL.printValues();
        return reverseSLL;
    }


    reverseList() {
        let runner = this.head;
        let nextNode = null;
        let previous = null;
        while(runner !=null){
            nextNode = runner.next;
            runner.next = previous;
            previous = runner;
            runner = nextNode;
        }
        this.head = previous;
    }



    printValues() {
        var runner = this.head;
        while (runner){
            console.log("Current Node Value: " + runner.val + " -->");
            runner = runner.next;
        }
        console.log("***************");
    }

}

//   4 --> -12 --> 43 --> 8 --> 67 --> -27 --> 19 --> null
var list = new SLL();
list.addToBack(4);
list.addToBack(-12);
list.addToBack(43);
list.addToBack(8);
list.addToBack(67);
list.addToBack(-27);
list.addToBack(19);

list.printValues();
list.reverseListCreateNew();

list.reverseList();
list.printValues();
