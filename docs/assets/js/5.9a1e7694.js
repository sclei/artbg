(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"pic-可编程中断控制器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pic-可编程中断控制器","aria-hidden":"true"}},[t._v("#")]),t._v(" PIC 可编程中断控制器")]),s("h2",{attrs:{id:"x86架构的中断系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#x86架构的中断系统","aria-hidden":"true"}},[t._v("#")]),t._v(" x86架构的中断系统")]),s("p",[t._v("x86架构系统中通常有两片PIC，8259A是最常用的中断控制器，每一片8259A有8个IRQ信号，两片控制器级联可以提供15（主片7个，从片8个）个硬件中断信号。")]),s("p",[t._v("APIC（高级可编程中断控制器）是现代多处理机硬件系统中的中断芯片，可以代替PIC的功能，也可以模拟PIC工作在传统模式下。在现代x86架构下除了使用APIC的结构外的系统通常都采用8259A级联的中断系统。")]),s("h2",{attrs:{id:"_8259a"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8259a","aria-hidden":"true"}},[t._v("#")]),t._v(" 8259A")]),s("p",[t._v("表1：8259A级联中断系统地址")]),s("table",[s("thead",[s("tr",[s("th"),s("th",[t._v("控制口")]),s("th",[t._v("数据口")])])]),s("tbody",[s("tr",[s("td",[t._v("主片")]),s("td",[t._v("0x20")]),s("td",[t._v("0x21")])]),s("tr",[s("td",[t._v("从片")]),s("td",[t._v("0xA0")]),s("td",[t._v("0xA1")])])])]),s("blockquote",[s("p",[t._v("奇地址：掩码寄存器 & 数据寄存器"),s("br"),t._v("\n偶地址：控制口 & 状态寄存器")])]),s("h2",{attrs:{id:"_8259a初始化过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8259a初始化过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 8259A初始化过程")]),s("ol",[s("li",[t._v("发送ICW1 设定中断触发方式")]),s("li",[t._v("发送ICW2 设置中断类型号（中断号的高5位）")]),s("li",[t._v("发送ICW3 设置主片和从片的级联方式")]),s("li",[t._v("发送ICW4 设置系统模式等额外信息")])]),s("h2",{attrs:{id:"icw-1-4-格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#icw-1-4-格式","aria-hidden":"true"}},[t._v("#")]),t._v(" ICW[1-4]格式")]),s("p",[t._v("待更新")]),s("h2",{attrs:{id:"中断相关指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中断相关指令","aria-hidden":"true"}},[t._v("#")]),t._v(" 中断相关指令")]),s("div",{staticClass:"language-nasm extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nasm"}},[s("code",[t._v("lidt "),s("span",{attrs:{class:"token comment"}},[t._v(";装入中断描述符表寄存器")]),t._v("\ncli  "),s("span",{attrs:{class:"token comment"}},[t._v(";清除中断标志（IF）")]),t._v("\nsti  "),s("span",{attrs:{class:"token comment"}},[t._v(";设置中断标志（IF）")]),t._v("\niret "),s("span",{attrs:{class:"token comment"}},[t._v(";中断返回")]),t._v("\n\n")])])])])}],!1,null,null,null);a.default=r.exports}}]);