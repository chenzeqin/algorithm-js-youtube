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
var minDepth = function (root) {
  if (!root) return 0;

  const queqe = [[root, 1]];
  while (queqe.length) {
    const [p, l] = queqe.shift();
    if (p.left) {
      queqe.push([p.left, l + 1]);
    }
    if (p.right) {
      queqe.push([p.right, l + 1]);
    }
    if (!p.left && !p.right) {
      return l;
    }
  }
};
