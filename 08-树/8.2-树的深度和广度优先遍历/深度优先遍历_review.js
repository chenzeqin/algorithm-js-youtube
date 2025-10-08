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
  ],
};

// #region snippet
const dfs = (root) => {
  console.log(root.val);
  root.children.forEach((child) => {
    dfs(child);
  });
};
// #endregion snippet

dfs(tree);
