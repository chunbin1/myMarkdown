## React原理
JSX
```
ReactElement.createElement= function(type,config,children){

}


var ReactElement =function(type,key,ref,self,sourse,owner,props){
    var element={
        ....
    }
    
}

```

```
<h1 style={{ color: "#00CC00", width: 15 }} className={lcb}>
  <p data-name="react rocks">hello</p>LCB 2
</h1>;

=>
React.createElement(
  'h1',
  { style: { color: '#00CC00', width: 15 }, className: lcb },
  React.createElement(
    'p',
    { 'data-name': 'react rocks' },
    'hello'
  ),
  'LCB 2'
);
```

### 优化
1. 组件性能优化
  1) 可以定制shouldComponentUpdate()
    来决定是否重新渲染 
    this.setState()
  2) 属性传递优化
  3) 多组件优化
  4) KEY
2. Redux性能优化
3. React同构
  服务端渲染