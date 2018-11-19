### ES6-- class

#### 基本使用

以前的写法:
```
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
```

类的写法：
```
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
```

实际上，类任然是函数
```
class Point {
  // ...
}
typeof Point // "function"
Point === Point.prototype.constructor // true
```
<br>
new实例对象
```
  var point = new Point(2, 3);
```

#### 特性与技巧
- 实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）
```
//定义类
class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

}

var point = new Point(2, 3);

point.toString() // (2, 3)

point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false
point.__proto__.hasOwnProperty('toString') // true
```
- 可以通过实例的__proto__属性为Class添加方法 ==谨慎使用==
```
var p1 = new Point(2,3);
var p2 = new Point(3,2);

p1.__proto__.printName = function () { return 'Oops' };

p1.printName() // "Oops"
p2.printName() // "Oops"

var p3 = new Point(4,2);
p3.printName() // "Oops"
```
- 不存在变量提升，与es5不一样，类要放在前面，关系到继承
- 类的属性名，可以采用表达式
```
let methodName = "getArea";
class Square{
  constructor(length) {
    // ...
  }

  [methodName]() {
    // ...
  }
}
```
Square类的方法名getArea，是从表达式得到的

##### 私有方法
ES6不提供私有方法，只能模拟实现
1. 命名上加以区别
```
class Widget {
  // 公有方法
  foo (baz) {
    this._bar(baz);
  }
  // 私有方法
  _bar(baz) {
    return this.snaf = baz;
  }
  // ...
}
```
2. 私有方法移出模块
```
  class Widget {
  foo (baz) {
    bar.call(this, baz);
  }

  // ...
}

function bar(baz) {
  return this.snaf = baz;
}
```
3. Symbol  -- 看上去不错，可以试试
```
const bar = Symbol('bar');
const snaf = Symbol('snaf');

export default class myClass{

  // 公有方法
  foo(baz) {
    this[bar](baz);
  }

  // 私有方法
  [bar](baz) {
    return this[snaf] = baz;
  }

  // ...
};
```

##### this的指向
```
  class Logger {
  printName(name = 'there') {
    this.print(`Hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
const { printName } = logger;
printName(); // TypeError: Cannot read property 'print' of undefined
```
printName()的时候this已经指向该方法运行时所在的环境
解决方法：
1. 使用bind函数
```
class Logger {
  constructor() {
    this.printName = this.printName.bind(this);
  }
  // ...
}
```
2. 使用箭头函数
```
  class Logger {
  constructor() {
    this.printName = (name = 'there') => {
      this.print(`Hello ${name}`);
    };
  }

  // ...
}
```

##### 继承
```
class ColorPoint extends Point {
  constructor(x, y, color) {
  super(x, y); // 调用父类的constructor(x, y)
  this.color = color;
}
```
子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。

ps:终于知道为啥react中需要super(props)啦。。。

==ES6和ES5的区别==
ES5的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。ES6的继承机制完全不同，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。

