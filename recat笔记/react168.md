最近在学Vue，很久没用react写东西了，今天来学习一下16.8的hook
[官网](https://reactjs.org/docs/hooks-intro.html) 科学上网看小哥哥写代码
[亲自写写](https://codesandbox.io/s/new)

#### useState
```
import React,{useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  function addCount(){
    setCount(count+1)
  }
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={addCount}>
        Click me
      </button>
    </div>
  );
}
```
这个api能把state干掉
ps:不要在if或者else里面使用

#### useContext
之前我们使用context来解决多层嵌套传props,分三步
1. createContext创建Context 
2. 使用Context.Provider组件提供数据
3. Context.Provider的所有后代组件，都可以通过Context.Consumer使用数据数据
```
const ColorContext = React.createContext('black')

function Button(props){
    return (
      <ColorContext.Consumer>
      {color=>
        <button style={{ background: color }}>
          {color,props.children}
        </button>}
      </ColorContext.Consumer>
      
    );
}

function MiddleWare(){
  return (
    <Button>我来了</Button>
  )
}

function App() {
  return (
    <div>
      <ColorContext.Provider value='yellow'> 
        <MiddleWare></MiddleWare>
      </ColorContext.Provider>
    </div>
  );
}
```
##### useContext方案
不再需要consumer,useContext接收一个createContext()返回的对象
```
function Button2(props){
  const color = useContext(ColorContext)
  return <button style={{ background: color }}>{(color, props.children)}</button>
}
```
可以提供Provider以改变传值
```
function MiddleWare(props) {
  return 
    <ColorContext.Provider value="yellow">
        <Button2>指定provider</Button2>
    </ColorContext.Provider>
}

```

[example](https://codesandbox.io/s/rjqlj01lpm)

#### useEffect
```
function App() {
 const [width,setWidth] = useState(window.innerWidth)
  useEffect(()=>{
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize',handleResize)
    return ()=>{
      window.removeEventListener('resize',handleResize)
    }
  })
  return (
    <div>
      <p>{width}</p>
    </div>
  )
}
```
useEffect相当于合并了componentDidMount和componentDidUpdata和componentWillUnmount,然后useState代替了this.state
```
  componentDidMount(){
   window.addEventListener('resize',this.handleResize)
  }
  componentDidUpdate(){
   window.addEventListener('resize',this.handleResize)
  }
  componentWillUnmount(){
  window.removeEventListener('resize',this.handleResize)
}
  handleResize(){
  this.setState({width:window.innerWidth})
}

```
然后可以把Effect抽离出来做为函数，代码可复用
```
function useWidth(){
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return width
}

function App() {
 const width =  useWidth()
  return (
    <div>
      <p>{width}</p>
    </div>
  )
}
```
[example](https://codesandbox.io/s/4rn18o6r00)

#### 最后实践一下
写一个useOutsideClick
```
function useOutsideClick(ref,fuc){
  useEffect(()=>{
    const handleClickOutside = (e) => { if(e.target!==ref.current){fuc()} }
    window.addEventListener('click' ,handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }
  )
}
```
使用(非常的简单)：
```
function App() {
  const ref = useRef(null);
  useOutsideClick(ref, () => {
    console.log('OUTSIDE CLICKED');
  });

  return (
    <div ref={ref} style={{
      width: 200,
      height: 200,
      background: 'red',
    }} />
  );
}
```
[demo](https://codesandbox.io/s/w70vjzm66l)

#### useReducer
让我们来回忆一下 使用redux使用reducer
```
1.首先创建一个store index.store.js
export default function configStore(){
    const store = createStore(rootReducer,applyMiddleware(...middlewares))
    return store
}

2.引入store app.js
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }

3.定义action和创建reducder index.action.js index.reducer.js
export const ADD = 'ADD'
export const DELETE = 'DELETE'
function todos(state = INITAL_STATE, action) {
  switch action.type{
    case ADD:{...}
    case DELETE:{...}
  }
}

4.页面中使用reducer  component.js
export default connect(mapStateToProps, mapDispatchToProps)(Component);
```
太复杂了有没有，（使用dva可以简化写法）
而使用useReducer可以省略很多代码:
```
//index.js
  const { state, dispatch } = useContext(reducerContext);
  return (
    <div className="App">
      <>
        Count: {state.count}
        <button
          onClick={() => dispatch({ type: "reset", payload: { count: 0 } })}
        >
          Reset
        </button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <reducerContext.Provider value={{ state, dispatch }}>
          <ChangeCount />
        </reducerContext.Provider>
      </>
    </div>
  );
```
但是不知是否有像查看store的浏览器插件，或者redux-logger这样的中间件帮助我们查看状态的变化，redux的生态还是更好一点的
[demo](https://codesandbox.io/s/y0mol0m789)

