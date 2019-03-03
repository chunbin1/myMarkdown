### 关键字
v-if,v-show,v-for,v-bind,v-on,v-text,v-html

#### v-if v.s v-show
v-if如果为false是不渲染到dom上的
而v-show为false是渲染到dom上，display:none;
**所以**：
 - v-show有更高的初始化消耗，适用于切换频繁的场景，如Tab等
 - v-if有更高的切换消耗，适用于权限控制等 一次渲染的场景

#### v-text v.s {{}}
v-text和{{}}效果基本一样，但是v-text在网速慢数据未加载的时候显示为空，{{}}会显示在html中，但书写方便，推荐使用v-text

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
值得注意的是：scoped是用来保护本身样式不影响全局，为组件私有样式，不能保证全局变量不会影响到组件，所以命名还是要复杂点，比如加个前缀。

#### 过滤器filters
语法{{message|myFilter}}
|线后面加过滤器
**过滤器串联**
{{message|myFilter1|myFilter2}}
**过滤器参数**
{{message|myFilter(11,12)}}  => myFilter:function(value,a,b)

#### computed 
**methods v.s computed**
计算属性，只有当依赖改变时候才会重新取值
计算属性具有缓存，依赖不改变，值不会变，而methods无缓存，每次页面重新渲染，方法就会重新执行

##### getter和setter
计算属性有getter和setter，分别在读取和设置时候用
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

