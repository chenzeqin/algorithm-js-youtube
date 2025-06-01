// version 2 (55ms 49.5MB)
function isValid(str) {
  if (str.length % 2 !== 0) return false;

  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '(' || char === '[' || char === '{' || char === '<') {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;

      const topChar = stack.pop();
      if (char === ')' && topChar !== '(') return false;
      if (char === ']' && topChar !== '[') return false;
      if (char === '}' && topChar !== '{') return false;
      if (char === '>' && topChar !== '<') return false;
    }
  }
  return stack.length === 0;
}

console.log(isValid('<[({})]>')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('()[]{')); // false
