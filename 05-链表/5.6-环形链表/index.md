# 环形链表

[leetcode 141. 环形链表](https://leetcode.cn/problems/linked-list-cycle/)

## 思路

快慢指针（Floyd 判圈算法）【推荐】
使用两个指针，slow 每次走一步，fast 每次走两步。如果链表中存在环，则两个指针最终会相遇。

<<< @/05-链表/5.6-环形链表/环形链表.js


🕵️‍♂️ 解法思路：

如果链表没有环，fast 会先到达 null；

如果链表有环，fast 会在环中追上 slow。

⏱️ 时间复杂度：

时间：O(n)

空间：O(1)

