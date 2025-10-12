# [二叉树的最小深度](https://leetcode.cn/problems/minimum-depth-of-binary-tree/description/)

## 解题思路

- 使用广度优先遍历二叉树
- 记录每个节点的层级
- 如果是叶子节点， 直接返回层级

## 代码实现

<<< @/08-树/8.6-二叉树的最小深度/二叉树的最小深度.js

## 复杂度分析

n: 树的节点数量

- 时间复杂度 O(n)
- 空间复杂度 O(n)