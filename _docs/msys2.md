---
category: help
layout: help
mirrorid: msys2
---

MSYS2 镜像使用帮助
==================

收录架构
--------

* MINGW: i686, x86_64
* MSYS: i686, x86_64

安装
--------------

请访问该镜像目录下的 `distrib/` 目录（[x86_64](https://{{ site.hostname }}/msys2/distrib/x86_64) 、[i686](https://{{ site.hostname }}/msys2/distrib/i686/)），找到名为 `msys2-<架构>-<日期>.exe` 的文件（如 `msys2-x86_64-20141113.exe`），下载安装即可。

pacman 的配置
-------------

编辑 `/etc/pacman.d/mirrorlist.mingw32` ，在文件开头添加：

```bash
Server = https://{{ site.hostname }}/msys2/mingw/i686
```

编辑 `/etc/pacman.d/mirrorlist.mingw64` ，在文件开头添加：

```bash
Server = https://{{ site.hostname }}/msys2/mingw/x86_64
```

编辑 `/etc/pacman.d/mirrorlist.msys` ，在文件开头添加：

```bash
Server = https://{{ site.hostname }}/msys2/msys/$arch
```

然后执行 `pacman -Sy` 刷新软件包数据即可。


注: 本Help参考自[USTC镜像](https://lug.ustc.edu.cn/wiki/mirrors/help/msys2)
