class Stack {
    constructor() {
        this.collection = new Map();
        this.index = 0;
    }

    add(item) {
        this.collection.set(this.index, item);
        this.index += 1;
    }

    remove() {
        if(this.isEmpty()) return;

        this.index -= 1;
        const removedItem = this.collection.get(this.index);
        this.collection.delete(this.index);

        return removedItem;
    }

    peek() {
        if(this.isEmpty()) return;

        const peekIndex = this.index - 1;
        return this.collection.get(peekIndex);
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.collection.size;
    }

    reset() {
        this.collection = new Map();
        this.index = 0;
    }

    printCollection() {
        const values = this.collection.values();
        let collectionInString = "";
        for(const value of values) {
            collectionInString += `${value} `;
        }
        return collectionInString.trim();
    }
}

module.exports = Stack;
