[TOC]

## 课程概述

​	在JS的前期课程中，我们已经对JS的基本使用有了初步的认识，包括JS的作用，JS的语法和JS的中简单的DOM操作等。并且在这些知识点的基础上,完成了一些简单的特效功能，所有的一切都旨在让大家能够感受到JS的魅力所在。但是，目前我们所掌握的只是JS的冰山一角，在接下来的JS高级部分，我将带领大家一起来窥探一下JS更深层次的秘密。

​	当然，在这部分的课程中，也会穿插一些前面我们学过的内容，目的很简单，第一，复习JS相关的知识点；第二，承前启后，引出后面更重要的知识点。所以，希望大家好好把握，尽量做到查漏补缺。

## JavaScript概述

JavaScript实现是由以下3个部分组成：

![1551756780589](images\1551756780589.png)

- ECMAScript：描述了该语言的语法和基本对象

  - 语法
  - 类型
  - 语句
  - 关键字
  - 保留字
  - 运算符
  - 对象

- DOM：Document Object Model  文档对象模型

  ```html
  <html>
    <head>
      <title>Sample Page</title>
    </head>
    <body>
      <p>hello world!</p>
    </body>
  </html>
  ```

  这段代码可以使用DOM绘制成一个节点层次图：

  ![1551758334596](images\1551758334596.png)

- BOM：Browser Object  Model 浏览器对象模型,最核心的对象(window)

  - Window 对象

    表示浏览器中打开的窗口

  - Navigator 对象

    包含有关浏览器的信息，可通过 window.navigator 属性对其进行访问。

  - Screen 对象

    包含有关客户端显示屏幕的信息，可通过 window.screen 属性对其进行访问。

  - History 对象

    包含用户（在浏览器窗口中）访问过的 URL，可通过 window.history 属性对其进行访问。

  - Location 对象

    包含有关当前 URL 的信息，可通过 window.location 属性来访问。

  

## JavaScript的数据类型

JavaScript的数据类型分为：基本数据类型和复杂数据类型（引用数据类型）。

基本数据类型：

​	字符串（string）、数字（number）、布尔类型（boolean）、空值（null）、未定义（undefined）

复杂数据类型：

​	数组（Array），函数（Function），错误（Error），数学（Math），字符串（String），数字（Number），布尔（Boolean）

## 获取变量类型

在开发中，我们有的时候需要获取指定变量的具体类型，此时我们可以使用typeof关键字来实现。

语法：typeof 变量

```javascript
var str1 = "wolfcode";
console.log(typeof str1);//"string"
```

上面的代码使用 typeof 获取到了变量str1的类型为"string"，其他变量的类型获取方式和上面一致，所以我们不再一一进行说明。需要特别注意的是null和undefined变量的类型。

```javascript
var d;
if(d == undefined){
    console.log("我是未定义数据类型01");
}

if(typeof d == "undefined"){ 
    console.log("我返回的也是一个未定义02"); //"undefined" 
}
```

在变量被申明但还未初始化时，默认值为undefined，此时temp的类型为"undefined"。

```javascript
console.log(null == undefined);//true
console.log(typeof null);//"object"
```

Null类型只有一个值null，由于undefined是从null派生而来，因此ECMAScript把他们定义为相等。

大家也许会问，为什么 typeof 运算符对于 null 值会返回 "object"。这实际上是 JavaScript 最初实现中的一个错误，然后被 ECMAScript 沿用了。现在，null 被认为是对象的占位符，从而解释了这一矛盾，但从技术上来说，它仍然是原始值。

```javascript
var arr = [1,2,3];
console.log(typeof arr);//"object"
var p = {name:"Neld",age:10};
console.log(typeof p);//"object"
function Person() {
}
var p2 = new Person();
console.log(typeof p2);//"object"
console.log(typeof Person);//"function"
```

复杂的数据类型使用typeof获取到的类型，除函数为"function"外，其他的都是"object"。

## null和undefined的区别

null： Null类型，代表“空值”，代表一个空对象指针，使用typeof运算得到 “object”，所以你可以认为它是一个特殊的对象值。

undefined： Undefined类型，当一个声明了一个变量未初始化时，得到的就是undefined。

null可以用来消除变量对对象的引用，从而让垃圾回收器回收对应的内存。如：

```js
//obj引用创建好的Object对象
//如果Object对象有被引用，那么就不会被回收，一直存在于内存中
var obj = new Object();
//obj不再对Object对象继续引用，那么该对象会在特定的时间点被回收
obj = null;
```

## JavaScript的逻辑运算符

逻辑运算符有三种：与（AND）、或（OR）、非（NOT）。

逻辑非运算符返回和运算数相反的数据，结果一定是布尔值。

和其他编程语言不同的是，逻辑与和逻辑或运算的结果不一定是布尔值，这里我们主要对这一点进行讨论。

```javascript
console.log(!true);
console.log(!false);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

//测试题：逻辑与&&
console.log(0 && 0);
console.log(0 && 1);
console.log(1 && 0);
console.log(1 && 2);
console.log(2 && 3);
//测试题：逻辑或||
console.log(0 || 0);
console.log(0 || 1);
console.log(1 || 0);
console.log(1 || 2);
console.log(2 || 3);
```

通过总结分析，得出下面的结论：

1. 逻辑与，如果表达式1为真，则返回表达式2的值，如果表达式1为假，则返回表达式1的值；

2. 逻辑或，如果表达式1为真，则返回表达式1的值，如果表达式1为假，则返回表达式2的值；

## JavaScript的等性运算符

ECMAScript 提供了两套等性运算符：等号和非等号用于处理原始值，全等号和非全等号用于处理对象。

#### 等号和非等号

在 ECMAScript 中，等号由双等号（==）表示，当且仅当两个运算数相等时，它返回 true。非等号由感叹号加等号（!=）表示，当且仅当两个运算数不相等时，它返回 true。为确定两个运算数是否相等，这两个运算符都会进行类型转换。

执行类型转换的规则如下：

- 如果一个运算数是 Boolean 值，在检查相等性之前，把它转换成数字值。false 转换成 0，true 为 1。
- 如果一个运算数是字符串，另一个是数字，在检查相等性之前，要尝试把字符串转换成数字。
- 如果一个运算数是对象，另一个是字符串，在检查相等性之前，要尝试把对象转换成字符串。
- 如果一个运算数是对象，另一个是数字，在检查相等性之前，要尝试把对象转换成数字。

在比较时，该运算符还遵守下列规则：

- 值 null 和 undefined 相等。
- 在检查相等性时，不能把 null 和 undefined 转换成其他值。
- 如果两个运算数都是对象，那么比较的是它们的引用值。如果两个运算数指向同一对象，那么等号返回 true，否则两个运算数不等。

重要提示：即使两个数都是 NaN，等号仍然返回 false，因为根据规则，NaN 不等于 NaN。

#### 全等号和非全等号

等号和非等号的同类运算符是全等号和非全等号。这两个运算符所做的与等号和非等号相同，只是它们在检查相等性前，不执行类型转换。

全等号由三个等号表示（===），只有在无需类型转换运算数就相等的情况下，才返回 true。

例如：

```
var sNum = "66";
var iNum = 66;
console.log(sNum == iNum);//输出 "true"
console.log(sNum === iNum);//输出 "false"
```

在这段代码中，第一个使用等号来比较字符串 "66" 和数字 66，输出 "true"。如前所述，这是因为字符串 "66" 将被转换成数字 66，，然后才与另一个数字 66 进行比较。第二个 使用全等号在没有类型转换的情况下比较字符串和数字，当然，字符串不等于数字，所以输出 "false"。

非全等号由感叹号加两个等号（!==）表示，只有在无需类型转换运算数不相等的情况下，才返回 true。

例如：

```
var sNum = "66";
var iNum = 66;
console.log(sNum != iNum);	//输出 "false"
console.log(sNum !== iNum);	//输出 "true"
```

这里，第一个 使用非等号，把字符串 "66" 转换成数字 66，使得它与第二个运算数 66 相等。因此，计算结果为 "false"，因为两个运算数是相等的。第二个 使用的非全等号。该运算是在问："sNum" 与 "iNum" 不同吗？这个问题的答案是：是的（true），因为 sNum 是字符串，而 iNum 是数字，它们当然不同。

## 值类型和引用类型基本介绍

值类型其实就是基本类型，而引用类型就是对象类型，在使用的过程中，概念并不是很重要，重要的是他们的值是如何存储，然后又是如何获取到的。下面，我们通过画图来进行分析。

#### 值类型

```javascript
var str1 = "Neld";
var str2 = str1;
console.log(str1);//Neld
console.log(str2);//Neld
console.log("------------");
str2 = "Song";
console.log(str1);//Neld
console.log(str2);//Song
```

![1551774862974](images\1551774862974.png)

可以看到，str1和str2是两份不同的变量，他们的值在内存中也是完全不同的两份，所以，在修改了str2之后，str1是不会受到影响的。

#### 引用类型

```javascript
var obj1={name:"zs",age:10};
var obj2=obj1;
console.log(obj1.name);//zs
console.log(obj2.name);//zs
obj2.name="ls";
console.log(obj1.name);//ls
console.log(obj2.name);//ls
```

![1551775706687](images\1551775706687.png)

从内存分析图中可以看出，obj1和obj2是引用同一块内存地址（0x11）中的数据，所以0x11内存中的数据被修改后，所有指向这块内存地址的变量都会被修改。



好了，通过上面的分析，相信大家对于数值类型和引用类型的理解更加深入了。但是还是有同学可能会问，如果引用类型的数据中存在另一个引用类型的变量，这个时候的内存图又应该是怎么样的呢？

```javascript
var obj1={score:100};
var obj2={name:"zs", age:10, objM:obj1};
console.log(obj2.objM.score);//100
```

![1551777863045](images\1551777863045.png)

原理和上面一样，此时的objM不是一个简单的数值，而是对另外一个内存地址的引用而已。

## 值类型和引用类型函数参数

在对值类型和引用类型的基本认识之后，接下来，我们继续分析在函数对他们的使用情况。

```
function fun(x,y) {// x，y是形参
    return x + y;
}
var result = fun(1,2);//函数调用1,2是实参
console.log(result);
```

#### 值类型

```javascript
x
```

在fun函数中，修改形参num的值为10，此时在函数内部打印num得到的结果应该为10，然后再在函数外部打印num，此时的num为函数外部的全局变量，值为初始的20。

全局变量num的值没有被修改，原因是num为值类型，传递给函数的只是他的一个副本，所以在函数内部修改的时候不会修改到原始的name。

#### 引用类型

```javascript
var obj = {name:"Neld",age:10};
function fun(objM) {
	console.log(objM.name);//Neld
	objM.name = "Song";
	console.log(objM.name);//Song
}
fun(obj);
console.log(obj.name);//Song
```

这里的分析思路和上面的基本一致，由于obj是一个引用类型的对象，所以在函数中的objM和obj都是指向同一个内存地址，所以，一个改变，另一个也会跟着改变。

## JavaScript对象的动态特性

JS对象中的成员（属性，方法）可以在使用的过程中进行操作的，下面我们来对这些操作进行讨论分析。

#### 获取成员及成员的值

语法1：对象.成员名	推荐使用

语法2：对象["成员名"]	名称中包含特殊符号的时候使用

```javascript
var obj = {"name":"Neld","age":10};
console.log(obj.name);//Neld
console.log(obj["age"]);//10
```

如果需要为属性赋值，使用=运算符即可。

#### 添加成员及成员的值

```javascript
var obj = {"name":"Neld","age":10};
obj.className = "H5";
obj["score"] = 99;
obj.eat = function(){
    console.log("老麻抄手好好吃~~~")
}
console.log(obj.score);//99
obj.eat();//老麻抄手好好吃~~~
```

如果在.或者[]中指定的属性名在当前对象中不存在，此时则是为对象添加属性或者函数。

#### 修改成员及成员的值

为当前存在的成员重新赋值，可以将之前的数据给覆盖掉。由于代码很简单，这里就不再贴了。

#### 删除成员及成员的值

语法：delete 对象的成员名

使用delete关键字可以删除对象中的成员。

```javascript
var obj = {name:"zs",age:10};
console.log(obj);//{name:"zs",age:10}
delete obj.name;
console.log(obj);//{age:10}
```



## in关键字的基本使用

在JS中in关键字存在两种用法：

1. 判断一个成员（属性或函数）是否在对象中存在，如果存在返回true，反之返回false

   语法：“成员名” in 对象

   ```javascript
   var obj = {
           name:"zs",
           age:10
   };
       console.log("name" in obj);//true
       var a = "name";
       console.log(a in obj);//true
   ```

2. 在for...in循环中，可以遍历对象或者数组

   ```javascript
   for(var key in obj){//遍历对象
           console.log(key,obj[key]);//key属性，obj[key]值
   }
   //如果只遍历属性，不遍历方法呢？
   for(var key in obj){
        if(typeof obj[key] !="function"){
               console.log(key, obj[key]);
        }
       }
//遍历数组
   var arr = [1,2,3,4,5,6];
for(var key in arr){
   	console.log(key, arr[key]);
}
   //indexOf:数组中存在该元素,就返回该元素的索引;不存在返回-1
console.log(arr.indexOf(3));//2 (索引位置是2对应的值是3)
   ```
   
   思考：如何判断一个数组中存在指定的元素？
   
   ```javascript
   //判断数组中是否存在B字符串这个元素
   var arr = ["A", "B", "C"];
   //方式一
   for(key in arr){
       if (arr[key] == "B"){
           console.log("存在");
       }
   }
   //方式二
   if(arr.indexOf("B") != -1){
       console.log("存在");
   }
   //方式三
if(1 in arr){
       console.log("存在");
}
   ```

   以上三种方式都能完成上面的需求，这里对方式三做一个简单的分析。
   
   这里的1表示的是数组中的索引，为什么可以这么使用呢？
   
   前面我们介绍说，in可以判断对象中是否存在指定的成员，这里我们判断的是一个数组，其实数组在JS中一样是一个对象，那么属性在哪呢？下面是控制台中打印arr的结果：
   
   *![1551786908809](images\1551786908809.png)*

此时的索引就是我们需要使用到的属性，所以使用in判断数组中是否存在某一个元素，没毛病！

## delete关键字基本使用

作用：删除对象的成员，删除成功返回true，反之返回false

语法：delete 对象.成员 或 对象[成员]

```javascript
var obj = {
        name : "zs",
        age : 20
    };
    console.log(obj.name);// zs
    console.log(delete obj.name); // true
    console.log(obj.name);// undefined
    //2、删除未使用var声明的变量,未使用var定义的变量是全局变量，自动成为window的属性
    test = "这是一个未使用var定义的变量";
    console.log(test);
    console.log(delete test);
    //console.log(test);//报错

    //3、是否能够删除使用var定义的变量？ 不能
    var str = "demo";
    console.log(delete str);//false
    console.log(str);//demo

    //4、可以删除直接定义在window上的属性
    window.demo2 = "demo001";
    console.log(delete window.demo2);//true
    console.log(window.demo2);//undefined
```

## break和continue说明

```javascript
var num = 5;
for (var i = 0; i < num; i++) {
    console.log(i);
}
console.log("end");
```

输出结果：

0  1  2  3  4  end

break为跳出整个循环，执行循环后的代码。

需求：当i=3的时候，结束循环

```javascript
var num = 5;
for (var i = 0; i < num; i++) {
    console.log(i);
    if(i == 3){
        break;//跳出循环
    }
}
console.log("end");
```

输出结果：

0  1  2  3  end

continue为跳出当前这一次循环，继续执行下一次循环。

需求：当i为3的时候不执行输出

```javascript
var num = 5;
for (var i = 0; i < num; i++) {

    if(i == 3){
        continue;
    }
    console.log(i);
}
console.log("end");
```

输出结果：

0  1  2  4  end

## 浏览器调试工具使用

```
var sum = 0;
for(var i = 0; i <= 5; i++){
   sum += i;
}
console.log(sum);

可以通过调试来看看代码是怎么运行的
var a = 10;
function fun() {
    console.log(a);
    var a = 100;
    console.log(a);
}
fun();
//console.log(c);
console.log(a);
```

## 断点调试

![20190607161338](images\20190607161338.png)

第一个图标是：resume script excution。会将断点恢复执行，过掉当前断点（执行过程重启 resume）。

第二个图标是：step over next function ，单步执行，即如果遇到一个函数，它会直接执行完这个函数，而是直接执行跳过进入下一步，不显示细节。

第三个图标是：step into next function ，即如果遇到一个函数，它不会一下运行完这个函数，而是进入函数内部，一步一步地执行，这样，我们可以更清楚地观察执行过程。

第四个图标是：step out of current function,即如果利用 step into已经进入了函数内部，我们可以通过此功能来一下执行完函数内部剩下的代码。