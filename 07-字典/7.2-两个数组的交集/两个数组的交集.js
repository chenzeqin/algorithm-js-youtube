/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const map = new Map();
  nums1.forEach((item) => {
    map.set(item, true);
  });

  const arr = [];
  nums2.forEach((item) => {
    if (map.has(item)) {
      arr.push(item);
      // 删除元素（避免重复）
      map.delete(item);
    }
  });

  return arr;
};

