## 一、Bootstrap框架简介

由**Twitter**公司的两名前端工程师Mark Otto和Jacob Thornton在**2011**年发起的，并利用业余时间完成了第一个版本的开发。是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。

官网：  http://getbootstrap.com/

中文网址：<https://www.bootcss.com/> 



框架？：库 lib library 

**写的更少**做的更多 提供一套较为便捷的操作方式；将一套功能体系封装到一个单独的文件中的东西；

Bootstrap提供一套前端需要的界面工具集合。

**bootstrap特点**：

响应式布局；

移动设备优先；

丰富的组件；

界面简介美观；

主流浏览器都支持

​       （IE8+，firefox，chrome，Opera，Safari）；

简单易上手（ctrl+c，ctrl+v）；

**注意：**

使用 Bootstrap 并不代表不用写 CSS 样式，而是不用写绝大多数大家都会用到的样式

Bootstrap 本身是一个独立的英文单词，其含义为：n. 引导指令,引导程序



**总结**：BS是用来做响应式页面的前端UI框架，它提供了栅格系统、样式布局、API供我们直接使用。

## 二、搭建BS使用环境（使用前准备工作）

**1、下载相关文件**

 官网打开后下载即可，或者通过包管理工具用命令下载

**2、环境搭建相关代码（引入主要文件）**

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素和媒体查询（media queries）功能 -->
    <!-- 警告：通过 file:// 协议（就是直接将 html 页面拖拽到浏览器中）访问页面时 Respond.js 不起作用 -->
    <!--[if lt IE 9]>
		低版本浏览器兼容h5标签
      <script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
		低版本浏览器兼容媒体查询
      <script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>你好，世界！</h1>

    <!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
    <!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
  </body>
</html>
```

本地简洁版本：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>
    <link href="./css/bootstrap.min.css" rel="stylesheet">
    <script src="./js/html5shiv.min.js"></script>
    <script src="./js/respond.min.js"></script>
</head>
<body>
<h1>你好，世界！</h1>


<script src="./js/jquery-1.12.4.min.js"></script>
<script src="./js/bootstrap.min.js"></script>
</body>
</html>
```

## 三、视口标签ViewPort

视口标签是一个做到移动端页面都会使用到的一个概念。书写能够在移动端上浏览的页面，就需要书写视口标签。

**为什么移动端开发需要视口标签？：**

​	我们之前所写的页面都是PC端的(电脑端，在电脑上进行浏览)，把它放到移动端浏览器上看，页面会缩小。这是移动端浏览器自动进行缩放页面的效果。而**我们使用视口标签来禁用浏览器的缩放效果**。

**完成的视口标签写法**(不需要背，用到直接CTRL+C)：

```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
```

**什么是视口？**

每个网页默认都会有一个**视口**，视口其实是一个**虚拟的窗口** ，**移动端**默认的尺寸是**980**像素;
为了兼容移动设备，一般让**网页视口的宽度和设备的宽度的比例为 1:1 , 并且不允许用户缩放网页**;

**移动设备中1px不等于1个物理像素**（手机屏幕像素）：

现如今，移动设备多已经采用高倍屏，像素分辨率（物理分辨率）要比逻辑分辨率高，下表为iphone分辨率数据

| 型号         | 像素分辨率(手机屏幕分辨率) | 逻辑分辨率 | 倍率 |
| ------------ | -------------------------- | ---------- | ---- |
| iphone5      | 640*1136                   | 320*568    | 2    |
| iphone6      | 750*1334                   | 375*667    | 2    |
| iphone6 plus | 1242*2208                  | 414*736    | 3    |

## 四、理解响应式@media

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>
    <link href="./css/bootstrap.min.css" rel="stylesheet">
    <script src="./js/html5shiv.min.js"></script>
    <script src="./js/respond.min.js"></script>
    <style>
        /* 视口宽度超过980px，则显示pc.jpg */
        @media screen and (min-width: 980px) {
            body{
                background: url('./images/pc.jpg');
            }
        }
        /* 视口宽度在768px-979px之间，则显示pad.jpg */
        @media screen and (min-width: 768px) and (max-width: 979px) {
            body{
                background: url('./images/pad.jpg');
            }
        }
        /* 视口宽度小于767px，则显示phone.jpg */
        @media screen and (max-width: 767px) {
            body{
                background: url('./images/phone.jpg');
            }
        }
    </style>
</head>
<body>

<script src="./js/jquery-1.12.4.min.js"></script>
<script src="./js/bootstrap.min.js"></script>
</body>
</html>
```

来看看实现的效果：

![](.\assets\01.gif)

## 五、类控制样式

Bootstrap通过类名来控制样式，这直接引领了很多现代前端框架。

```html
<button class="btn btn-default" type="submit">Button</button>
<button class="btn btn-success" type="submit">Button</button>
<button class="btn btn-danger" type="submit">Button</button>
<button class="btn btn-info" type="submit">Button</button>
<button class="btn btn-warning" type="submit">Button</button>
<button class="btn btn-link" type="submit">Button</button>
```

以上的button标签，通过不同的类名，我们可以得到不同的样式：

![](.\assets\02.png)

## 六、组件

让我们体验一下导航条组件：

```html
<nav class="navbar navbar-default">
    <div class="container">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <div class="navbar-header">
            <a class="navbar-brand" href="#">Brand</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li class="active"><a href="#">首页</a></li>
                <li><a href="#">课程体系</a></li>
                <li><a href="#">师资力量</a></li>
                <li><a href="#">常见问题</a></li>
                <li><a href="#">我要报名</a></li>
            </ul>
        </div>
    </div>
</nav>
```

来看看出来的效果：

![](.\assets\03.gif)

我们可以看到，实现的效果还是比较不错的，适配PC、移动端开发，成功实现响应式。虽然样式比较一般，但至少比我们手动开发快多了。

以后大家还会继续接触到“组件”这个名词。使用组件，最重要的一点就是提升开发效率，并且高复用。

## 七、栅格系统

首先，需要明确一点，栅格系统将网页横轴方向均分为12列，其布局遵从流式布局。因此，一般使用栅格系统，都会将所有元素放入流式布局容器。

### 1、流式布局容器

流式布局容器，实际上就是div，只不过是通过类名来控制。凡是类名为 `container` 的div，在bootstrap中代表占据版心的盒子，凡是类名为 `container-fluid` 的div，在bootstrap中则表示100%宽度的布局。 这就是对Bootstrap官方文档中以下文段的解读：

![](.\assets\04.png)

### 2、栅格参数

栅格参数，其实就是栅格系统中，对应屏幕宽度尺寸的类名，可参考下表：

![](.\assets\05.png)

### 3、栅格布局

当我们在 `container` 容器中进行栅格化布局，代码如下：

```html
<div class="container bg-info">
    <div class="col-md-4 bg-danger">第1列</div>
    <div class="col-md-4 bg-success">第2列</div>
    <div class="col-md-4 bg-warning">第3列</div>
</div>
```

此时，出现的效果是：

![](.\assets\06.png)

可以看到，左右两边多出了 `container` 的内边距，这里你可以直接对 `container` 这个类名进行css处理，比如：

```css
.container{
	padding: 0;
}
```

但我们应该知道，其实我们只是单纯地把这三列丢在 `container` 中，如果按照Bootstrap的说法，这不算是在一行内显示，因此，我们需要在这三列盒子外层，套一个类名为 `row` 的标签，表示一行。

```html
<div class="container bg-info">
    <div class="row">
        <div class="col-md-4 bg-danger">第1列</div>
        <div class="col-md-4 bg-success">第2列</div>
        <div class="col-md-4 bg-warning">第3列</div>
    </div>
</div>
```

此时，内边距问题解决。另外，保险起见，我们可以再给这个行标签多添加一个类名：`no-gutters` ，保障内边距不会产生。

## 八、列排序

通过列排序，可以将区块进行“**往左拉**”，或者“**往右推**”，来看看代码：

```html
<div class="container bg-info">
    <div class="row">
        <div class="col-md-2 bg-warning col-md-push-3">左</div>
        <div class="col-md-3 bg-success col-md-pull-2">右</div>
    </div>
</div>
```

可以看到，我们两个盒子互换了位置：

![](.\assets\07.png)

## 九、其他样式效果

### 1、表格

表格由table标签的类名来控制样式：

```html
<div class="container table-responsive">
    <table class="table table-bordered table-hover">
        <thead>
        <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>性别</th>
            <th>年龄</th>
            <th>年龄</th>
            <th>年龄</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>张三</td>
            <td>男</td>
            <td>34</td>
            <td>34</td>
            <td>34</td>
        </tr>
        <tr>
            <td>2</td>
            <td>李四</td>
            <td>男</td>
            <td>33</td>
            <td>33</td>
            <td>33</td>
        </tr>
        <tr>
            <td>3</td>
            <td>如花</td>
            <td>女</td>
            <td>32</td>
            <td>32</td>
            <td>32</td>
        </tr>
        </tbody>
    </table>
</div>
```

主要是以下类名起作用：

**table：**生成bootstrap的表格样式

**table-border：**表格边框

**table-resposive：**响应式表格（位置是放在table标签的外层）

**table-hover：**鼠标悬停的效果

另外，tr与td标签还可以通过添加类名，来显示不同颜色：

```html
<tr class="danger">
    <td>1</td>
    <td>张三</td>
    <td>男</td>
    <td>34</td>
    <td>34</td>
    <td>34</td>
</tr>
<tr class="info">
    <td>2</td>
    <td>李四</td>
    <td>男</td>
    <td>33</td>
    <td>33</td>
    <td>33</td>
</tr>
<tr class="success">
    <td>3</td>
    <td>如花</td>
    <td>女</td>
    <td>32</td>
    <td>32</td>
    <td>32</td>
</tr>
```

来看看效果：

![](.\assets\08.png)

### 2、浮动

Bootstrap可以通过类名实现快速浮动：

```html
<style>
    *{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    ul{
        width: 600px;
        height: 200px;
        background: pink;
    }
    li{
        width: 200px;
        height: 200px;
        background: skyblue;
    }
</style>
<ul>
    <li class="pull-left">1</li>
    <li class="pull-right">2</li>
</ul>
```

看看效果：

![](.\assets\09.png)

## 十、响应式项目开发

先来看看效果图：

![](.\assets\10.gif)

## 十一、WEUI框架简介

官网地址：https://jqweui.cn/

jQuery WeUI 是专为微信公众账号开发而设计的一个简洁而强大的UI库，包含全部WeUI官方的CSS组件，并且额外提供了大量的拓展组件，丰富的组件库可以极大减少前端开发时间。

jQuery WeUI 的最大特点是它只提供UI组件，并不会对项目所使用的框架和其他库有任何的限制，几乎可以在任何环境下使用。无论你的项目是基于jQuery，还是 React, Angular, Vue， 你都会发现 jQuery WeUI 能非常方便的和他们结合使用。既是你的项目是一个有很悠久历史的老项目，也几乎可以做到拿来即用。

jQuery WeUI 提供了总共**30+** 个非常实用的组件：列表，表单，卡片，对话框，下拉刷新等。

### 1、WEUI特点

jQuery WeUI 的定位正如 jQuery 的定位：做一把锋利易用的小刀，而不是做一个笨重的大炮。

- 简单易用，无上手难度
- 丰富强大的组件库，并且还在不断完善中
- 轻量，无限制，可以结合任何主流JS框架使用，比如 `Vue, Angular, React` 等
- 高性能的 CSS3 动画，低端手机上依然可以较流畅运行
- 详尽完善的官方文档
- 标准稳定的API，基本可以保证版本透明更新
- 基于 MIT 协议发布，免费开源

### 2、使用CDN

```html
<!-- head 中 -->
<link rel="stylesheet" href="https://cdn.bootcss.com/weui/1.1.3/style/weui.min.css">
<link rel="stylesheet" href="https://cdn.bootcss.com/jquery-weui/1.2.1/css/jquery-weui.min.css">

<!-- body 最后 -->
<script src="https://cdn.bootcss.com/jquery/1.11.0/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/jquery-weui/1.2.1/js/jquery-weui.min.js"></script>

<!-- 如果使用了某些拓展插件还需要额外的JS -->
<script src="https://cdn.bootcss.com/jquery-weui/1.2.1/js/swiper.min.js"></script>
<script src="https://cdn.bootcss.com/jquery-weui/1.2.1/js/city-picker.min.js"></script>
```

## 十二、ActionSheet

WEUI的ActionSheet使用时比较麻烦，特别是回调函数打印不出数据，解决方法如下：

```js
$('#categoryIpt').click(function(){
    var _this = $(this);
    $.actions({
        actions: [{
            text: "H5大前端",
            onClick: function() {
                console.log(this)	// 打印this可以获取列表数据
            }
        }]
    });
})
```

