## 零、安卓bug修复技巧

在安卓手机上存在一个物理返回键，当按下时，默认是返回上一页。而此时，如果你的页面顶层是一个模态框，那么这时候会有两种情况：

- 模态框消失，页面返回上一页
- 模态框依然存在，但页面也返回了上一页

**解决方案：**

1. 监听物理返回键
2. 自己手写模态框
3. 阻止路由（在路由的history中添加空白链接）

## 一、立方体

我们来尝试在网页中画出一个立方体：

![](.\assets\GIF.gif)



## 二、Animate.css简介

animate.css 是一个来自国外的跨浏览器的 **CSS3 动画库**，它预设了多种动画效果，例如弹跳，抖动，闪烁，淡入淡出等多种css3动画效果可以直接调用。

官网(特效参考)： <https://daneden.github.io/animate.css/> 

源码下载地址：<https://github.com/daneden/animate.css>



兼容性:

animate.css底层是通过css3实现的，当然是只兼容支持 CSS3 animate 属性的浏览器：

IE10+、Firefox、Chrome、Opera、Safari。



## 三、体验Animate.css

使用步骤：

1 引入下载好的animate.css文件

2 给要做动画的元素添加类名

  要添加两个类名，分别是：

  animated(控制时间)

  要添加的动画效果类名（控制效果）

```html
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        div{
            width: 200px;
            height: 200px;
            background-color: pink;
            margin: 100px auto;
        }
    </style>
    <link rel="stylesheet" href="animate/animate.css">
</head>
<body>
    <div class="animated bounceInDown"></div>
</body>
```



## 四、静态登录框动效添加

参考JQ文档：<http://jquery.cuishifeng.cn/>    ，查看addClass() 的使用

```js
	$(".login").click(function () {
        $(".loginBox").addClass("animated bounce");
        setTimeout(function(){
            $(".loginBox").removeClass("animated bounce");
        }, 500);
    })
```



## 五、WOW.js简介

wow.js是做网页滚动动画的js框架，配合animate.css使用，可以在网页滚动的过程中**释放animate.css动画效果**。

官网地址：http://mynameismatthieu.com/WOW/index.html

源码下载地址：<https://github.com/matthieua/WOW>

兼容性: 同animate.css

## 六、体验WOW.js

使用步骤：

1 引入animate.css文件和wow.js文件

2 书写html结构

在要做滚动动画的元素身上添加**两个类名**

wow(声明元素使用混动动画)

动画名称（滚动释放的动画名称）

3 初始化wow：      new WOW().init()



体验案例：

```html
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        div{
            width: 200px;
            height: 200px;
            background-color: pink;
            margin: 100px auto;
        }
    </style>
    <link rel="stylesheet" href="animate/animate.css">


</head>
<body>
    <div class="wow bounceInLeft"></div>

    <script src="wow/wow.js"></script>
    <script>
        new WOW().init()
    </script>
</body>
```

## 七、wow的使用

尝试多个元素都使用上wow，可以看到进场动画效果

```html
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        ul{
            padding: 0;
            list-style: none;
        }
        .box{
            width: 500px;
            /*background: pink;*/
            margin: 0 auto;
            overflow: hidden;
        }
        li{
            width: 200px;
            height: 200px;
            background-color: #ccc;
            margin-bottom: 30px;
        }
        .left{
            float: left;
        }
        .right{
            float: right;
        }
    </style>
    <link rel="stylesheet" href="animate/animate.css">


</head>
<body>
<ul class="box">
    <li class="wow bounceInLeft left"></li>
    <li class="wow bounceInRight right"></li>
    <li class="wow bounceInLeft left"></li>
    <li class="wow bounceInRight right"></li>
    <li class="wow bounceInLeft left"></li>
    <li class="wow bounceInRight right"></li>
    <li class="wow bounceInLeft left"></li>
    <li class="wow bounceInRight right"></li>
    <li class="wow bounceInLeft left"></li>
    <li class="wow bounceInRight right"></li>
    <li class="wow bounceInLeft left"></li>
    <li class="wow bounceInRight right"></li>
    <li class="wow bounceInLeft left"></li>
</ul>

<script src="wow/wow.js"></script>
<script>
    new WOW().init()
</script>
</body>
```

## 八、wow动画的配置

wow元素的标签属性：

data-wow-duration 动画持续时间，以秒/s为单位

data-wow-delay动画延时时间，以秒/s为单位

data-wow-iteration动画播放次数，值是纯数字，infinite表示循环播放

data-wow-offset 元素顶部偏离可视区（容器）底部动画出现的距离（用于设置动画在页面的出场位置）

```html
<ul class="box">
    <li class="wow bounceInLeft left"></li>
    <li class="wow bounceInRight right"></li>
    <li class="wow bounceInLeft left"></li>
    <li class="wow bounceInRight right" data-wow-duration="4s">持续</li>
    <li class="wow bounceInLeft left"></li>
    <li class="wow bounceInRight right"></li>
    <li class="wow bounceInLeft left"></li>
    <li class="wow bounceInRight right "></li>
    <li class="wow bounceInLeft left" data-wow-delay="5s">延迟</li>
    <li class="wow bounceInRight right"></li>
    <li class="wow bounceInLeft left"></li>
    <li class="wow bounceInRight right"></li>
    <li class="wow bounceInLeft left " data-wow-offset=“300”>offset</li>
    <li class="wow bounceInRight right"></li>
    <li class="wow bounceInLeft left" data-wow-iteration="10" data-wow-duration=".2s">次数</li>
    <li class="wow bounceInRight right"></li>
    <li class="wow bounceInLeft left"></li>
    <li class="wow bounceInRight right"></li>
    <li class="wow bounceInLeft left"></li>
    <li class="wow bounceInRight right"></li>
</ul>

<script src="wow/wow.js"></script>
<script>
    new WOW({
        boxClass:     'wow',             //动画元素的CSS类 (默认类名 wow)
        animateClass: 'animated',        //动画CSS类 (默认类名 animated)
        offset:       0,                 //距离可视区域多少开始执行动画(默认值 0)
        mobile:       true,              //是否在移动设备上执行动画(默认值 true)
    }).init()
</script>
```



带参数的WOW对象：

```js
var wow = new WOW({
    boxClass:     'wow',             //动画元素的CSS类 (默认类名 wow)
    animateClass: 'animated',        //动画CSS类 (默认类名 animated)
    offset:       0,                 //距离可视区域多少开始执行动画(默认值 0)
    mobile:       true,              //是否在移动设备上执行动画(默认值 true)
});
wow.init();
```

## 九、scrollReveal.js框架

scrollReveal官网地址：https://scrollrevealjs.org/

scrollreveal是兼容pc和移动的滚动动画库，可以制作页面滚动进场动画效果的js框架。它不依赖于其他任何框架。

兼容性: 同animate.css

使用步骤：

1、引入文件

```html
<script src="js/scrollReveal.js"></script>
```

2、HTML  （给需要添加动画效果的标签，添加上标签属性 data-scroll-reveal ）

```html
<div class="box"></div>
```

3、JavaScript调用

```js
var sr = ScrollReveal();
sr.reveal('.box');
```

## 十、scrollReveal.js的使用

可以给所有的盒子设置进场效果，即配置scrollReveal对象

```html
<script>
    var config = {
        reset    : false,              //鼠标滚动时，动画开关  默认false关闭
        origin   : "bottom" ,          //动画开始的方向
        duration : 500,                     //动画持续时间
        delay    : 0,                          //延迟
        rotate    : { x: 0, y: 0, z: 0 },   //过渡到0 的初始角度
        opacity   : 0,               //初始透明度
        scale     : 0.9              //缩放
    };
    window.sr = ScrollReveal();
    sr.reveal('.sr',config);
</script>
```

**wow.js和scrollreveal.js对比**

1 都不依赖jquery；

2 WOW.js 的动画只播放一次，而 scrollReveal.js 的动画可以播放一次或无限次；

3 WOW.js 依赖 animate.css，而 scrollReveal.js 不依赖其他任何文件;

4 WOW.js 依赖 animate.css使用，动画效果更多一点，可以根据具体需求选择使用

## 十一、swiper框架简介

  Swiper 是一款免费以及轻量级的**移动设备触控滑块**的js框架，主要是为IOS而设计的，同时，在Android、WP8系统以及PC端的浏览器也有着良好的用户体验。

官方网址  https://www.swiper.com.cn/

特点：

1.轻量级，简洁高效，可定制性非常高；

2.横跨各种设备，兼容IOS/安卓/WP/PC端 设备；

3.提供多种版本支持（可以自由选择jQuery/zepto版或者原生js版）；

兼容性：

内部布局使用flex布局、是CSS3新增的布局方式。PC端不再考虑低版本浏览器。

## 十二、使用swiper制作焦点图

#### 2.1、引入之后代码的创建

准备基本结构

```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>无标题文档</title>
    <link rel="stylesheet" href="swiper/swiper.css">

</head>
<body>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
</div>

<script src="swiper/swiper.js"></script>
</body>
</html>
```

添加样式：（设置样式，不添加的话，默认等于父容器的宽度，高度为内容高度）

```html
<style>
    *{padding: 0; margin: 0; border: 0; list-style: none;}
    .swiper-container{width: 600px; height: 400px; background:pink; margin:100px auto;}
</style>
```

创建Swiper对象：

```html
<script>
    window.onload = function(){
        var swiper = new Swiper('.swiper-container');
    }
</script>
```

#### 2.2、分页器

```html
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>

    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
```

```js
 var swiper = new Swiper('.swiper-container',{
     pagination: {
         el: '.swiper-pagination',
     },
 });
```

#### 2.3、左右按钮和循环轮播

```html
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>

    <!-- 分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 左右按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>
```

```js
	   var swiper = new Swiper('.swiper-container',{
            pagination: {
                el: '.swiper-pagination',
            },
           //循环播放
            loop:true,
            //左右按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
```

#### 2.4、底部滚动条和轮播方向

```html
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>

    <!-- 分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 左右按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 底部滚动条 -->
    <div class="swiper-scrollbar"></div>
</div>
```

```js
var swiper = new Swiper('.swiper-container',{

            //分页器
            pagination: {
                el: '.swiper-pagination',
            },
            loop:true,
            //左右按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            //底部滚动条
            scrollbar:{
                el:'.swiper-scrollbar'
            },
            // 垂直切换选项  vertical(垂直)  horizontal(水平)
            direction: 'vertical',
        });
```

注意：底部滚动条会暴露无缝滚动的原理，实际上无需让用户看见这些细节，所以一般滚动条比较少去设置

#### 2.5、自动播放

```js
 // autoplay:true
autoplay: {
    delay: 3000,
    stopOnLastSlide: false,   //设置滚动到最后一张就停下来(前提，需要先设置loop:false才能起作用)
    disableOnInteraction: true,  //设置为true的话，用户操作完轮播图将停止自动播放,所以一般设置为false
},
```

#### 2.6、键盘控制（了解）

```js
keyboard: true, //等同于以下配置
/* keyboard: {
   enabled: true,
   onlyInViewport: true,  //默认仅控制当前窗口内的swiper切换。当swiper离开可视区域则无法切换。
},*/
```

#### 2.7、切换效果

```js
//切换时的效果： 可设置为'slide'（普通切换、默认）,"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）。
      effect:'slide',
```

#### 2.8、移入事件和移出事件

```js
document.querySelector('.swiper-container').onmouseover = function () {
	swiper.autoplay.stop();
}
document.querySelector('.swiper-container').onmouseout = function () {
    swiper.autoplay.start();
}
```

## 十三、swiper结合animate.css

前提：需要引入animate.css和swiper.animate.min.js

#### 3.1、引入animate.css和swiper.animate.min.js

```html
<link rel="stylesheet" href="css/animate.min.css">
<script src="js/swiper.animate.min.js"></script>
```

#### 3.2、初始化时隐藏元素并在需要的时刻开始动画

(添加到swiper的配置项中)

```js
on:{
    init: function(){
        swiperAnimateCache(this); //隐藏动画元素
        swiperAnimate(this); //初始化完成开始动画
    },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
        }
},
```

#### 3.3、给需要添加视差效果的元素身上添加属性

在需要运动的元素上面增加类名  **ani**, 然后添加swiper animate 参数：

swiper-animate-effect：切换效果，例如 fadeInUp  即animate.css的效果名称
swiper-animate-duration：动画持续时间（单位秒），例如 0.5s
swiper-animate-delay:   延迟时间（单位秒）

```html
<p class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">第1张</p>
```

#### 3.4、完整代码示例

```html
<head>
    <meta charset="utf-8">
    <title>无标题文档</title>
    <link rel="stylesheet" href="swiper/swiper.css">
    <link rel="stylesheet" href="animate/animate.min.css">
    <style>
        *{padding: 0; margin: 0; border: 0; list-style: none;}
        body{
            background-color: rgba(0,0,0,.5);
        }
        .swiper-container{width: 1100px; height: 400px; background:pink; margin:100px auto;
            position: relative;}

        .swiper-container p{
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: rgba(0,0,0,.5);
            height: 30px;
            line-height: 30px;
            width: 100%;
            color:#fff;
            text-indent:1em;
        }
    </style>


</head>
<body>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="images/1.jpg" height="500" width="1100"/>
            <p class="ani" swiper-animate-effect="bounceInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">第1张</p>
        </div>
        <div class="swiper-slide">
            <img src="images/2.jpg" height="500" width="1100"/>
            <p  class="ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">第2张</p>
        </div>
        <div class="swiper-slide">
            <img src="images/3.jpg" height="500" width="1100"/>
            <p class="ani" swiper-animate-effect="bounceIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">第3张</p>
        </div>
        <div class="swiper-slide">
            <img src="images/4.jpg" height="500" width="1100"/>
            <p class="ani" swiper-animate-effect="rollIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">第4张</p>
        </div>
        <div class="swiper-slide">
            <img src="images/5.jpg" height="500" width="1100"/>
            <p class="ani" swiper-animate-effect="flipInX" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">第5张</p>
        </div>
        <div class="swiper-slide">
            <img src="images/6.jpg" height="500" width="1100"/>
            <p class="ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">第6张</p>
        </div>
    </div>

    <!-- 分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 左右按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

</div>

<script src="swiper/swiper.js"></script>
<script src="swiper/swiper.animate.min.js"></script>
<script>
    window.onload = function(){
        var swiper = new Swiper('.swiper-container',{

            //分页器
            pagination: {
                el: '.swiper-pagination',
            },
            loop:true,
            //左右按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },


            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,   //设置滚动到最后一张就停下来(前提，需要先设置loop:false)
                disableOnInteraction: false,  //设置为true的话，用户操作完轮播图将停止自动播放
            },

            effect:'slide',
            on:{
                init: function(){
                    swiperAnimateCache(this); //隐藏动画元素
                    swiperAnimate(this); //初始化完成开始动画
                },
                slideChangeTransitionEnd: function(){
                    swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                    //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
                }
            },
        });


        document.querySelector('.swiper-container').onmouseover = function () {
            console.log("鼠标移上");
            swiper.autoplay.stop();
        };
        document.querySelector('.swiper-container').onmouseout = function () {
            console.log("鼠标移出");
            swiper.autoplay.start();
        };
    }
</script>
</body>
```

