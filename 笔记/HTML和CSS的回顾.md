# HTML和CSS的回顾

## 一. HTML基础练习

### 1.1. 使用记事本编写第一个网页

```html
<!doctype html>
<html>
    <head>
    </head>
    <body>
        Hello World
    </body>
</html>
```



### 1.2. 使用VSCode编写网站

* 安装VSCode
* VSCode安装插件
* VSCode的配置信息



### 1.3. 元素的使用

#### 1.3.1. 元素的单标签和双标签

* div/p/span/strong/h1~6
* img/input



#### 1.3.2. 元素的嵌套关系

* 父元素/祖先元素/子元素/兄弟元素



#### 1.3.3. 元素属性的写法

```html
<p class="" title="123">
    
</p>
```



### 1.4. 注释的使用



## 二. HTML基本元素

### 2.1. html元素

* 根元素
* lang属性: 设置语言
  * 翻译工具
  * 语音合成



### 2.2. head元素

* 字符编码
  * charset="utf-8"
* title



### 2.3. h/p/strong元素



### 2.4. code-br-hr元素



### 2.5. 字体实体

\&gt; => \>



### 2.6. span/div



### 2.7. img元素

* src属性
* alt属性



### 2.8. a元素

* href: 指定超链接
* target: 
  * _self
  * _blank
  * _parent
  * _top
  * 指定值
  * 和iframe结合使用
* base元素 -> http://www.baidu.com
* a元素的锚点链接
* a元素和img元素结合



## 三. CSS的基本使用

### 3.1. CSS引入方式

* 内联样式 style
* 文档样式表
* 外部样式表



### 3.2. CSS常用选择器

* 统配选择器
* 元素选择器
* id选择器



### 3.3. 最常用的CSS属性

* width
* height
* color
* background-color
* font-size



### 3.4. 颜色设置方式

* 关键字: red/orange/blue
* 十六进制: #ffaabb
* rgb: rgb(r, g, b)
* rgba: rgba(r, g,b,a)



## 四. 文字和字体

### 4.1. 文字属性的设置

* text-decoration
  * 下划线
  * 删除线
  * none
* letter-word-spacing
* text-transform(不常用)
* text-indent:
  * 缩进
* text-align:
  * 内容对齐
  * left
  * right
  * center
  * 行内级元素



### 4.2. 字体属性的设置

* font-size
* font-family
* font-weight
* font-style
  * 斜体
* font-varient(不常用)
* line-height
  * 间距等分
* font缩写属性:
  * font-size/line-height font-family



## 五.CSS其他选择器

### 5.1. 属性选择器

```css
[title="abc"] {
    
}
```



### 5.2. 后代和子代选择器

```css
.box a{
    
}

.box>a {
    
}
```



### 5.3. 相邻兄弟和全兄弟

```css
div+p {
    
}

div~p {
    
}
```



### 5.4. 交集和并集

```css
div.box {
    
}

div, .box{
    
}
```



### 5.5. 伪类选择器

* 目标伪类: :target
* 元素状态伪类: :enable
* 动态伪类:
  * :link
  * :visited
  * :focus
  * :hover
  * :active
* 结构伪类:
  * nth-child
    * 数字
    * n
  * nth-last-child
  * nth-of-type
  * nth-last-of-type
  * only-child
  * root
  * empty
  * :not



### 5.6. 伪元素使用

* ::first-letter
* ::first-line
* ::before
* ::after



## 六. CSS的特性

### 6.1.继承

* 多去查文档
* 一般和文字相关的都是可以继承的
  * font-size
  * line-height
  * color



### 6.2. 层叠

* 后面写的会层叠前面
* 权重:
  * !important
  * id: 100
  * class: 10
  * 元素:1



## 七. 其他HTML元素

### 7.1. 列表元素

* ol li
* ul li
* dl dt dd

* list-style: none



### 7.2. table

* border-collapse: collapse
* 单元格的合并
  * 课程表



### 7.3.表单

* input



## 八. CSS元素类型

### 8.1. 元素的类型

* 展示方式
  * 块级元素
  * 行内元素
* 浏览是否替换方式
  * 替换元素
  * 非替换元素

* display:
  * inline
  * block
  * inline-block
  * none
* visibility:visible/hidden
* overflow
  * scroll
  * auto
  * visible
  * hidden
* 元素之间的空隙是如何产生的
  * 浮动解决
  * flex
* 元素的嵌套
  * 块级元素可以嵌套行内级元素
  * p元素不要嵌套div元素



## 九. CSS的盒子模型

### 9.1. 重要的几个属性

* content:
  * width
  * height
  * max-width
  * min-width
  * max-height
  * min-height
* padding
  * padding缩写属性
* margin
  * margin缩写属性
  * 传递和折叠问题
    * 只有上下会传递和折叠
* border
  * border: 1px solid red;
* 行内元素:
  * width/height/margin-top/margin-bottom无效
  * padding-top/bottom/border-top/bottom比较特殊
    * 看来有设置但是不占据空间
* 设置圆角效果
  * border-radius
* 设置轮廓
  * outline
* 设置阴影
  * box-shadow: x偏移量 y偏移量 向外扩展 模糊度 颜色
* 文字阴影
* 水平居中的不同方式
  * text-align
  * margin: 0 auto;



## 十. 背景的设置

* background-image
* background-color
* background-repeat
* background-size
* background-position
* background-attachment
* background缩写属性:
* 光标: cursor: pointer
* 精灵图
* 等等



## 十一. 定位的使用

* position:
  * static
    * 非定位元素
  * relative
    * 相对于自己的位置
  * absolute
    * 祖先元素的定位元素
    * 子绝父相
  * fixed
    * 相对视口



## 十二. 浮动

* float
  * left
  * right
  * 脱标 -> block
* 浮动的六个规则
* 很多的案例



## 十三. 补充

### 13.1. transform

* translate
* scale
* rotate
* skew
* transition



### 13.2. vertical-align



### 13.3. 背景颜色渐变

* background: linear-gradient



### 13.4. HTML5元素补充

* 语义化标签:
  * nav
  * header
  * footer
  * section
  * article
  * aside
* 多媒体元素
  * video
  * audio
* input补充
  * 属性: autofocus/multiple/size/placeholder
  * type补充
    * email
    * date
    * time

### 13.5. flex布局

* flex-container
  * display: flex/inline-flex
  * flex-direction
  * justify-content
  * align-items
  * flex-wrap
  * flex-flow:缩写属性
  * align-content: 多行
* flex-items
  * order
  * align-self
  * flex-grow
  * flex-shrink
  * flex-basis
  * flex



### 13.6. 网络字体

* 使用网络字体
* 字体图标
  * 阿里icon



### 13.7. 动画的补充

* 关键帧动画
  * @keyframes
  * animation: name duration  function;
* 3D
  * perspective
  * transform-style: preserve-3d



### 13.8. 文字的换行

* white-space: nowrap
* text-overflow: ellipsis;
* overflow: hidden;

```css
/* 显示两行文本并且显示省略号的方法 */
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
overflow: hidden;


/* 显示一行文本并且显示省略号的方法 */
/* 文字超出后是否自动换行 */
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
```



### 13.9. 移动端适配

* 视口的设置:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

* rem设置
  * 相对html字体大小
  * 问题一: 设置不同html的font-size
    * 媒体查询
    * js代码
  * 问题二: 动态计算rem值
    * vscode插件
    * webpack postcss-pxtorem
    * less/sass计算















