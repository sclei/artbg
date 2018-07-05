(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{150:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"linux-jdk1-8安装配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-jdk1-8安装配置","aria-hidden":"true"}},[a._v("#")]),a._v(" Linux JDK1.8安装配置")]),s("h2",{attrs:{id:"必要软件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#必要软件","aria-hidden":"true"}},[a._v("#")]),a._v(" 必要软件")]),s("ul",[s("li",[a._v("ssh")]),s("li",[a._v("jdk-8u131-linux-x64.tar.gz安装包")])]),s("h2",{attrs:{id:"配置信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置信息","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置信息")]),s("ul",[s("li",[s("p",[a._v("安装目录：/usr/local/jdk/jdk1.8")])]),s("li",[s("p",[a._v("配置过程")]),s("ol",[s("li",[a._v("首先ssh登陆服务器root账户；")]),s("li",[a._v("将压缩包解压到安装目录；")]),s("li",[a._v("配置环境还变量；")])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("tar zxvf /root/softwares/jdk-8u131-linux-x64.tar.gz -C /usr/local/\nmkdir /usr/local/jdk\nmv /usr/local/jdk1.8.0_131 /usr/local/jdk/jdk1.8\n")])])])]),s("li",[s("p",[a._v("打开/etc/profile写入以下内容：")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("JAVA_HOME=/usr/local/jdk/jdk1.8\nJRE_HOME=$JAVA_HOME/jre\nCLASSPATH=:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib/dt.jar\nexport JAVA_HOME JRE_HOME CLASSPATH\nPATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("vim /etc/profile\n")])])])])]),s("h2",{attrs:{id:"使配置立即生效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使配置立即生效","aria-hidden":"true"}},[a._v("#")]),a._v(" 使配置立即生效")]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("source /etc/profile\n")])])]),s("h2",{attrs:{id:"测试java环境配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试java环境配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 测试JAVA环境配置")]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("java -version\n")])])]),s("p",[a._v("输出版本信息就说明配置成功了。")])])}],!1,null,null,null);t.default=r.exports}}]);