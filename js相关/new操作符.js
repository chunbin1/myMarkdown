/**
 *
 * new 操作符的过程
 * 1. 创建一个对象p实例
 * 2. 把p的__proto__指向其构造器的原型对象P.prototype
 * 3. prototype中的construtor指向P
 *
 *  */

function A(name, age) {
  this.name = name;
  this.age = age;
}

A.prototype.sayYourName = function() {
  console.log("i am" + this.name);
};

function New() {
  let res = {};
  let [constructor, ...args] = [...arguments];
  if (constructor.prototype !== null) {
    res.__proto__ = constructor.prototype;
  }
  // 结构参数
  // 执行构造函数 把属性或者方法添加到创建的空对象上
  let ret = constructor.apply(res, args);
  if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
    // 如果构造函数的返回是一个对象 返回这个对象
    return ret;
  }
  // 否则返回新建的对象
  return res;
}

const a = New(A, "sdfs", 12);
a.sayYourName();
