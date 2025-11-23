/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {
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
        if (this.heap[parent]?.value <= this.heap[index]?.value) return;

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

        if (left < length && this.heap[left]?.value < this.heap[smallest]?.value) {
          smallest = left;
        }
        if (right < length && this.heap[right]?.value < this.heap[smallest]?.value) {
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
  const map = new Map();
  nums.forEach((n) => {
    map.set(n, (map.get(n) || 0) + 1);
  });

  const m = new MinHeap();
  map.forEach((count, key) => {
    if (m.size() >= k) {
      const top = m.peek();
      if (top.value < count) {
        m.insert({ value: count, key });
        m.pop();
      }
    } else {
      m.insert({ value: count, key });
    }
  });

  return m.heap.map((item) => item.key);
};

// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// console.log(topKFrequent([1], 1));
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
