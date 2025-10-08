/**
 * 有效括号 v3 (65ms 50MB)
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const startReg = /[<{\[(]{1}/;
  const endReg = /[>}\])]{1}/;
  const map = new Map();
  map.set('<', '>');
  map.set('(', ')');
  map.set('{', '}');
  map.set('[', ']');
  const stack = [];

  if (s.length % 2 !== 0) {
    return false;
  }

  while (s.length) {
    const char = s.charAt(0);
    if (startReg.test(char)) {
      stack.push(char);
    } else if (endReg.test(char)) {
      const topChar = stack.pop();
      if (map.get(topChar) !== char) {
        return false;
      }
    } else {
      return false;
    }
    s = s.slice(1);
  }

  return stack.length === 0;
};

console.log(isValid('<[({})]>')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('()[]{')); // false
