## 一、less简介(重点)

less是一种css 的预处理语言，简化了css的书写，增强了css的功能，赋予css动态语言的特点，是css的升级版。

说白了，**less就是让我们更好地书写和维护css代码**。但是，写完less之后要把它编译成css，浏览器才能认识它。

所以，我们需要一款考拉工具，来把我们写好的less文件编译成css文件。

解压老师提供的考拉压缩包  koala_2.0.4_portable.zip   就可以使用了。

LESS官网：<http://lesscss.org/>

LESS中文网 ：

<http://www.lesscss.cn/>

<http://www.lesscss.net/>



### **体验less**	

​	1、新建html文件，书写结构代码

​	2、新建less文件夹，在里面新建less文件，书写less语法(可以先书写css代码)

​	3、打开考拉工具，将**less文件夹**拖拽到考拉工具主界面，考拉就会自动编译less成为css文件，此时与less同目录下会生成css文件夹，里面就是编译好的css文件

​	4、在html中引入编译好的css文件，就可以查看页面效果。

​	5、后面的开发中，只需要书写html结构代码和less代码就可以了。



### less变量

```less
//变量的定义
@base-color: pink;

div{
  width: 100%;
  height: 40px;
  background-color: @base-color;
}
button{
  width: 60px;
  height: 30px;
  background-color: @base-color;
}

```

### less嵌套

```less
div{
  width: 100%;
  height: 40px;
  background-color: @base-color;

  //嵌套的写法
  a{
      color:blue;
      &:hover{
        color:red;
      }
  }
}
ul{
    li{
        background: #ccc;
        &.last{
          background-color: pink;
        }
    }
}
```

### less运算

```less
@w:300px;
@color1:green;
@color2:red;

//制作一个高永远是宽度一半的盒子
div{
  //width: @w - 100;//可以
  //width: @w - 200px ;//可以
  width: @w;
  height: @w/2;
  //background-color: @color1 + @color2;  //可以
  //background-color: @color1 + 15; // 可以
  //background-color: @color1 + yellow; // 不可以
}
```

### less混合

```less
@w:300px;
@color1:green;
@color2:red;

.shitihua(@w,@h,@bg){
  width:@w;
  height:@h;
  background:@bg;
}


//制作一个高永远是宽度一半的盒子
div{
  width: @w;
  height: @w/2;
  background-color: @color1 + 15; 

  p{
    .shitihua(100px, 100px, red)
  }
}

span{
  display: block;
  .shitihua(300px, 300px, orange)
}

```

### less内置函数（仅作了解）

less提供了一写内置函数供我们使用：(这些函数是来控制属性值和变化量的)

```less
saturate(@color, 10%); // 饱和度增加 10%
desaturate(@color, 10%); // 饱和度降低 10%
lighten(@color, 10%); // 亮度增加 10%
darken(@color, 10%); // 亮度降低 10%
fadein(@color, 10%); // 透明度增加 10%
fadeout(@color, 10%); // 透明度降低 10%
fade(@color, 50%); // 设定透明度为 50%
spin(@color, 10); // 色相值增加 10
```

例如：

```less
a{
    background:#f10180;
    &:hover{ background:lighten(#f10180,10%);}/*背景亮度增加10%*/
}
```

## 二、zepto库/框架

### zepto简介

说到zepto是什么，这就需要提及到Jquery。在没有jquery之前，手机端网站也可以使用jquery。但是带来的弊端也存在，jquery兼容性良好。而手机端不需要兼容，因为大部分的手机内置的浏览内核基本上都是chrome内核。也就是webkit和Blink;那么jquery中许多兼容的代码其实是不需要的。体积大，手机流量在2018之前一直都十分的昂贵，现在稍微好转。那么我们在手机端要做到最快速度 的打开网页，让用户等待时间越少，那么越有利于用户体验，也就越利于产品的粘性，让用户产生依恋产品的心态。

也就是在这种前提下，zepto.js诞生了。

![31](./assets/31.png)



随着移动端的愈加火爆，目前很多HTML5的框架都在支持移动方向，比如：Vue.js，zepto.js，React Native等等。

**Zepto** 是一个**轻量级**的针对现代高级浏览器的 **JavaScript 库**， 它**与jquery 有着类似的api**。 如果你会用 jquery，那么你也会用 zepto。

**Zepto**的**设计目的是提供 jQuery 的类似的API**，但**并不是100%覆盖 jQuery** 。Zepto设计的目的是有一个**5-10k**的通用库、下载并快速执行、有一个熟悉通用的API，所以你能把你主要的精力放到应用开发上。



**思考：jQuery和Zepto.js的区别在哪里？**

（1）**jQuery**更多是在**PC**端被应用，因此，考虑了很多**低级浏览器的的兼容性**问题；而**Zepto**.js则是直接**抛弃了低级浏览器的适配**问题，显得很轻盈；

（2）**Zepto**.js在**移动端**被运用的更加广泛；

（3）**jQuery**的底层是通过**DOM**来实现效果的， **zepto**.js 是用**css3** 来实现的；

（4）**Zepto**.js可以说是**阉割**版本的**jQuery**。 





   ( 5 )  **zepto**与**jquery**主要的区别是在**模块**上的区别：http://www.css88.com//doc//zeptojs_api//

- zepto默认只有**5个基本的模块**，其他功能模块需要**单独引用** 。
- 引用的模块，必须放在zepto的后面，`fx.js 和fx_methods.js `他们之间必须是fx_methods.js在fx.js的后面；其他的包之间顺序无所谓；
- zepto的底层是通过**css3** 实现的，jQuery是操作的DOM,**所以**有些css3的效果，是jquery做不到的；
- zepto比jQuery多了更多的**移动端**的 事件的支持，比如说**tap， swipe**……
- zepto的兼容性比jQuery差，因为zepto更多的是**注重移动端和效率**，jQuery注重的是**兼容性**。

> 注意：zepto上面的动画，不要加太多， 因为动画很耗性能，加多了会很卡，特别是一些webview开发；

总结为一句话：zepto就像是JQuery的阉割版。

英文版：http://zeptojs.com//

中文版：https://www.html.cn/doc/zeptojs_api/

github : https://github.com/madrobby/zepto

兼容性：

Safari 6+ 
Chrome 30+ 
Firefox 24+ 
iOS 5+ Safari 
Android 2.3+ Browser 
Internet Explorer 10+

### 体验案例

```html
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        div{
            width: 200px;
            height: 200px;
            background-color: green;
        }
    </style>
</head>
<body>
    <button>按钮</button>
    <div></div>
    <!--<script src="js/jquery.min.js"></script>-->
    <script src="js/zepto/zepto.js"></script>
    <script>
    $(function(){
        $("button").eq(0).click(function () {
            $("div").css("background", "pink");
        })
    })
    </script>
</body>
```

### zepto选择器

要在zepto中使用JQ写法的选择器，需要引入zepto的模块selector.js，并且selector.js依赖于zepto，即selector.js要在zepto引入之后引入

```html
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        div{
            width: 200px;
            height: 200px;
            background-color: green;
        }
    </style>
</head>
<body>
    <button>按钮</button>
    <div></div>
    <!--<script src="js/jquery.min.js"></script>-->
    <script src="js/zepto/zepto.js"></script>
    <script src="js/zepto/selector.js"></script>
    <script>
    $(function(){
        $("button:eq(0)").click(function () {
            $("div").css("background", "blue");
        })
    })
    </script>
</body>
```

### zepto动画

使用zepto动画需要引入zepto的模块fx.js

```html
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        div{
            width: 200px;
            height: 200px;
            background-color: green;
        }
    </style>
</head>
<body>
    <button>按钮</button>
    <div></div>
    <script src="js/zepto/zepto.js"></script>
    <script src="js/zepto/fx.js"></script>
    <script>
    $(function(){
        $("button").eq(0).click(function () {
            $("div").animate({"margin-left": "500px"});
        })
    })
    </script>
</body>
```

### tap触摸事件

zepto中的tap触摸事件和swipe滑动事件都是基于它的touch模块，所以使用之前也要先引入。

tap事件就是移动端的点击事件，它在真正的移动设备上会比click快300ms。

注意：tap在谷歌浏览器上测试的时候，一定要打开移动端模拟器，直接用PC端看是没有效果的

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
    <style>
        div{
            width: 200px;
            height: 200px;
            background-color: green;
        }
    </style>


</head>
<body>
    <div></div>
    <script src="js/zepto/zepto.min.js"></script>
    <script src="js/zepto/touch.js"></script>
    <script>
        $('div').tap(function(){
            console.log("tap")
        });

    </script>
</body>
```



### swipe滑动事件

注意：使用到滑动事件需要给body添加touch-action属性值为none ：

body{touch-action: none;}

浏览器允许一些手势（touch）操作在设置了此属性的元素上，例如：对视口（viewport）平移、缩放等操作 。我们把touch-action设置为none，可以禁止触发默认的手势操作 。而PC浏览器默认情况下没有对滑动进行处理，所以我们屏蔽掉它的默认不触发效果。

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>06-zepto手势</title>
    <style>
        *{margin: 0;padding: 0;border: 0;list-style: none;}
        body{touch-action: none;}
        div{width: 100px;height: 100px;background: pink;position: absolute;left: 50%;top: 50%;margin-left: -50px;margin-top: -50px;}
    </style>
</head>
<body>
<div></div>
<script src="assets/js/zepto.min.js"></script>
<script src="assets/js/touch.js"></script>
<script src="assets/js/fx.js"></script>
<script>
    /*$('div').swipe(function(){
        console.log(123456)
    })*/

    /*$('div').swipeLeft(function(){
        console.log('向左')
    })
    $('div').swipeRight(function(){
        console.log('向右')
    })
    $('div').swipeUp(function(){
        console.log('向上')
    })
    $('div').swipeDown(function(){
        console.log('向下')
    })*/

    $('div').swipeLeft(function(){
        $(this).animate({left: 0, marginLeft: 0}, 300)
    })

    $('div').swipeUp(function(){
        $(this).animate({top: 0, marginTop: 0}, 300)
    })

    $('div').swipeDown(function(){
        $(this).animate({top: '100%', marginTop: -100}, 300)
    })

    $('div').swipeRight(function(){
        $(this).animate({left: '100%', marginLeft: -100}, 300)
    })
</script>
</body>
```

### 移动端tab切换栏案例

![](.\assets\GIF.gif)

## 三、安装Node

直接到官网https://nodejs.org/en/下载安装包安装，安装好之后就可以使用node命令和npm命令

```js
node -v    //命令行执行，检查node是否安装好
npm -v     //命令行执行，检查npm是否安装好
```

安装完 node 后建议设置 npm 镜像以加速module的下载（或使用科学上网工具）

  (直接复制以下命令去执行)

```
npm install -g cnpm --registry=https://registry.npm.taobao.org   //命令行执行 ，任意目录下执行
```

提示:  node 从4.x版本以后自带npm包管理器

## 四、包管理器

问题引入：

1、我们进入公司开发网站一般要求是以最快速度的开发网站，那么如何达到快速开发网站的呢？我们把所有功能自己创建 还是使用别人已经封装好的框架？

答案：肯定是使用框架或者库，开发起来是最快的。

2、那么这些框架都是放在哪里的？

开发者，一般把开发的框架(或者库)放在开源的网站上，这样让大家都可以下载

npm其实就是一个网站库。除了打开网站下载以外，还可以通过命令行工具来进行下载或者删除库、框架（包）。

npm中文文档：[https://www.npmjs.cn](https://www.npmjs.cn/) 

### 包管理器介绍

包管理器又称**软件包管理系统**，它是在电脑中自动安装、配制、卸载和升级[软件包](https://baike.baidu.com/item/%E8%BD%AF%E4%BB%B6%E5%8C%85)的工具组合，在各种[系统软件](https://baike.baidu.com/item/%E7%B3%BB%E7%BB%9F%E8%BD%AF%E4%BB%B6)和[应用软件](https://baike.baidu.com/item/%E5%BA%94%E7%94%A8%E8%BD%AF%E4%BB%B6)的安装管理中均有广泛应用。

常见的包管理器有：brew ,  yarn  ,  npm  ,  bower



网站 是开发者查找包（package）、设置参数以及管理 npm 使用体验的主要途径。

注册表 是一个巨大的数据库，保存了每个包（package）的信息。

CLI 通过命令行或终端运行。开发者通过 CLI 与 npm 打交道。



我们一般用npm来管理这些常用的包，比如安装、卸载等

如何管理： 使用命令行来进行管理。

比如：

npm install jquery 下载          或者    npm i jquery@1.7.2

npm uninstall jquery 卸载

npm install -g less等等



这些命令需要在DOS窗口下输入，那么如何进入DOS窗口界面？？？

开始菜单>运行，输入cmd回车，打开的黑窗口，就是DOS窗口



**DOS命令行窗口常用命令：**

盘符切换：     **f:**

cls 清除屏幕    （mac系统上是 clear）

搜索路径： cd 路径

检索目录下文件或文件夹： dir    （mac系统上是 ls）

方向键上下切换用过的命令

ctrl+c 中止当前操作



### 体验下载jquery包

新建项目目录： 比如：glupwolf

进入到该目录，然后shift+右键  打开命令行窗口

输入命令  npm i jquery   开始下载jquery，此时项目目录下会多一个node_modules目录，里面存放着我们下载的jquery。

输入命令npm init  初始化项目





### bower介绍（仅作了解）

1). Bower是一个客户端的**软件包管理器**，它可用于**搜索、安装和卸载** 如JavaScript、HTML、CSS之类的		

​	网络资源（例如：jQuery ,  AngularJS ,  Bootstrap .... ）。

2). Bower是Web开发中的一个前端文件**包管理器**，类似于Node模块的npm包管理器。

3). Bower是Node开发所以依赖Node和npm

4).Bower 安装网络上的资源是使用git命令，所有也依赖git（Git是目前世界上最先进的分布式版本控制系统没有之一）

安装bower:

```
npm install -g bower    // 使用npm安装bowr  ;  -g 代表全局安装,全局安装以后无论在哪打开命					       // 令行都可以直接使用bower命令 

bower -v    // 验证bower是否安装好
```

常用的bower命令：

a) npm install -g bower                          安装bower

b) bower search   jquery                        查找 jquery 资源信息( 不区分大小写 )

​     bower search  JQUERY  	； bower search   jQuery   都可以		    

c) bower info   jquery                             查看 jquery资源信息

**d) bower install   jquery                         安装jquery**

**e) bower install   jquery#3.0.0              安装指定版本的jquery**

f) bower uninstall   jquery                     卸载 jquery资源



## 四、自动化构建工具gulp

什么是自动化构建工具：自动构建工具就是一种：**用来让我们不再做机械重复的事情，解放我们的双手的工具**



构建工具就是做这件事，将源代码转换成可以执行的JavaScript、CSS、HTML 代码，包括如下内容：

- 代码转换：将 TypeScript 编译成JavaScript、将 SCSS 编译成 CSS等。
- 文件优化：压缩JavaScript、CSS、HTML 代码，压缩合并图片等。
- 代码分割：提取多个页面的公共代码，提取首屏不需要执行部分代码让其异步加载。
- 模块合并：在采用模块化的项目里会有很多个模块和文件，需要通过构建功能将模块分类合并成一个文件。
- 自动刷新：监听本地源代码变化，自动重新构建、刷新浏览器。
- 代码校验：在代码被提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过。
- 自动发布：更新代码后，自动构建出线上发布代码并传输给发布系统。

构建其实是工程化、自动化思想在前端开发中的体现，将一系列流程用代码去实现，让代码自动化地执行这一系列复杂的流程。构建为前端开发注入了更大的活力，解放了我们的生产力。

常见的构建工具：**Npm**       Grunt     **Gulp**        Fis 3        **Webpack**       Rollup    



### gulp介绍

中文官网：https://www.gulpjs.com.cn/

[Gulp](https://link.juejin.im/?target=https%3A%2F%2Fwww.gulpjs.com.cn) 是一个**基于流**的自动化构建工具。除了可以**管理任务和执行任务，还支持监听文件、读写文**

**件**。Gulp 被设计的非常简单，只通过下面5个方法就可以支持几乎所有构建场景：

- 通过 gulp.task 注册一个任务；
- 通过 gulp.src 读取文件；
- 通过 gulp.dest 写入文件。
- 通过 gulp.watch 监听文件变化；
- 通过 gulp.run 执行任务；

Gulp 的**优点**：好用又不失灵活，既可以单独完成构建，也可以和其他工具搭配使用。

Gulp 的**缺点**：和Grunt 类似。集成度不高，要写很多配置后才可以用，无法做到开箱即用。



### 安装gulp** 

npm install gulp@3.9.1  -g      //  **使用npm 安装gulp     -g 表示全局安装，没有-g表示本地安装**

npm install gulp@3.9.1 

gulp -v      查看gulp版本



### 体验gulp：项目中使用gulp编译来文件(重点)

**gulp支持node 11.15.0版本，其他环境不支持**

现在在刚才创建的gulpwolf项目中，新建以下几个新文件，目录如下：

![1578165651836](./assets/1578165651836.png)

可以手动创建以上文件夹与文件，也可以命令行创建：

```reStructuredText
$ cd gulpwolf
$ echo null>gulpfile.js   ---  创建一份gulpfile.js文件
$ md src & cd src      	  ---  创建src文件夹并进入该文件夹
$ md image & md js & md less & echo null>index.html	---创建src下三个文件夹及一个index.html文件
```

node_modules目录 ： 是项目**开发时**依赖的库，比如：less编译插件, js 和并插件等（不用打包到项目）node环境依赖

**src目录** ： 是源代码存放目录，编写代码，编写好之后需要编译

**gulpfile.js** ： gulp的配置文件，就是让咱们的src目录的源代码按照我们的意愿 去执行。



在gulpfile.js中写入以下代码：

```js
var gulp = require('gulp');   // 在node_modules下找到gulp包，寻找它里面的index.js

//gulp对'myhtml'这个任务进行后面函数里面内容的处理
gulp.task('myhtml',function(){   //'myhtml' 是任务名

    // 对这个'src/index.html'文件进行编译输出到目的地build文件夹(和dist)下
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
        .pipe(gulp.dest('dist'))
});
```

之后在项目目录下命令行窗口中执行    gulp myhtml     就能生成build和dist两个目录，里面是编译生成好的index.html



## 五、使用gulp编译less成css，并最终压缩css

### 编译less

我们可以用上上面同样的方法来编译less文件成为css：

安装gulp-less插件：  (直接复制以下命令去执行)

```
npm install --save-dev  gulp-less@4.0.1       //在根目录下执行（下载less编译插件） 4.0.1
```

在gulpfile.js中添加以下代码：

```js
var less = require('gulp-less');


gulp.task('myless',function(){
    gulp.src('src/less/index.less')
        .pipe(less())    //编译成为css
        .pipe(gulp.dest('build/css'))    //输出到指定目录
});
```

到src/index.html中引入输出目录'build/css'下的css文件   

```html
<link rel="stylesheet" href="css/index.css">
```

之后在项目目录下命令行窗口中执行    gulp myless， 打开build目录下的index.html就可以看到样式了。



### 压缩css

安装gulp-cssmin：   (直接复制以下命令去执行)

```
npm install --save-dev gulp-cssmin@0.2.0     //在根目录下执行（下载css压缩插件）  0.2.0
```

在gulpfile.js中添加以下代码：

```js
var cssmin = require('gulp-cssmin');

gulp.task('myless',function(){
    gulp.src('src/less/index.less')
        .pipe(less())    //编译成为css
    	.pipe(cssmin())   //读取和压缩css文件
        .pipe(gulp.dest('build/css'))    //输出到指定目录
});
```

之后在项目目录下命令行窗口中执行    gulp myless， 打开build目录下的index.css就可以看到被压缩的css了



tips: **gulp.task('all', ['myhtml', 'myless']);**表示所有任务一起执行

## 六、合并和压缩js

把 src/js 下的 js 文件编译后合并成一个js文件再打包到build 和 dist（添加压缩）目录下

安装gulp-concat和gulp-uglify    (直接复制以下命令去执行)

```
npm install --save-dev gulp-concat@2.6.1       //在根目录下执行（下载js合并插件） 2.6.1
```

```
npm install --save-dev gulp-uglify@3.0.1       //在根目录下执行（下载js压缩插件）  3.0.1
```

在gulpfile.js中添加以下代码：

```js
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('myjs',function(){
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))    //合并成为main.js文件
        .pipe(gulp.dest('build'))   //输出到build目录下
        .pipe(uglify())   //读取和压缩js文件
        .pipe(gulp.dest('dist'))    //输出到dist目录下
});
```

之后在项目目录下命令行窗口中执行    gulp all， 在build可以看到js，在dist可以看到被压缩的js

### 安装cnpm：

```js
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

## 七、压缩图片

把 src/image 下的 图片文件压缩到build 和 dist（添加压缩）目录下

安装gulp-concat和gulp-uglify    (直接复制以下命令去执行)

```
cnpm install --save-dev gulp-imagemin@4.1.0   //在根目录下执行（下载压缩图片的插件）
```

在gulpfile.js中添加以下代码：

```js
var imagemin = require('gulp-imagemin');

gulp.task('myimage', function() {

    gulp.src('src/images/*')  /*读取所有的图片文件*/
        .pipe( imagemin() )  /*将读取所有的图片文件进行压缩 */
        .pipe( gulp.dest('build/images'))    /*再将读取压缩后的文件写到build目录（没有会自动新建）*/
});
```

之后在项目目录下命令行窗口中执行    gulp all， 在build/images可以被压缩的图片

tips: **gulp.task('default',['all']);**表示所有任务一起执行

## 八、编写server服务

安装gulp-connect   (直接复制以下命令去执行)

```
cnpm install --save-dev gulp-connect@5.6.1   //安装gulp-connect插件，创建一个node服务
```

在gulpfile.js中添加以下代码：

```js
var connect = require('gulp-connect');

gulp.task('server',function () {

    connect.server();

});

// 记得添加server
gulp.task('all', ['myhtml', 'myless','myjs', 'myimage', 'server']);
gulp.task('default',['all']);
```

之后在项目目录下命令行窗口中执行    gulp ， 在浏览器中访问<http://localhost:8080/build/>    就可以看到我们的页面了。

## 九、添加热更新功能

```js
gulp.task('server',function () {

    /*1.设置web服务器*/
    connect.server({
        root:['build'],//服务器管理/运行哪个目录(默认是项目的根目录)
        livereload:true,  //是否热更新。
        port:9999  //指定web服务的端口号（默认是8080）
    });

    
    /*2.gulp监视文件，并且可以在文件发生改动时候做一些事情.
    *  参数一：监视的文件
    *  参数二: 在文件变动后执行的一个task任务
    * */
    gulp.watch('src/less/*',['myless']);
    
    
});

//3.在myless任务中添加重新加载功能
gulp.task('myless',function(){
    gulp.src('src/less/index.less')
        .pipe(less())    //编译成为css\
        .pipe(cssmin())   //读取和压缩css文件
        .pipe(gulp.dest('build/css'))    //输出到指定目录
        .pipe(connect.reload())     //当内容发生改变时， 重新加载。
});
```





