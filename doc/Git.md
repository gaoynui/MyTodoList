# git学习

参考：[Git命令行基础](https://yehuohan.github.io/2017/06/05/笔记/DOC/工具参考书之Git命令行基础/)

## git工作流程

**工作区（WorkSpace）**

工作区是我们的工程目录，我们进行的工程的创建、修改和维护都在此目录中。

**索引区/暂存区（Index）**

索引区可以理解为是对工程项目修改的记录，在备份前，我们得需要知道哪些地方修改了。索引区就是记录一次备份有哪些地方修改了。

**本地仓库（Local ）**

本地仓库就是我们存放项目备份的地方，索引区和本地仓库全部放在工作区下的.git目录中，即使是离线状态，git也能对工程项目进行管理。

**远程仓库（Remote）**

git服务器，用于在云端存放项目代码，进行备份。

上述的关系如下：

![git仓库管理流程](https://github.com/gaoynui/MyTodoList/blob/master/doc/pics/git%E4%BB%93%E5%BA%93%E7%AE%A1%E7%90%86%E6%B5%81%E7%A8%8B.jpg?raw=true)

## git安装

**Linux安装：**

```
sudo apt-get install git
```

**Windows安装：**

1.下载git:

https://git-scm.com/downloads

2.进行环境配置：因为windows使用gbk编码，而git服务器是utf-8编码，不设置编码的转换，容易乱码。

用户信息设置：

```
git config --global user.name <name>

git config --global user.email <email>
```

git编码设置：设置提交到远程Git仓库时使用utf-8编码。windows下git输出log时使用gbk编码，同时，windows下git输出status不会乱码。

```
git config --global i18n.commitEncoding utf-8
git config --global i18n.logOutputEncoding gbk
echo 'LESSCHARSET=utf-8' >> /etc/profile
git config --global core.quotepath false
```

3.在云端创建git用户并设置SSH密钥，依据不同git平台具体操作。

4.git本地仓库建立：

```
mkdir project       # project目录就是工作区
cd project          # 切换到project目录，进行git仓库建立
```

5.上传：

```
git init            # 初始化git，会建立.git文件夹
git add .           # 将所有的更改添加到Index索引区
git commit -m "msg" # 将所有的更改提交到Local本地仓库，msg为上传的自定义log信息
git remote add remote_name URL:<yourname>/project.git
                    # 建立Remote远程仓库
git push remote_name master:master
                    # 将本地master分支提同步到远程仓库的master分支
```

6.下载：

```
git clone URL       #从远程仓库克隆一个版本到当前文件夹下

git remote add name URL
                    #添加远程仓库
git pull origin master
                    #取回远程origin/master分支，与本地分支合并，会直接扔掉WorkSpace区的修改
```

## git常用命令

**help**

```
git help -a        #查看git指令
键入q               #退出帮助
```

**config**

```
git config --list  #查看已有配置
```

**status**

```
git status                          

#查看WorkSpace区和Index区状态，显示WorkSpace中有哪些修改，显示Index中有哪些提交。
```

**rm**

```
git rm

#删除git对file的追踪，同时删除WorkSpace中的file文件
#注意：如果想去除对文件或目录的追踪，除了更改.gitignore，还需要用git rm --cached删除追踪关系
```

**checkout**

```
git checkout -- PATH(or .)
# 从Index区恢复指定文件file（或所有文件）到WorkSpace
# 即相当于扔掉WorkSpace中自上次执行git add以来的修改，此命令会扔掉WorkSpace中修改，使用请慎重。
# 若是没有执行git add，则不会扔掉任何修改。
# 注意，两横线"--"不能少，这表示后面代表的是路径或文件，而不是分支名，因为checkout也可以用于分支的切换。
```
