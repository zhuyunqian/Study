# git

## git 是什么？

git分布式版本控制工具（管理代码版本）



## 操作

**克隆代码** （把远程仓库拉取到本地）：git clone 仓库地址

**查看仓库状态**: git status

**提交工作区代码到暂存区**： git add 文件路径或者**.(所有文件)**

**提交暂存区代码到历史记录区：**git commit -m '本次提交的信息提示'

**提交历史记录区的历史提交记录到远程仓库：**git push origin 分支名称,origin代表就是远程仓库地址的别称

**替换掉原来远程仓库的https的地址，把它换成是ssh的地址**

**查看当前的远程地址：**git remote -v

**删除原来的远程地址：** git remote remove origin 

**添加本地的远程地址：** git remote add origin ssh地址

**拉取远程仓库的代码下来:** git pull origin master，当远程仓库的代码比你现在本地的代码要新的时候

**强制拉取远程仓库的代码：**`git pull origin master --allow-unrelated-histories`

**创建并且切换分支：** `git checkout -b 新分支的名称`

**切换分支：**`git checkout 分支名称`

**删除分支：** `git branch -D 分支名称`

**合并其他分支代码：** `git merge 分支名称`



## 冲突解决

1. 确定冲突的文件，根据`CONFLICT (content): Merge conflict in` 找到冲突所在的文件

### 配置ssh-key

1. 本地生成一个key值： `ssh-keygen -t rsa -C "xxxxx@xxxxx.com" `
2. 把生成的key值复制到gitee（码云），github， gitlab(部署在公司内网使用)



## 注意点

1. git提示的信息里面只要有**fatal** 或者**error**这两个词随便一个，都是执行git命令失败了
2. master分支：生产环境的代码（线上代码）；dev分支：当前开发分支；开发功能分支，例如：login，reg