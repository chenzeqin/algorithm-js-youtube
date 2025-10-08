/* 
  解题思路
  1. 遍历数组，将数组中的元素作为键，索引作为值，存入map中。
  2. 遍历数组，如果map中存在target - item，则返回[map.get(target - item), i]。
  3. 如果map中不存在target - item，则将item作为键，索引作为值，存入map中。
*/

// 时间复杂度：O(n)
// 空间复杂度：O(n)

// #region snippet
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (map.has(target - item)) {
      return [map.get(target - item), i];
    }

    map.set(item, i);
  }
};
// #endregion snippet

console.log(twoSum([2, 7, 11, 15], 9));
