/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) return head;

  let prev = null;
  let curt = head;

  while (curt) {
    const next = curt.next;

    curt.next = prev;
    prev = curt;

    curt = next;
  }

  return prev;
};
