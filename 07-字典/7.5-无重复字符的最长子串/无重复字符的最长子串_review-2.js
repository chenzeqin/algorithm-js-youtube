/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  const map = new Map();
  let res = 0;

  for (let r = 0; r < s.length; r++) {
    const char = s[r];

    if (map.has(char) && map.get(char) >= l) {
      l = map.get(char) + 1;
    }
    res = Math.max(res, r - l + 1);
    map.set(char, r);
  }

  return res
};
