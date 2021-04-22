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

    add(value) {
        var newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
        } else {
            var runner = this.root;
            while(runner != null) {
                if(runner.value > value) {
                    if(runner.left === null) {
                        runner.left = newNode;
                        return;
                    } else {
                        runner = runner.left;
                    }
                } else if(runner.value < value) {
                    if(runner.right === null) {
                        runner.right = newNode;
                        return;
                    } else {
                        runner = runner.right;
                    }
                } else {
                    console.log("Whoopsie! This Value already exists in the BST!");
                    return;
                }
            }
        }
    }

    findMin(){
        var runner = this.root;
        var min = runner.value;
        while(runner.left!=null){
            runner = runner.left;
        }
        min = runner.value;
        return min;
    }

    // Given a BST and a node's value, remove the specified node from the BST without disrupting the structure
    remove(value) {
        if(this.contains(value)){
            // delete the node
            this.root = this.removeNode(this.root, value);
            console.log("successfully deleted!");
        }
        else{
            console.log("No such value found in the tree!")
        }
    }

    removeNode(node, value){
        if(node==null){
            return node;
        }
        if(node.value>value){
            node.left = this.removeNode(node.left, value)
        }
        else if(node.value <value){
            node.right = this.removeNode(node.right, value)
        }
        // found it!
        else{
            // if either child is null
            if(node.right==null){
                return node.left;
            }
            else if(node.left == null){
                return node.right;
            }
            // if both child are not null
            // find replacement for the to-be-deleted tree: i.e. smallest after its next largest and duplicate the value into the node
            node.value = this.findMin(node.right).value;
            // now delete the original node (whose value replaced the found node)
            node.right(this.removeNode(node.right, node.value));
        }
        return node;
    }

    printBSTNodes(node = this.root) {
        if(node==null){
            return;
        }
        this.printBSTNodes(node.right);
        console.log(node.value);
        this.printBSTNodes(node.left);
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
bst.remove(15);