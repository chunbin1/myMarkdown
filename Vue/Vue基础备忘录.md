###  常用
v-if,v-show,v-for,v-bind,v-on,v-text,v-html,v-cloak,v-once
[练习用网站](https://jsbin.com/pagotol/edit?html,output)

#### v-once
只渲染一次，以后重新渲染直接作为静态内容

#### v-model
双向绑定数据
**v-model与单选框**
[单选](https://jsbin.com/ropezis/edit?html,output)
**v-model与复选框**
[复选框](https://jsbin.com/gajejiv/edit?html)
##### v-model的修饰符
- lazy: v-model默认在input输入时同步数据，lazy变为change事件触发时同步，即失去焦点、回车同步。
- number: 把输入的数字转化为number类型
- trim: 把输入的文字过滤首尾空格
##### 简单的实现双向绑定
```
<input type="“text”" :value="message" @input="message=$event.target.value"
/>
<p>{{ message }}</p>
<button @click="addP">+p</button>

data: {
  message: 'hi'
},
method:{
  addP:function(){
    this.m
  }
}
```
思路：添加一个函数在input的时候改变message

#### v-cloak
解决初始化慢页面闪动

不需要表达式

用法：

这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。

示例：
```
[v-cloak] {
  display: none;
}

<div v-cloak>
  {{ message }}
</div>
```
不会显示，直到编译结束。

#### v-once
- 只渲染一次

#### v-if
v-if、v-else渲染时候会复用，加上key可以解决
##### v-if v.s v-show

v-if 如果为 false 是不渲染到 dom 上的
而 v-show 为 false 是渲染到 dom 上，display:none;
**所以**：

- v-show 有更高的初始化消耗，适用于切换频繁的场景，如 Tab 等
- v-if 有更高的切换消耗，适用于权限控制等 一次渲染的场景

#### v-text v.s {{}}v

v-text 和{{}}效果基本一样，但是 v-text 在网速慢数据未加载的时候显示为空，{{}}会显示在 html 中，但书写方便，推荐使用 v-text

#### scoped

代码

```
<style scoped>
.example {
  color: red;
}
</style>

<template>
  <div class="example">hi</div>
</template>
```

渲染为：

```
<style>
.example[data-v-f3f3eg9] {
  color: red;
}
</style>

<template>
  <div class="example" data-v-f3f3eg9>hi</div>
</template>
```

值得注意的是：scoped 是用来保护本身样式不影响全局，为组件私有样式，不能保证全局变量不会影响到组件，所以命名还是要复杂点，比如加个前缀。

#### 过滤器 filters

语法{{message|myFilter}}
|线后面加过滤器
**过滤器串联**
{{message|myFilter1|myFilter2}}
**过滤器参数**
{{message|myFilter(11,12)}} => myFilter:function(value,a,b)

#### computed

**methods v.s computed**
计算属性，只有当依赖改变时候才会重新取值
计算属性具有缓存，依赖不改变，值不会变，而 methods 无缓存，每次页面重新渲染，方法就会重新执行

##### getter 和 setter

计算属性有 getter 和 setter，分别在读取和设置时候用

```
fullName:{
  get:function(){...}
  set:function(){...}  // app.fullName = 'setter text' 时候调用
  }
}
```

#### watch

监听某一个数据变化，需要在数据变化时执行异步或开销较大的操作时候，这个方法最有用
[example]('https://jsbin.com/basazek/edit?html,console,output')

#### v-bind

##### 对象语法

```
<div v-bind:class="{ active: isActive }"></div>
```

以上代码表示 isActive 存在，class 中有 active
对象的键为类名，值为布耳值

**把对像放在 computed 里面**

```
<div v-bind:class="classObject"></div>

computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
```

**数组语法**

```
<div v-bind:class="[activeClass, errorClass]"></div>
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>

<div v-bind:class="[{ active: isActive }, errorClass]"></div> //数组语法+对象语法
```

#### 数组
**改变数组的指定项**
```
 Vue.set(app.arr,1,”car”)
 ```
**改变数组长度**
app.arr.splice(1)

#### v-on
[官网](https://cn.vuejs.org/v2/api/#v-on)
**修饰**
stop:阻止单击事件向上冒泡prevent:
prevent:提交事件并且不重载页面
self:只是作用在元素本身而非子元素的时候调用
once: 只执行一次的方法
使用方法:
```
<button @click.once="myMethod"></button>
```
**监听键盘事件**
[官网](https://cn.vuejs.org/v2/guide/events.html#%E7%B3%BB%E7%BB%9F%E4%BF%AE%E9%A5%B0%E9%94%AE)

## 概念

#### MVVM

MVVM是Model-View-ViewModel的缩写。MVVM是一种设计思想。Model 层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；View 代表UI 组件，它负责将数据模型转化成UI 展现出来，ViewModel 是一个同步View 和 Model的对象。

在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。

ViewModel 通过v双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。
