/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let l = 0
    let res = 0
    const map = new Map()

    for (let r = 0; r < s.length; r++) {
        const char = s[r]
        // 确保在窗口内  map.get(char) >= l
        if (map.has(char) && map.get(char) >= l) {
            l = map.get(char) + 1
        }

        // 更新最大值
        res = Math.max(res, r - l + 1) // +1 是因为索引从0开始 例如2-0长度为3
        map.set(char, r)
    }

    return res
};