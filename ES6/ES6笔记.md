### let 和 const
ES6以前js只有函数作用域和全局作用域，let和const引入了块级作用域。
const保证了变量指向的内存地址保存的数据不得改动。
复合类型的数据（主要是对象和数组）量指向的内存地址，保存的只是一个指向实际数据的指针，**const只能保证这个指针是固定的**。将对象声明为常量应该小心
```
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
```