// leetcode-993: 计算3000ms内的请求次数
// t: 请求开始时间

class RecentCounter {
  constructor() {
    this.q = [];
  }
  ping(t) {
    this.q.push(t);
    while (this.q.length && t - this.q[0] > 3000) {
      this.q.shift();
    }
    return this.q.length;
  }
}

const r = new RecentCounter();
console.log(r.ping(1)); // 1
console.log(r.ping(100)); // 2
console.log(r.ping(3001)); // 3
console.log(r.ping(3002)); // 3
console.log(r.ping(3003)); // 4
console.log(r.ping(3004)); // 5
