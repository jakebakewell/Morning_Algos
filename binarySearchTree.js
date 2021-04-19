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

}

var bst = new BST();
bst.add(8);
bst.add(15);
bst.add(3);
bst.add(-12);
bst.add(22);
bst.add(10);
bst.add(5);
console.log(bst.findMax());
console.log(bst.findMin());