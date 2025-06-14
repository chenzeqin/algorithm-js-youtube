// #region snippet1
const set = new Set([1, 2, 3]);

set.add(4);

set.delete(2);

set.has(2); // false

set.clear();

// #endregion snippet1

// #region snippet2
// 遍历
const set2 = new Set([1, 2, 3, 4]);
for (const item of set2) {
  console.log(item);
}

set2.forEach((item) => {
  console.log(item);
});

for (item of set2.keys()) {
  console.log(item);
}

for (item of set2.values()) {
  console.log(item);
}

// key === value 为true
for ([key, value] of set2.entries()) {
  console.log(key, value, key === value);
}

// #endregion snippet2
