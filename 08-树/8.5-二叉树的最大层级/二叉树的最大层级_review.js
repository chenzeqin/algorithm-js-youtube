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

  function dfs(node, level = 0) {
    if (!node) return;
    level++;

    res = Math.max(res, res, level);

    dfs(node.left, level);
    dfs(node.right, level);
  }
  dfs(root);

  return res;
};
