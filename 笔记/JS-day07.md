[TOC]

## 作用域链和访问规则

作用域链中存储了当前所在的作用域和能够访问到的作用域，如果我们要访问的变量不在当前作用域链中，那么程序会报错，反之从链上对应的作用域中获取到变量。

那么在作用域链中的成员访问规则是怎么样的呢？

```js
var num=10;
function f1() {
   var num=20;
   function f2() {
       var num=30;
        function f3() {
            var num=50;
            console.log(num);
        }
       f3();
  }
  f2();
}
f1();
```

上面定义了4个函数，他们层层嵌套，我们需要知道的是，每个函数中变量的作用域及其访问规则。

函数中定义的变量称为局部变量，它只属于当前函数的作用域及其嵌套函数的作用域中，外界无法访问。也就是一种由内而外的访问，反之则不行。

![1559789556811](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1559789556811.png)

## 闭包相关知识点复习

JS中每个函数都有自己的作用域，在当前函数中定义的变量，只能在该函数或该函数的嵌套函数中访问。

如：

```js
function fun(){
    var a = 123;
    console.log(a);//123
}
console.log(a);//报错：a没有定义
```

在开发中，如果需要在当前函数作用域外访问函数的局部变量能实现吗？看下面的代码：

```js
function fun() {
    var a = 123;
    function fun2() {
        return a;
    }
    return fun2;
}
var fun3 = fun();
console.log(fun3());//123
```

在函数fun中定义了另一个函数fun2,fun2中访问函数外部的局部变量a，最后将fun2返回。

调用fun得到返回值（fun2函数），因为该返回值是一个函数，所以我们调用得到函数中返回的a的值。

这种在函数中返回另一个函数的结构就称之为闭包，闭包在的主要作用就是打破函数的作用域的限制，能在需要的地方访问函数内部的私有成员。

## 闭包访问和设置数据

上面我们通过闭包，能够访问到一个函数中的私有成员，那么如果需要访问其中的多个私有成员，应该如何实现呢？

这里大家应该能够想到，函数的返回值只能有一个，如果有多个值需要返回，我们完全可以使用数组来实现。

```js
function fun() {
    var a = 123;
    var b = 456;
    return function() {
        return [a, b];
    }
}
var f = fun();
var a = f()[0];
var b = f()[1];
console.log(a, b);//123 456
```

也或者是：

```js
function fun() {
    var a = 123;
    var b = 456;
    return [
        function() {
            return a;
        },
        function() {
            return b;
        }
    ];
}
var f = fun();
var a = f[0]();
var b = f[1]();
console.log(a, b);//123 456
```

上面两种方式都是使用数组实现访问多个私有成员的需求，在实际开发中不太好使，因为数组是使用所有来访问元素，如果数组中元素个数较多，那么这种方式就容易出错了。所有我们想到使用对象的形式来返回。

```js
function fun() {
    var a = 123;
    var b = 456;
    return {
        getA:function () {
            return a;
        },
        getB:function () {
            return b;
        }
    };
}
var f = fun();
var a = f.getA();
var b = f.getB();
console.log(a, b);
```

上面这种方式就好多了，将需要访问的函数定义到对象中，然后通过访问对象的属性来达到目的。

如此一来，我们也可以将访问变量的其他方法都定义在该对象中，如，为变量赋值的方法。

```js
function fun() {
    var a = 123;
    var b = 456;
    function getA() {
            return a;
        }
    function getB () {
            return b;
        }
    return {
        getA:getA,
        getB:getB
    };
}
var f = fun();
var a = f.getA();
var b = f.getB();
console.log(a, b);
```

这是在以后开发中经常使用到的，大家可以多熟悉一下。

最后，使用前面学过的知识点来对上面的代码做一次优化。

```js
var modual = (function () {
    var a = 123;
    var b = 456;
    function getA() {
        return a;
    }
    function getB() {
        return b;
    }
    function setA(value) {
        a = value;
    }
    function setB(value) {
        b = value;
    }
    return {
        getA:getA,
        getB:getB,
        setA:setA,
        setB:setB
    };
})();//立即执行函数，返回内部的封装的对象
modual.setA(100);
modual.setB(200);
var a = modual.getA();
var b = modual.getB();
console.log(a, b);//100 200
```

## 定时器时间和闭包的执行01

定时器的使用是我们学习过的，这里再科普一个小点。

```js
//单次定时器
setTimeout(function(){},1000);
```

上面是一个单次定时器，在1秒之后调用指定的函数，如果要执行的函数需要参数应该如何实现？

```js
setTimeout(function(a, b){
    console.log(a, b);
}, 1000, 1,2);
```

如果函数需要参数，实参是在setTimeout的第二个参数（时间）之后。

好了，接下来看看下面的需求：

使用setTimeout开启10个定时器，分别输出 0,1,2,3,4,5,6,7,8,9。

这个需求看似很简单，想当然的认为，在循环中开启定时器，输出对应的数值即可，那么我们来看看是否能够顺利的完成。

```js
for (var i = 0; i <10; i++) {
    setTimeout(function(){
        console.log(i);
    }, 1000);
}
```

按照最初的理解，我们写出了上面的代码，结果正确吗？

不好意思，结果输出了10个10，而不是我们需要的连续的数字。

问题在哪呢？其实很简单，这个是个定时器中的函数都不是立即执行，所以在要执行的时候，他们所要访问的i已经自增到了10，所以10个定时器都打印出10的结果。

那么结果方案其实已经出来了，因为定时器中的函数没能立即执行才造成这个问题，那我们让它立即执行不就OK了吗！

```js
for (var i = 0; i <10; i++) {
    setTimeout(
        (function(){
        	console.log(i);
    	})(), //立即执行函数
    1000);
}
```

问题解决，但是不够好，问题在于setTimeout函数中的第一个参数需要的是一个函数对象，这样处理之后，丢给他的是一个undefined，换种方式来看看。

```js
for (var i = 0; i < 10; i++) {
    function fun(){
         return function (i) {
             console.log(i);
         }
    }
    setTimeout(fun(),1000,i);
}
```

这种方式就是利用闭包完成上面的需求。

## DOM事件和闭包的执行

DOM中的事件绑定和上面存在一样的问题，解决思路一致。

## 即时对象初始化

```
var obj = {
    name:'zs',
    age:18,
    showName:function () {
        console.log("姓名:" + this.name);
    },
    showAge:function () {
        console.log("年龄:" + this.age);
    }
}
```

我们有的时候会给name和age一个默认，通过init：funciton来设置初始化

```
var obj = {
    name:'默认',
    age:"默认",
    showName:function () {
        console.log("姓名:" + this.name);
    },
    showAge:function () {
        console.log("年龄:" + this.age);
    },
    init:function (name,age) {
        this.name = name;
        this.age = age;
    }
};
obj.init("zs",19);//给init传值
console.log(obj.name);//zs
console.log(obj.age);//19
```

如果没有给 init 初始化传值那么输出的结果是默认的值;

 如果这个对象只使用一次，可以用即时对象初始化的写法如下：

```
({
    name:'默认',
    age:"默认",
    showName:function () {
        console.log("姓名:" + this.name);
    },
    showAge:function () {
        console.log("年龄:" + this.age);
    },
    init:function (name,age) {
        this.name = name;
        this.age = age;
        this.showName();
        this.showAge();
    }
}).init("lw",19);
```

## 设计模式简单说明

常用的设计模式：单例模式、工厂模式、发布订阅模式-观察者模式(装饰模式、代理模式)等等...。

## 单例模式

**单例模式简单说明**

在JavaScript中单例模式：单个实例模式(在其他面向对象编程语言中，单例模式指的是某个类class永远只有一个实例对象)；

```js
function Person() {
        /*因为做了这三步：所以下面p1和p2不是同一个对象，每次new都会新创建一个对象，所以不是同一个
        * 1.默认会创建一个新的对象  var obj = new Object();
        * 2.默认会把这个对象赋值给this  this = obj;
        * 3.默认会返回这个对象 return this;
        * */
}
var p1 = new Person();
var p2 = new Person();
console.log(p1 == p2); // false
```

解决思路：当我们第一次创建好新对象之后，把该对象保存起来；当以后需要获取(创建)新对象的时候，先检查之前是否已经存在创建好了对象，如果存在那么直接返回。

```js
var _instance;//一般不修改的变量前面加个下划线
function Person() {
   if(_instance){
            console.log('之前已经创建过,直接返回之前创建的对象');
            return _instance;
   }
   _instance = this;
   console.log("创建了对象");//第一次new会打印这句话
}
var p1 = new Person();
var p2 = new Person();
console.log(p1 == p2); // true，他俩是同一个对象
```

​	我们可以使用静态成员写法代码如下：

```js
function Person() {
        if(Person._instance){
            console.log('之前已经创建过,直接返回之前创建的对象');
            return Person._instance;
        }
        Person._instance = this;
        console.log("创建了对象");
    }
    var p1 = new Person();
    var p2 = new Person();
    console.log(p1 == p2); // true，他俩是同一个对象
    //看下面代码更好一些，可以测试看下面代码是true
    var p3 = new Person();
    console.log(p3 == p1);// true
```

## 观察者模式(发布订阅模式）

举例：售楼部的客服小姐姐---有新的房源---发布者

```js
发布者: 售楼部的客服小姐姐,信息的发布者
      客户1 ->联系的电话
      客户2 ->联系的QQ
      客户3 ->联系的微信
订阅者-也叫观察者:(被观察的对象 状态发生改变或者发布了信息,需要采取行动的对象)
```

练习基本结构：男生暗恋女生的例子：女神:Rose、男生:Jack 

```
var Rose = {
     eat:function () {//发布信息
     console.log("我肚子好饿啊---Rose");
     Jack.jack_eat();//3、注册订阅者
   }
};
    //2、提供订阅者(观察者)对象
var Jack = {
     jack_eat:function () {//接收到消息之后需要采取的行动
     console.log('邀请女神吃大餐!--jack');
  }
};
 Rose.eat();//可以调用看看
```

发布者对应两个订阅者

```
var Rose = {
        eat:function () {
            console.log("我肚子好饿啊---Rose");
            Jack.jack_eat();//3、注册订阅者
            Tom.tom_eat();//第二步：注册订阅者
        }
    };
    var Jack = {
        jack_eat:function () {
            console.log('邀请女神吃大餐!--jack');
        }
    };

    var Tom = {//第一步：多加一个订阅者
        tom_eat:function () {
            console.log('邀请女神吃麻辣烫!--tom');
        }
    };

    Rose.eat();//可以调用看看
```

## 命名空间模式

约定:命名空间的名字一般是项目的名称或者简写,一般都是大写；现在几乎不用了，现在用的都是模块化开发。

```js
 var MOMO = {};
    //1、普通的变量
    MOMO.a = 10;
    MOMO.b = 20;
    //2、对象
    MOMO.obj ={
        name :"zs",
        age:20
    };
    //3、函数
    MOMO.fun = function () {
        console.log("fun");
    };

    //4、构造函数
    MOMO.Person = function () {
        this.name = "zs"
    }
    console.log(new MOMO.Person());
```

## 工厂模式

**工厂模式**

1、提供一个构造函数(工厂模式)；

2、设置构造函数的原型对象(设置共同的属性或方法)；

3、生产车间(在父构造函数上提供一个静态的工厂方法)；

4、建立合作关系(定制合作伙伴)；

5、获取产品--生成产品；

（如下面例子）。

```js
	function MakePhone() {}
	MakePhone.prototype = {
        constructor:MakePhone,
        logDes:function () {
            console.log("广告语:" + this.des);
        },
        callPhone:function () {
            console.log("打电话");
        }
	};
    MakePhone.factory = function (type) {
        MakePhone[type].prototype = MakePhone.prototype;
        var obj = new MakePhone[type]();
        return obj;
    };
    MakePhone.iphone = function () {
        this.des = "最贵的手机，最垃圾的系统!";
    };
    MakePhone.oppo = function () {
        this.des = "充电两小时，通话五分钟";
    };
    MakePhone.xiaoMi = function () {
        this.des ="小米可以吃，不像锤子";
    };
    var iphone1 = MakePhone.factory("iphone");
    var iphone2 = MakePhone.factory("iphone");
    var oppo1 = MakePhone.factory("oppo");
    iphone1.callPhone();
    iphone2.callPhone();
    oppo1.callPhone();
    iphone1.logDes();
    oppo1.logDes();
```

此时可以使用打电话方法了

```
/*
 * 1、提供一个构造函数(工厂模式)
 * 2、设置构造函数的原型对象(设置共同的属性或方法)
 * 3、生产车间(在构造函数上提供一个静态的工厂方法)
 * 4、建立合作关系(定制合作伙伴)，在构造函数身上提供静态方法
 * 5、获取产品--生成产品，调用工厂函数，传递参数
 * */
function MakePhone() {//1提供一个构造函数(开了一家工厂)

}
MakePhone.prototype = {//2设置构造函数的原型对象(设置共同的属性或方法)
    constructor:MakePhone,
    logDes:function () {
        console.log("广告语:" + this.des);
    },
    callPhone:function () {
        console.log("打电话");
    }
};
//3、生产车间(在父构造函数上提供一个静态的工厂方法)
MakePhone.factory = function (type) {
    //7、设置子构造函数的原型对象，指向父构造函数的原型对象，为了拿到里面的方法
    MakePhone[type].prototype = MakePhone.prototype;
    //8、使用子构造函数创建实例对象
    var obj = new MakePhone[type]();
    //9、返回一个实例对象, 下面三个产品都可以打电话了 看6步骤
    return obj;
};
//4、建立合作关系(定制合作伙伴)--添加个方法
MakePhone.iphone = function () {
    this.des = "最贵的手机，最垃圾的系统!";
};
MakePhone.oppo = function () {
    this.des = "充电两小时，通话五分钟";
};
MakePhone.xiaoMi = function () {
    this.des ="小米可以吃，不像锤子";
};
//5、获取产品，调用工厂函数，传递参数
var iphone1 = MakePhone.factory("iphone");
var iphone2 = MakePhone.factory("iphone");
var oppo1 = MakePhone.factory("oppo");

iphone1.callPhone();//6都可以打电话了和有广告词了
iphone2.callPhone();
oppo1.callPhone();
//10、可以看广告语了
iphone1.logDes();
oppo1.logDes();
```