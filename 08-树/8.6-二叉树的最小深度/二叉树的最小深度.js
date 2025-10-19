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

  const queue = [[root, 1]];
  
  while (queue.length) {
    const [p, l] = queue.shift();
    if (p.left) {
      queue.push([p.left, l + 1]);
    }
    if (p.right) {
      queue.push([p.right, l + 1]);
    }
    if (!p.left && !p.right) {
      return l;
    }
  }
};
