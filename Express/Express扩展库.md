### cookie-parser库
基于cookie的用户验证
```
npm install cookie-parser --save
```

### fs库
主要用于文件操作
```
#引入
var fs= require('fs')

#创建文件夹
var createFolder = function(folder){
  try{
      fs.accessSync(folder); //查看文件夹权限、即查看文件是否存在
  }catch(e){
      fs.mkdirSync(folder);//创建文件夹
  }  
};
```

### multer库
主要用于文件上传
[官网](https://github.com/expressjs/multer)
优点：简单

```
#引入
var multer= require("multer");

#磁盘存储
var storage = multer.diskStorage({
    //destination用于处理上传时候的存放文件夹
    destination: function (req, file, cb) {
      cb(null, uploadFolder)
    },
    // filename 指定文件上传的名字
    filename: function (req, file, cb) {
      cb(null, file.originalname )
    }
  })

//指定存储
var upload = multer({ dest: 'uploads/' }) //功能简单
var storage = multer.memoryStorage() //存储到内存
var upload = multer({ storage: storage }) //功能多，指定上传路径和文件名

file文件存储信息：
console.dir(file):
  {
    fieldname: 'logo',
    originalname: 'dva.png',
    encoding: '7bit',
    mimetype: 'image/png',
    destination: './uploads/',
    filename: 'dva.png',
    path: 'uploads\\dva.png',
    size: 137306 
  }

//upload.single('logo')，logo和html中的input中的name="logo"对应
app.post('/upload', upload.single('logo'), function (req, res, next) {
    res.send({'ret_code': 0});
})
```

### ejs
[官网](https://ejs.bootcss.com/)
```
views, 放模板文件的目录，比如： app.set('views', './views')
view engine, 模板引擎，比如： app.set('view engine', 'jade')
```
#### 语法
引入数据
```
    <h1>
        <%= data.age %>
            <%= data.job %>
    </h1>
```
引入js语法
```
  <% data.hobbie.forEach((item)=>{ %>
            <li>
                <%= item %>
            </li>
        <% }) %>
```
引入别的模板文件
```
<%- include('partials/header.ejs') -%>
```
后台传值
```
//引入ejs
var ejs = require('ejs');

var person = req.params.name;
var data = {age:22,job:"programmer",hobbie:['eating','basketball','game']}
res.render('form',{person:person,data:data});
```

### body-parser库
#### 简单使用
```
var express = require('express') //获取模块 
var bodyParser = require('body-parser') 
var app = express() // 创建 application/json 解析 
var jsonParser = bodyParser.json() // 创建 application/x-www-form-urlencoded 解析 
var urlencodedParser = bodyParser.urlencoded({ extended: false })
```

### mssql库
[官方文档](https://github.com/tediousjs/node-mssql#readme)

### utility
[官方文档](https://www.npmjs.com/package/utility)
