- 正常流
- float + clear
- position relative + absolute
- display inline-block
- 负margin

#### css3 flex布局
1. 与方向无关
2. 空闲自动分配
3. 适用于简单的线性布局，复杂布局要交给grid布局(栅格)

#### flex item & flex container
flex container的属性：
```
flex-direction 方向  row column
flex-wrap 换行  nowrap wrap
flex-flow 上面两个简写
justify-content 主轴方向的对齐方式 flex-start flex-end space-around space-between...
align-items 对齐方式  默认值-stretch
align-content 多行/列内容对齐方式(少用)
```

flex item的属性
```
flex-grow: 1 ; //空间过多时使用
flex-shrink: 1 ; //收缩比例
flex-basis : 100px  //默认大小-一般不用
flex: 1 2 100px   //上面三个个的缩写
order   //顺序(代替双飞翼)
align-self  //自身对齐的方式   
```