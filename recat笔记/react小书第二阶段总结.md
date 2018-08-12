### 生命周期
```
  componentWillMount：组件挂载开始之前，也就是在组件调用 render 方法之前调用。
  componentDidMount：组件挂载完成以后，也就是 DOM 元素已经插入页面后调用。
  componentWillUnmount：组件对应的 DOM 元素从页面中删除之前调用。
```

### PropTypes和组件参数验证
#### 安装第三方库prop-types
```
npm install -save prop-types
```
[npm官网](https://www.npmjs.com/package/prop-types)
它可以帮助我们：
1. 验证props的参数类型
2. 属性指定默认值
```
// 为属性指定默认值:
Greeting.defaultProps = {
  name: 'Stranger'
};
```

### style

1. css样式要变成对象再传入h1属性中{{}}
2. css样式中的'-'要变成大写字母，驼峰型fontSize
3. 把样式写在state中，使用color: this.state.color,通过setState({color: 'blue'})可以改变样式。
```
<h1 style={{fontSize: '12px', color: this.state.color}}>React.js 小书</h1>
``` 

### props.children与布局的复用

```
 <Card>
    <h2>React.js 小书</h2>
    <div>开源、免费、专业、简单</div>
    订阅：<input />
  </Card>

  通过props.children可以获得<Card>中的内容

  <div className='card'>
    <div className='card-content'>
      {this.props.children}
    </div>
  </div>

```
打印：props.children，他是一个数组:
![img](https://huzidaha.github.io/static/assets/img/posts/4CD84934-5A7F-4942-A5F5-3C935E113499.png)

可以通过数组的方式，完成对props.children的复用：
```
      <div className='two-cols-layout'>
        <div className='sidebar'>
          {this.props.children[0]}
        </div>
        <div className='main'>
          {this.props.children[1]}
        </div>
      </div>
```
这是一个两列布局组件，嵌套的 JSX 的第一个结构会成为侧边栏，第二个结构会成为内容栏，其余的结构都会被忽略。这样通过这个布局组件，就可以在各个地方高度复用我们的布局。

### ref进行dom操作 --慎用
通过ref，把这个dom元素通过log返回到this.logt,这样可以通过this.logt访问该dom元素
```
class Post extends Component {
  handleClick(){
    console.log(this.log.clientHeight)
  }
  render () {
    return (
        <p 
        onClick={this.handleClick.bind(this)} 
        ref={(log)=>this.logt=log} 
        >
        {this.props.content}
        </p>
        )
  }
}
```
ps：能不用ref就不用ref




### dangerouslySetInnerHTML --慎用
实现动态html,可能会导致跨站脚本攻击(XSS)，不要泛用
```
  render () {
    return (
      <div
        className='editor-wrapper'
        dangerouslySetInnerHTML={{__html: this.state.content}}
        >
        </div>
    )
  }
```

