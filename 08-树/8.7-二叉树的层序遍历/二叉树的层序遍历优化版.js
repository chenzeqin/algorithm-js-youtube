/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const queue = [root];
  const res = [];
  while (queue.length) {
    let len = queue.length;
    const list = [];
    res.push(list);
    // 遍历上一层的节点
    while (len > 0) {
      const n = queue.shift();
      list.push(n.val);
      if (n.left) queue.push(n.left);
      if (n.right) queue.push(n.right);
      len--;
    }
  }
  return res;
};
