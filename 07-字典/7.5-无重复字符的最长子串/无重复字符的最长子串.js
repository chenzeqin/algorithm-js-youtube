// #region snippet
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let l = 0;
  let res = 0;
  for (let r = 0; r < s.length; r++) {
    // 存在重复字符 且 右边index > 左边index
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      l = map.get(s[r]) + 1;
    }

    res = Math.max(res, r - l + 1);

    map.set(s[r], r);
  }

  return res;
};
// #endregion snippet

console.log(lengthOfLongestSubstring('abbcdea')); // expect 5
