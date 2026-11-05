// FIFO queue with O(1) enqueue/dequeue using a moving head index.
class Queue {
  constructor() {
    this.items = [];
    this.head = 0;
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    const value = this.items[this.head];
    this.items[this.head] = undefined;
    this.head += 1;

    // Compact occasionally to avoid retaining consumed entries.
    if (this.head > 50 && this.head * 2 >= this.items.length) {
      this.items = this.items.slice(this.head);
      this.head = 0;
    }
    return value;
  }

  peek() {
    return this.isEmpty() ? undefined : this.items[this.head];
  }

  isEmpty() {
    return this.head >= this.items.length;
  }

  size() {
    return this.items.length - this.head;
  }
}

module.exports = Queue;
