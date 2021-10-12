const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor(){
    this.last = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.last;
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    let current = this.last;

    if(this.last == null){
      this.last = newNode;
    } else {
      current = this.last;
      while(current.next){
        current = current.next
      }
      current.next = newNode;
    }
    this.length++;
  }

  dequeue() {
    let current = this.last;

    if(current){
      let elem = current.value;
      current = current.next;
      this.last = current;
      this.length--;
      return elem;
    }
    return null;
  }

}
