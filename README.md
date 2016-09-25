# git use

1.安装完成后,在命令行输入：
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
注：1、生成ssh keys
	ssh-keygen -t rsa -C "name@email.com"
	生成了两个文件：id_rsa和id_rsa.pub
	把id_rsa.pub里的密钥添加到github SSH keys

在linux下可以用cat命令显示id_rsa.pub中的内容（cat  ~/.ssh/id_rsa.pub），让后复制其内容。


2.在目录位置中创建版本库/仓库
$ git init
	目录中会多出一个.git的隐藏目录，存放跟踪管理版本库的

3.添加文件到仓库
  (1).添加文件到暂存区
   $ git add file
  	查看当前状态($ git status)
  (2).提交到仓库
   $ git commit -m "修改记录名称"
   (3). 发布发布布
  $ git push 

4.$ git diff	查看当前目录的改动

5.版本控制
	$ git log	查看历史记录. (--pretty=oneline)带参数查看

	$ git reset --hard HEAD^	退回上一版本，（^^）上上个版本

	$ git reflog	查看所有的版本操作记录，查询到版本号

	$ git reset --hard 0001122	退回到指定版本号
	
	
6.撤销修改
$ git reset HEAD file
	把暂存区文件的修改撤销掉，回退到工作区
$ git checkout -- file
	把工作区文件回到最近一次git commit或git add时的状态

7.删除文件
$ git rm file
$ git commit -m "记录"
$ git push

删除文件夹下所以文件
$ git rm filename -r -f
$ git commit -m "记录"
$ git push


9.关联仓库(本地推送到远程)
	(1).$ git remote add origin git@github.com:username/项目名称.git
	连接远程仓库
	(2).$ git push -u origin master
	推送本地master到远程

	从现在起，只要本地作了提交，就可以通过命令：$ git push origin master, 把本地 master分支的最新修改推送至GitHub	
	--注定义master为默认的推送分支：git config --global push.default matching

10.关联远程库(远程关联到本地)
$ git clone git@github.com:username/项目名称.git	关联远程的仓库
	$ git push	推送到远程
	
二、分支
查看分支：git branch

创建分支：git branch <name>

切换分支：git checkout <name>

创建+切换分支：git checkout -b <name>

合并某分支到当前分支：git merge <name>

删除分支：git branch -d <name>

命令可以看到分支合并图 ：git log --graph

三、实操中：
取消本地的文件修改
git checkout -- <filename>
此命令会使用 HEAD 中的最新内容替换掉你的工作目录中的文件。已添加到暂存区的改动以及新文件都不会受到影响。 

假如你想丢弃你在本地的所有改动与提交，可以到服务器上获取最新的版本历史，并将你本地主分支指向它：
git fetch origin
git reset --hard origin/master
