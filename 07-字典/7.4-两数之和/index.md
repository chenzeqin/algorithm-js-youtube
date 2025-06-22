# [两数之和](https://leetcode.cn/problems/two-sum/description/)

## 解题思路

  1. 遍历数组，将数组中的元素作为键，索引作为值，存入map中。
  2. 遍历数组，如果map中存在target - item，则返回[map.get(target - item), i]。
  3. 如果map中不存在target - item，则将item作为键，索引作为值，存入map中。

## 代码实现

<<< @/07-字典/7.4-两数之和/index.js#snippet

## 复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(n)
