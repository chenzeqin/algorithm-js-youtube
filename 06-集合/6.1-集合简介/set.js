// #region snippet1
const arr = [1, 2, 3, 3, 3];

const set = new Set(arr);
// 去重
const arr2 = [...new Set(arr)];
console.log(arr2); // [1, 2, 3]

// 添加元素
set.add(4);

// 删除元素
set.delete(3);

// 判断元素是否存在
console.log(set.has(2)); // false
console.log(set.has(3)); // false
// #endregion snippet1

// #region snippet2
const set1 = new Set([1, 2, 3]);
const set2 = new Set([2, 3, 4]);

// 求set1和 set2 交集
const set3 = [...set1].filter((item) => set2.has(item));
console.log(set3); // [2, 3]
// #endregion snippet2

// #region snippet3
// 求set1和 set2 并集
const set4 = new Set([...set1, ...set2]);
console.log(set4); // Set(4) { 1, 2, 3, 4 }
// #endregion snippet3

// #region snippet4
// 求set1和 set2 差集
const set5 = new Set([...set1].filter((item) => !set2.has(item)));
console.log(set5); // Set(1) { 1 }
// #endregion snippet4
