// #region snippet
const a = {
  value: 'a',
};
const b = {
  value: 'b',
};
const c = {
  value: 'c',
};

// 组成链表 a -> b -> c
a.next = b;
b.next = c;
console.log(a);

// #endregion snippet

// #region snippet2
// 删除 b 节点
a.next = c;
// #endregion snippet2

// #region snippet3
// a之后插入 b2
const b2 = {
  value: 'b2',
};
const temp = a.next;
a.next = b2;
b2.next = temp;
console.log(a);
// #endregion snippet3

// #region snippet4
// 遍历
let current = a;
while (current) {
  console.log(current);
  current = current.next;
}
console.log(a);
// #endregion snippet4
