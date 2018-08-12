```
npn install express --save
```
安装 Node 模块时，如果指定了 --save 参数，那么此模块将被添加到 package.json 文件中 dependencies 依赖列表中。 然后通过 npm install 命令即可自动安装依赖列表中所列出的所有模块。

#### 初始化工具
```
npm install express-generator -g
express myapp

cd myapp 
npm install

npm start
```

#### 静态文件托管
```
app.use(express.static('public'));
//http://localhost:3000/js/app.js

app.use('/static', express.static('public'));
//http://localhost:3000/static/js/app.js
```

#### 路由句柄
可以为请求处理提供多个回调函数，其行为类似 中间件。唯一的区别是这些回调函数有可能调用 next('route') 方法而略过其他路由回调函数。
```
//多个处理函数
app.get('/example/b', function (req, res, next) {
  console.log('response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from B!');
});

//函数和函数数组混合
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});

```


### 中间件
中间件（Middleware） 是一个函数，它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。

#### 中间件的使用
简单使用
```
app.use((req,res,next)=>{
    console.log('FIRS middleware');
    next();
    console.log('first middleware after');
},)

app.use('/home',(req,res,next)=>{
    console.log('second middleware');
    // next();
    res.send("ok");
}) 

//最后打印
FIRS middleware
second middleware
first middleware after
```

### 中间件库
#### body-parser  --处理请求
#### multer  --处理文件上传
[官网](https://github.com/expressjs/multer)
__一些使用方法__
#### nodemon
自动重启node服务器，可配置性强
```
运行
nodemon server.js
```

