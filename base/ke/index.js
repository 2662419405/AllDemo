let add = (...args) => args.reduce((a, b) => a + b);

function currying(func) {
  const args = [];
  return function result(...rest) {
    if (rest.length === 0) return func(...args);
    args.push(...rest);
    return result;
  };
}

let fn = currying(add);
console.log(fn(1, 2)(10, 100, 20, 30)());
