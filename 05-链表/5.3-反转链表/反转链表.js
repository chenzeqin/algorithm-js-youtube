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
 * 
 * 解题思路：
 * 1. 使用三个指针：prev（前一个节点）、curr（当前节点）、next（下一个节点）
 * 2. 遍历链表时，将当前节点的next指向前一个节点
 * 3. 然后移动三个指针，继续处理下一个节点
 * 4. 最终prev将指向原链表的最后一个节点，也就是反转后的头节点
 * 
 * 时间复杂度：O(n)，其中n是链表的长度
 * 空间复杂度：O(1)，只使用了常数额外空间
 */
var reverseList = function (head) {
  // 如果链表为空或只有一个节点，直接返回
  if (!head || !head.next) return head;
  
  let prev = null;
  let curr = head;
  
  while (curr) {
    // 保存下一个节点
    const next = curr.next;
    // 反转当前节点的指针
    curr.next = prev;
    // 移动prev和curr指针
    prev = curr;
    curr = next;
  }
  
  return prev;
};
