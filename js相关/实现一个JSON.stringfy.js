/** 实现一个JSON.stringfy
 *
 * 思路：
 *   转化类型：
 *    1. Boolean | Number | String 类型会转换为对应的原始类型
 *    2. undefined、任意函数以及symbol，会被忽略（出现在非数组对象的属性值中时），或者被转换成 null（出现在数组中时）
 *    3. 不可枚举的属性会被忽略
 *    4. 如果一个对象的属性值通过某种间接的方式指回该对象本身，即循环引用，属性也会被忽略。
 *
 * 写一个递归调用，判断每一个属性
 */

function jsonStringify(obj) {
  let type = typeof obj;
  // 判断是否为对象
  if (type === "object") {
    let json = [];
    let arr = Array.isArray(obj); // obj instanceof Array
    for (let k in obj) {
      let v = obj[k];
      let type = typeof v;
      if (/string|undefined|function/.test(type)) {
        v = '"' + v + '"';
      } else if (type === "object") {
        v = jsonStringify(v);
      }
      json.push((arr ? "" : '"' + k + '":') + String(v));
    }
  } else {
    if (/string|undefined|function/.test(type)) {
      obj = '"' + obj + '"';
    }
    return String(obj);
  }
  return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
}
