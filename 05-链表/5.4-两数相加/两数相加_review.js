/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l3 = new ListNode(0);
  let n1 = l1;
  let n2 = l2;
  let n3 = l3;

  while (n1 || n2) {
    const val1 = n1 ? n1.val : 0;
    const val2 = n2 ? n2.val : 0;
    const val = val1 + val2 + n3.val;

    n3.val = val % 10; // 逆序存储

    if (n1) n1 = n1.next;
    if (n2) n2 = n2.next;
    const nextN3val = Math.floor(val / 10); // 逆序存储
    if (n1 || n2 || nextN3val) {
      n3.next = new ListNode(nextN3val);
      n3 = n3.next;
    }
  }

  return l3;
};
