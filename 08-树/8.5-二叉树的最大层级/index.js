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
 * @return {number}
 */
var maxDepth = function (root) {
  let res = 0;
  const dsf = (node, level = 0) => {
    if (!node) return;
    level += 1;

    res = Math.max(res, level);
    if (node.left) {
      dsf(node.left, level);
    }
    if (node.right) {
      dsf(node.right, level);
    }
  };
  dsf(root);
  return res;
};
