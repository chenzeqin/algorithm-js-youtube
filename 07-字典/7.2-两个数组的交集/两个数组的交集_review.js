/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const map1 = new Map();
  nums1.forEach((item) => {
    map1.set(item, item);
  });

  const arr = [];

  nums2.forEach((item) => {
    if (map1.has(item)) {
      arr.push(item);
      map1.delete(item); // 去重
    }
  });

  return arr;
};
