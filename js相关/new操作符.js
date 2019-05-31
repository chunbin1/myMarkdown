/**
 *
 * new 操作符的过程
 * 1. 创建一个对象p实例
 * 2. 把p的__proto__指向其构造器的原型对象P.prototype
 * 3. prototype中的construtor指向P
 *
 *  */

function A(name,age){
  this.name = name
  this.age = age
}

A.prototype.sayYourName = function(){
  console.log('i am'+this.name)
}

function New(func) {
  var res = {};
  if (func.prototype !== null) {
    res.__proto__ = func.prototype;
  }
  var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
  if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
    return ret;
  }
  return res;
}

const a = New(A,'sdfs',12)
a.sayYourName()

