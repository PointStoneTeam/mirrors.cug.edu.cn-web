---
category: help
layout: help
mirrorid: bananian
---

## Bananian 镜像使用帮助

[Bananian](https://www.bananian.org/) 是为 [Banana Pi](http://www.banana-pi.org/) 制作的，基于官方 Debian 仓库的发行版，
其内核和 bootloader 为 Banana Pi 做了定制化。

安装镜像可以到 <https://{{ site.hostname }}/bananian/releases/> 获取。

### 使用 TUNA 镜像作为软件仓库

首先需要信任 Bananian 的 GPG 公钥

```
gpg --recv-keys 24BFF712
gpg --armor --export 24BFF712 | sudo apt-key add -
```

之后添加 Bananian 仓库，运行以下命令即可

<form class="form-inline">
<div class="form-group">
	<label>选择你的 Bananian 版本: </label>
	<select class="form-control release-select" data-template="#apt-template" data-target="#apt-content">
	  <option data-release="1604" data-opt='{"debian": "jessie"}' selected>16.04</option>
	  <option data-release="jessie" data-opt='{"debian": "jessie"}'>15.08</option>
	  <option data-release="wheezy" data-opt='{"debian": "wheezy"}'>15.04 或更早</option>
	</select>
</div>
</form>

{% raw %}
<script id="apt-template" type="x-tmpl-markup">
# 激活 TUNA bananian 镜像
sudo cat > /etc/apt/sources.list.d/bananian.list << EOF
deb http://{%endraw%}{{ site.hostname }}{%raw%}/bananian/packages {{release_name}} main
EOF

# 激活 TUNA debian 镜像
sudo cat > /etc/apt/sources.list << EOF
deb http://{%endraw%}{{ site.hostname }}{%raw%}/debian/ {{debian}} main contrib non-free
deb http://{%endraw%}{{ site.hostname }}{%raw%}/debian/ {{debian}}-backports main contrib non-free
deb http://{%endraw%}{{ site.hostname }}{%raw%}/debian/ {{debian}}-updates main contrib non-free
deb http://{%endraw%}{{ site.hostname }}{%raw%}/debian-security/ {{debian}}/updates main contrib non-free
deb-src http://{%endraw%}{{ site.hostname }}{%raw%}/debian/ {{debian}} main contrib non-free
deb-src http://{%endraw%}{{ site.hostname }}{%raw%}/debian/ {{debian}}-backports main contrib non-free
deb-src http://{%endraw%}{{ site.hostname }}{%raw%}/debian/ {{debian}}-updates main contrib non-free
deb-src http://{%endraw%}{{ site.hostname }}{%raw%}/debian-security/ {{debian}}/updates main contrib non-free
EOF
</script>
{% endraw %}

<p></p>

<pre>
<code id="apt-content">
</code>
</pre>

更新软件包缓存

```
sudo apt-get update
```
