// #region snippet1
const tree = {
  val: '1',
  left: {
    val: '2',
    left: {
      val: '4',
    },
    right: {
      val: '5',
    },
  },
  right: {
    val: '3',
  },
};
// #endregion snippet1

// #region snippet2
// 先序遍历 根左右
const preOrder = (root) => {
  if (!root) return;
  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
};
console.log('preOrder');
preOrder(tree); // 1 2 4 5 3
// #endregion snippet2

// #region snippet3
// 中序遍历 左根右
const inOrder = (root) => {
  if (!root) return;

  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
};
console.log('inOrder');
inOrder(tree); // 4 2 5 1 3
// #endregion snippet3

// #region snippet4
// 后序遍历 左右根
const postOrder = (root) => {
  if (!root) return;

  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
};

console.log('postOrder');
postOrder(tree); // 4 5 2 3 1
// #endregion snippet4
