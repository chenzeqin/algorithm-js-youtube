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
  console.log(root.val)
  root.children.forEach(node=>{
    dfs(node)
  })
};
// #endregion snippet

dfs(tree);
