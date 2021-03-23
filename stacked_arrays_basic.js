class ArrStack {
    constructor(items = []) {
        this.items = items;
    }

    push(item) {
        this.items.push(item);
        return this;
    }

    top() {
        console.log(this.items[this.items.length -  1]);
        return this.items[this.items.length - 1], this;
    }

    isEmpty() {
        if (this.items === []) {
            console.log("Array is empty");
            return true;
        }
        else {
            console.log("Array is not empty");
            return false;
        }
    }

    popStack() {
        let temp = this.items[this.items.length - 1];
        this.items.pop();
        console.log(temp);
        return temp, this;
    }

    contains(val) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === val) {
                console.log(`The array contains the value ${val}`);
                return true, this;
            }
        }
        console.log(`The array does not contain the value ${val}`);
        return false, this;
    }

    size() {
        console.log(this.items.length);
        return this.items.length, this;
    }
}

myStack = new ArrStack;
myStack.push(10).push(5).push(8).push(25);
console.log(myStack);
myStack.top().isEmpty();
myStack.popStack();
console.log(myStack);
myStack.contains(8).size();