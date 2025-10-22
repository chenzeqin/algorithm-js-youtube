const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3],
};

const visited = new Set();

const bfs = (n) => {
  const queue = [n];
  visited.add(n);
  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node);
    graph[node].forEach((c) => {
      if (!visited.has(c)) {
        queue.push(c);
        visited.add(c);
      }
    });
  }
};

bfs(2); // 2 0 3 1

bfs(0); // 0 1 2 3

