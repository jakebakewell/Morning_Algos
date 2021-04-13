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

// Return whether a list is a palindrome. For this, you can assume that the data stored in your SLL is entirely comprised of characters at each Node. Palindromes read the same front-to-back and back-to-front. Return true or false after comparing values.

// For a harder challenge, try not to use any additional data structures! 

    isPallindrome() {
        let runner = this.head;
        let normStr = "";
        let revStr = "";
        while(runner) {
            normStr += runner.val;
            runner = runner.next;
        }
        for (let i = normStr.length - 1; i >= 0; i--) {
            revStr += normStr[i];
        }
        if (normStr == revStr) {
            console.log("It is a palindrome");
            return true;
        }
        else {
            console.log("It is not a palindrome");
            return false;
        }
    }


//   printValues() {
//       var runner = this.head;
//      console.log("the head is: " + runner.val);
//        while (runner){
//            console.log("Current Node Value: " + runner.val + " -->");
//            runner = runner.next;
//        }
//    }

    printValues() {
        var runner = this.head;
        let str = "";
        while (runner) {
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
}

var list = new SLL();
list.addToBack('t');
list.addToBack('a');
list.addToBack('c');
list.addToBack('o');
list.addToBack('c');
list.addToBack('a');
list.addToBack('t');
list.printValues();
list.isPallindrome();
console.log("========================");
var list1 = new SLL();
list1.addToBack('f');
list1.addToBack('i');
list1.addToBack('n');
list1.addToBack('a');
list1.addToBack('l');
list1.addToBack('l');
list1.addToBack('y');
list1.printValues();
list1.isPallindrome();
console.log("========================");
var list3 =  new SLL();
list3.addToBack('r');
list3.addToBack('a');
list3.addToBack('c');
list3.addToBack('e');
list3.addToBack('c');
list3.addToBack('a');
list3.addToBack('r');
list3.printValues();
list3.isPallindrome();
console.log("========================");
var list4 = new SLL();
list4.addToBack('3');
list4.addToBack('0');
list4.addToBack('5');
list4.addToBack('6');
list4.addToBack('5');
list4.addToBack('0');
list4.addToBack('3');
list4.printValues();
list4.isPallindrome();
console.log("========================");