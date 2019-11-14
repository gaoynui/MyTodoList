# mysql & mongodb学习

## mysql

#### 安装（Windows）

1.下载

[MySQL for Windows](https://dev.mysql.com/downloads/mysql/)

2.在解压文件夹下创建配置文件**my.ini**

```
[client]
# 设置mysql客户端默认字符集
default-character-set=utf8
 
[mysqld]
# 设置3306端口
port = 3306
# 设置mysql的安装目录
basedir=解压路径
# 设置 mysql数据库的数据的存放目录，MySQL 8+ 不需要以下配置，系统自己生成即可，否则有可能报错
# datadir=数据存储路径
# 允许最大连接数
max_connections=20
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
```

3.在解压文件夹下的bin文件夹下：

```
#初始化数据库
mysql --initialize --console
```

执行完成不报错会生成一个初始密码。

4.继续输入安装命令：

```
mysqld install
```

提示已经安装，在XX路径下即可。

5.配置环境变量

将解压文件下的bin目录放入系统变量的path中。

重启终端，用管理员权限打开。

#### 使用

1.管理员权限打开终端，启动数据库：

```
net start mysql
```

看到mysql服务启动成功即可。

2.登录服务：

```
#用root账号登录，第一次使用初始密码登录
mysql -u root -p
```

输入密码显示welcome...即登录成功。

3.修改密码：

```
mysql>alter user 'root'@'localhost' identified by '新密码';
```

看到OK字样成功修改。

退出再重写登录：

```
mysql>exit;
C:\WINDOWS\system32>mysql -u root -p
```

4.设置允许外网Ip访问权限：

```
#%表示任意ip，如果指定ip，改为对应ip即可；‘root’是指要使用的用户名
mysql>Grant all privileges on *.* to 'root'@'%' identified by 'paswd' with grant option; 
#刷新权限
mysql>flush priviledges;
```

5.查看用户信息：

```
mysql>use mysql;

mysql>select User,Host,authentication_string from user;
```

6.查看所有数据库：

```
mysql>show databases;
```

7.查看数据库当前连接数，并发数：

```
mysql>show status like '%Threads%';
```

8.查看数据文件存放路径：

```
mysql>show variables like '%datadir%';
```

9.查询表中数据信息：

```
mysql>select * from [database].[table];
ex:
mysql>select * from springdemo.user;
```

<img src="https://github.com/gaoynui/MyTodoLists/blob/master/doc/pics/%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF.png?raw=true" alt="用户信息" style="zoom: 67%;" />

10.mysqlworkbench GUI管理数据库

下载：[下载地址](https://www.mysql.com/cn/products/workbench/)

安装完成打开即可连接可用的数据库服务：

![mysqlworkbench](https://github.com/gaoynui/MyTodoLists/blob/master/doc/pics/mysqlworkbench.png?raw=true)

## mongodb

1.下载：

[地址](https://www.mongodb.com/download-center/communit)

2.GUI管理界面下载：

[地址](https://www.nosqlbooster.com/downloads)

3.使用NoSqlBooster:

file->connect->输入服务器信息

在Connection Tree中管理

4.demo

connect:

<img src="https://github.com/gaoynui/MyTodoLists/blob/master/doc/pics/connectMongodb.png?raw=true" alt="connectMongodb" style="zoom: 67%;" />

create document and insert:

<img src="https://github.com/gaoynui/MyTodoLists/blob/master/doc/pics/useMongodb.png?raw=true" alt="useMongodb" style="zoom:67%;" />

数据插入成功：

<img src="https://github.com/gaoynui/MyTodoLists/blob/master/doc/pics/NoSqlBooster%E7%AE%A1%E7%90%86mongo%E6%95%B0%E6%8D%AE%E5%BA%93.png?raw=true" alt="NoSqlBooster管理mongo数据库" style="zoom:67%;" />

