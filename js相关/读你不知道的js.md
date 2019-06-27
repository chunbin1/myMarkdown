记录一些以前不知道的
### 块作用域
#### 块级作用域做垃圾回收机制
```
function process(data){
  // do something  
}

{ // 显式的块级作用域，在这里定义的内容完成后可以销毁
  let somReallyBigData = { ... }
  process(somReallyBigData)
}

var btn = document.getElementById('my_button')
btn.addEventListener('click',function click(evt){
  console.log('click)
})
```
由于click函数形成了一个覆盖整个作用域的闭包，js引擎极有可能保存这个结构，而加入了块作用域后，引擎清楚的知道没有必要继续保存someReallyBigData.

### 提升
```
var a = 2;
```
js会将上看成2个声明: var a ; a = 2; 
第一定义生命是在编译阶段进行，第二个赋值声明会等待执行。
所以
```
console.log(a)  // 输出undefined
var a = 2

// 相当于
var a
console.log(a)
a=2
```
**只有声明会被提升，赋值和其他运行逻辑会留在原地 等待执行**
所以
```
foo(); // TypeError
bar(); // ReferenceError

var foo = function bar(){

}
```
foo()对undefined值进行函数调用 导致非法操作 抛出typeError异常
提升后相当于
```
var foo;
foo(); // TypeError
bar(); // ReferenceError

foo = function(){
  var bar = ...self...
  // ...
}
```
ps:注意避免在块内声明函数（不过现在也不用var了 0.0）


### 5.闭包
闭包使函数可以继续访问定义时的词法作用域，将内部变量 函数传递到所在词法作用域外

