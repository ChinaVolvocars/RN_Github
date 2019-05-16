# RN_Github
React native 项目

### 修改origin的名字
```git
git remote add repo-on-GitHub https://github.com/richardkalehoff/RichardsFantasticProject.git
```


####
git remote add 用于添加到新的远程仓库的连接。

git remote -v 用于查看远程仓库与连接之间的详细信息。


### 查看 commit
```git
git log --oneline --graph --decorate --all
```

### 推送 commits
```git
git push origin master
```
```git
git push 命令用于从本地仓库向远程仓库推送 commit 。

git push 命令需要：git push <remote-shortname> <branch>

你想向其推送 commit 的远程仓库的简写名
包含你想推送的 commit 的分支
```
### 从远程仓库拉取修改
```git
git pull origin master
```

### fetch 
```git
你可以将 git pull 命令想象成执行两步操作：

获取远程更改（这会将 commit 添加到远程仓库，并移动跟踪分支指向它们）
将本地分支与跟踪分支合并
git fetch 命令只执行上面的第一步。它只检索 commit 和移动跟踪分支。它_不会_将本地分支与跟踪分支合并。提供给 git pull 的同样信息也要传递给 git fetch：

远程仓库的简写名
包含要取回的 commit 的分支
$ git fetch origin master
```

### fork 仓库

### 按作者筛选
```git
使用 git shortlog 按作者对 commit 分组
$ git shortlog

使用 --author 选项筛选 commit
$ git log --author="Richard Kalehoff"

使用 --grep 选项筛选 commit
$ git log --grep="border radius issue in Safari"
```

### 创建Pull Request
```git
Pull Request 是让源仓库拉取你的 commit，并融合在其项目中的请求。要创建 Pull Request，你需要完成一些操作：

你必须 fork 源仓库
将你的 fork 克隆到你的计算机
进行一些 commit（最好是在特性分支上！）
将 commit 推送回你的 fork
创建一个新的 Pull Request，并选择包含你的新 commit 的分支
```

### 与源项目保持同步

当你在对仓库进行更改的特性分支上工作时，该仓库可能会从原作者处接收更新。

Star（收藏）和 Watch（关注）
如果你想跟进仓库的动态，GitHub 提供了一个非常方便的方式 - 它能让你 star 仓库：


Star 按钮和仓库的级别

你可以前往 https://github.com/stars 列出和过滤你 star 过的所有仓库。

如果你想跟踪特定仓库，star 非常有用。但是，如果你想实时跟进仓库的发展就不行了，你得手动前往收藏页面查看仓库，以检查它们是否发生变化。

💡 Star 和受欢迎度 💡
Star 是能帮助你跟踪感兴趣仓库的一个有用功能，同时也成为了衡量仓库受欢迎程度的手段。

如果你对提升仓库的星级不感兴趣，不如了解一下 "watch" 仓库。现在就在看看吧！

Watch 仓库
如果你要跟进一个项目的变化，并希望接收变更通知，GitHub 为你提供了 "Watch" 功能：


通知设置页。"Watching" 一个仓库会通知你仓库的所有活动。

如果你频繁地在一个仓库上工作，那么我建议你将 watch 设置改为"Watching"（持续关注）。这样，当该仓库发生任何活动时，GitHub 都会通知你，例如当有人向仓库推送变更，创建了新的 Issues，或者在现有 Issues 中添加了评论。

加入上传更改
现在你了解了 watch 仓库的好处，假设你在 watch 一个仓库，这时收到一个通知说有一些 commit 被推送到了初始源仓库。你如何让这些更改进入你 fork 的仓库副本中？如果你想继续在你的 fork 上进行开发，那么就需要让你 fork 的副本尽可能与源仓库保持同步。

来看看如何让这些变更从远程仓库进入我们自己的仓库。 instructor_notes: ''


假使 Lam 开始对她的项目进行更改了，我的 fork 中不会获得这些更改，我要将她的项目添加为额外远程仓库，以便与她保持同步。

在我的本地仓库中，我已经有一个远程仓库了，那就是 origin。


终端显示了与远程仓库的现有连接。这是我的简写名为 origin 的远程仓库。

注意 origin 一词只是第一次 git clone 远程仓库时使用的默认名称。我们将使用 git remote 命令来向此列表添加一个新的简写名和 URL。这会提供给我们一个与源仓库之间的连接。

$ git remote add upstream https://github.com/udacity/course-collaboration-travel-plans.git
注意我使用名称 upstream 作为引用源仓库的简写名。与 origin 简写名一样，这里的 upstream 一词也并不特别；这只是一个常规的词。它可以是任何词... 比如 "banana"。但 "upstream" 一词通常用于引用源仓库。

我们来看看在添加了新的远程仓库后，远程仓库的列表现在是什么样的：


终端显示了关于这两个远程仓库的信息 - origin 和 upstream。

Origin 与 Upstream 差别
现在令人困惑的一点可能是 origin 与 upstream 之间的差别。其中，origin 指的不是我们 fork 自的源仓库（也称为"初始"仓库），而是指我们 fork 后的仓库。虽然它叫 origin，但实际并不是初始仓库。

记住，origin 和 upstream 只是默认或实际名称。如果你觉得将 origin 远程仓库命名为 mine，upstream 远程仓库命名为 source-repo 对你来说更清楚，那么你尽可如此命名。你在本地仓库如何命名远程仓库完全不影响源仓库。


使用 git remote rename 命令将 origin 重命名为 mine，以及将 upstream 重命名为 source-repo。

⚠️ 重置远程仓库名称 ⚠️
上面的图显示了远程仓库的重命名，但我已经使用以下命令将它们变回了默认/实际名称 origin 和 upstream：

$ git remote rename mine origin
$ git remote rename source-repo upstream
拉取上游变更
现在，要获得上游远程仓库的更改，我们只需运行 git pull 并使用 upstream 简写名，而不是 origin 简写名：

$ git pull upstream master

终端显示了运行 git fetch upstream master 的结果。一个新的分支添加到了本地仓库。

习题 1/2
现在你已向新的 upstream 远程仓库添加了一个连接，如果你运行 git fetch upstream master，它会更新你在 GitHub 上 fork 的仓库吗？





现在，我们已从上游远程仓库获取了所有更改，接下来查看日志，看看我们的本地仓库中有哪些新信息。我使用 git log 命令来确保显示所有分支的所有 commit（包括远程和跟踪分支！）：

$ git log --oneline --graph --decorate --all

终端在获取 upstream 远程仓库的变更后，显示了我的本地仓库的日志。

在提交说明的包裹下阅读可能有点困难，但你应该能看到，现在本地 master 分支前有一个 upstream/master 远程分支。upstream/master 位于 commit 52e493f 上，而 master 分支位于 commit 1c12194 上。

我们可以使用 upstream/master 分支来跟踪源仓库 master 分支的位置。现在，我们可以运行 git fetch upstream master，获取对源仓库的master分支所做的更改。

使用 git fetch upstream master 命令拉取了 upstream 远程仓库的 master 分支上的更改。

如果我们想获取 upstream/master 更改并将它们合并到master分支，我们应使用什么命令？

在这里输入你的回答。
要向 Lam 的仓库推送这些新更改，我们不想运行 git push origin upstream/master，因为 upstream/master 不是本地分支。要将这些更改融入我 fork 的她的项目版本，我可以将 upstream/master 合并到一个现有分支中（例如本地 master 分支）然后推送它。

# 确保我位于正确的合并分支上
$ git checkout master

# 合并 Lam 的更改
$ git merge upstream/master

# 将 Lam 的更改发送到*我的*远程仓库
$ git push origin master
小结
当在你 fork 的项目副本上工作时，初始项目的维护者会继续向他们的项目添加更改。你需要将你的 fork 副本与他们的项目保持同步，以包含他们所做的任何更改。

要将源仓库的更改提取到你在 GitHub 上 fork 的仓库副本，你需要：

获得源仓库的可克隆 URL
使用 git remote add 命令创建一个新的远程仓库
使用简写名 upstream 指向源仓库
提供源仓库的 URL
获取新的 upstream 远程仓库
将 upstream 的分支合并到本地分支
将新更新的本地分支推送到你的 origin 仓库


如何设置远程仓库
如何将更改推送到远程仓库并从中获取更改
如何 fork 仓库
开始处理新功能或项目更改前，要采取的初步步骤
如何创建 Pull Request
了解与项目其他利益相关者清楚、频繁沟通的重要性

1. fork Watch star 项目
2. 设置源仓库地址
```git
$ git remote add upstream https://github.com/udacity/course-collaboration-travel-plans.git
```
3. 拉取上游更新
```git
$ git fetch upstream master
$ git pull upstream master
```
4. 推送更改
```git
# 确保我位于正确的合并分支上
$ git checkout master

# 合并 Lam 的更改
$ git merge upstream/master

# 将 Lam 的更改发送到*我的*远程仓库
$ git push origin master
```
5. 发起pull request

### 总结
```git
1. 获得源仓库的可克隆 URL
2. 使用 git remote add 命令创建一个新的远程仓库
    1. 使用简写名 upstream 指向源仓库
    2. 提供源仓库的 URL
3. 获取新的 upstream 远程仓库
4. 将 upstream 的分支合并到本地分支
5. 将新更新的本地分支推送到你的 origin 仓库
```

### 常用命令
```git
git init xxx
git commit -a -m "提交了什么"
git log
git push
git pull
git merge
git remote -v
git remot add upstream https://

```
