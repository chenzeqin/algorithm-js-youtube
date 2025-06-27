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
function preOrder(root) {
  if (!root) return [];

  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    console.log(node.val);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}
// #endregion snippet2

console.log('preOrder');
preOrder(tree); // 1 2 4 5 3

// #region snippet3
function inOrder(root) {
  if (!root) return [];
  const stack = [];
  let p = root;
  while (p || stack.length) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop();
    p = n.right;
  }
}

console.log('inOrder');
inOrder(tree); // 4 2 5 1 3

// #endregion snippet3

// #region snippet4
function postOrder(root) {
  if (!root) return [];

  const stack = [root];
  const output = [];
  while (stack.length) {
    const node = stack.pop();
    output.push(node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  while (output.length) {
    console.log(output.pop());
  }
}

console.log('postOrder');
postOrder(tree); // 4 5 2 3 1
// #endregion snippet4
