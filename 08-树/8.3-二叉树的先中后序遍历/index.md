# 二叉树的先中后序遍历

## 什么是二叉树

二叉树是一种树形数据结构，其中每个节点最多有两个子节点，分别称为左子节点和右子节点。

### 二叉树的结构

```javascript
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
```

### 结构图

```text
    1
   / \
  2   3
 / \
4   5
```

### 对象形式

<<<@/08-树/8.3-二叉树的先中后序遍历/index.js#snippet1

## 先序遍历 (Preorder Traversal)

先序遍历的顺序是：**根节点 → 左子树 → 右子树**

### 递归实现

<<<@/08-树/8.3-二叉树的先中后序遍历/index.js#snippet2

先序遍历结果：`[1, 2, 4, 5, 3]`

## 中序遍历 (Inorder Traversal)

中序遍历的顺序是：**左子树 → 根节点 → 右子树**

### 递归实现

<<<@/08-树/8.3-二叉树的先中后序遍历/index.js#snippet3

中序遍历结果：`[4, 2, 5, 1, 3]`

## 后序遍历 (Postorder Traversal)

后序遍历的顺序是：**左子树 → 右子树 → 根节点**

### 递归实现

<<<@/08-树/8.3-二叉树的先中后序遍历/index.js#snippet4

后序遍历结果：`[4, 5, 2, 3, 1]`
