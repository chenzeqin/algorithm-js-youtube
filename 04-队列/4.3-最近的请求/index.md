# 计算3000ms内的请求次数

[leetcode 题目 933](https://leetcode.cn/problems/number-of-recent-calls/description/)

思路：

- ping时把t存到链表
- 遍历链表，拿出时间间隔> 3000的 item
- 返回length

<<< @/04-队列/4.3-最近的请求/最近的请求.js
