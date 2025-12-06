
// Node Structure
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Linked List Class
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert at the end
    insert(value) {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }

        temp.next = newNode;
    }

    // Delete a value
    delete(value) {
        if (!this.head) return;

        // If the node to delete is the head
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let temp = this.head;
        while (temp.next !== null && temp.next.value !== value) {
            temp = temp.next;
        }

        if (temp.next) {
            temp.next = temp.next.next;
        }
    }

    // Search a value
    search(value) {
        let temp = this.head;

        while (temp !== null) {
            if (temp.value === value) return true;
            temp = temp.next;
        }
        return false;
    }

    // Print Linked List
    print() {
        let temp = this.head;
        let result = "";

        while (temp !== null) {
            result += temp.value + " -> ";
            temp = temp.next;
        }

        console.log(result + "null");
    }
}

// ------------------
// Usage
// ------------------

let list = new LinkedList();

list.insert(10);
list.insert(20);
list.insert(30);
list.insert(90);
list.insert(100);
list.insert(89);

list.print();  // 10 -> 20 -> 30 -> null

console.log(list.search(20)); // true
console.log(list.search(50)); // false

list.delete(20);
list.print();  // 10 -> 30 -> null
