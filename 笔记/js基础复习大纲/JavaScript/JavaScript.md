## 1. 简述javascript原型、原型链？有什么特点

每个函数都有一个 prototype 属性,函数的 prototype属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型

那什么是原型呢？你可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。

这是每一个JavaScript对象(除了 null )都具有的一个属性，叫 `__proto__`，这个属性会指向该对象的原型。

原型链解决的主要是继承问题。

每个对象拥有一个原型对象，通过 proto 指针指向其原型对象，并从中继承方法和属性，同时原型对象也可能拥有原型，这样一层一层，最终指向 null(Object.proptotype.proto 指向的是null)。这种关系被称为原型链 (prototype chain)，通过原型链一个对象可以拥有定义在其他对象中的属性和方法。

## 2. 解释javascript中的作用域和变量声明提升

作用域是指程序源代码中定义变量的区域。作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。

变量声明提升：

```js
foo;  // undefined
var foo = function () {
    console.log('foo1');
}
 
foo();  // foo1，foo赋值
```

可以想象成：所有的声明（变量和函数）都会被“移动”到各自作用域的最顶端。

## 3. 如何实现数组的随机排序

```js
var arr = [1,2,3,4,5,6,7,8,9,10];
var newArr = [];
let length=arr.length
for(let i=0;i<length;i++){
  let randomIndex = Math.floor(Math.random()*arr.length);
  newArr[i]=arr[randomIndex]
  arr.splice(randomIndex,1)
}
console.log(newArr)
```

## 4. 谈谈this对象的理解，call()和apply()的区别

call和apply的区别在于传入参数的不同； 第一个参数都是，指定函数体内this的指向；

第二个参数开始不同，apply是传入带下标的集合，数组或者类数组，apply把它传给函数作为参数，call从第二个开始传入的参数是不固定的，都会传给函数作为参数。

call比apply的性能要好，平常可以多用call。call传入参数的格式正是内部所需要的格式。

## 5. 什么是闭包？为什么要用它？

闭包：函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包。

作用有:

1、形成块级作用域

2、变量私有化

3、不污染全局变量

4、函数自执行

## 6. new操作符到底干了什么？

- 创建一个新对象

- 这个对象会链接到它的原型:obj.**proto** = Con.prototype
- 绑定this（apply），属性和方法被加入到 this 引用的对象中。并执行了构造函数中的方法.
- 函数没有返回其他对象，那么this指向这个新对象，否则this指向构造函数中返回的对象。

## 7. 简述几种ES5继承的方法

实现继承，主要是依靠原型链来实现的.

- 构造函数
  - 保证了原型链中引用类型值的独立,不再被所有实例共享;
  - 子类型创建时也能够向父类型传递参数.
- 组合继承 组合继承, 有时候也叫做伪经典继承,指的是将原型链和借用构造函数的技术组合到一块,从而发挥两者之长的一种继承模式.
  - 组合继承其实调用了两次父类构造函数,
- 寄生式继承
- 寄生组合继承

## 8. 如何实现深拷贝

常用：使用JSON.parse(JSON.stringify(obj))

原理是把一个对象序列化成为一个JSON字符串，将对象的内容转换成字符串的形式再保存在磁盘上，再用JSON.parse()反序列化将JSON字符串变成一个新的对象

缺点是: 会忽略undefined、symbol、funciton

实现：递归+判断类型

一个简单的代码

```js
// 数字 字符串 function是不需要拷贝的
function deepClone(value) {  
    if (value == null) return value;  
    if (typeof value !== 'object') return value;
    if (value instanceof RegExp) return new RegExp(value);  
    if (value instanceof Date) return new Date(value);  
    // 我要判断 value 是对象还是数组 如果是对象 就产生对象 是数组就产生数组  
    let obj = new value.constructor;  
    for(let key in value){    
        obj[key] = deepClone(value[key]); // 看一看当前的值是不是一个对象  
    }  
    return obj;
}
```

## 9、ES6 的 class 和构造函数的区别

class 的写法只是语法糖，和之前 prototype 差不多，但还是有细微差别的，下面看看：

##### 1. 严格模式

类和模块的内部，默认就是严格模式，所以不需要使用`use strict`指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。考虑到未来所有的代码，其实都是运行在模块之中，所以 ES6 实际上把整个语言升级到了严格模式。

##### 2. 不存在提升

类不存在变量提升（hoist），这一点与 ES5 完全不同。

```js
new Foo(); // ReferenceError
class Foo {}
```

##### 3. 方法默认是不可枚举的

ES6 中的 class，它的方法（包括静态方法和实例方法）默认是不可枚举的，而构造函数默认是可枚举的。细想一下，这其实是个优化，让你在遍历时候，不需要再判断 hasOwnProperty 了

##### 4. class 的所有方法（包括静态方法和实例方法）都没有原型对象 prototype，所以也没有[[construct]]，不能使用 new 来调用。

##### 5. class 必须使用 new 调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用 new 也可以执行。

##### 6. ES5 和 ES6 子类 this 生成顺序不同

ES5 的继承先生成了子类实例，再调用父类的构造函数修饰子类实例。ES6 的继承先 生成父类实例，再调用子类的构造函数修饰父类实例。这个差别使得 ES6 可以继承内置对象。

##### 7. ES6可以继承静态方法，而构造函数不能

## 10、javascript 的垃圾回收机制讲一下

定义：指一块被分配的内存既不能使用，又不能回收，直到浏览器进程结束。

JavaScript 在创建对象(对象、字符串等)时会为它们分配内存，不再使用对时会“自动”释放内存，这个过程称为垃圾收集。

内存生命周期中的每一个阶段:

分配内存 —  内存是由操作系统分配的，它允许您的程序使用它。在低级语言(例如 C 语言)中，这是一个开发人员需要自己处理的显式执行的操作。然而，在高级语言中，系统会自动为你分配内在。
使用内存 — 这是程序实际使用之前分配的内存，在代码中使用分配的变量时，就会发生读和写操作。
释放内存 — 释放所有不再使用的内存,使之成为自由内存,并可以被重利用。与分配内存操作一样,这一操作在低级语言中也是需要显式地执行。

##### 四种常见的内存泄漏：全局变量，未清除的定时器，闭包，以及 dom 的引用

1. 全局变量 不用 var 声明的变量，相当于挂载到 window 对象上。如：b=1; 解决：使用严格模式
2. 被遗忘的定时器和回调函数
3. 闭包
4. 没有清理的 DOM 元素引用

## 11、async 和 await

主要考察宏任务和微任务，搭配promise，询问一些输出的顺序

原理：**async 和 await 用了同步的方式去做异步，async 定义的函数的返回值都是 promise，await 后面的函数会先执行一遍，然后就会跳出整个 async 函数来执行后面js栈的代码**

## 12、数组去重的方法

##### 1.ES6 的 Set

```js
复制let arr = [1,1,2,3,4,5,5,6]
let arr2 = [...new Set(arr)]
```

##### 2.reduce()

```js
复制let arr = [1,1,2,3,4,5,5,6]
let arr2 = arr.reduce(function(ar,cur) {
  if(!ar.includes(cur)) {
    ar.push(cur)
  }

  return ar
},[])
```

##### 3.filter()

```js
复制// 这种方法会有一个问题：[1,'1']会被当做相同元素，最终输入[1]
let arr = [1,1,2,3,4,5,5,6]
let arr2 = arr.filter(function(item,index) {
  // indexOf() 方法可返回某个指定的 字符串值 在字符串中首次出现的位置
  return arr.indexOf(item) === index
})
```

## 13、说说你对Promise的理解

所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

Promise对象有以下两个特点:

- 对象的状态不受外界影响，Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称Fulfilled）和Rejected（已失败）
- 一旦状态改变，就不会再变，任何时候都可以得到这个结果。

## 14、请介绍一下XMLhttprequest对象

Ajax的核心是JavaScript对象XmlHttpRequest。该对象在Internet Explorer 5中首次引入，它是一种支持异步请求的技术。简而言之，XmlHttpRequest使您可以使用JavaScript向服务器提出请求并处理响应，而不阻塞用户。通过XMLHttpRequest对象，Web开发人员可以在页面加载以后进行页面的局部更新。

## 15、HTTP状态码及其含义

`1XX`：信息状态码

`2XX`：成功状态码

`3XX`：重定向

`4XX`：客户端错误

`5XX:` 服务器错误

## 16、请描述一下 `cookies`，`sessionStorage` 和 `localStorage` 的区别？

`cookie`是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）

cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递

`sessionStorage`和`localStorage`不会自动把数据发给服务器，仅在本地保存

存储大小：

- `cookie`数据大小不能超过4k
- `sessionStorage`和`localStorage`虽然也有存储大小的限制，但比`cookie`大得多，可以达到5M或更大

有期时间：

- `localStorage` 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据
- `sessionStorage`  数据在当前浏览器窗口关闭后自动删除
- `cookie`  设置的`cookie`过期时间之前一直有效，即使窗口或浏览器关闭

## 17、XML和JSON的区别？

数据体积方面

- `JSON`相对`于XML`来讲，数据的体积小，传递的速度更快些。

数据交互方面

- `JSON`与`JavaScript`的交互更加方便，更容易解析处理，更好的数据交互

数据描述方面

- `JSON`对数据的描述性比`XML`较差

传输速度方面

- `JSON`的速度要远远快于`XML`

## 18、简述同源策略与跨域

同源策略是一种约定，它是浏览器最核心的也最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能会受到影响。

当协议，主机，和端口号有一个不同时，就是跨域。

## 19、跨域解决方案

1、（后端）服务器配置CORS(跨域资源共享)

2） （后端）node.js或nginx,反向代理，把跨域改造成同域

3）（前端）将JSON升级成JSONP,在JSON的基础上，利用<script>标签可以跨域的特性，加上头设置

## 20、从浏览器地址栏输入URL到显示页面的步骤

```
浏览器根据请求的URL交给DNS域名解析，找到真实IP，向服务器发起请求；
服务器交给后台处理完成后返回数据，浏览器接收文件（html，js，css，图像等）;
浏览器对加载到的资源（html，js，css等）进行语法解析，建立相应的内部数据结构（如HTML的DOM）;
载入解析到的资源文件，渲染页面，完成。
```

## 21、JavaScript 中的作用域（scope）是指什么？ 

在 JavaScript 中，每个函数都有自己的作用域。作用域基本上是变量以及如何通过名称访问这些变量的规则的集合。只有函数中的代码才能访问函数作用域内的变量。

同一个作用域中的变量名必须是唯一的。一个作用域可以嵌套在另一个作用域内。如果一个作用域嵌套在另一个作用域内，最内部作用域内的代码可以访问另一个作用域的变量。



## 22、 解释 JavaScript 中的 null 和 undefined

JavaScript 中有两种底层类型：null 和 undefined。它们代表了不同的含义：

- 尚未初始化的东西：`undefined`
- 目前不可用的东西：`null`
- typeof 也不一样



## 23、解释事件冒泡以及如何阻止它？

事件冒泡是指嵌套最深的元素触发一个事件，然后这个事件顺着嵌套顺序在父元素上触发。

防止事件冒泡的一种方法是使用 event.cancelBubble 或 event.stopPropagation()（低于 IE 9）。



## 24、什么是防抖和节流？有什么区别？如何实现？

##### 防抖

触发高频事件后 n 秒内函数只会执行一次，如果 n 秒内高频事件再次被触发，则重新计算时间；

应用场景：

1. 搜索框输入查询，如果用户一直在输入中，没有必要不停地调用去请求服务端接口，等用户停止输入的时候，再调用，设置一个合适的时间间隔，有效减轻服务端压力。
2. 表单验证
3. 按钮提交事件。
4. 浏览器窗口缩放，resize事件(如窗口停止改变大小之后重新计算布局)等。

思路：每次触发事件时都取消之前的延时调用方法：

代码：

```js
function debounce(fn) {
  let timeout = null; // 创建一个标记用来存放定时器的返回值
  return function () {
    clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
    timeout = setTimeout(() => { 
      // 然后又创建一个新的 setTimeout
      // 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
      fn.apply(this, arguments);
    }, 500);
  };
}
function sayHi() {
  console.log('防抖成功');
}

var inp = document.getElementById('inp');
inp.addEventListener('input', debounce(sayHi)); // 防抖
复制代码
```

##### 节流

高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率。

使用场景：

1. 按钮点击事件
2. 拖拽事件
3. onScoll
4. 计算鼠标移动的距离(mousemove)



思路：每次触发事件时都判断当前是否有等待执行的延时函数。

代码：

```js
function throttle(fn) {
  let canRun = true; // 通过闭包保存一个标记
  return function () {
    if (!canRun) return; // 在函数开头判断标记是否为 true，不为 true 则 return
    canRun = false; // 立即设置为 false
    setTimeout(() => { // 将外部传入的函数的执行放在 setTimeout 中
      fn.apply(this, arguments);
      // 最后在 setTimeout 执行完毕后再把标记设置为 true(关键) 表示可以执行下一次循环了
      // 当定时器没有执行的时候标记永远是 false，在开头被 return 掉
      canRun = true;
    }, 500);
  };
}
function sayHi(e) {
  console.log(e.target.innerWidth, e.target.innerHeight);
}
window.addEventListener('resize', throttle(sayHi));
```



## 25、浏览器是如何渲染UI的？

1. 浏览器获取HTML文件，然后对文件进行解析，形成DOM Tree
2. 与此同时，进行CSS解析，生成Style Rules
3. 接着将DOM Tree与Style Rules合成为 Render Tree
4. 接着进入布局（Layout）阶段，也就是为每个节点分配一个应出现在屏幕上的确切坐标
5. 随后调用GPU进行绘制（Paint），遍历Render Tree的节点，并将元素呈现出来

## 26、请实现一个 flattenDeep 函数，把嵌套的数组扁平化

例如:

```js
uniq([1, 2, 3, 5, 3, 2]);//[1, 2, 3, 5]
```

方案1：利用ES6新增数据类型 `Set`

```js
function uniq(array) {
    return [...new Set(array)]
}
```

方案2: 利用 `indexOf`

```js
function uniq(array) {
    var result = [];
    for (var i = 0; i < array.lenth; i++) {
        if (result.indexOf(array[i]=== -1)){
            result.push(array[i])
        }
    }
    return result;
}
```

## 27、JSONP 的原理是什么？

尽管浏览器有同源策略，但是 `<script>` 标签的 `src` 属性不会被同源策略所约束，可以获取任意服务器上的脚本并执行。`jsonp` 通过插入 `script` 标签的方式来实现跨域，参数只能通过 `url` 传入，仅能支持 `get` 请求。

- Step1: 创建 callback 方法
- Step2: 插入 script 标签
- Step3: 后台接受到请求，解析前端传过去的 callback 方法，返回该方法的调用，并且数据作为参数传入该方法
- Step4: 前端执行服务端返回的方法调用



## 28、异步加载JS的方式有哪些？

- defer，只支持`IE`
- `async`：
- 创建`script`，插入到`DOM`中，加载完毕后`callBack`

- `defer`并行加载`js`文件，会按照页面上`script`标签的顺序执行
- `async`并行加载`js`文件，下载完成立即执行，不会按照页面上`script`标签的顺序执行

## 29、常见web安全及防护原理

**XSS原理及防范**

- `Xss(cross-site scripting)`攻击指的是攻击者往`Web`页面里插入恶意`html`标签或者`javascript`代码。比如：攻击者在论坛中放一个看似安全的链接，骗取用户点击后，窃取`cookie`中的用户私密信息；或者攻击者在论坛中加一个恶意表单，当用户提交表单的时候，却把信息传送到攻击者的服务器中，而不是用户原本以为的信任站点

**XSS防范方法**

- 首先代码里对用户输入的地方和变量都需要仔细检查长度和对`”<”,”>”,”;”,”’”`等字符做过滤；其次任何内容写到页面之前都必须加以encode，避免不小心把`html tag` 弄出来。这一个层面做好，至少可以堵住超过一半的XSS 攻击

**XSS与CSRF有什么区别吗？**

- `XSS`是获取信息，不需要提前知道其他用户页面的代码和数据包。`CSRF`是代替用户完成指定的动作，需要知道其他用户页面的代码和数据包。要完成一次`CSRF`攻击，受害者必须依次完成两个步骤
- 登录受信任网站`A`，并在本地生成`Cookie`
- 在不登出`A`的情况下，访问危险网站`B`

**CSRF的防御**

- 服务端的`CSRF`方式方法很多样，但总的思想都是一致的，就是在客户端页面增加伪随机数
- 通过验证码的方法

## 30、谈谈你对AMD、CMD的理解

- `CommonJS`是服务器端模块的规范，`Node.js`采用了这个规范。`CommonJS`规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。`AMD`规范则是非同步加载模块，允许指定回调函数
- `AMD`推荐的风格通过返回一个对象做为模块对象，`CommonJS`的风格通过对`module.exports`或`exports`的属性赋值来达到暴露模块对象的目的

## 31、那些操作会造成内存泄漏？

- 内存泄漏指任何对象在您不再拥有或需要它之后仍然存在
- `setTimeout` 的第一个参数使用字符串而非函数的话，会引发内存泄漏
- 闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）

## 32、手写一个递归方法求斐波那契数列的第N项的值

```js
function fn(n){
    if(n==1 || n==2){
        return 1;
    }else {
        return fn(n-1)+fn(n-2);
    }
}
```

## 33、事件传播的三个阶段是什么

捕获 > 目标 > 冒泡；在捕获阶段，事件通过父元素向下传递到目标元素。 然后它到达目标元素，冒泡开始。



## 34、同步和异步的区别?

- 同步：浏览器访问服务器请求，用户看得到页面刷新，重新发请求,等请求完，页面刷新，新内容出现，用户看到新内容,进行下一步操作
- 异步：浏览器访问服务器请求，用户正常操作，浏览器后端进行请求。等请求完，页面不刷新，新内容也会出现，用户看到新内容

## 35、谈谈你对ES6的理解

- 新增模板字符串（为`JavaScript`提供了简单的字符串插值功能）
- 箭头函数
- `for-of`（用来遍历数据—例如数组中的值。）
- `arguments`对象可被不定参数和默认参数完美代替。
- `ES6`将`promise`对象纳入规范，提供了原生的`Promise`对象。
- 增加了`let`和`const`命令，用来声明变量。
- 增加了块级作用域。
- `let`命令实际上就增加了块级作用域。
- 还有就是引入`module`模块的概念。

