// #region snippet

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let l = 0
  let r = 0

  // 所有需要的字符
  const needMap = new Map()
  for (let c of t) {
      needMap.set(c, needMap.has(c) ? needMap.get(c) + 1 : 1)
  }

  let res = ''
  let needType = needMap.size;
  while (r < s.length) {
      if (needMap.has(s[r])) {
          needMap.set(s[r], needMap.get(s[r]) - 1)
          if (needMap.get(s[r]) === 0) {
              needType -= 1
          }
      }

      // 全部符合
      while (needType === 0) {
          const newRes = s.substring(l, r + 1)
          if (!res || newRes.length < res.length) res = newRes

          // 移动左指针 l
          let c2 = s[l]
          if (needMap.has(c2)) {
              needMap.set(c2, needMap.get(c2) + 1)
              if (needMap.get(c2) === 1) needType += 1
          }
          l += 1
      }

      r += 1
  }
  return res
};
// #endregion snippet

// case 1
console.log(minWindow('ADOBECODEBANC', 'ABC')) // expect: "BANC"

// case 2
console.log(minWindow('a', 'a')) // expect: "a"

// case 3
console.log(minWindow('a', 'aa')) // expect: ""

