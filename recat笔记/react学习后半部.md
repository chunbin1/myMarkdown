### 遇到的坑
问题描述：想传一个图片供组件使用，结果直接传图片地址有问题
使用import
```
import img from './lcb.jpg';
<Img imgURL={img}>
```

### key的用法
Keys可以在DOM中的某些元素被增加或删除的时候帮助React识别哪些元素发生了变化。因此你应当给数组中的每一个元素赋予一个确定的标识。

### react思想
对应任何可变数据理论理应只有一个**单一数据源**
应用中保持**自上而下的数据流**，而不是尝试在不同组件中同步状态。

**状态提升**：当两个组件要共享数据，可以将数据提升至离他们最近的父组件中
状态提升要写更多的“模板代码”，好处是，你可以更快的地寻找和定位bug。

### react中的样式的使用
**内联方式**
被react所推崇
```
render(){
return(
<div>
<div
style={{
width:'200px',
height:'80px',
backgroundColor:'yellow',
fontSize:'24px',
textAlign:'center'
}}
>This is Page1!</div>
</div>
);
}
```
**import方式** 
```
#引入
import styles from './switch.css'

#使用
render(){
    className = open ? styles.sb:styles.bs;

    return{
        <button className={className} onClick={this.handleClick}>
        <button>
}
}

```
**require方式**