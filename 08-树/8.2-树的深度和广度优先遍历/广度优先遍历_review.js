const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: [],
        },
      ],
    },
    {
      val: 'c',
      children: [
        {
          val: 'e',
          children: [],
        },
      ],
    },
  ],
};
// #region snippet
const bfs = (root) => {
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    console.log(node.val);
    node.children.forEach((child) => {
      queue.push(child);
    });
  }
};
// #endregion snippet

bfs(tree); // a b c d e
