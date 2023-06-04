const Stack = require('../Stack');

describe('Stack Class test', () => {
    describe('functionality test', () => {
        it(`should add and remove items correctly
            when it's needed`, () => {
            const stack = new Stack();

            stack.add('first');
            stack.add('second');
            stack.add('third');

            const removedItem = stack.remove();

            expect(stack.size()).toBe(2);
            expect(stack.peek()).toBe('second');
            expect(removedItem).toBe('third');
        });
    });

    describe(`constructor test`, () => {
        it(`should has the correct initial state`, () => {
            const stack = new Stack();

            expect(stack.index).toBe(0);
            expect(stack.collection.size).toBe(0);
        });
    });

    describe(`size method test`, () => {
        it(`should return size of the collection
        when it's required`, () => {
            const stack = new Stack();

            stack.add('first');

            const size = stack.size();

            expect(size).toBe(1);
        });

        it(`should return 0 as size of the collection
        when stack it's empty`, () => {
            const stack = new Stack();

            const size = stack.size();

            expect(size).toBe(0);
        });
    });

    describe(`isEmpty method test`, () => {
        it(`should return false when stack it's not empty`, () => {
            const stack = new Stack();

            stack.add('first');

            const isEmpty = stack.isEmpty();

            expect(isEmpty).toBe(false);
        });

        it(`should return true when stack it's empty`, () => {
            const stack = new Stack();

            const isEmpty = stack.isEmpty();

            expect(isEmpty).toBe(true);
        });
    });

    describe(`reset method test`, () => {
        it(`should reset stack
        when it's required`, () => {
            const stack = new Stack();

            stack.add('first');

            stack.reset();
            const size = stack.size();

            expect(size).toBe(0);
        });
    });

    describe(`add method test`, () => {
        it(`should add a new item
        when a item is given as parameter`, () => {
            const stack = new Stack();

            stack.add('first');
            stack.add('second');

            expect(stack.size()).toBe(2);
            expect(stack.peek()).toBe('second');
        });
    });

    describe(`remove method test`, () => {
        it(`should remove and return item from top of stack
        when remove method is called`, () => {
            const stack = new Stack();

            stack.add('first');
            stack.add('second');
            const removedItem = stack.remove();

            expect(removedItem).toBe('second');
            expect(stack.peek()).toBe('first');
            expect(stack.size()).toBe(1);
        });

        it(`should return undefined as top of stack
        when remove method is called and stack is empty`, () => {
            const stack = new Stack();

            const removedItem = stack.remove();

            expect(removedItem).toBeUndefined();
            expect(stack.isEmpty()).toBe(true);
        });
    });

    describe(`peek method test`, () => {
        it(`should return item on top of stack
        when it's required`, () => {
            const stack = new Stack();

            stack.add('first');
            stack.add('second');

            expect(stack.peek()).toBe('second');
        });

        it(`should return undefined as top of stack
        when stack it's empty`, () => {
            const stack = new Stack();

            expect(stack.peek()).toBeUndefined();
        });
    });

    describe(`printCollection method test`, () => {
        it(`should return items present on stack
        when it's required`, () => {
            const stack = new Stack();

            stack.add('first');
            stack.add('second');
            stack.add('third');
            stack.remove();
            stack.add('fourth');

            expect(stack.printCollection()).toBe('first second fourth');
        });

        it(`should return an empty string
        when stack it's empty`, () => {
            const stack = new Stack();

            expect(stack.printCollection()).toBe('');
        });
    });
})


