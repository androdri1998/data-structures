const Queue = require('../Queue');

describe('Queue Class test', () => {
    describe('functionality test', () => {
        it(`should enqueue and dequeue items correctly when it's needed`, () => {
            const queue = new Queue();

            queue.enqueue('first');
            queue.enqueue('second');
            queue.enqueue('third');
            queue.dequeue();
    
            expect(queue.size()).toBe(2);
            expect(queue.peek()).toBe('second');
        });
    });
    describe('constructor test', () => {
        it('should has the correct initial state', () => {
            const queue = new Queue();
    
            expect(queue.printCollection()).toBe('');
            expect(queue.firstIndex).toBe(0);
            expect(queue.lastIndex).toBe(0);
        });
    });
    describe('enqueue method test', () => {
        it(`should enqueue a new item in collection when a
            item is give as parameter to enqueue method`, () => {
            const queue = new Queue();
            
            queue.enqueue('first');
    
            expect(queue.size()).toBe(1);
            expect(queue.peek()).toBe('first');
        });
    });
    describe('dequeue method test', () => {
        it(`should remove a item from collection and return item 
            when dequeue method is called`, () => {
            const queue = new Queue();
            
            queue.enqueue('first');
            const item = queue.dequeue();
    
            expect(queue.size()).toBe(0);
            expect(item).toBe('first');
        });
        it(`should return undefined when dequeue method is called
            and queue is empty`, () => {
            const queue = new Queue();
            
            const item = queue.dequeue();
    
            expect(queue.size()).toBe(0);
            expect(item).toBeUndefined();
        });
    });
    describe('peek method test', () => {
        it(`should return the first item added in queue when
            peek method is called`, () => {
            const queue = new Queue();
            
            queue.enqueue('first');
            const item = queue.peek();
    
            expect(item).toBe('first');
            expect(queue.size()).toBe(1);
        });
        it(`should return undefined when
            peek method is called and queue is empty`, () => {
            const queue = new Queue();
            
            const item = queue.peek();
    
            expect(item).toBeUndefined();
        });
    });
    describe('isEmpty method test', () => {
        it(`should return false when there's items added in
            queue when isEmpty method is called`, () => {
            const queue = new Queue();
            
            queue.enqueue('first');
            const isEmpty = queue.isEmpty();
    
            expect(isEmpty).toBe(false);
            expect(queue.size()).toBe(1);
        });
        it(`should return true when there's no items added in
            queue when isEmpty method is called`, () => {
            const queue = new Queue();
            
            const isEmpty = queue.isEmpty();
    
            expect(isEmpty).toBe(true);
            expect(queue.size()).toBe(0);
        });
    });
    describe('size method test', () => {
        it(`should return correct size when there's items added in
            queue when size method is called`, () => {
            const queue = new Queue();
            
            queue.enqueue('first');
            queue.enqueue('second');
            queue.enqueue('third');
            queue.dequeue();
            const size = queue.size();
    
            expect(size).toBe(2);
        });
        it(`should return 0 as size when there's no items added in
            queue when size method is called`, () => {
            const queue = new Queue();
            
            const size = queue.size();
    
            expect(size).toBe(0);
        });
    });
    describe('reset method test', () => {
        it(`should reset queue when reset method is called`, () => {
            const queue = new Queue();
            
            queue.enqueue('first');
            queue.enqueue('second');
            queue.enqueue('third');
            queue.reset();
    
            expect(queue.size()).toBe(0);
            expect(queue.firstIndex).toBe(0);
            expect(queue.lastIndex).toBe(0);
        });
    });
    describe('printCollection method test', () => {
        it(`should show items present in queue
            when printCollection method is called`, () => {
            const queue = new Queue();
            
            queue.enqueue('first');
            queue.enqueue('second');
            queue.enqueue('third');
            const items = queue.printCollection();
    
            expect(items).toBe('first second third');
        });
        it(`should return an empty string
            when printCollection method is called
            and there's no items on queue`, () => {
            const queue = new Queue();
            
            const items = queue.printCollection();
    
            expect(items).toBe('');
        });
    });
});