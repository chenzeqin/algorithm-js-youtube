// leetcode 65. 有效数字

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  // 状态机图：每个状态可以转换到哪些状态
  const graph = {
    0: {
      blank: 0,
      digit: 6,
      sign: 1,
      dot: 2,
    },
    1: {
      digit: 6,
      dot: 2,
    },
    2: {
      digit: 3,
    },
    3: {
      digit: 3,
      exp: 4,
    },
    4: {
      digit: 5,
      sign: 7,
    },
    5: {
      digit: 5,
    },
    6: {
      digit: 6,
      exp: 4,
      dot: 3,
    },
    7: {
      digit: 5,
    },
  };

  let currentState = 0; // 当前状态
  let charType = ''; // 字符类型
  // 停留在这3个状态就算有效数字
  const set = new Set([3, 5, 6]);
  for (char of s.trim()) {
    // 自动转数字比较
    if (char >= 0 && char <= 9) {
      charType = 'digit';
    } else if (char === ' ') {
      charType = 'blank';
    } else if (char === 'e' || char === 'E') {
      charType = 'exp';
    } else if (char === '+' || char === '-') {
      charType = 'sign';
    } else if (char === '.') {
      charType = 'dot';
    } else {
      // 未知字符
      return false;
    }

    currentState = graph[currentState][charType];
    // 匹配不到状态就不是有效数字
    if (currentState === undefined) {
      return false;
    }
  }

  return set.has(currentState);
};
