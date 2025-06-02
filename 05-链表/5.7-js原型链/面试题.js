var foo = {}
var fn = function(){}

Object.prototype.a = 'value a'
Function.prototype.b = 'value b'

console.log(foo.a) // value a
console.log(foo.b) // undefined
console.log(fn.a) // value a 
console.log(fn.b) // value b