---
category: mirrors
mirrorname: centos
title: Cent OS
---

# CentOS 镜像使用帮助
===================

## 地址
http://mirrors.cug.edu.cn/centos/

## 说明
CentOS 软件源

## 收录架构
x86_64, i386

## 收录版本
6, 7, 8

## 使用说明
### 警告

操作前请做好相应备份。

对于 CentOS 8，使用以下命令替换默认的配置

`
sudo sed -e 's|^mirrorlist=|#mirrorlist=|g' \
         -e 's|^#baseurl=http://mirror.centos.org/$contentdir|baseurl=http://mirrors.cug.edu.cn/centos|g' \
         -i.bak \
         /etc/yum.repos.d/CentOS-Base.repo \
         /etc/yum.repos.d/CentOS-Extras.repo \
         /etc/yum.repos.d/CentOS-AppStream.repo
`

对于 CentOS 6、7，使用以下命令替换默认配置

`
sudo sed -e 's|^mirrorlist=|#mirrorlist=|g' \
         -e 's|^#baseurl=http://mirror.centos.org/centos|baseurl=http://mirrors.cug.edu.cn/centos|g' \
         -i.bak \
         /etc/yum.repos.d/CentOS-Base.repo
`

以上命令只替换了默认启用的仓库。替换之后请运行 yum makecache 更新缓存。

以下是替换之后的文件：

#### CentOS 8：

#### /etc/yum.repos.d/CentOS-Base.repo 文件：

\# CentOS-Base.repo

\#

\# The mirror system uses the connecting IP address of the client and the

\# update status of each mirror to pick mirrors that are updated to and

\# geographically close to the client.  You should use this for CentOS updates

\# unless you are manually picking other mirrors.

\#

\# If the mirrorlist= does not work for you, as a fall back you can try the

\# remarked out baseurl= line instead.

\#

\#

[BaseOS]

name=CentOS-$releasever - Base

#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=BaseOS&infra=$infra

baseurl=http://mirrors.cug.edu.cn/centos/$releasever/BaseOS/$basearch/os/

gpgcheck=1

enabled=1

gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial

#### /etc/yum.repos.d/CentOS-Extras.repo 文件：

\# CentOS-Extras.repo

\#

\# The mirror system uses the connecting IP address of the client and the

\# update status of each mirror to pick mirrors that are updated to and

\# geographically close to the client.  You should use this for CentOS updates

\# unless you are manually picking other mirrors.

\#

\# If the mirrorlist= does not work for you, as a fall back you can try the

\# remarked out baseurl= line instead.

\#

\#

\#additional packages that may be useful

[extras]

name=CentOS-$releasever - Extras

\#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=extras&infra=$infra
baseurl=http://mirrors.cug.edu.cn/centos/$releasever/extras/$basearch/os/

gpgcheck=1

enabled=1

gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial

#### /etc/yum.repos.d/CentOS-AppStream.repo 文件：

\# CentOS-AppStream.repo

\#

\# The mirror system uses the connecting IP address of the client and the

\# update status of each mirror to pick mirrors that are updated to and

\# geographically close to the client.  You should use this for CentOS updates

\# unless you are manually picking other mirrors.

\#

\# If the mirrorlist= does not work for you, as a fall back you can try the

\# remarked out baseurl= line instead.

\#

\#

[AppStream]

name=CentOS-$releasever - AppStream

\#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=AppStream&infra=$infra
baseurl=http://mirrors.cug.edu.cn/centos/$releasever/AppStream/$basearch/os/

gpgcheck=1

enabled=1

gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial

#### CentOS 7：

#### /etc/yum.repos.d/CentOS-Base.repo 文件：

\# CentOS-Base.repo

\#

\# The mirror system uses the connecting IP address of the client and the

\# update status of each mirror to pick mirrors that are updated to and

\# geographically close to the client.  You should use this for CentOS updates

\# unless you are manually picking other mirrors.

\#

\# If the mirrorlist= does not work for you, as a fall back you can try the

\# remarked out baseurl= line instead.

\#

\#

[base]

name=CentOS-$releasever - Base

\#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=os&infra=$infra
baseurl=http://mirrors.cug.edu.cn/centos/$releasever/os/$basearch/

gpgcheck=1

gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7

\#released updates

[updates]

name=CentOS-$releasever - Updates

\#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=updates&infra=$infra
baseurl=http://mirrors.cug.edu.cn/centos/$releasever/updates/$basearch/

gpgcheck=1

gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7

\#additional packages that may be useful

[extras]

name=CentOS-$releasever - Extras

\#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=extras&infra=$infra
baseurl=http://mirrors.cug.edu.cn/centos/$releasever/extras/$basearch/

gpgcheck=1

gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7

\#additional packages that extend functionality of existing packages

[centosplus]

name=CentOS-$releasever - Plus

\#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=centosplus&infra=$infra

baseurl=http://mirrors.cug.edu.cn/centos/$releasever/centosplus/$basearch/

gpgcheck=1

enabled=0

gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7

#### CentOS 6：

#### /etc/yum.repos.d/CentOS-Base.repo 文件：

\# CentOS-Base.repo

\#

\# The mirror system uses the connecting IP address of the client and the

\# update status of each mirror to pick mirrors that are updated to and

\# geographically close to the client.  You should use this for CentOS updates

\# unless you are manually picking other mirrors.

\#

\# If the mirrorlist= does not work for you, as a fall back you can try the

\# remarked out baseurl= line instead.

\#

\#

[base]

name=CentOS-$releasever - Base

\#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=os&infra=$infra
baseurl=http://mirrors.cug.edu.cn/centos/$releasever/os/$basearch/

gpgcheck=1

gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-6

\#released updates

[updates]

name=CentOS-$releasever - Updates

\#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=updates&infra=$infra
baseurl=http://mirrors.cug.edu.cn/centos/$releasever/updates/$basearch/

gpgcheck=1

gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-6

\#additional packages that may be useful

[extras]

name=CentOS-$releasever - Extras

\#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=extras&infra=$infra
baseurl=http://mirrors.cug.edu.cn/centos/$releasever/extras/$basearch/

gpgcheck=1

gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-6

\#additional

[centosplus]

name=CentOS-$releasever - Plus

\#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=centosplus&infra=$infra

baseurl=http://mirrors.cug.edu.cn/centos/$releasever/centosplus/$basearch/

gpgcheck=1

enabled=0

gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-6

\#contrib - packages by Centos Users

[contrib]

name=CentOS-$releasever - Contrib

\#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=contrib&infra=$infra
baseurl=http://mirrors.cug.edu.cn/centos/$releasever/contrib/$basearch/

gpgcheck=1

enabled=0

gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-6

#### 相关链接
#### 官方主页
https://www.centos.org/

#### 邮件列表
https://wiki.centos.org/zh/GettingHelp/ListInfo

#### 论坛
https://forums.centos.org/

#### 文档
https://docs.centos.org/

#### Wiki
https://wiki.centos.org/zh/

#### 镜像列表
https://www.centos.org/download/mirrors/