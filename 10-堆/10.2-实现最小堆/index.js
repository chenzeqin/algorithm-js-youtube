class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);

    // 不断和父节点比较，交换
    const index = this.heap.length - 1;
    this.shiftUp(index);
  }

  // 移除堆顶
  pop() {
    if (this.isEmpty()) return;
    if (this.heap.length === 1) {
      this.heap = [];
    }

    this.heap[0] = this.heap.pop();
    this.shiptDown(0);
  }

  peek() {
    return this.heap[0];
  }

  shiftUp(index) {
    if (index === 0) return;

    const pIndex = MinHeap.getParentIndex(index);
    if (this.heap[index] < this.heap[pIndex]) {
      this.swap(index, pIndex);
      this.shiftUp(pIndex);
    }
  }

  shiptDown(index) {
    const leftIndex = MinHeap.getLeftIndex(index);
    const rightIndex = MinHeap.getRightIndex(index);
    if (this.heap[leftIndex] > this.heap[index]) {
      this.swap(leftIndex, index);
    }
    if (this.heap[rightIndex] > this.heap[index]) {
      this.swap(rightIndex, index);
    }
  }

  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  static getParentIndex(index) {
    // return Math.floor((index - 1) / 2);
    //  二进制运算， 向右移一位
    return index >> 1;
  }

  static getLeftIndex(index) {
    return index * 2 + 1;
  }

  static getRightIndex(index) {
    return index * 2 + 2;
  }
}

const heap = new MinHeap();
heap.insert(3);
heap.insert(2);
heap.insert(1);
console.log(heap.heap);
heap.insert(4);
console.log(heap.heap);
