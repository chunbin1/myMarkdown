### model与view之间的联系
model文件
```
export default {
    namespace: 'products',
    state: [],
    reducers: {
      delete(state, { payload: id }) {
        return state.filter(item => item.id !== id);
      },
    },
  };
```
**namespace**: 当前 Model 的名称。整个应用的 State，由多个小的 Model 的 State 以 namespace 为 key 合成
**state**: 该 Model 当前的状态。数据保存在这里，直接决定了视图层的输出
reducers: Action 处理器，处理同步动作，用来算出最新的 State
effects：Action 处理器，处理异步动作

#### app.model()
app.model()挂载model
```
app.model(require('./models/products').default);
```

#### connect()
connect有多种写法
```
# 1、state代表的是全局的state，再通过state.namespace来引入具体的state
export default connect(( state) => ({
  fromState:state.products
}))(Products);

# 2、{products}表示从state中取得namespace
export default connect(({ products }) => ({
  fromState:state.products
}))(Products);
```
其中fromState是传给组件的名称
state.products是state中products。


### dva转发（解决跨域问题）
在.webpackrc中添加
下面的转发地址为'http://localhost:3000/rQ'
```
  "proxy":{
    "/rQ":{
      "target":"http://localhost:3000",
      "changeOrigin":true
    }
```
