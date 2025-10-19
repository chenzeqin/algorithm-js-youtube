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

  const queue = [[root, 0]];
  const res = [];
  while (queue.length) {
    const [n, l] = queue.shift();
    if (res[l]) {
      res[l].push(n.val);
    } else {
      res[l] = [n.val];
    }
    if (n.left) queue.push([n.left, l + 1]);
    if (n.right) queue.push([n.right, l + 1]);
  }
  return res;
};
