# 原型链

原型链就是对象通过 __proto__ 指向构造函数的 prototype，形成一条链式结构，实现属性和方法的继承。

## 基本概念
在 JavaScript 中：

每个对象都有一个私有属性 [[Prototype]]（可以通过 __proto__ 访问）。

当访问对象的属性时，如果对象本身没有这个属性，就会沿着原型链向上查找，直到找到或到达 null 为止。

## 构造函数与原型链的关系

```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function() {
  console.log('Hi, I am ' + this.name);
};

const p = new Person('Tom');
p.sayHi(); // 沿原型链找到 sayHi 方法

```

1. p.__proto__ === Person.prototype 为 true

2. Person.prototype.__proto__ === Object.prototype 为 true

3. 最终链条：
p → Person.prototype → Object.prototype → null


## 原型链查找过程
当访问 obj.prop 时：

1. 先在 obj 自身查找。

2. 如果没有，就查找 obj.__proto__。

3. 一直向上找，直到 null。



## 实现instanceOf

instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。其返回值是一个布尔值。

<<< @/05-链表/5.7-js原型链/实现instanceOf.js

## 面试题

考原型链查找过程

<<< @/05-链表/5.7-js原型链/面试题.js
