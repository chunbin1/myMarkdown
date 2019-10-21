### PM2实现远程发布

[pm2](http://pm2.keymetrics.io/docs/usage/quick-start/)是一个node的守护进程管理器



**学习的原因**

最近在公司的旧项目改造中，把一个旧项目拆分成了3个项目，并用nginx配置成了一个项目。

在开发中，调试环境的发布比较繁琐，经常要到服务器拉取代码、重新打包项目、重启服务。

而pm2可以让我在本地完成这一系列动作，大大简化发布的流程。



#### 安装

```
npm install pm2 -g
```



#### 简单使用

```
pm2 start app.js  // 启动node
pm2 restart app_name|id // 重启 id 从 pm2 logs中能看到
pm2 reload app_name|id // 重载
pm2 stop app_name|id // 停止服务
pm2 delete app_name|id // 删除服务

pm2 list  // 查看进程列表
pm2 logs // 日志
```

非常的简单 

#### 配置说明

新建ecosystem.json

```json
{
  "apps": [
    {
      "description": "abc",
      "script": "index.js",
      "name": "abc",
      "instances": 1,
      "exec_mode": "cluster",
      "merge_logs": true,
      "env": {
        "NODE_ENV": "production"
      }
    }
  ],
  "deploy": {
    "development": {
      "user": "user", // ssh的用户名
      "host": ["192.168.1.2"], // 要发布的机器
      "ref": "origin/develop", // 要发布的代码的分支
      "repo": "git@xxx.git",  // 代码的仓库
      "path": "/path/to/your/app", // 服务器存储代码地址
      "ssh_options": "StrictHostKeyChecking=no",
      "post-deploy": "yarn && yarn run build && pm2 startOrRestart ecosystem.json --env production",  // 发布部署的命令
      "env": {
        "NODE_ENV": "production"
      }
    }，
    "prod":{
    	....
 	 	}
  }
}
```

使用：

第一次

```
// 第一次运行 自动在/path/to/your/app中创建source文件夹 拉取代码
pm2 deploy ecosystem.json development setup
```

然后使用

```
pm2 deploy econsystem.json development
```

意思是使用pm2发布development环境

**可能遇到的问题：**

1. 远程的服务器无法获取github/gitlab的代码

   生成公钥并添加到github中的settings中





