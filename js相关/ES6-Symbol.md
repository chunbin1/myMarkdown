### 为何要提出Symbol
ES5的对象属性名都是字符串，很容易造成属性名冲突。比如，使用了一个他人提供的对象，想为这个对象添加新的方法，新方法的名字就有可能与现有方法产生冲突。
Symbol可以保证每个属性名字都是独一无二的，从根本上防止了属性名冲突

例1：使用Symbol()函数创建
```
let firstName = Symbol()
typeof firstName => "symbol"
let person = {}
person[firstName]="CBlee"
```

例2：Symbol()接受字符串作为参数，表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。
```
let s1 = Symbol('foo');
let s2 = Symbol('bar');
let s3 = Symbol('foo')

s1 // Symbol(foo)
s2 // Symbol(bar)
s3 // Symbol(foo)

s1==s3  // false

s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"


```
