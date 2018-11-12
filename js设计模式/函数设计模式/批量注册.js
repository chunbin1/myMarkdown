
// 批量注册
/*
var Type = {}

for(var i = 0 ,type; type=['String','Array','Number'][i++];){
  (function( type ){
    Type['is'+type] = function(obj){
      return Object.prototype.toString.call(obj) === `[object ${type}]`
    }
  })(type)
};

console.log(Type.isArray([]))
console.log(Type.isString('str'))

// 单例模式
var getSingle = function(fn){
  var ret;
  return function(){
    return ret||(ret = fn.apply(this,arguments))
  }
}

var getScript = getSingle(function(){
  return document.createElement('script')
})

var s1 = getScript()
var s2 = getScript()

console.log(s1===s2);
*/

// 高阶函数实现AOP 面向切片编程 通过扩展Function.prototype实现
Function.prototype.before = function( beforeFn ){
  var _self = this
  return function(){
    beforeFn.apply(this,arguments);
    return _self.apply(this,arguments)
  }
}

Function.prototype.after = function(afterFn){
  var _self = this
  return function(){
    var ret = _self.apply(this,arguments)    
    afterFn.apply(this,arguments)
    return ret
  }
}

var func = function(){
  console.log(2);
}

func = func.before(function(){
  console.log(1);
}).after(function() {
  console.log(3);
})

func()