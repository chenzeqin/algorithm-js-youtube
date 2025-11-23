/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
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
    push(value) {
      this.heap.push(value);
      this.siftUp(this.heap.length - 1);
    }

    // 上浮
    siftUp(index) {
      while (index > 0) {
        const parent = this.getParentIndex(index);
        if (this.heap[parent]?.val <= this.heap[index]?.val) return;

        this.swap(parent, index);
        index = parent;
      }
    }

    // 移除堆顶：你需要的重点方法
    pop() {
      if (this.heap.length === 0) return undefined;
      if (this.heap.length === 1) return this.heap.shift();

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

        if (left < length && this.heap[left]?.val < this.heap[smallest]?.val) {
          smallest = left;
        }
        if (right < length && this.heap[right]?.val < this.heap[smallest]?.val) {
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

  const h = new MinHeap();
  lists.forEach((list) => {
    if (list) {
      h.push(list);
    }
  });

  const newList = new ListNode();
  let current = newList;

  while (h.size() > 0) {
    const node = h.pop();
    current.next = node;
    current = current.next;
    if (node.next) {
      h.push(node.next);
    }
  }
  return newList.next;
};

