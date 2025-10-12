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
  if (!root) return;
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
  if (!root) return;
  const stack = [];
  let p = root;

  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }

    const n = stack.pop();
    console.log(n.val);
    p = n.right;
  }
}

console.log('inOrder');
inOrder(tree); // 4 2 5 1 3

// #endregion snippet3

// #region snippet4
function postOrder(root) {
  if (!root) return;

  const stack = [root];
  const outputStack = [];

  while (stack.length) {
    const n = stack.pop();
    // 存起来，
    outputStack.push(n);
    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);
  }

  while (outputStack.length) {
    const n = outputStack.pop();
    console.log(n.val);
  }
}

console.log('postOrder');
postOrder(tree); // 4 5 2 3 1
// #endregion snippet4
