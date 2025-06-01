// 事件循环面试题
setTimeout(() => {
  console.log('timer_1');

  setTimeout(() => {
    console.log('timer_3');
  }, 0);

  new Promise((resolve) => {
    resolve();
    console.log('new promise');
  }).then(() => {
    console.log('promise then');
  });
}, 0);

setTimeout(() => {
  console.log('timer_2');
}, 0);

console.log('结束');

/**
 *
 * 打印结果顺序：
 * 结束
 * timer_1
 * new promise
 * promise then
 * timer_2
 * timer_3
 */
