(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{155:function(t,e,u){"use strict";u.r(e);var s=u(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,u=t._self._c||e;return u("div",{staticClass:"content"},[u("h2",{attrs:{id:"ubuntu-apt-软件管理器国内软件源"}},[u("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-apt-软件管理器国内软件源","aria-hidden":"true"}},[t._v("#")]),t._v(" Ubuntu apt 软件管理器国内软件源")]),u("h3",{attrs:{id:"更换软件源方法"}},[u("a",{staticClass:"header-anchor",attrs:{href:"#更换软件源方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 更换软件源方法")]),u("div",{staticClass:"language-shell extra-class"},[u("pre",{pre:!0,attrs:{class:"language-text"}},[u("code",[t._v("# 备份\n$ sudo cp /etc/apt/sources.list /etc/apt/sources.list.back\n# 复制内容覆盖list文件中的内容\n$ sudo vim /etc/apt/sources.list\n# 更新\n$ sudo apt-get update\n# 如果出错恢复备份\n$ sudo cp /etc/apt/sources.list.back /etc/apt/sources.list\n")])])]),u("h3",{attrs:{id:"软件源"}},[u("a",{staticClass:"header-anchor",attrs:{href:"#软件源","aria-hidden":"true"}},[t._v("#")]),t._v(" 软件源")]),u("ul",[u("li",[t._v("中科大")])]),u("div",{staticClass:"language- extra-class"},[u("pre",{pre:!0,attrs:{class:"language-text"}},[u("code",[t._v("deb http://debian.ustc.edu.cn/ubuntu/ trusty main multiverse restricted universe\ndeb http://debian.ustc.edu.cn/ubuntu/ trusty-backports main multiverse restricted universe\ndeb http://debian.ustc.edu.cn/ubuntu/ trusty-proposed main multiverse restricted universe\ndeb http://debian.ustc.edu.cn/ubuntu/ trusty-security main multiverse restricted universe\ndeb http://debian.ustc.edu.cn/ubuntu/ trusty-updates main multiverse restricted universe\ndeb-src http://debian.ustc.edu.cn/ubuntu/ trusty main multiverse restricted universe\ndeb-src http://debian.ustc.edu.cn/ubuntu/ trusty-backports main multiverse restricted universe\ndeb-src http://debian.ustc.edu.cn/ubuntu/ trusty-proposed main multiverse restricted universe\ndeb-src http://debian.ustc.edu.cn/ubuntu/ trusty-security main multiverse restricted universe\ndeb-src http://debian.ustc.edu.cn/ubuntu/ trusty-updates main multiverse restricted universe\n\n")])])]),u("ul",[u("li",[t._v("清华")])]),u("div",{staticClass:"language- extra-class"},[u("pre",{pre:!0,attrs:{class:"language-text"}},[u("code",[t._v("deb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty main restricted universe multiverse\ndeb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty-security main restricted universe multiverse\ndeb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty-updates main restricted universe multiverse\ndeb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty-backports main restricted universe multiverse\ndeb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty-proposed main restricted universe multiverse\ndeb-src http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty main restricted universe multiverse\ndeb-src http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty-security main restricted universe multiverse\ndeb-src http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty-updates main restricted universe multiverse\ndeb-src http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty-backports main restricted universe multiverse\ndeb-src http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty-proposed main restricted universe multiverse\n\n")])])])])}],!1,null,null,null);e.default=r.exports}}]);