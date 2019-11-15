## docker快速入门

### 概念
image: 镜像，类似于ios镜像，安装后可以成为一个系统
container: 镜像运行的载体

### 安装docker
查看服务器版本
```
cat /etc/redhat-release
```
[根据不同版本安装]("https://zhuanlan.zhihu.com/p/54147784")

安装后可能需要重启终端，否则使用docker命令都要加sudo

### 常用命令

```
// 查看镜像
docker image list || docker images

// 运行镜像
docker container run hello-world

// 删除镜像
docker rm hello-word

// 删除容器
docker rm [containerID] 
// 通过
docker container list

// 搜索镜像
docker search image-you-need

// 拉取镜像
docker image pull image-you-need

// 查看正在运行的container
docker container list

// 查看已经安装的image
docker image list
```

### 容器相关命令

进入容器

```
docker exec -it [containerID] /bin/bash
```

退出容器

```
exit
```

或者使用

```
ctrl+D
```



### 如何了解docker命令参数

在docker中 使用

```
docker --help
```

可以查看命令帮助文档

查看二级命令,以docker exec命令为例

```
docker exec --help
```

输出

```
Usage:	docker exec [OPTIONS] CONTAINER COMMAND [ARG...]

Run a command in a running container

Options:
  -d, --detach               Detached mode: run command in the background
      --detach-keys string   Override the key sequence for detaching a container
  -e, --env list             Set environment variables
  -i, --interactive          Keep STDIN open even if not attached
      --privileged           Give extended privileges to the command
  -t, --tty                  Allocate a pseudo-TTY
  -u, --user string          Username or UID (format: <name|uid>[:<group|gid>])
  -w, --workdir string       Working directory inside the container
```

非常详细，

例1，进入容器命令:

```
docker exec -it CONTAINER COMMAND [ARG...]
```

其中

-i 表示STDIN（标准输入）是开启的

-t 让docker为用户创建一个伪tty,这样才能和容器交互

COMMAND 为进入容器运行的命令，常用的有/bin/bash，使用bash交互，另外还有mango等，使用mango交互。



例2，运行镜像命令:

```
docker run -d -p 12345:27017 -v mongo_configdb:/data/configdb -v mongo_db:/data/db --name mongo docker.io/mongo --auth
```

首先使用

```
docker run --help
```

查看帮助文档

输出：

```
 -d, --detach       Run container in background and print container ID
 										运行container在后台然后打印ID
                                       
 -p, --publish list      Publish a container's port(s) to the host
 		                     把container的端口映射到docker主机上的端口
 		                     如 12345:27017 表示
 		                     把访问主机的12345端口转发到container的27017端口
 
 -v, --volume list       Bind mount a volume
 												 使用volumes持久化保存数据
```

-v的使用方法：

```
-v mongo_configdb:/data/configdb
```

意思是:

把本机上docker下的名为mongo_configdb的volume文件挂载到container的/data/configdb

volume可以理解为数据容器，只有docker可以使用，宿主机的文件系统没有权限访问

比如我的mongo_configdb挂载在/var/lib/docker/volumes/mongo_configdb，可是我在docker文件夹目录中却无法进入volumes，无论使用sudo与否,它只能被docker读取。

就算container被删除，数据也任然会保留下来，除非你手动删除。

## 实战安装mongo

搜寻mongo

```shell
docker search mongo
```

获取镜像

```shell
docker pull mongo
```

使用身份认证模式启动mongo

具体参数查看[官方文档](https://hub.docker.com/_/mongo/)

```
docker run -d -p 27017:27017 -v mongo_configdb:/data/configdb -v mongo_db:/data/db --name mongo docker.io/mongo --auth
```



