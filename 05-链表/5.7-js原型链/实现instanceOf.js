
function instanceOf(a, b) {
  while (a) {
    console.log(a)
    if (a.__proto__ === b.prototype) {
      return true;
    }
    a = a.__proto__;
  }
  return false;
}


console.log(instanceOf(1, Number)) // true
console.log(instanceOf(1, Object)) // true