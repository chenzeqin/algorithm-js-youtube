// 实例
var foo = {}
var fn = function(){}
// 原型
Function.prototype.b = 'value b'
Object.prototype.a = 'value a'

console.log(foo.a) // value a
console.log(foo.b) // undefine
console.log(fn.a) // value a
console.log(fn.b) //  value b