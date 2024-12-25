function curry(fn) {
  return function currying(...args: any[]) {
    if (args.length >= fn.length) {
      return fn.apply(null, args);
    } else {
      return (...otherArgs: any[]) => currying(...args, ...otherArgs);
    }
  };
}

const add = (a: number, b: number, c: number) => a + b + c;

const curried = curry(add);

let x1 = curried(1);
let x2 = x1(2);
let x3 = x2(3);
console.log("currying");
console.log(x3);
