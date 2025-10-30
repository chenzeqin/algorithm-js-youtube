/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const m = heights.length;
  if (m === 0) return [];
  const n = heights[0].length;
  if (n === 0) return [];
  // 反向思考：从海洋边界向内「逆流而上」，只走到不矮于当前高度的格子
  // 能从太平洋边界到达的格子集合 ∩ 能从大西洋边界到达的格子集合
  // 就是答案
  const pacificVisited = Array.from({ length: m }, () => Array(n).fill(false));
  const atlanticVisited = Array.from({ length: m }, () => Array(n).fill(false));

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const dfs = (r, c, visited) => {
    visited[r][c] = true;
    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;
      if (
        nr < 0 ||
        nr >= m ||
        nc < 0 ||
        nc >= n || // 保证在格子内
        visited[nr][nc] || // 保证不会重复遍历
        heights[nr][nc] < heights[r][c] // 只能走向更高或相等高度
      ) {
        continue;
      }

      dfs(nr, nc, visited);
    }
  };

  // 太平洋:
  // 左边界(*, 0)
  for (let r = 0; r < m; r++) {
    dfs(r, 0, pacificVisited);
  }
  // 上边界 (0, *)
  for (let c = 0; c < n; c++) {
    dfs(0, c, pacificVisited);
  }

  // 大西洋:
  // 右边界(*, n-1)
  for (let r = 0; r < m; r++) {
    dfs(r, n - 1, atlanticVisited);
  }
  // 下边界(m-1, *)
  for (let c = 0; c < n; c++) {
    dfs(m - 1, c, atlanticVisited);
  }
  const res = [];
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (pacificVisited[r][c] && atlanticVisited[r][c]) {
        res.push([r, c]);
      }
    }
  }

  return res;
};
