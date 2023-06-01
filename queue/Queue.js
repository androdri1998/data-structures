class Queue {
    constructor() {
        this.lastIndex = 0;
        this.firstIndex = 0;
        this.collection = new Map();
    }
    enqueue(item) {
        this.collection.set(this.lastIndex, item);
        this.lastIndex += 1;
    }
    dequeue() {
        if(this.isEmpty()) return;

        const firstItem = this.collection.get(this.firstIndex);
        this.collection.delete(this.firstIndex);
        this.firstIndex += 1;
        return firstItem;
    }
    peek() {
        if(this.isEmpty()) return;

        return this.collection.get(this.firstIndex);
    }
    isEmpty() {
        return this.size() === 0;
    }
    size() {
        return this.collection.size;
    }
    reset() {
        this.firstIndex = 0;
        this.lastIndex = 0;
        this.collection = new Map();
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

module.exports = Queue;