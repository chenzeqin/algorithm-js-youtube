// #region snippet1
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 插入
  insert(value) {
    this.heap.push(value);

    this.shiftUp(this.heap.length - 1);
  }

  // 移除堆顶
  pop() {
    if (this.isEmpty()) return;
    if (this.heap.length === 1) {
      this.heap = [];
      return;
    }

    this.heap[0] = this.heap.pop();
    this.shiptDown(0);
  }

  // 获取堆顶
  peek() {
    return this.heap[0];
  }

  // 不断和父节点比较，交换，直到满足最小堆的性质
  // 上浮
  shiftUp(index) {
    if (index === 0) return;

    const pIndex = MinHeap.getParentIndex(index);
    if (this.heap[index] < this.heap[pIndex]) {
      this.swap(index, pIndex);
      this.shiftUp(pIndex);
    }
  }

  // 下沉
  shiptDown(index) {
    const leftIndex = MinHeap.getLeftIndex(index);
    const rightIndex = MinHeap.getRightIndex(index);
    let findIndex = index;

    // 先比较左子节点
    if (leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[findIndex]) {
      findIndex = leftIndex;
    }
    // 再比较右子节点， 这里findIndex可能被左子节点更新了
    if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[findIndex]) {
      findIndex = rightIndex;
    }

    // 如果子节点比父节点小，则交换，并继续下沉
    if (findIndex !== index) {
      this.swap(index, findIndex);
      this.shiptDown(findIndex); // 继续下沉
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
    return (index - 1) >> 1;
  }

  static getLeftIndex(index) {
    return index * 2 + 1;
  }

  static getRightIndex(index) {
    return index * 2 + 2;
  }
}
// #endregion snippet1

// #region snippet2
const heap = new MinHeap();
heap.insert(3);
heap.insert(2);
heap.insert(1);
console.log(heap.heap); // [1, 3, 2]
heap.insert(4);
console.log(heap.heap); // [1, 3, 2, 4]
heap.pop();
console.log(heap.heap); // [2, 3, 4]
// #endregion snippet2
