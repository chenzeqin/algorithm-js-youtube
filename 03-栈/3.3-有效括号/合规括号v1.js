// (64ms 49.8MB)
function isValid(str = '<[({})]>') {
  const stack = [];
  while (str.length) {
    const char = str.charAt(0);
    if (char === '(' || char === '[' || char === '{' || char === '<') {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }
      // 匹配到右括号，栈顶的就出栈
      const topChar = stack.pop();
      if (
        (char === ')' && topChar !== '(') ||
        (char === ']' && topChar !== '[') ||
        (char === '}' && topChar !== '{') ||
        (char === '>' && topChar !== '<')
      ) {
        return false;
      }
    }

    str = str.slice(1);
  }

  return stack.length === 0;
}

console.log(isValid('<[({})]>')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('()[]{')); // false
