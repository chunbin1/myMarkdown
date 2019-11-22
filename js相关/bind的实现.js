if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          // this instanceof fBound === true时,说明返回的fBound被当做new的构造函数调用
          return fToBind.apply(this instanceof fBound
                 ? this
                 : oThis,
                 // 获取调用时(fBound)的传参.bind 返回的函数入参往往是这么传递的
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    // 维护原型关系
    if (this.prototype) {
      // Function.prototype doesn't have a prototype property
      fNOP.prototype = this.prototype; 
    }
    // 下行的代码使fBound.prototype是fNOP的实例,因此
    // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
    fBound.prototype = new fNOP();

    return fBound;
  };
}
// 简要版本
Function.prototype.bind2 = function(content) {
  if(typeof this != "function") {
      throw Error("not a function")
  }
  // 若没问参数类型则从这开始写
  let fn = this;
  let args = [...arguments].slice(1);
  
  let resFn = function() {
      return fn.apply(this instanceof resFn ? this : content,args.concat(...arguments) )
  }
  // bind要考虑原型链的影响
  function tmp() {}
  tmp.prototype = this.prototype;
  resFn.prototype = new tmp();
  
  return resFn;
}


// 测试
const obj = {
  value: 123
}

function bindTest(){
  console.log(this.value)
}

bindTest.prototype.value = 12

bindTest.bind2(obj)()  // 123
bindTest() // undefined
const a = new bindTest()  // 12
console.log(a)