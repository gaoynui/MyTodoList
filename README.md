## 项目介绍
名称： My Todo Lists  

介绍： 制作页面显示制定学习的方案和学习过程  

组成：前端、后端、数据库、k8s  
```
后端：
* Spring Boot
* JDK1.8
* 开发工具IDEA（安装Vue.js插件）
前端：
* Node v10.16.3
* npm v6.9.0
* Vue v2.9.6
数据库：
* 数据库MySQL v8.0.18
* 版本管理工具 Git
K8S：
* Kubeadm v1.16.2
* Docker v18.09.5
```

作者：GY  

## 文件树

> doc
>
> 存放学习过程中的笔记及配置文件和图片

> src
>
> 存放前后端源文件及打包文件

> 其他文件
>
> 存放部署k8s需要的YAML文件及其他配置文件

> 遇到的问题及解决
>
> 过程中的问题，主要以截图形式记录

> 副本培养计划

## 使用

在本地主机上修改hosts文件：

```
# 打开hosts
# ubuntu
sudo vi /etc/hosts
# windows
C:\Windows\System32\drivers\etc
# 在最后另起一行添加：
10.120.16.139 my.todolists.com gy.todolists.com
```

打开浏览器输入：

```
http://my.todolists.com/index.html
```
### 本地使用 需修改前后端源码的URL接口和配置数据库
* 数据库：  
net start mysql  
database port 3306  
database name: springdemo  
database user: root  
database password: 123qwe  
* 后端backend：  
通过IDEA打开直接运行项目  
或者  
```
java -jar backend/target/myTodolists-0.0.X-SNAPSHOT.jar
```
* 前端frontend：  
项目目录下命令行：  
```
npm install
npm run dev
```
前端访问localhost:8080,后端端口为localhost:8888
## 截图
后端运行成功：  
![后端运行](https://github.com/gaoynui/MyTodoList/blob/master/doc/pics/%E5%90%8E%E7%AB%AF%E8%BF%90%E8%A1%8C.png?raw=true)  
前端登录界面：  
![前端登录界面](https://github.com/gaoynui/MyTodoList/blob/master/doc/pics/%E5%89%8D%E7%AB%AFdemo1.png?raw=true)  
前端页面：    
![前端页面](https://github.com/gaoynui/MyTodoList/blob/master/doc/pics/%E5%89%8D%E7%AB%AFdemo2.png?raw=true)  
整体部署：  
![k8s整体部署](https://github.com/gaoynui/MyTodoList/blob/master/doc/pics/k8s%E4%B8%8A%E6%95%B4%E4%B8%AA%E9%83%A8%E7%BD%B2%E6%83%85%E5%86%B5.png?raw=true)  
## 相关参考
[Spring Boot demo](https://github.com/BekeyChao/spring-vue-demo)  
[Element 组件](https://cloud.tencent.com/developer/section/1489885)  
[axios与后端通信](https://blog.csdn.net/star_zone/article/details/82784086)  
[单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)  
[单文件组件demo](https://codesandbox.io/s/simple-todo-app-with-vue-29xqm)  
[JDBC使用](https://www.runoob.com/w3cnote/jdbc-use-guide.html)  
[K8S命令表](http://docs.kubernetes.org.cn/683.html)  
[K8S架构](https://www.kubernetes.org.cn/kubernetes%e8%ae%be%e8%ae%a1%e6%9e%b6%e6%9e%84)  
[使用Dockerfile定制镜像](https://yeasy.gitbooks.io/docker_practice/image/build.html)  
[K8S In Action](https://livebook.manning.com/book/kubernetes-in-action/chapter-1/)  
[安装kubeadm](https://zhuanlan.zhihu.com/p/46341911)  
[kubernetes-dashboard版本](https://github.com/kubernetes/dashboard/releases?after=v1.8.1)  
[自定义dashboard](https://blog.csdn.net/networken/article/details/85607593)  
[nginx中location规则](https://segmentfault.com/a/1190000013267839)
