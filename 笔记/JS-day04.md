

[TOC]

## 原型链继承的实现

**原型式继承**

在前面的课程中，我们讲了原型式的继承，这种继承方式是修改子类对象原型指向父类对象的原型，如前面的MyArray执行的是Array的原型对象。

这种方式存在问题是，只能继承父类对象原型上的成员，但无法继承父类对象中的成员。

```js
function Animal() {
    this.color="red";
}
Animal.prototype.weight=100;
function Person() {
}
Person.prototype = Animal.prototype;
var p = new Person();
console.log(p);
```

Person.prototype = Animal.prototype；原型式的继承

此时创建出来的Person对象p可以访问Animal中的weight属性，但是无法访问color属性。看图理解

![1552034541859](images\1552034541859.png)

那么，如果我们既要继承原型对象中的成员，也要继承实例对象中的成员，就应该使用这一节中的原型链继承

```js
function Person(name,age,sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    Person.prototype.eat =function () {
        console.log("人可以吃东西");
    };
    function Student(score) {
        this.score = score;
    }
    //改变学生的原型的指向即可==========>学生和人已经发生关系
    Student.prototype=new Person("小明",10,"男");
    Student.prototype.study = function () {
        console.log("学习很累很累哦");
    };
    var stu = new Student(100);
    console.log(stu.name);
    console.log(stu.age);
    console.log(stu.sex);
    stu.eat();
    console.log("下面的是学生对象中自己有的");
    console.log(stu.score);
    stu.study();
```

## 复杂的原型链继承示例---作业

Animal-Person-Student-Boy

使用原型链继承方式能够继承到更多的成员。但是依然存在问题：

```
function Person(name,age,sex,weight) {
     this.name = name;
     this.age = age;
     this.sex = sex;
     this.weight =weight;
 }
 Person.prototype.sayHi = function () {
     console.log("您好");
 };
 function Student(score) {
     this.score = score;
 }
 //希望人的类别中的数据可以共享给学生---原型链继承
 Student.prototype = new Person("小明",10,"男","50kg");
 var stu1 = new Student("100");
 console.log(stu1.name,stu1.age,stu1.sex,stu1.weight,stu1.score);
 stu1.sayHi();

 var stu2 = new Student("120");
/* stu2.name = "张三";
 stu2.age = 20;所有的人名都一样了，只能这样改，不好*/
 console.log(stu2.name,stu2.age,stu2.sex,stu2.weight,stu2.score);
 stu2.sayHi();
 var stu3 = new Student("120");
 console.log(stu3.name,stu3.age,stu3.sex,stu3.weight,stu3.score);
 stu3.sayHi();
```

1. 共享的问题

2. 无法向父类传参

   

## Object.create方法的基本使用

在Object的构造函数上存在一个create方法，该方法的作用是用来创建对象的。

该方法可以接收的参数有一下两种

1. null

   创建一个空对象，这个空对象中连最基本的原型对象都没有的

2. 对象

   创建传递进来的对象，并设置该对象的原型对象为当前的参数

   ![1560217369190](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1560217369190.png)

该方法的使用率比较低，要求大家知道存在这样的一种创建对象的方式即可。

## call方法和apply方法的基本使用

call和apply方法作用：

1. 方法借用、借用其他对象的方法

2. ```
   语法：对象1.方法.call(对象2)
        对象1.方法.apply(对象2)
   ```

3. 设置方法中this的指向

```js
var obj1 = {
    name:"Neld",
    age:10,
    showInfo:function () {
        console.log("name:"+this.name,"age:"+this.age);
    }
}
var obj2 = {
    name:"Lily",
    age:12
}
obj1.showInfo();//name:Neld age:10
obj2.showInfo();//obj2.showInfo is not a function
```

obj1对象中有showInfo方法，而obj2对象中没有，所以如果直接使用obj2调用showInfo方法的时候抛出错误信息。

如果我们临时需要使用obj2调用showInfo方法来打印出name和age属性的值，此时可以使用这里的call或者apply方法来实现。

```js
obj1.showInfo.call(obj2);//name:Lily age:12
obj1.showInfo.apply(obj2);//name:Lily age:12
```

这就是把obj1中的showInfo方法借用给obj2使用。

 同时我们观察到，在showInfo方法中使用到了this关键字，在obj2借用该方法的时候，其中的this已经指向了obj2对象，这就要达到修改方法中this关键字的指向的目的。

call和apply方法的作用是完全一样的，那么他们的区别是什么呢？继续往下分析。

```js
var obj1 = {
    name:"Neld",
    age:10,
    add : function (a, b) {
        return a + b;
    }
}
var obj2 = {
    name:"Lily",
    age:12
}
console.log(obj1.add.call(obj2, 1, 2));//3
//console.log(obj1.add.apply(obj2, 1, 2));//CreateListFromArrayLike called on non-object
console.log(obj1.add.apply(obj2, [2, 2]));//4
```

在obj1中定义一个带有两个参数的方法，obj2中没有，问题一样，obj2也要使用到obj1中的add方法，此时使用call或者apply借用即可。

此时新的问题是，在调用add方法的时候参数应该如何传递？

call方法：

​	将this指向的对象作为第一个参数，其他参数依次传递即可

apply方法：

​	将this指向的对象作为第一个参数，其他参数封装到数组中传递

​	如果没有使用数组，程序报错。

以上就是call和apply的基本使用，这两个方法在后续的课程中会大量的使用到，所以必须引起重视。

## 借用构造函数继承说明

所谓借用构造函数，就是在子构造函数中调用父构造函数，达到继承并向父构造函数传参的目的。

```js
function SuperClass(name,age) {
    this.name = name;
    this.age = age;
}
SuperClass.prototype.fun1 = function () {
    console.log("name:",this.name,"age:",this.age);
}
function SubClass(color) {
    this.color = color;
}
SubClass.prototype = new SuperClass("xxx",10);//继承父构造函数并设置name和age的值
SubClass.prototype.fun2 = function () {
    console.log("color:",this.color);
}
var sub = new SubClass("red", "Neld", 10);
var sub2 = new SubClass("red", "Lily", 12);
console.log(sub);
console.log(sub2);
```

上面是原型链的继承，这种方式存在一个问题是，在创建不同对象的时候，无法为其继承过来的成员赋值。

这里的sub和sub2两个对象的name和age属性值都是“xxx”和10，很明显是不满足我们需求的。

那么我们来看看借用构造函数是否能解决这个问题呢？

```js
function SuperClass(name,age) {
    this.name = name;
    this.age = age;
}
SuperClass.prototype.fun1 = function () {
    console.log("name:",this.name,"age:",this.age);
}
function SubClass(color, name, age) {
    this.newMethod = SuperClass;//①
    this.newMethod(name, age);//②
    this.color = color;
    delete this.newMethod;//③
}
//SubClass.prototype = new SuperClass();
SubClass.prototype.fun2 = function () {
    console.log("color:",this.color);
}
var sub = new SubClass("red", "Neld", 10);
var sub2 = new SubClass("red", "Lily", 12);
console.log(sub);
console.log(sub2);
```

①、②、③处代码是实现借用构造函数的关键。下面一一作出解释：

①：将父对象的构造函数设置为子对象的成员

②：调用这个方法，类似于将父构造函数中的代码复制到子构造函数中来执行

```js
function SubClass(color, name, age) {
    this.newMethod = SuperClass;
    this.name = name;//父构造函数中的代码
    this.age = age;//父构造函数中的代码
    this.color = color;
    delete this.newMethod;
}
```

这样看应该更直观一点，执行之后就是在为当前创建出来的对象封装name和age属性。

③：在子构造函数中，newMethod仅仅为了在②调用父构造函数使用，用完之后也就没了价值，所以，直接删除该方法即可

![1560217426562](images\1560217426562.png)

可以看到，借用构造函数继承方式解决了原型链继承的问题。

下面再看看另外一种借用构造函数的实现方式（使用call或apply）：

```js
function SubClass(color, name, age) {
    //SuperClass.call(this,name,age);
    SuperClass.apply(this,[name,age]);
    this.color = color;
}
```

我们可以使用call或apply更简单快捷的实现和上面一样的效果。

以上就是借用构造函数继承（也要对象冒充）的两种实现方式。当然，这种继承方式都存在下面两个问题：

1. 如果父子构造函数存在相同的成员，那么子构造函数会覆盖父构造函数中的成员
2. 不能继承原型链中的成员

## 组合继承的基本结构

基于原型链继承和借用构造函数继承两种方式存在的问题，我们提出一个解决方案---组合继承，就是两种一起使用。

```js
function SubClass(color, name, age) {
   //SuperClass.call(this,name,age);
   SuperClass.apply(this,[name,age]);//继承构造函数中的成员
    this.color = color;
}

SubClass.prototype = new SuperClass();//继承原型链上的成员
```

总结：  ECMAScript 实现继承的方式不止一种。这是因为 JavaScript 中的继承机制并不是明确规定的，而是通过模仿实现的。这意味着所有的继承细节并非完全由解释程序处理。作为开发者，你有权决定最适用的继承方式。

## 绘制完整的原型链结构图

这一节重点探讨函数对象的原型链结构。完整的结构图如下：

![1552186933023](images\1552186933023.png)



总结：

1. 所有的函数对象都是Function类型，由Function构造函数创建
2. Function的原型对象是一个匿名空函数，绑定了函数中的通用方法
3. 空函数对象的原型是Object
4. Function函数对象由自身的构造函数创建

## 基本包装类型的使用

在JS中基本类型有下面几种：

​	字符串（string）, 数字（number），布尔值（boolean），null，undefined

在实际开发中，经常对string,number,boolean这三种类型的数据进行操作，那么为了方便操作，JS中为这三种类型提供了对应的包装类型（String，Number，Boolean）。

**基本包装类型对象的创建**

```js
// 方式一：
var str1 = new String("string1");
var num1 = new Number(123);
var bool1 = new Boolean(true);
console.log(str1);
console.log(num1);
console.log(bool1);
// 方式二
var str2 = new Object("string2");
var num2 = new Object(456);
var bool2 = new Object(false);
console.log(str2);
console.log(num2);
console.log(bool2);
```

**基本类型和基本包装类型的比较**

```js
var str1 = "test";
var str2 = new String("test");
var str3 = "test2";
var str4 = new String("test");
console.log(str1 == str2);//①
console.log(str1 == str3);//②
console.log(str2 == str4);//③
console.log(str1 === str2);//④
console.log(str1 === str3);//⑤
console.log(str2 === str4);//⑥
```

①：字符串的基本类型和包装类型比较，默认会调用包装类型的toString方法，把转换的结果再进行比较

​	str1 == str2.toString()，这样得到的结果是相等的，返回true

②：两个基本类型比较，值不等，返回false

③：两个包转类型比较的是地址，地址不同，返回false

④：===比较类型和值，这里是类型不同，返回false

⑤：两者值不同，返回false

⑥：两者类型相同但是引用地址不同，返回false

另外两种类型和字符串类型一样的讨论点，这里就不再一一列举。

## 基本包装类型使用的注意点

先看下面的代码，观察存在的问题：

```js
var str = "test";
console.log(str.length);//4
console.log(str.substr(0, 2));//te
```

上面代码看似很简单，但是存在一个很基本的疑问点：

str是基本类型，不存在属性和方法一说，但是下面两行代码中却是在访问属性和方法，而且代码还能正确的执行，这是如何实现的呢？

其实很简单，JS在这种情况下会自动创建一个包装类型的对象，然后使用该对象访问对应的属性和方法，如：

```js
var str = "test";
var obj = new String(str);
console.log(obj.length);
console.log(obj.substr(0, 2));
obj = null;//使用完之后销毁obj
```

把这一点想清楚之后，相信大家就明白这是怎么一回事了！

## Number类型扩展注意点

在Number包装类型的使用过程中还有下面这些点是需要我们注意的。

```js
Number.prototype.add = function (num) {
    return this + num;
}
var num = 100;
var ret = num.add(100);//①
console.log(ret);//200
```

这段代码很简单，在Number的原型上添加了一个add方法，返回两数相加之后的结果。

①处的代码相信大家现在是能够看懂的，num是基本类型的变量，在程序执行的时候，首先会自动创建一个Number对象将该数据封装起来，然后在调用add方法来完成数字的相加操作。

这里我们重点不是说这个问题，而是使用num变量调用add方法的问题。

在程序执行的时候，num直接指向一个Number对象，所以可以直接访问到Number中的add方法，那么我们可以直接使用num对应的数字来访问add方法吗？也就是 **100.add(100)**;

不好意思的告诉大家，在JS语法中这样的代码是不能通过的。但是可以稍加修改就可以了，我们只需用**（）**将数字括起来即可：

```js
console.log((100).add(100));//200
```

这是Number类型在使用过程中的一个小细节，大家记住就OK了。

## 私有成员和特权方法

这一节我们来解释几个在JS使用过程中经常使用到的概念，清楚这些概念有助于大家对后面知识点的学习。

```js
function Person(name, age) {
    var className = "H5";
    this.name = name;
    this.age = age;
    this.showName = function () {
        console.log(this.name);
    }
    function getClassName() {
        return className;
    }
    this.showClass = function () {
        console.log("姓名：",this.name,"班级：",getClassName());
    }
}
Person.prototype.des = "H5-JS面向对象";
Person.info = "H5 Information";
```



成员：对象的属性和方法

实例成员：实例对象的属性和方法  name\age | showName\showClass

静态成员：构造函数自己的属性和方法  info

原型成员：构造函数对应的原型对象的属性和方法  des

私有成员：在构造函数中声明的变量和函数，因为我们只能在函数内部访问，

​			所以是私有的  className  getClassName

特权方法：在函数内部使用了私有成员的实例方法被称为是特权方法  showClass

## Object静态成员

上面讨论完Object的原型成员之后，我们再来讨论一下Object中的静态成员。

**![1552207785668](images\1552207785668.png)**

**length**：形参个数

**name**：方法名称

**assign**：将多个对象合并到一个对象中并返回

```js
var obj = {name:"Neld", age:10};
console.log(Object.assign(obj, {info: "xxx"}, {name: "zs"}));
```

返回结果为：{name:"zs", age:10, info:"xxx"}，如果多个对象想存在相同的属性，后面会将前面属性值覆盖。

**create**：创建对象，并设置原型对象

**is**：判断两个参数是否相等，等同于===，注意下面两种特殊的判断即可：

```js
console.log(0 === -0);//true
console.log(Object.is(-0, 0));//false
console.log(NaN === NaN);//false
console.log(Object.is(NaN, NaN));//true
```

**访问属性（增、删、改、查属性）**

**getOwnPropertyDescriptor**：获取当前对象中的指定的属性描述对象

```js
console.log(Object.getOwnPropertyDescriptor(obj,"name"));
```

**![1552209208027](images\1552209208027.png)**

每个属性描述对象都存在下面四个属性：

​	configurable：属性可配置型，false，当前属性不能被删除，并且后面不能再改变该描述对象

​	enumerable：可枚举性，false，当前属性不是被循环遍历到

​	value：当前属性的值

​	writable：可写性，false，当前属性的值不能被修改

**getOwnPropertyDescriptors**：获取所有属性的描述对象

**defineProperties**：一次定义多个属性的可操作性（configurable|enumerable|value|writable）

```js
Object.defineProperties(obj,{
    name:{
        configurable:true
    },
    age:{
        configurable:false
    }
});
delete obj.name;
delete obj.age;
console.log(obj);//{age:10},name属性已被删除
```

**defineProperty**：定义当前指定属性的可操作性（configurable|enumerable|value|writable）

```js
var obj = {name:"Neld", age:10};
Object.defineProperty(obj,"name",{
    configurable:false//当前属性不能被删除
})
delete obj.name;//删除name属性
console.log(obj);//{name:"Neld", age:10}，name属性没有被删除
```

**注意**：当为一个存在的属性设置可操作性时，如果只是修改属性描述对象的部分属性，其他的为默认值。

​	当为一个不存在的属性设置可操作性时，如果只是修改属性描述对象的部分属性，其他的为false。

**keys**：获取当前对象所有属性的名称，不可枚举的属性除外

```
console.log(Object.keys(obj));
```

**getOwnPropertyNames**：获取当前对象所有属性的名称，包括不可枚举的属性

```
console.log(Object.getOwnPropertyNames(obj));
```

**isExtensible**：检查当前对象是否可扩展，false，不能添加属性

```
console.log(Object.isExtensible(obj));
```

**isSealed**：检查当前对象是否是被密封的，false，不能添加和删除属性

```
console.log(Object.isSealed(obj));
```

**isFrozen**：检查当前对象是否是被冻结的，false，不能添加，删除和修改属性

```
console.log(Object.isFrozen(obj));
```

**preventExtensions**：阻止当前对象的可扩展性，就是添加不了属性了

```
Object.preventExtensions(obj);
 obj.color ="red";
console.log(obj.color);//颜色就添加不了了
```

**seal**：密封当前对象、添加删除不了，可以修改

```
Object.seal(obj);
obj.age = 99;//可以修改
obj.color= "red";//添加不了
delete obj.name;//删除不了
```

**freeze**：冻结当前对象、不能删除、不能修改、不能删除

```
Object.freeze(obj);
obj.color ="red";//不能添加
obj.age =99;//不能修改
delete obj.name;//不能删除
console.log(obj);
```

**entries**：获取到所有成员，以数组形式返回

```js
var obj = {name:"Neld", age:10,fun:function () {}};
console.log(Object.entries(obj));
```

**![1552211112485](images\1552211112485.png)**





