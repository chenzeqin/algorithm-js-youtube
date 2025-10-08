/* 
  解题思路
  1. 遍历字符串，遇到左括号入栈，遇到右括号出栈，如果栈为空，则匹配成功，否则匹配失败。
  2. 如果栈为空，则匹配成功，否则匹配失败。
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  const map = new Map();
  map.set('(', ')');
  map.set('{', '}');
  map.set('[', ']');

  const startReg = /[({\[]/;
  const endReg = /[)}\]]/;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (startReg.test(char)) {
      stack.push(char);
    } else if (endReg.test(char)) {
      const start = stack.pop();
      if (map.get(start) !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));
