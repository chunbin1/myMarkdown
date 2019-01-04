### flex布局

#### 快速入门
[从一个游戏入门](http://flexboxfroggy.com/#zh-cn)
#### 使用于容器上面的属性：

##### 主轴对齐--justify-content
```
#pond{
  display:flex;
  justify-content:flex-end;  
  // flex-start center 
  // space-between 元素之间保持相等距离
  // space-around 元素周围保持相等距离
}
```

##### 交叉轴对齐--align-item
```
#{
  display:flex;
  align-items:flex-end;
  // flex-start center 
  // baseline 元素在容器的基线位置显示
  // stretch 元素被拉伸以填满整个容器
}
```

##### 定义主轴方向 -- flex-direction
```
#pond{
  display:flex;
  flex-direction: row-reverse; //与文字方向相反
  // row 与文字方向相同
  // column 从上放到下 
  // column-reverse 从下放到上
}
```
ps：改变的是主轴方向,所以flex-end，flex-start等(相对主轴方向)也会改变。

##### 换行控制 -- flex-wrap
```
#pond{
  display:flex;
  flex-wrap:wrap;
  // nowrap 
  // wrap-reverse 元素自动换成逆序多行 
}
```

##### flex-flow
flex-flow为flex-direction和flex-wrap两个属性组合
```
#pond{
  display:flex;
  flex-flow:column wrap
}
```

##### align-content
当交叉轴有多余空间，对齐容器内的轴线
```
#pond{
  display:flex;
  flex-wrap:warp;
  align-content:flex-start;
}
默认值-- stretch 每一行都被拉伸以填满容器
flex-start 集中在顶部
flex-end 集中在底部
center 多行居中
space-between 行与行之间保持相等距离
space-around 每行周围保持相等距离
```

##### 实现居中
```
#prod{
  display:flex;
  justify-content:center;
  align-items:center;
}
```

#### 使用于容器内元素的属性
##### 改变元素顺序--order
```
#pond{
  display:flex;
}

.yellow{
  order:1;
}
```
ps:order默认为0,往主轴方向放置则变大。

##### 单独控制元素 -- align-self
在交叉轴上对齐整个元素，覆盖align-items
```
#pond{
  display:flex;
  align-items:flex-start;
}

.yellow{
  align-self:flex-end;
}
```

##### flex-grow
定义元素的放大比例,默认为0,如果存在剩余空间，也不放大
```
.item {
  flex-grow:2; /* default 0 */
}
```
##### flex-shrink
定义了元素的缩小比例，默认为1，即如果空间不足，该项目将缩小。
```
.item{
  flex-shrink:2 /* default 1 */
}
```

##### flex-basis
分配多余空间之前，元素占据主轴的大小，浏览器根据这个计算主轴的多余空间,默认值auto，即为元素的默认宽度
```
.item {
  flex-basis: <length> | auto; /* default auto */
}
```
##### flex
flex-grow, flex-shrink 和 flex-basis的简写，默认值为0，1，auto
```
.item{
  flex:0  1 auto; /* default */
}
```


