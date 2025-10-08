function instanceOf(a, b) {
  while (a) {
    if (a.__prop__ === b.prototype) {
      return true;
    }
    a = a.__prop__;
  }
  
  return false
}

console.log(instanceOf(1, Number)); // true
console.log(instanceOf(1, Object)); // true
