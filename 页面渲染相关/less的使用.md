## less入门
[官网](http://lesscss.org/)

### 变量
```
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
```
Outputs:
```
#header {
  width: 10px;
  height: 20px;
}
```

### Mixins
```
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```
使用
```
#menu a {
  color: #111;
  .bordered();
}

.post a {
  color: red;
  .bordered();
}
```

### 嵌套
传统css：
```
#header {
    color:black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```
less改写:
```
#header {
    color:black;
    .navigation{
        font-size:12px;
    }
    .logo{
        width:300px;
    }
}
```
清除浮动(&表示当前选择器的父元素)：
```
.clearfix {
  display: block;
  zoom: 1;

  &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```

### 嵌套的AT规则和冒泡
at规则(如@media或@supports)可以像选择器一样嵌套。at-rule是放在最上面的，相对于同一规则集中的其他元素的顺序保持不变。这叫做冒泡。
```
.component {
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
    @media  (min-resolution: 192dpi) {
      background-image: url(/img/retina2x.png);
    }
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
}
```
OUTPUTS:
```
.component {
  width: 300px;
}
@media (min-width: 768px) {
  .component {
    width: 600px;
  }
}
@media (min-width: 768px) and (min-resolution: 192dpi) {
  .component {
    background-image: url(/img/retina2x.png);
  }
}
@media (min-width: 1280px) {
  .component {
    width: 800px;
  }
}
```

### 操作
算术运算+，-，*，/可以操作任何数字，颜色或变量。如果可能的话，数学运算会考虑到单位，并在加、减或比较前对数字进行转换。结果最清楚地表明了单元类型。如果转换不可能或没有意义，则忽略单元。不可能的转换示例:px到cm或rad到%

```
// numbers are converted into the same units
@conversion-1: 5cm + 10mm; // result is 6cm
@conversion-2: 2 - 3cm - 5mm; // result is -1.5cm

// 无法转换
@incompatible-units: 2 + 5px - 3cm; // result is 4px

// example with variables
@base: 5%;
@filler: @base * 2; // result is 10%
@other: @base + @filler; // result is 15%

//乘法
@base: 2cm * 3mm; // result is 6cm

@color: #224488 / 2; //results in #112244
background-color: #112244 + #111; // result is #223355
``` 

### 转义
转义允许您使用任意字符串作为属性或变量值。任何在~“任何”或~“任何”里面的东西都被使用，除了插值之外没有任何变化。
```
@min768: ~"(min-width: 768px)";
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
```
result in:
```
@media (min-width: 768px) {
  .element {
    font-size: 1.2rem;
  }
}
```
Note, as of Less 3.5, you can simply write:
```
@min768: (min-width: 768px);
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
```

### 功能
```
@base: #f04615;
@width: 0.5;

.class {
  width: percentage(@width); // returns `50%`
  color: saturate(@base, 5%);
  background-color: spin(lighten(@base, 25%), 8);
}
```

### 命名空间与访问器
有时，出于组织目的，您可能希望对mixin进行分组，或者只是提供一些封装。你可以很直观地用更少的。假设您想将一些mixin和变量打包到#bundle中，以便稍后重用或分发：
```
#bundle() {
  .button {
    display: block;
    border: 1px solid black;
    background-color: grey;
    &:hover {
      background-color: white;
    }
  }
  .tab { ... }
  .citation { ... }
}
```
使用：
```
#header a {
  color: orange;
  #bundle.button();  // can also be written as #bundle > .button
}
```

### Maps
```
#colors() {
  primary: blue;
  secondary: green;
}

.button {
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}
```
outputs:
```
.button {
  color: blue;
  border: 1px solid green;
}
```

### 作用域
```
@var: red;

#page {
  @var: white;
  #header {
    color: @var; // white
  }
}
```
后面可以覆盖上面的
```
@var: red;

#page {
  #header {
    color: @var; // white
  }
  @var: white;
}
```

### 引入
```
@import "library"; // library.less
@import "typo.css";
```