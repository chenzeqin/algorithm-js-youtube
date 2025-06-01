
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
var addTwoNumbers = function(l1, l2) {
    let listNode = new ListNode(0)
    let n1 = l1
    let n2 = l2
    let n3 = listNode

    while(n1 || n2) {
        const v1 = n1? n1.val : 0
        const v2 = n2? n2.val : 0
        const v3 = n3.val
        const val = (v1 + v2 + v3)
        n3.val = val % 10
       
        if(n1) n1 = n1.next
        if(n2) n2 = n2.next
        const nextV3 = Math.floor(val / 10)
        if(n1 || n2 || nextV3){
            n3.next = new ListNode(nextV3)
            n3 = n3.next
        }
        
    }

    return listNode
};