[TOC]



## 异常捕获结构的基本使用

当 JavaScript 引擎执行 JavaScript 代码时，会发生各种错误：

可能是语法错误，可能是拼写错误或语言中缺少的功能,可能是由于来自服务器或用户的错误输出而导致的错误,当然，也可能是由于许多其他不可预知的因素。

无论出现哪一种错误，程序都会立即停止，不再执行后面的代码。但是在实际开发中，我们很多时候是不希望这样的，也就是说，即使程序出错了，也要继续执行后面的代码，此时就需要使用到JS中的异常捕获结构。

**try：**可能出错的代码块

**catch：**处理try代码块中抛出的异常

**throw：**抛出自定义的异常

**finally：**无论上面的程序是否有错误，都会执行性的代码块

```javascript
var a = "a";
try {
    console.log(a);//1
    console.log(b);//2
}catch (e) {
    console.log("异常信息：",e.message);//3
}
console.log("后续代码继续执行");//4
```

**输出结果：**

​	a
​	异常信息： b is not defined
​	后续代码继续执行

程序在1处能够顺利的执行，但在2处发生了异常，b没有定义不能直接使用，抛出异常。

try中语句有异常，直接执行catch中的代码，对异常进行处理。

处理完异常之后，程序不会停止，而是继续执行后面的代码。



**throw：通常在以下两种情况下使用**

1. 在throw 异常信息: 字符串 + 对象、公司的规范:(msg + code)

   ```javascript
   function f() {
       var a = "a";
       try {
           console.log(a);
           console.log(b);
       }catch (e) {
           throw "错误信息"+e;
       }
   }
   var a = 123;
       try{
           console.log(a);
           console.log(b);
       }catch(e){
           //throw "这是一个错误信息";
           //throw "错误信息"+e;
           //以上都是抛出字符串，公司里面规范写法是抛出一个对象，写法如下
           throw {
               errorMsg:e,//具体的错误信息
               errorCode:10001 //错误码
           }
       }
   ```

2. 异常捕获的完整结构:

   ```javascript
   var a = 123;
       try{
           console.log(a);
           console.log(b);
       }catch(e){
           //throw "这是一个错误信息";
           //throw "错误信息"+e;
           //以上都是抛出字符串，公司里面规范写法是抛出一个对象，写法如下
           throw {
               errorMsg:e,//具体的错误信息
               errorCode:10001 //错误码
           }
       }finally{//加上finally是一个完整的结构
           // 不管前面的代码有没有出错,都会执行这个代码块中的代码
           // 一般在前端中开发不会使用,多用于后端开发中(Node.js),用来释放一些资源
           console.log("不管前面的代码有没有出错,都会执行这个代码块中的代码");
       }
   ```


## 面向过程和面向对象编程概述

面向过程编程就是分析出解决问题的步骤，然后使用函数把这些步骤一步步实现，重心放在完成的每个过程上。

面向对象则是以封装的思想，将问题分析得到的数据封装成一个个的对象，然后通过对对象的操作来完成相应的功能。

**举个栗子：解决菜鸟买电脑**

- 1）解决菜鸟买电脑的故事

  第一种方式:面向过程

  > 1)在网上查找资料
  >
  > 2)根据自己预算和需求定电脑的型号 MacBook 15 顶配 1W8
  >
  > 3)去市场找到苹果店各种店无法甄别真假 随便找了一家
  >
  > 4)找到业务员,业务员推荐了另外一款 配置更高价格便宜,也是苹果系统的 1W
  >
  > 5)砍价30分钟 付款9999
  >
  > 6)成交
  >
  > 回去之后发现各种问题

  第二种方式 :面向对象

  > 1)找一个靠谱的电脑高手
  >
  > 2)给钱交易

- 面向对象和面向过程都是解决问题的一种思路而已

  - 买电脑的第一种方式:
    - 强调的是步骤、过程、每一步都是自己亲自去实现的
    - 这种解决问题的思路我们就叫做面向过程
  - 买电脑的第二种方式:
    - 强调的是电脑高手, 电脑高手是处理这件事的主角,对我们而言,我们并不必亲自实现整个步骤只需要调用电脑高手就可以解决问题
    - 这种解决问题的思路就 是面向对象
  - 用面向对象的思维解决问题的重点
    - 当遇到一个需求的时候不用自己去实现，如果自己一步步实现那就是面向过程
    - 应该找一个专门做这个事的人来做
    - 面向对象是基于面向过程的

- 2）解决吃啤酒鸭的问题

  第一种方式（面向过程）:

  > 1)养鸭子
  >
  > 2)鸭子长成
  >
  > 3)杀
  >
  > 4)作料
  >
  > 5)烹饪
  >
  > 6)吃
  >
  > 7)卒

  第二种方式（面向对象）:

  > 1)找个卖啤酒鸭的人
  >
  > 2)给钱 交易
  >
  > 3)吃
  >
  > 4)胖6斤

从上面的例子可以看出，面向对象和面向过程最大的不同在于，面向对象关心的是由哪些对象，每个对象应该有哪些功能，而面向过程关心的是实现过程中的每个步骤。

那么这两种思想到底孰优孰劣呢？从表面上看，貌似面向对象更好，为什么呢？因为它完全符合我们的正常思维方式，所以在接受度方面，面向对象的思想肯定是更好。但是面向过程也有他的优势，就是灵活便捷，而面向对象相对来说会更耗资源，更慢一点。

所以，至于以后使用哪一种，这就需要看我们的具体需求，根据不同的需求做不同的选择。

## 面向对象编程的相关概念

通过上面的分析，我们知道面向对象的重点在于功能分析和对象的封装上，那么最终我们得到的对象的结构是怎样的，我们继续往下学习。

比如，我通过对人的分析得到，每个人都有姓名，年龄，性别等属性，同时也有吃饭睡觉等行为，那么用JS可以做如下的封装：

```javascript
var p = {
    name : "xiao song",
    age : 10,
    sex : 1,
    eat : function () {
        console.log("吃饭");
    },
    sleep : function () {
        console.log("睡觉");
    }
}
console.log(p.name);//访问对象的属性
p.eat();//访问对象的方法
```

上面的p则表示一个对象，其中的name / age / sex称之为对象的**属性**，eat / sleep 称之为对象的**方法**，我们通过访问该对象的属性或者方法达到相应的目的即可。

## DOM操作相关知识点复习

在学习了html之后我们发现，html文档中的内容其实就是由一堆的标签组成，由于在后面的课程中需要使用到html，所以我们先大致的回顾一下。

一个html文档主要由这三部分组成，DOM（文档对象模型）是对操作这些元素的属性或者方法进行了封装，从而达到方便快捷的操作html的目的。

创建div元素：document.createElement("div");

获取元素对象：document.getElementById("div")

获取div标签：document.getElementsByTagName("div")[0]

访问元素的文本内容：div.innerText

页面追加元素：document.body.appendChild(div)

页面删除子元素：document.body.removeChild(div)

下面，我们就通过这些API来讲解说明面向对象相关的内容。

需求1：创建一个div标签，并设置边框，背景色，文本及字体颜色、添加到页面中

```
//1.创建一个div标签
var oDiv = document.createElement("div");
//2.设置样式和内容
oDiv.innerText = "测试的div";
oDiv.style.backgroundColor = "red";
oDiv.style.width = "200px";
oDiv.style.height = "200px";
oDiv.style.border = "2px solid #123";
//3.添加到页面中
document.body.appendChild(oDiv);
//4.获取新创建的div
var div1 = document.getElementsByTagName("div")[0];
//console.log(div1);
//5.删除div
document.body.removeChild(div1);
```

## 创建并设置标签（面向过程）

需求1：创建三个div元素，并设置、背景色，边框，文本及字体颜色

```javascript
for (var i = 0; i < 3; i++) {
	var div = document.createElement("div");
	div.innerText="div"+i;
	div.style.backgroundColor="green";
	div.style.border="1px solid #000";
	div.style.color="white";
	document.body.appendChild(div);
}
```

![1551861261865](images\1551861261865.png)

需求2：为页面中存在的三个P元素设置、背景色，边框，文本字体颜色

```javascript
<p>我是P1</p>
<p>我是P2</p>
<p>我是P3</p>
<script>
    var ps = document.getElementsByTagName("p");
    for (var i = 0; i < ps.length; i++) {
        ps[i].style.backgroundColor="red";
        ps[i].style.border="1px solid #000";
        ps[i].style.color="white";
    }
</script>
```

![1551861800303](images\1551861800303.png)

需求3：获取页面上三个class=“test”的元素，背景色，设置边框，文本字体颜色

```javascript
<h3 class="test">我是标题1</h3>
<h3 class="test">我是标题2</h3>
<h3 class="test">我是标题3</h3>

<script>
	var tests = document.getElementsByClassName("test");
	for (var i = 0; i < tests.length; i++) {
	    tests[i].style.backgroundColor="yellow";
	    tests[i].style.border="1px solid #000";
	    tests[i].style.color="red";
	}
</script>
```

![1551862032204](images\1551862032204.png)

上面的代码是以面向过程的思想完成的，可以看到，两个需求中的每个步骤都是我们一步一步完成的，问题很明显，代码大量的冗余，这种代码后期不好维护。

## 创建并设置标签（函数封装）

对于上面重复的代码，我们可以使用函数对其进行封装

```javascript
<script>
    function setStype(eles,bgcolor) {
        for (var i = 0; i < eles.length; i++) {
            eles[i].style.backgroundColor=bgcolor;
            eles[i].style.border="1px solid #000";
            eles[i].style.color="white";
        }
    }
    function getElementsByTagName(tagName) {
        return document.getElementsByTagName(tagName);
    }
    function getElementsByClassName(className) {
        return document.getElementsByClassName(className);
    }
    var ps = getElementsByTagName("p")
    setStype(ps,"green");
    var tests=getElementsByClassName("test");
    setStype(tests,"red");
</script>
```

封装了三个函数：

1. setStype(eles,bgcolor)：为元素设置样式

   ​	eles：哪些元素

   ​	bgcolor：背景色

2. getElementsByTagName(tagName)：根据元素名称获取指定的元素

   ​	tagName：元素名

3. getElementsByClassName(className)：根据class属性名获取指定的元素

   ​	className：class属性名   

接下来就是调用三个方法完成了上面的需求，解决了第一种方式中大量的重复代码的问题。

但是，这种方式仍然存在问题。在前面JS基础中说过，我们应该尽量避免大量使用全局变量，这会降低程序的执行效率，在上面的程序中，我们就出现了5个（包括函数）。所以需要继续优化。

## 创建并设置标签（面向对象）

使用面向对象的思想来解决上面的问题，我们可以将上面的三个函数都装到一个对象中

```javascript
var $ = {
    setStype:function (eles,bgcolor) {
    	for (var i = 0; i < eles.length; i++) {
    	    eles[i].style.backgroundColor=bgcolor;
    	    eles[i].style.border="1px solid #000";
    	    eles[i].style.color="white";
    	}
    },
    getElementsByTagName: function (tagName) {
        return document.getElementsByTagName(tagName);
    },
    getElementsByClassName:function (className) {
        return document.getElementsByClassName(className);
    }
}
var ps = $.getElementsByTagName("p")
$.setStype(ps,"green");
var tests=$.getElementsByClassName("test");
$.setStype(tests,"red");
```

后面如果我们还都需要封装其他功能，可以直接在$这个对象中添加即可

如，根据元素的id属性获取元素，并未其设置样式

```
getElementById:function (eleId) {
	return [document.getElementById(eleId)];
}
```

需要注意的是，在设置样式方法中，我们默认是将传递进来的元素当做数组进行处理的，所以，在这里，我们在getElementById方法中，手动将获取到的元素添加到数组中返回。

通过观察，在$对象中，存在三个获取元素的方法，这里我们最好将其按照下面的方式来归类

```javascript
var $ = {
    getElements:{
        byTagName: function (tagName) {
            return document.getElementsByTagName(tagName);
        },
        byClassName:function (className) {
            return document.getElementsByClassName(className);
        },
        byId:function (eleId) {
            return [document.getElementById(eleId)];
        }
    },
    setStype:function (eles,bgcolor) {
        for (var i = 0; i < eles.length; i++) {
            eles[i].style.backgroundColor=bgcolor;
            eles[i].style.border="1px solid #000";
            eles[i].style.color="white";
        }
    }
}
```

将获取元素的方法封装到$对象的getElements属性中，今后如果还有其他获取元素的方法，都应该是添加到getElements属性中，其他类型的方法也应该按照这种思想进行封装。

## 面向对象编程的三大特性

面向对象的特性：

1. 封装

   作用：复用和信息隐藏

   封装，也就是把客观事物封装成抽象的类，并且类可以把自己的数据和方法只让可信的类或者对象操作，对不可信的进行信息隐藏。

2. 继承

   它可以使用现有类的所有功能，并在无需重新编写原来的类的情况下对这些功能进行扩展。

   通过继承创建的新类称为“子类”或“派生类”。

   被继承的类称为“基类”、“父类”或“超类”。

   继承的过程，就是从一般到特殊的过程。

3. 多态

   同一个操作,作用于不用的对象,产生不同的行为；（例如：导演喊开始，不同的演员表现出不同的行为）js天生就具备多态的特性(弱类型语言)。


## 用字面量方式创建对象

直接使用字面量方式创建对象比较方便，以键值对的格式来定义数据

```javascript
var book1 = {
    name:"JavaScript权威指南",
    price:100,
    author:"tim",
    showInfo:function () {
        console.log(this.name,this.price,this.author);
    }
}
console.log(book1);
```

上面定义了一个书对象，并为其添加了属性和方法，我们也可以直接访问其中的属性和方法。

这种方式的弊端是，如果需要创建多个类似的对象，就显得不太方便了，会出现大量的重复代码。

也就是说，这种方式不适合创建大量的相同或相似的对象。

## 内置构造函数和简单工厂创建对象

使用new关键字+内置的构造函数创建对象

```javascript
var book2 = new Object();
book2.name="JS";
book2.price=10;
book2.author="作者";
book2.showInfo=function () {
    console.log(this.name,this.price,this.author);
}
book2.showInfo();
```

这种方式和字面量方式创建对象存在的问题差不多，在大量创建对象的时候都会存在大量重复的代码。

那么，利用前面的封装的思想，我们应该可以想到，当有重复代码的时候，我们可以将这些重复代码抽取到函数中来解决。

```javascript
function createBook(name, price, author) {
    var book = new Object();
    book.name=name;
    book.price=price;
    book.author=author;
    book.showInfo=function () {
        console.log(this.name,this.price,this.author);
    }
    return book;
}
var book3 = createBook("bookName1",10,"author1");
var book4 = createBook("bookName2",10,"author2");
console.log(book3);
console.log(book4);
```

我们将创建book对象的代码封装到createBook函数中，当需要创建一个book对象的时候，直接调用该函数，将函数需要的参数传递过去即可。

那么，相同的思想，如果我们需要创建其他的对象，一样可以使用封装函数的方法来解决，这是没问题的。

```javascript
function createPerson(name, age) {
    var p = new Object();
    p.name = name;
    p.age = age;
    return p;
}
console.log(createPerson("Neld", 10))
```

利用上面的函数，我们可以创建一个Person对象出来，但是通过打印对比，我们无法通过创建出来的对象判断该对象的类型，而在实际开发中，判断对象的类型是我们经常需要执行的，所以我们继续看下面的自定义构造函数创建对象。

## 自定义构造函数创建对象

构造函数和普通的函数的定义方式完全一样，如下，我们定义一个创建Person的构造函数

```javascript
function CreatePerson(name, age, sex) {
    this.name=name;
    this.age=age;
    this.sex=sex;
}
var p = new createPerson("Neld", 10, 1);
var p2 = new createPerson("Song", 12, 0);
console.log(p);
console.log(p2);
```

自定义函数和工厂函数非常相似，但是还是存在很大的区别

1. 构造函数名的首字母要求大写
2. 需要使用new关键字和构造函数一起创建对象
3. 在函数中，不需要手动创建对象进行数据封装，会自动创建并封装数据
4. 在函数最后，不需要手动返回创建好的对象，会自动返回

到这里，大家肯定会有疑问，自定义构造函数到底是如何创建并封装对象呢？

1. 在函数内部默认会创建一个空对象 var obj = new Object();
2. 默认把创建好的对象赋值给this  this = obj;
3. 默认设置this的原型对象为当前构造函数的原型对象
4. 通过this添加属性和方法
5. 默认会把内部创建的对象返回 return this;

通过上面的分析，相信大家已经能够理解自定义构造函数的基本使用以及基本的原理了。

## 构造函数创建对象的返回值

默认情况下，构造函数内部会返回新创建好的对象（this）

主动返回：

 	1. 如果返回值类型的数据，仍然返回创建好的对象（this），不做任何修改
 	2. 如果返回引用类型的数据，则返回指定的数据，不再返回this。

## 函数作为构造函数参数使用

在JS世界里，函数属于一等公民，拥有最高特权，在使用过程中可以作为变量赋值，可以作为参数传递，也可以作为函数的返回值，下面我们具体来看看他的使用。

**函数作为参数使用**

```javascript
function f1(fn) {
        console.log("f1的函数");
        fn();//fn本来是一个参数加了括号()此时fn当成是一个函数来使用的
    }
    //fn是参数，最后作为函数使用了，函数是可以作为参数使用的
    //传入匿名函数
   /* f1(function () {
        console.log("我是匿名函数");
    });*/
    //命名函数
    function f2() {
        console.log("f2的函数");
    }
    f1(f2);//函数作为参数的时候，如果是命名函数，那么传入命名函数的名字，没有括号

```

输出结果：

​	f1的函数
​	f2的函数

在上面的代码中，我们将函数fn作为参数传递给了函数f1,并且在函数f1中调用，得到的相应的打印输出。

**函数作为返回值使用**

```javascript
function f1() {
   console.log("f1函数开始");
   return function () {
      console.log("我是函数,但是此时是作为返回值使用的");
  }
}
var ff = f1();
ff();//接收的返回值是一个函数，所以加括号执行
```

在函数f1中将传递进来的fn作为返回值返回，接收到调用f1之后的返回值得到的是返回的函数，然后在调用retFun得到打印结果。

此时的f1为**高阶函数**，即参数中有一个或多个函数，并且把函数作为返回值。

此时的fn为**回调函数**，fn作为参数传递给函数f1,在f1内部调用。

**函数作为构造函数的参数使用**

```javascript
function createPerson(name, age, sex, say) {
    this.name=name;
    this.age=age;
    this.sex=sex;
    this.say=say;
}
var p = new createPerson("Neld", 10, 1, function () {
    console.log("say hello");
});
var p2 = new createPerson("Song", 12, 0,function () {
    console.log("say bye");
});
p.say();
p2.say();
```

在构造函数中也可以对方法进行封装，如果方法的实现是由调用者决定的，那么可以在构造函数中接收一个函数对象，然后在构造函数中进行封装。

如上面的函数say，在创建p和p2对象的时候传递并赋值给形参say，然后在构造函数中赋值给当前对象。

## 构造器属性

前面说到工厂函数创建对象是比较方便的，但是存在一个问题就是无法得知创建出来的对象的类型，所以我们选择使用自定义的构造函数来创建，构造函数创建对象我们已经会使用了，那么得到创建对象的类型，这里我们提供两种方式。

1. **constructor属性**

   ```javascript
   function Person(name) {
       this.name = name;
   }
   function Dog(name) {
       this.name = name;
   }
   var p = new Person("p");
   var d = new Dog("d");
   console.log(p.constructor);//打印得到Person函数对象
   console.log(d.constructor);//打印得到Dog函数对象
   if(p.constructor == Person){
       console.log("是Person对象");
   }
   if(d.constructor == Dog){
       console.log("是Dog对象");
   }
   ```

   使用constructor属性可以获取到创建对象使用的构造器函数对象，所以我们可以通过判断构造器的类型来得知创建的对象的类型

   

2. **instanceof关键字**

   ```javascript
   function Person(name) {
       this.name = name;
   }
   function Dog(name) {
       this.name = name;
   }
   var p = new Person("p");
   var d = new Dog("d");
   console.log(p instanceof Person);//true
   console.log(d instanceof Person);//false
   
   ```

   instanceof关键字可以直接用来判断对象的类型，如果是指定的类型，返回true，反之返回false。
