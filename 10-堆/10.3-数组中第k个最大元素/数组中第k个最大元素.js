/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function (nums, k) {
  class MinHeap {
    constructor() {
      this.heap = [];
    }

    // 获取父节点/左右子节点下标
    getParentIndex(i) {
      return Math.floor((i - 1) / 2);
    }
    getLeftIndex(i) {
      return i * 2 + 1;
    }
    getRightIndex(i) {
      return i * 2 + 2;
    }

    // 交换工具
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // 插入元素
    insert(value) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1);
    }

    // 上浮
    siftUp(index) {
      while (index > 0) {
        const parent = this.getParentIndex(index);
        if (this.heap[parent] <= this.heap[index]) return;

        this.swap(parent, index);
        index = parent;
      }
    }

    // 移除堆顶：你需要的重点方法
    pop() {
      if (this.heap.length === 0) return undefined;
      if (this.heap.length === 1) return this.heap.pop();

      const top = this.heap[0];
      this.heap[0] = this.heap.pop(); // 用最后一个覆盖堆顶
      this.siftDown(0);
      return top;
    }

    // 下沉
    siftDown(index) {
      const length = this.heap.length;

      while (true) {
        const left = this.getLeftIndex(index);
        const right = this.getRightIndex(index);
        let smallest = index;

        if (left < length && this.heap[left] < this.heap[smallest]) {
          smallest = left;
        }
        if (right < length && this.heap[right] < this.heap[smallest]) {
          smallest = right;
        }
        if (smallest === index) break;

        this.swap(index, smallest);
        index = smallest;
      }
    }

    // 查看堆顶
    peek() {
      return this.heap[0];
    }

    size() {
      return this.heap.length;
    }
  }

  const heap = new MinHeap();
  nums.forEach((n) => {
    if (heap.size() >= k) {
      if (heap.peek() < n) {
        heap.insert(n);
        heap.pop();
      }
    } else {
      heap.insert(n);
    }
  });

  return heap.peek();
};
