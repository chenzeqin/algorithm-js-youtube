/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let l = 0;
  let r = 0;
  let res = '';
  const needMap = new Map();
  for (let c of t) {
    needMap.set(c, needMap.has(c) ? needMap.get(c) + 1 : 1);
  }

  let needTypeCount = needMap.size;

  while (r < s.length) {
    const c = s[r];
    if (needMap.has(c)) {
      needMap.set(c, needMap.get(c) - 1);
      if (needMap.get(c) === 0) {
        needTypeCount--;
      }
    }

    // 符合要求 l <= r 确保在窗口内
    while (needTypeCount === 0 && l <= r) {
      const newRes = s.substring(l, r + 1);
      res = !res || res.length > newRes.length ? newRes : res;

      const c2 = s[l];
      if (needMap.has(c2)) {
        needMap.set(c2, needMap.get(c2) + 1);
        if (needMap.get(c2) === 1) {
          needTypeCount++;
        }
      }
      l++;
    }

    r++;
  }

  return res;
};
