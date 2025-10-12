/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = 0;
  let l = 0;
  const map = new Map();
  for (let r = 0; r < s.length; r++) {
    const char = s[r];
    // <= 确保 l 在 l ~ r 之间
    if (map.has(char) && l <= map.get(char)) {
      l = map.get(char) + 1;
    }

    res = Math.max(res, r - l + 1);

    map.set(char, r);
  }

  return res;
};
