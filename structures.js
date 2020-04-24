class Stack {
  constructor(top = null) {
    top = top;
  }

  push(value) {
    this.top = new _Node(value, this.top)
  }

  pop() {
    const top = this.top;
    this.top = this.top.next;
    return top;
  }
}

class Queue {

}

class _Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = {
  Stack,
  Queue
}