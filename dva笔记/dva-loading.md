## dva-loading
### 配置
```
import createLoading from 'dva-loading';

app.use(createLoading());
```
配置完成后，在任何一个 dva 的 routes 组件中就都会有一个 loading 对象，如果你对 dva 稍有了解的话，应该不难知道它在哪。比如下面这行代码中的 loading 对象就是由于上面的配置。

```
// 连接loading到app
export default connect(({ app, loading }) => ({ app, loading }))(App);


// 打印loading对象
loading: {
  global: false,
  models: {app: false},
  effects: {app: false}
}

loading 有三个方法，其中 loading.effects['login/login'] 为监听单一异步请求状态，当页面处于异步加载状态时该值为 true，当页面加载完成时，自动监听该值为 false。

如果同时发出若干个异步请求，需求是当所有异步请求都响应才做下一步操作，可以使用 loading.global() 方法，该方法监听所有异步请求的状态。

```