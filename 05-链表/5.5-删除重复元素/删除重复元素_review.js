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
var deleteDuplicates = function (head) {
  let curt = head;
  let prev = null;
  while (curt) {
    if (prev) {
      // 相同就删掉一个节点
      if (prev.val === curt.val) {
        prev.next = curt.next;
        curt = curt.next;
        continue;
      }
    }

    prev = curt;
    curt = curt.next;
  }
  return head;
};

// 更简洁
var deleteDuplicates2 = function (head) {
  let curt = head;
  while (curt) {
    if (curt.next && curt.next.val === curt.val) {
      curt.next = curt.next.next;
    } else {
      curt = curt.next;
    }
  }

  return head;
};
