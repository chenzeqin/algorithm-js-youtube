/**
 * 将十进制数转换为二进制数
 * @param {number} num
 * @returns
 */
function decimalToBinary(num) {
  const stack = [];
  while (num > 0) {
    stack.push(num % 2);
    num = Math.floor(num / 2);
  }
  return stack.join('');
}

console.log(decimalToBinary(45) === '101101');
