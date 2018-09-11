### immutable简介
不可变的数据结构
[官网](https://github.com/facebook/immutable-js/)

```
let obj = Map({
  name: "lee",
  love: Map({ name: "basketball", name2: "game" })
});

let obj2 = Map({
  name: "lee",
  love: Map({ name: "basketball", name2: "game" })
});
// is用来比较Map
console.log(is(obj, obj2)); // true
console.log(obj == obj2);  // false

let obj1 = obj.set("name", "cb"); 
// 用哈希值比较
console.log(obj.get("love") == obj1.get("love")); //true
```