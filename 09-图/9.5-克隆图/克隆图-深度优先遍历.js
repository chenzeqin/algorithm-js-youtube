/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

// 方法一：深度优先搜索（DFS）
/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  if (!node) return;

  const visited = new Map();
  const dfs = function (originNode) {
    if (visited.has(originNode)) {
      return visited.get(originNode);
    }

    const cloneNode = new _Node(originNode.val);
    visited.set(originNode, cloneNode);
    cloneNode.neighbors = originNode.neighbors.map(dfs);

    return cloneNode;
  };

  return dfs(node);
};

