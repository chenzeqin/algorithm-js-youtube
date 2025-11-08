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
// 方法二：广度优先搜索（BFS）
var cloneGraphBFS = function (node) {
  if (!node) return null;

  // 使用 Map 存储已克隆的节点
  const visited = new Map();
  // 使用队列进行 BFS
  const queue = [node];

  // 创建第一个克隆节点
  const clonedNode = new Node(node.val);
  visited.set(node, clonedNode);

  while (queue.length > 0) {
    const originalNode = queue.shift();
    const cloned = visited.get(originalNode);

    // 遍历原节点的所有邻居
    for (const neighbor of originalNode.neighbors) {
      if (!visited.has(neighbor)) {
        // 如果邻居节点还没有被克隆，创建新节点并加入队列
        const clonedNeighbor = new Node(neighbor.val);
        visited.set(neighbor, clonedNeighbor);
        queue.push(neighbor);
      }
      // 将克隆的邻居节点添加到克隆节点的 neighbors 中
      cloned.neighbors.push(visited.get(neighbor));
    }
  }

  return clonedNode;
};
