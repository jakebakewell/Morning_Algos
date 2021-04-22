class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }

    // given a BST add a node to it in the appropriate spot!
    // remember a BST contain values that are larger to the right of a Node, and smaller to the left
    // a BST also does not contain duplicates!
    add(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        else {
            let runner = this.root;
            while (runner != null) {
                if (val < runner.value) {
                    if (runner.left != null) {
                        runner = runner.left;
                    }
                    else {
                        return runner.left = newNode;
                    }
                }
                else if (val > runner.value) {
                    if (runner.right != null) {
                        runner = runner.right;
                    }
                    else {
                        return runner.right = newNode;
                    }
                }
                else {
                    return console.log("No duplicate values");
                }
            }
        }
    }

    // Given a BST, return the value of the min node in the tree
    findMin(){
        let runner = this.root;
        let min = null;
        while (runner.left != null) {
            runner = runner.left;
        }
        min = runner.value;
        return min;
    }
    // Given a BST, return the value of the max node in the tree
    findMax(){
        let runner = this.root;
        let max = null;
        while (runner.right != null) {
            runner = runner.right;
        }
        max = runner.value;
        return max;
    }

        // Given a value, check to see if the value is in the BST
        contains(value) {
            let runner = this.root;
            if (this.root == null) {
                console.log("BST does not contain the value");
                return false;
            }
            else if (value === runner.value) {
                console.log("Value found in BST at root");
                return  true;
            }
            else {
                if (value > runner.value) {
                    while (runner != null) {
                        if (value === runner.value) {
                            console.log("Value found in BST");
                            return true;
                        }
                        else if (value < runner.value) {
                            runner = runner.left;
                        }
                        else if (value > runner.value) {
                            runner = runner.right;
                        }
                    }
                }
                else if (value < runner.value) {
                    while (runner != null) {
                        if (value === runner.value) {
                            console.log("Value found in BST");
                            return true;
                        }
                        else if (value < runner.value) {
                            runner = runner.left;
                        }
                        else if (value > runner.value) {
                            runner = runner.right;
                        }
                    }
                }
                console.log("BST does not contain the value");
                return false;
            }
        }
    
        // Given a BST, determine the size (how many nodes there are)
        size() {
            let size = 0;
            if (this.root === null) {
                console.log("The size of the BST is 0");
                return size;
            }
            var max = this.findMax();
            var min = this.findMin();
            console.log(min)
            console.log(max)
            if(min == max){
                return 1;
            }
            size = 2;
            for(let i = min + 1; i <= max - 1; i++){
                if(this.contains(i)){
                    size += 1;
                }
            }
            console.log(size);
            return size;
        }
    
        printBSTNodes(node = this.root){
            if(node==null){
                return;
            }
            this.printBSTNodes(node.left);
            console.log(node.value);
            this.printBSTNodes(node.right);
        }

        maxHeight(n = this.root) {
            return  n == null ? 0 : 1 + Math.max(this.maxHeight(n.left),this.maxHeight(n.right)); 
        }
        isBalanced(n = this.root) {
            return n == null ? true : this.maxHeight(n.left) == this.maxHeight(n.right);
        }
}

var bst = new BST();
bst.add(8);
bst.add(15);
bst.add(3);
bst.add(2);
bst.add(22);
bst.add(10);
bst.add(5);
console.log(bst.maxHeight(this.root));
console.log(bst.isBalanced());