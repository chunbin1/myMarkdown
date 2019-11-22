/** apply的实现
 *
 * 思路：apply和call的实现方式一样，只是第二个参数不一样
 *
 * 1. 在对象上加入这个方法
 * 2. 调用该方法
 * 3. 删除该方法
 */

Function.prototype.apply2 = function(context = window) {
  context.fn = this;
  let obj;
  if (arguments[1]) {
    obj = context.fn(...arguments[1]);
  } else {
    obj = context.fn();
  }
  delete obj.fn;
  return obj;
};

// 以下为测试代码
var value = 2;

var obj = {
  value: 1
};

function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age
  };
}

console.log(bar.apply2(obj, ["kevin", 18]));
