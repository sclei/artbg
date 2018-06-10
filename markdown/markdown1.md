# Markdown语法

## 1. 标题  
```
# H1 一级标题
## H2 二级标题
### H3 三级标题
```

## 2.引用

引用采用如下格式。

```
> 引用内容

```
引用的效果
> 引用内容

## 3.代码
在markdown中输入代码需要使用\`\`\` \`\`\`把代码包起来，这不是一系列单引号，而是英文状态下数字键1左边的符号,同时可以在符号第一行标明代码语言，如果样式有定义代码高亮格式，则会看到代码着色。如：
```c++
void main(void)
{
  return;
}
```

## 4.分隔符
在写文档的过程中少不了分隔符，markdown中支持连续打三个*或-表示分隔符。如：
> \*** <br/>
> \---

效果如下
***
---


## 5.链接

在文章里放链接如下使用方括号将文字和链接id关联起来，如：
```
点击[这里][1]打开百度搜索，这是我的[Blog][2]

  [1]: http://www.baidu.com/        "Baidu"
  [2]: http://blog.sclei.com/     "Blog"

```
效果如下：

点击[这里][1]打开百度搜索，这是我的[Blog][2]

  [1]: http://www.baidu.com/        "Baidu"
  [2]: http://blog.sclei.com/     "Blog"