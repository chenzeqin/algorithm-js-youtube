/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const needMap = new Map();
  // 遍历子串
  for (c of t) {
    needMap.set(c, needMap.has(c) ? needMap.get(c) + 1 : 1);
  }

  let l = 0;
  let r = 0;
  let res = '';
  let needTypeCount = needMap.size;

  while (r < s.length) {
    const char = s[r];
    if (needMap.has(char)) {
      needMap.set(char, needMap.get(char) - 1);
      if (needMap.get(char) === 0) {
        needTypeCount -= 1;
      }
    }

    // 符合子串， 更新结果
    while (needTypeCount === 0 && l < s.length) {
      const newRes = s.substring(l, r + 1);
      res = !res || newRes.length < res.length ? newRes : res;

      // 移动左边指标
      const char = s[l];
      if (needMap.has(char)) {
        needMap.set(char, needMap.get(char) + 1);
        if (needMap.get(char) === 1) {
          needTypeCount += 1;
        }
      }
      l++;
    }

    r++;
  }

  return res;
};

console.log(minWindow('ADOBECODEBANC', 'AD'));
