/** 思路
 * 
 * 
 * 1. 如果传入的参数没有到原函数需要的数量 则继续执行curry函数接收参数
 * 2. 如果参数达到了，则执行科里化了的函数
 */

function curry(fn, args) {
  var length = fn.length; // Function.length 为 函数需要几个参数
  var args = args || [];
  return function(){
      newArgs = args.concat(Array.prototype.slice.call(arguments));
      if (newArgs.length < length) {
          return curry.call(this,fn,newArgs);
      }else{
          return fn.apply(this,newArgs);
      }
  }
}

function multiFn(a, b, c) {
  return a * b * c;
}

var multi = curry(multiFn);

multi(2)(3)(4);
multi(2,3,4);
multi(2)(3,4);
multi(2,3)(4);
