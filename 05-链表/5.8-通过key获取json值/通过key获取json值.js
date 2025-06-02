const obj = {
  a: {
    b: {
      c: {
        d: 'hello!',
      },
    },
  },
};

const keys = ['a', 'b', 'c', 'd'];

let p = obj;
keys.forEach((key) => {
  p = p[key];
});
console.log(p);
