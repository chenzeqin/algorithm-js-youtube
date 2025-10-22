const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3],
};

const visited = new Set();
const dfs = (n) => {
  visited.add(n);
  console.log(n);
  // 遍历所有相邻节点
  graph[n].forEach((c) => {
    if (!visited.has(c)) {
      dfs(c);
    }
  });
};

dfs(2); // 2 0 1 3

dfs(0); // 0 1 2 3

