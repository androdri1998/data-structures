const Stack = require('./Stack');

const stack = new Stack();
stack.add("first");
stack.add("second");
stack.add("third");
stack.add("fourth");
console.log(stack.remove());
// Output: fourth
console.log(stack.peek());
// Output: third
console.log(stack.printCollection());
// Output: first second third
stack.reset();
console.log(stack.printCollection());
// Output: 
