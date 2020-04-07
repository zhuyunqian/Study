[TOC]

## 深入理解函数对象（函数的创建和名称）

创建一个函数也是存在多种方式，这里我们来总结一下：

```js
//方式一：
function f1() {
}
//方式二：
var f2 = function () {
}
//方式三：
var f3 = function f4() {
}
//方式四：
var f5 = new Function();
```

方式一：最普通的语法结构创建函数

方式二：创建一个匿名函数，并将该函数赋值给一个变量

方式三：创建一个命名函数，需要注意的是，此时只能使用f3调用函数，f4不行，f4这个名称只能在函数内部使用

方式四：使用指定的模板创建函数

通过前面对Function对象的学习我们了解到，每个函数都有name属性可以获取到函数的名称

```js
console.log(f1.name);//f1
console.log(f2.name);//f2
console.log(f3.name);//f4
console.log(f5.name);//anonymous
```

anonymous说明f5这是一个匿名函数，而f2这个函数本应该也是一个匿名函数，这是不同浏览器版本的差异问题，这个大家了解即可。

## 函数的典型应用（数组去重）

数组去重这是我们在开发中经常遇到的需求，那么如何实现这个功能呢？

思路很简单，我们可以创建一个空数组，然后从需要去重的数组中每次取出一个元素，然后和新数组中的每个元素比较，如果新数组中不存在该元素，则添加到新数组中，反之不做任何操作。

```js
var arr1 = [1,2,2,4,4,6];
function distinctArray(arr) {
    var arr2 = [];
    for (var i = 0; i < arr1.length; i++) {
        if(arr2.indexOf(arr[i]) == -1){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
console.log(distinctArray(arr1));//[1,2,4,6]
```

![1552362337492](images\1552362337492.png)

数组中的indexOf方法是获取对应元素在数组中的索引位置，如果该元素不在该数组中，则返回-1。

## 函数的典型应用（求最大值）

数组中有一组元素，得到该数组中的最大值的思路：

1. 定义一个变量temp，该变量用来暂存比他大的值
2. 遍历数组中的每个元素，如果这个元素值比temp大，就把他赋值给temp
3. 遍历完整个数组后，temp的值即为当前数组中的最大值

```js
var arr = [1,5,65,33,66,43,23];
function max(arr) {
    //假设max变量中存储的是最大值
    var temp = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if(temp < arr[i]){
            temp = arr[i];
        }
    }
    return temp;
}
console.log(max(arr));//66
```

## 函数使用的典型结构（IIFE立即执行函数）

Immediately-Invoked Function Expression (*IIFE*)：立即执行函数或者即时函数

这种函数就是上一节我们看到的效果，就是需要在函数定义之后立即执行一次，并且只能执行这一次，以后不能再调用，通常使用在初始化的阶段。

立即执行函数可以使用下面的语法来实现：

```js
(function () {
    console.log("方式一");
})();
(function () {
    console.log("方式二");
}());
!function () {
    console.log("方式三");
}();
+function () {
    console.log("方式四");
}();
-function () {
    console.log("方式五");
}();
~function () {
    console.log("方式六");
}();
```

**题外话：函数，括号，语法错误**

有趣的是，如果你为一个函数指定了名称并且在立刻在其后边放置了括号，解析器也会抛出错误，但原因不同。虽然在表达式之后放置括号说明这是一个将被执行的函数，但在声明之后放置括号会与前面的语句分离，成为一个分组操作符（可以作为优先提升的方法）。

```js
// 现在这个函数声明的语法是正确的，但还是有报错
// 表达式后面的括号是非法的， 因为分组运算符必须包含表达式
function foo(){ /* code */ }(); // SyntaxError: Unexpected token )
// 如果你在括号内放置了表达式， 没有错误抛出...
function foo(){ /* code */ }( 1 );
// 但是函数也不会执行，因为它与一个函数声明后面放一个完全无关的表达式是一样的
function foo(){ /* code */ }
( 1 );
```

## 函数使用的典型结构（惰性函数定义）

惰性函数：在函数中会进行一些分支判断或者初始化更新操作，然后将函数修改函数的指向，那么再次调用该函数的时候，执行的是修改之后指向的函数。

```js
function foo() {//0x11
    console.log("初始化操作");
    foo = function () {//0x22
        console.log("真正的业务逻辑处理");
    }
}
foo();//初始化操作
foo();//真正的业务逻辑处理
foo();//真正的业务逻辑处理
```

在foo函数中，我们可以先执行初始化相关的操作，然后将另外一个函数赋值给foo，所以再次调用foo的时候，执行的是对真实业务逻辑的处理操作。

惰性函数在JS中使用比较多，但是需要注意下面几点：

1. 函数对象中的属性在更新之后会丢失

   ```js
   foo.des = "描述信息";
   console.log(foo.des);//描述信息
   foo();//初始化操作
   foo();//真正的业务逻辑处理
   foo();//真正的业务逻辑处理
   console.log(foo.des);//undefined
   ```

   因为函数更新之后指向的是另外一个函数对象，在该函数对象中没有des这个属性。

2. 如果将惰性函数赋值给一个变量，通过这个变量调用该函数，此时无法执行到更新之后的函数

   ```js
   function foo() {
       console.log("初始化操作");
       foo = function () {
           console.log("真正的业务逻辑处理");
       }
   }
   var f = foo;
   f();//初始化操作
   f();//初始化操作
   f();//初始化操作
   ```

   因为调用f函数后，只是修改了foo指向另一个函数，而f仍然指向之前的函数，没有改变。

   ![1552379287487](images\1552379287487.png)

## 面向对象编程的综合案例（基本操作）

在学习完面向对象相关的知识点之后，为了检验我们学习的效果，或者是达到能熟练使用的目的，我们一起来做一个综合练习。

首先为大家提供一个书单，然后完成对这个书单中的书的增删改查操作

分析，书单就是一个数组，该数组中存在多本书，一本书就是一个对象，该对象封装了书相关的属性。

我们需要做的就是从数组中找到指定的书，然后完成相应的操作。

```js
var books = [
    {name:"活着", price:27.7, press:"作家出版社"},
    {name:"流浪地球", price:37.6, press:"中国华侨出版社"},
    {name:"罗生门", price:36.3, press:"开明出版社"},
    {name:"三体", price:51.5, press:"重庆出版社"}
]
```

**需求1：查询三体这本书的相关信息**

```js
for (var i = 0; i < books.length; i++) {
    if(books[i].name == "三体"){
        console.log(books[i]);
        break;
    }
}
```

**需求2：增加一本书,书名菊与刀，价格24，开明出版社**

```
books.push({name:"菊与刀",price:24,press:"开明出版社"});
console.log(books);
```

**需求3：将罗生门这本书的价格修改为40**

```js
for (var i = 0; i < books.length; i++) {
    if(books[i].name == "罗生门"){
        books[i].price = 40;
        console.log(books[i]);
        break;
    }
}

```



**需求4：将三体这本书从书单中删除**

```js
for (var i = 0; i < books.length; i++) {
    if(books[i].name == "三体"){
        books.splice(i, 1);
        break;
    }
}
console.log(books);
```

上面四个需求完成之后，我们思考一下这样的代码是否存在问题？答案是肯定的，问题在于代码不能复用，如果我们有很多类似增删改查的需求，那么需要重复编写类似上面的代码，所以，需要优化。

## 面向对象编程的综合案例（函数封装）

通常说，一段代码需要被复用的时候，我们都可以使用函数来解决。将需要复用的代码封装到一个函数中，然后通过调用该函数来执行封装好的代码。

```js
//根据书名查询书本
function getBookByName(name) {
    for (var i = 0; i < books.length; i++) {
        if(books[i].name == name){
            return books[i];
        }
    }
    return "没有找到该书籍";
}
//向书单中添加书本
function addBook(newBook){
    books.push(book);
}
//根据书名更新书本的价格
function updateBookByName(name,newBook) {
   for(var i = 0; i < books.length; i++){
     if(books[i].name == name){
        books[i] = newBook;
        break;
     }
  }
}
//根据书名删除书本
function deleteBookByName(name) {
    for (var i = 0; i < books.length; i++) {
        if(books[i].name == name){
            books.splice(i, 1);
            break;
        }
    }
}
```

上面我们封装了四个方法，在适当的时候调用适当的方法即可完成操作。

## 面向对象编程的综合案例（基本-复用）

上面使用函数将书单的增删改查进行了封装，可以达到代码复用的效果，但是通过细心观察发现，其中存在较多的重复代码---根据书名查询书本。

根据书名查询书本的代码已经封装到了getBookByName（name）方法中，所以在其他地方用到的时候不需要再重新编写，直接调用即可。所以代码还需要优化。

```js
//根据书名更新书本的价格
function updateBookByName(name,newBook) {
        var book = getBookByName(name);//先调用我们前面查询的方法
        var i = books.indexOf(book);
        books.splice(i,1,newBook);//修改,直接复制删除里面的代码，加个newBook就可以了
}
updateBookByName("一只猪",{name:"两只老虎", price:10, press:"广州18期出版社"});
//将三体这本书从书单中删除
function deleteBookByName(name) {
   var book = getBookByName(name);//先调用我们前面查询的方法
   var i = books.indexOf(book);
    books.splice(i,1);//删除
}
```

在更新和删除的方法中，需要根据书名获取书本，所以是直接调用getBookByName方法完成的。

在从书单中删除书本的时候，需要得到书本在书单中的索引，这里使用的是数组中的indexOf方法获取。

## 面向对象编程的综合案例（面向对象）

使用函数把增删改查的操作封装起来，可以达到代码复用的效果，没错。

但是， 如果我们需要为每个用户分配不同的书单，上面这种做法就无法实现了。要为不同的用户分配不同的书单或者其他不同的属性，这就需要用到面向对象的思想了。

```js
function BookManager(books) {//1、创建构造函数
        this.books = books;
    }
    //2、每个都要有----在原型对象上添加对图书集合的相关操作的方法
    BookManager.prototype = {//有增删改查四个方法，所以放到一个对象里面
        constructor:BookManager,
        getBookByName:function (name) {
        for(var i = 0; i < this.books.length; i ++){
            if(this.books[i].name ==name){
                return this.books[i];
            }
        }
        return "暂无此书";
    },
        addBook:function (newBook) {
        this.books.push(newBook);
     },
        updateBookByName:function (name,newBook) {
        var book = this.getBookByName(name);//这是上面的根据书名查找的方法
            var i = this.books.indexOf(book);
            this.books.splice(i,1,newBook);
    },
        deleteByName:function (name) {
        var book = this.getBookByName(name);//先找到这本书
        var i = this.books.indexOf(book);
        this.books.splice(i,1);
    }
    };
    var manager = new BookManager(books);
```

注意：在函数中访问BookManager对象中的books属性，需要使用this关键字，或者使用BookManager.prototype.books，需要对之前的代码做修改。

使用BookManager我们可以为不同的用户创建不同的书单，然后增删改查的方法可以对对应的书单进行操作。

## with特性简单介绍

作用：with语句可以在不造成性能损失的情况下，减少变量的长度，同时简化我们的代码。

```js
var a = {
    name:"zs",
    b:{
        age:10,
        c:{
            color:"red",
            des:"description"
        }
    }
}
console.log(a.b.c.color);
console.log(a.b.c.des);
```

a对象中的b属性是一个对象，b对象中的c属性也是一个对象，此时要访问c对象中的成员，需要使用比较长的前缀

如果使用with语句，代码是这样的：

```js
with(a.b.c){
    console.log(color);
    console.log(des);
}
```

在with中指定需要访问成员所在的对象，然后在{}中可以直接使用成员名来达到访问对象成员的目的。

注意：

1. 在{}中如果要为对象添加成员，需要加上前缀
2. 在{}中this指向window
3. 严格模式下，with特性被禁用

这里解释一下为什么with有上面的好处还要被禁用呢？

​	因为with语句使得程序在查找变量值时，都是先在指定的对象中查找。所以那些本来不是这个对象的属性的变量，查找起来将会很慢。如果是在对性能要求较高的场合，with下面的statement语句中的变量，只应该包含这个指定对象的属性。

那么，如果不建议使用with，上面的问题有其他方式可以替代吗？当然有的！

```js
<div id="div"></div>
<script>
    var div = document.getElementById("div");
    (function(style) {
        style.backgroundColor="yellow";
        style.border="1px solid red";
        style.height="30px";
    })(div.style);
</script>
```

将比较长的变量作为函数的参数传递到函数中，此时在函数中需要使用到的前缀就可以比较简洁了。

## 严格模式的简单说明

为什么使用严格模式:

- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;

- 消除代码运行的一些不安全之处，保证代码运行的安全；
- 提高编译器效率，增加运行速度；
- 为未来新版本的Javascript做好铺垫。

"严格模式"体现了Javascript更合理、更安全、更严谨的发展方向，包括IE 10在内的主流浏览器，都已经支持它，许多大项目已经开始全面拥抱它。

另一方面，同样的代码，在"严格模式"中，可能会有不一样的运行结果；一些在"正常模式"下可以运行的语句，在"严格模式"下将不能运行。掌握这些内容，有助于更细致深入地理解Javascript，让你变成一个更好的程序员。

## 严格模式的限制

进入严格模式的方法很简单，只需要在脚本或者函数的开头输入**"use strict"**即可，值得一提的是，在无法执行严格模式的旧版浏览器中（IE10之前），该条指令会自动被忽略。

限制1：不允许使用未声明的变量

```js
"use strict";
x = 1;          // Uncaught ReferenceError: x is not defined
```

限制2：严格模式定义在脚本开头，会对整个脚本执行严格模式

```js
"use strict";
function fn () {
  x = 1;            // Uncaught ReferenceError: x is not defined
}
fn();
```

限制3：如果严格模式定义在函数头部，那么只在当前函数中使用严格模式，对函数外部的代码没有影响。

```js
x = 1;//不报错
function fn () {
  "use strict"
  y = 2；            // Uncaught ReferenceError: y is not defined
}
fn();
```

限制4：在严格模式下，不能对对象的只读属性赋值

```js
"use strict";

// 给不可写属性赋值
var obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // 抛出TypeError错误


// 给不可扩展对象的新属性赋值
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // 抛出TypeError错误
```

限制5：在严格模式下，试图删除不可删除的属性时，会抛出异常

```js
"use strict";
delete Object.prototype; // 抛出TypeError错误
```

限制6：在严格模式下，不允许重名属性

```js
"use strict";
var o = { p: 1, p: 2 }; // 语法错误
```

限制7：严格模式要求函数参数名唯一

```js
function sum(a, a, c){ // 语法错误
  "use strict";
  return a + a + c; // 代码运行到这里会出错
}
```

限制8：禁止八进制数字语法

```js
"use strict";
var sum = 015 + // 语法错误
          197 +
          142;
```

限制8：禁止设置原始类型（primitive）值的属性

```js
(function() {
  "use strict";
  false.true = "";              //TypeError
  (14).sailing = "home";        //TypeError
  "with".you = "far away";      //TypeError
})();
```

限制10：禁用`with`

限制11：严格模式下，`eval()`创建变量不能被调用

```js
"use strict";
eval ("var x = 2");
alert (x);                      // Uncaught ReferenceError: x is not defined
```

限制12：严格模式禁止删除声明变量

```js
"use strict";

var x;
delete x; // 语法错误
```

限制13：不能使用`eval` 和 `arguments`作为标识

```js
"use strict";
var arguments = 1;// Uncaught SyntaxError: Unexpected eval or arguments in strict mode
var eval = 2;     // Uncaught SyntaxError: Unexpected eval or arguments in strict mode
```

限制14：严格模式下，函数的 arguments 对象会保存函数被调用时的原始参数。arguments[i] 的值不会随与之相应的参数的值的改变而变化，同名参数的值也不会随与之相应的 arguments[i] 的值的改变而变化。

```js
"use strict";
function f(a,b) {
    a=10;
    console.log(arguments[0]);//1
    arguments[0] = 20;
    console.log(a);//10
}
f(1,2);
```

限制15：不再支持`arguments.callee`

```js
"use strict";
var f = function() { return arguments.callee; };
f();                // TypeError
```

限制16：保留部分关键字，这些字符包括implements, interface, let, package, private, protected, public, static和yield。在严格模式下，你不能再用这些名字作为变量名或形参名。

限制17：禁止this指向全局对象，当this指向全局对象时，自动转为undefined

**总结**

当你想要提升原生JS代码的健壮性和可读性，回避JS一些被人诟病的语法，严格模式是你不二的选择。

## 作用域简单介绍

**变量作用域**

在JavaScript中全局变量的作用域比较简单，它的作用域是全局的，在代码的任何地方都是有定义的。然而函数的参数和局部变量只在函数体内有定义。另外局部变量的优先级要高于同名的全局变量,也就是说当局部变量与全局变量重名时，局部变量会覆盖全局变量（如下面例子）。

```js
var num = 1;            //声明一个全局变量
function fun() {
　  var num = 2;        //声明一个局部变量
    return num;
}
console.log(fun());    //输出：2
```

声明局部变量时一定要使用var,否则，解释器会将该变量当做全局对象window的属性。

**块级作用域（函数作用域）**

在JavaScript中变量的作用域，并非和C、Java等编程语言相似，在变量声明的代码段之外是不可见的，我们通常称为块级作用域，然而在JavaScript中使用的是函数作用域（变量在声明它们的函数体以及这个函数体嵌套的任意函数体都是有定义的

```js
function fun() {
    console.log(num);	//输出：undefined，而非报错，因为变量num在整个函数体内都是有定义的
    var num = 1;        //声明num 在整个函数体func内都有定义
    console.log(num);   //输出：1
}
fun();

//块级作用域:一对大括号就可以看成是一块,在这块区域中定义的变量,只能在这个区域中使用,但是在js中在这个块级作用域中定义的变量,外面也能使用;说明:js没有块级作用域,只有函数除外
{
  var num = 10;
   console.log(num);
}
console.log(num);//10
for(var i=0;i<5;i++){
   var number=20;
}
console.log(number);
function f1() {
   var num=10;
}
f1();
//console.log(num); 这句话会报错，看讲义里面说的函数作用域
```

JavaScript的函数作用域是指在在函数内声明的所有变量在函数体内始终是可见的，也就是说在函数体内变量声明之前就已经可用了。

## 函数和变量声明的提升

在JS中存在一个很重要的特性，函数和变量声明的提升，理解这一点对于理解我们编写的代码非常有帮助，那么声明是声明的提升呢？我们通过下面的代码来分析。

```js
console.log(a);//①
var a = 123;
console.log(a);//②

console.log(f);//③
f();//④
function f() {
    console.log("函数声明提升");
}
```

①处的代码如果按照我们以前的理解，代码从上而下执行，那么在执行这行代码的时候，a还没有被声明，所以直接访问一个没有被声明的变量，程序应该报错。

但是结果却大出所料，这里得到的结果是undefined。

③处的结果也和我们最初的认识是不一样的，结果为f对应的函数对象。

造成这个结果是因为变量和函数的作用域提升的原因，什么意思呢？

JS是解释性语言，JS引擎对代码的处理分为两步：

​	**预解析处理：**在代码执行之前，对代码做全局扫描，对代码中出现的变量或者函数提前声明处理；

​	解析之后我们的代码：

```js
var a;//提前声明，但不初始化
console.log(a);//undefined
a = 123;
console.log(a);//123

//提前声明
function f() {
    console.log("函数声明提升");
}
console.log(f);//函数对象
f();//函数声明提升
```

​	**调用执行：**自上而下的执行代码

## 变量提升和作用域的关系

下面给出两个练习帮助大家理解变量提升和作用域的关系。

**题1：**

```js
f();
function f() {
    console.log("1");
}
f();
function f() {
    console.log("2");
}
f();
function f() {
    console.log("3");
}
```

根据前面对函数声明提升的认识，相信大家能够得出这里三个打印的正确结果，对的，三次都是 “3”。

预解析之后的代码：

```js
function f() {
        console.log("3");
}
f();
f();
f();
```

为什么解析之后只剩下一个函数，而且是最后那一个？

因为三个函数的名称一样，后面的函数会将前面的覆盖，所以最后只剩下最后一个函数了。

**题2：**

```js
console.log(a);
var a = 123;
console.log(a);
function f1() {
    console.log(a);
    var a = 456;
    console.log(a);
}
f1();
console.log(a);
```

不废话，直接先对代码做预解析，然后再做分析。

```js
var a;//变量声明提升
function f1() {//函数声明提升
	var a;//变量声明提升
    console.log(a);
    a = 456;
    console.log(a);
}
console.log(a);
a = 123;
console.log(a);
f1();
console.log(a);
```

解析得到上面的代码结果就非常明显了，分别是：undefined	 123  undefined  456  123

由于在函数内部有变量a，所以在函数中访问到的是这个局部变量，如果在函数作用域中没有变量a，那么就会跳出函数作用域来到全局作用域来查找。

## 声明提升的规则

声明提升是将变量或者函数的声明提升到当前作用域的最顶端。在具体使用的过程中存在以下需要注意的细节。

1. 变量和变量同名，解析之后只存在一个当前变量的声明

```js
console.log(a);
var a = 123;
console.log(a);
var a = 456;
console.log(a);
```

解析之后：

```js
var a;
console.log(a);//undefined
a = 123;
console.log(a);//123
a = 456;
console.log(a);//456
```

2. 函数和函数同名，后面的声明将前面的覆盖

```js
f();
function f() {
    console.log("1");
}
f();
function f() {
    console.log("2");
}
f();
function f() {
    console.log("3");
}
```

解析之后：

```js
function f() {
    console.log("3");
}
f();//3
f();//3
f();//3
```

3. 函数和变量同名，函数声明提升，忽略变量的声明

```js
console.log(a);
var a = 123;
console.log(a);
function a() {}
console.log(a);
function a() {}
console.log(a);
```

解析之后：

```js
function a() {}
console.log(a);//函数a
var a = 123;//将前面的函数覆盖，a的值变为123
console.log(a);//123
console.log(a);//123
console.log(a);//123
```

4. 如果是命名函数，则只将前面的变量声明提升，函数不动。

```js
console.log(fn1);
function fn1() {
}
console.log(fn1);
console.log(fn2);
var fn2 = function () {
}
console.log(fn2);
```

解析之后：

```js
function fn1() {
}
var fn2;
console.log(fn1);//fn1函数
console.log(fn2);//undefined
fn2 = function () {
}
console.log(fn2);//fn2函数

```

练习题1：

```
console.log(a,b); //undefined undefined
var a=12;
var b=13;

sum(); //1
function sum(){
    console.log(1);
}
```

练习题2：

```
console.log(a); //undefined
var a=12;
function fn(){
    console.log(a); //undefined
    var a=13;

}
fn();
console.log(a); //12
```

练习题3:

```
console.log(a); //undefined
var a=12;
function fn(){
    console.log(a);//12
    a=13;
}
fn();
console.log(a)//13
```

练习题4:

```
console.log(a);//这个就直接报错了，因为没有变量提升 a is not defined
a=12;
function fn(){
    console.log(a);
    var a = 13;
}
fn();
console.log(a)
```

练习题5：

```
console.log(a);//undefined
var a=12;
function fn(a){
    console.log(a);// 12
    a = 13;

}
fn(a);
console.log(a);//12 
```

练习题6：

```
var foo=1;
   function bar(){
       //不管条件是否成立，都要进行变量提升
       //这时的foo属于私有变量 给的默认值是undefined,undefined取反就为真
       if(!foo){
           var foo=10;
       }
       console.log(foo);
   }
   bar();//10
```

练习题7：

```
var n=13;
function fn(n) {
    alert(n); // 13
    var n=14;//有形参赋值了，就不在走变量提升了
    alert(n); // 14
}
fn(n);
console.log(n);//13
```

练习题8：

```
console.log(a);// undefined
a=12;
function fn(a) {
    console.log(a); //undefined
    a=13;
}
fn();//注意这里没有传值
var a;
console.log(a); //12
```

练习题9：

```
function test() {
    if("a" in window){
        var a=10;
    }
    console.log(a);// undefined
}
test();
```

练习题10：

```
console.log(a, b, c);// undefined undefined undefined
var a=10,b=20,c=30;
function f(a) {
    console.log(a, b, c);// 10 undefined 30
    var b=a=c=100;
    console.log(a, b, c);//100 100 100
}
f(10,20);
console.log(a, b, c);// 10,20,100
```
