// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

const obj: any = {
  name: "abc",
  favColor: "red",
};

const parent: any = {
  parent: "Parent",
};

Object.setPrototypeOf(obj, parent);

// Enumerable falsed
Object.defineProperty(obj, "age", {
  value: 10,
  configurable: false,
  writable: false,
  enumerable: false,
});

console.log(obj);

for (let i in obj) {
  console.log(i);
}

// Error its, readonly
// obj["age"] = 14;

Object.preventExtensions(obj);

try {
  Object.defineProperty(obj, "visible", {
    value: true,
  });
} catch (e) {
  console.trace(e);
}
console.log("<<<<<<<<<<= Object properties =>>>>>>>>>>");
console.log("hasOwn - parent pro", Object.hasOwn(obj, "parent"));
console.log("hasOwn - age", Object.hasOwn(obj, "age"));
console.log("hasOwn - name", Object.hasOwn(obj, "name"));
console.log("hasOwnProperty - age", obj.hasOwnProperty("parent"));
console.log("hasOwnProperty - name", obj.hasOwnProperty("name"));
console.log("getOwnPropertyNames", Object.getOwnPropertyNames(obj));
console.log("getOwnPropertySymbols", Object.getOwnPropertySymbols(obj));

const descriptor = Object.getOwnPropertyDescriptor(obj, "age");
console.log(descriptor?.configurable);
console.log(descriptor);

console.log("<<<<<<<<<<= __proto__ =>>>>>>>>>>");
function Person() {}

const per: any = new Person() as any;
console.log(per.__proto__, Person.prototype, per.__proto__ == Person.prototype);

console.log("<<<<<<<<<<= arguements =>>>>>>>>>>");
function someFn(name: string) {
  console.log(arguments);
}
someFn("something");
// console.log(someFn);
