// leetcode 206: Reverse Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  let next = null;
  // 遍历链表
  while (curr) {
    next = curr.next;

    curr.next = prev; // 上一个节点做为next
    prev = curr;

    curr = next;
  }

  return prev
};
