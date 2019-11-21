/**  
 * 参考 https://github.com/mqyqingfeng/Blog/issues/11
 * 思路:
    1. 将函数设置为对象的方法(this的指向为该对象)
    2. 调用该方法
    3. 删除该方法
*/

Function.prototype.call2 = function (context) {
  var context = context || window;
  context.fn = this;  // this为fn方法

  var args = [];
  for(var i = 1, len = arguments.length; i < len; i++) {
      args.push('arguments[' + i + ']');
  }

  var result = eval('context.fn(' + args +')');

  delete context.fn
  return result;
}

// 测试一下
var value = 2;

var obj = {
  value: 1
}

function bar(name, age) {
  console.log(this.value);
  return {
      value: this.value,
      name: name,
      age: age
  }
}

// bar.call2(null); // 2

console.log(bar.call2(obj, 'kevin', 18));
