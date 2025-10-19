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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  let res = false;
  const dfs = (n, sum) => {
    if (!n.left && !n.right && targetSum === sum) {
      res = true;
    }
    if (n.left) dfs(n.left, sum + n.left.val);
    if (n.right) dfs(n.right, sum + n.right.val);
  };

  dfs(root, root.val);

  return res;
};
