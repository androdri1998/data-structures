const Queue = require('./Queue');

const queue = new Queue();
queue.enqueue("first");
queue.enqueue("second");
queue.enqueue("third");
queue.enqueue("fourth");
console.log(queue.dequeue());
// Output: first
console.log(queue.peek());
// Output: second
console.log(queue.printCollection());
// Output: second third fourth
queue.reset();
console.log(queue.printCollection());
// Output: 