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
数据库：
* 数据库MySQL v8.0.18
* 版本管理工具 Git
K8S：
* Kubeadm v1.16.2
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
## 截图
后端运行成功：  
![后端运行成功]()  
前端登录界面：  
![]()  
前端页面：    
![]()  
整体部署：  
![]()  
