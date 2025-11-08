# 队列使用场景

教程中的例子过于简单， 通过chatGpt列出的例子：

## 任务调度（Task Scheduling）

用于控制异步任务的执行顺序，比如限制并发请求数。

```javascript
class TaskQueue {
  constructor(limit) {
    this.queue = [];
    this.running = 0;
    this.limit = limit;
  }

  run(task) {
    return new Promise((resolve, reject) => {
      const runTask = () => {
        this.running++;
        task().then(resolve).catch(reject).finally(() => {
          this.running--;
          this.next();
        });
      };

      if (this.running < this.limit) {
        runTask();
      } else {
        this.queue.push(runTask);
      }
    });
  }

  next() {
    if (this.queue.length > 0 && this.running < this.limit) {
      const nextTask = this.queue.shift();
      nextTask();
    }
  }
}


```

## 事件队列（Event Queue）

浏览器本身的事件循环机制就是一个“队列”，异步回调、定时器、Promise 微任务等都依赖队列。

setTimeout, setInterval

Promise.then, queueMicrotask

## 用户触发多个任务时，用队列保证一次只处理一个

```javascript

const printQueue = [];

function enqueuePrintJob(job) {
  printQueue.push(job);
  if (printQueue.length === 1) processQueue(); // 若队列刚添加第一个任务，则开始执行
}

function processQueue() {
  if (printQueue.length === 0) return;

  const job = printQueue[0];
  job().finally(() => {
    printQueue.shift();
    processQueue();
  });
}

```

项目实际案例

```js
    // 一个请求结束再进行下一个请求， 防止频繁调用被限流
    await list.reduce(async (prev, curr) => {
      await prev
      return await request(curr)
    }, Promise.resolve())
```
