# 				**JavaScript基础**

------

今日学习内容

- Array对象
  - Array对象的常用方法
  - 需求
- 基本包装类型
- String对象
  - 字符串不可变
  - 字符串常用方法
  - 需求

今日学习目标

- **掌握使用Array创建数组对象**
- **掌握如何判断变量的具体类型**
- **掌握Array对象的常用方法**
- 记住什么是基本包装类型
- 记住什么叫做字符串不可变
- **掌握字符串常用方法**
  - 截取字符串
  - 查找位置

------

#### 实现系统的Max方法（封装一个函数求最大值和最小值）

1、分别写出求最大、最小值的函数；

```javascript
function MyMath() {
  var max = arguments[0];//假设max变量中存储的是最大值
  for(var i = 0; i < arguments.length; i++){
      if(max < arguments[i]){
         max = arguments[i];
      }
  }
  return max;
}
var result = MyMath(10,20,30,50,80,100,8,6);
console.log(result);

//最小值的。
function MyMath() {
  var min = arguments[0];//假设max变量中存储的是最小值
  for(var i = 0; i < arguments.length; i++){
     if(min > arguments[i]){
        min = arguments[i];
  	  }
	}
return min;
}
var result = MyMath(10,20,30,50,80,100,8,6);
console.log(result);
```

2、随机产生一个十六进制的颜色值；

```javascript
//随机产生一个十六进制的颜色值
function getColor() {
    var str = "#";//颜色以#开头
    //一个十六进制的值的数组
    var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  for(var i = 0; i < 6; i++){
     //产生的每个随机数都是一个索引,根据索引找到数组中对应的值,拼接到一起
     var num = parseInt(Math.random() * 16);
     str += arr[num];
  }
  return str;//返回的是一个字符串类型的，因为有字母和数字
}
var result = getColor();
console.log(result);
```

### 作业随机点名

通过以上知识点，做一个随机点名效果作业。

### Date对象（掌握）

通过对Math的学习，我们知道，Math是JavaScript的内置对象之一，但Math不是构造函数，不能创建对象。下面我们再来学习一个日期相关的内置对象Date。

#### 获取指定部分日期

以上方法并不能满足我们的格式化日期的需求，下面我们再来介绍Date对象中常用的几个方法，如下

```javascript
// getSeconds()  根据本地时间，返回一个指定的日期对象的秒数。 0-59
console.log(date.getSeconds());

// getMinutes()  根据本地时间，返回一个指定的日期对象的分钟数。 0-59
console.log(date.getMinutes());

// getHours()    根据本地时间，返回一个指定的日期对象的小时数 0-23
console.log(date.getHours());

// getDay()      返回星期几 *** 0 表示周日，6 表示周六 ***
console.log(date.getDay());

// getDate()     返回当前月的第几天
console.log(date.getDate());

// getMonth()    返回月份，***从0开始***
console.log(date.getMonth());

// getFullYear() 返回4位的年份  如 2019
console.log(date.getFullYear());
```

**小结**

以上介绍的都是内置对象Date中的方法，并且这些方法（除了now()）都需要使用对象来调用，我们称这些需要对象来调用的方法或属性为实例成员，也叫对象成员。

#### 需求（作业）

1、定义一个函数，获取年月日星期几；

```javascript
function dateTime(){
	var now=new Date();/*获取当前的日期，年月日，时分秒*/
	/*alert(now);*/
	var y=now.getFullYear();/*获取年*/
	var m=now.getMonth()+1;/*获取月*/
	var d=now.getDate();/*获取日*/
	//获取星期
	var week=now.getDay();
	switch(week){
		case 1: 
			week = "星期一";
		break;
		case 2: 
			week = "星期二";
		break;
		case 3: 
			week = "星期三";
		break;
		case 4: 
			week = "星期四";
		break;
		case 5:
			week = "星期五";
		break;
		case 6: 
			week = "星期六";
		break;
		case 0: 
			week = "星期天";
		break;
	}
	return y+"年"+m+"月"+d+"日"+week;
}
var result = dateTime();
console.log(result);
```

## String对象

```javascript
//定义一个字符串变量
var s = 'abc';
s = '123abc';
console.log(s);
```

当我们给String变量重新赋值的时候，栈中的临时变量的值会被修改成另一个地址，此时这个变量就指向了另一块堆内存，旧的内存空间将不再被引用，浏览器将自动回收旧值所占的内存空间（我们不能确定该内存什么时候被回收）。这个字符串的重新赋值的过程，并没有修改旧的内存中的值，而是将变量指向了一块新的内存，这就是字符串的不可变特性！

那我们以后是不是就可以放心地使用字符串的重新复制或拼接了呢？

```javascript
 //字符串拼接问题
 var s1 = '0';
 for (var i = 0; i < 10000000; i++) {
 s1 += i;
 }
 console.log(s1);
```

以上代码存在大量拼接字符串的操作，将会导致内存不断被开辟，占用大量内存，造成程序性能降低的问题。所以在开发中应避免大量拼接字符串！



### 字符串常用方法（熟悉）

字符串所有的方法，都不会修改字符串本身(字符串是不可变的)，操作完成后会返回一个新的字符串。以下方法通过后面的需求进行学习。大家可以根据文档对以下方法进行单独学习。

1、字符操作相关方法
	.length ----->字符串的长度
	.charAt(索引)，返回值是指定索引位置的字符串，超出索引，结果是空字符串
	.fromCharCode(数字值，可以是多个参数)，返回的是ASCII码对应的值

```javascript
//.length ----->字符串的长度
var str = "hello word";
console.log(str.length);//10

//.charAt(索引)，返回值是指定索引位置的字符串，超出索引，结果是空字符串
 var str="hello word";
var result=str.charAt(1);
var result = str.charAt(100);//这个超出了输出空字符串
console.log(result);

//.fromCharCode(数字值，可以是多个参数)，返回的是ASCII码对应的值
var str = String.fromCharCode(97,98,99);
console.log(str);
```

2、字符串操作相关方法
	.concat(字符串1,字符串2,...);返回的是拼接之后的新的字符串
	.indexOf(要找的字符串,从某个位置开始) 返回的是这个字符串的索引值，没找到返回-1，第二个参数可以不要
	.lastIndexOf(要找的字符串) 从后往前找，但是索引仍然是从左向右的方式，找不到则返回-1

```javascript
//.concat(字符串1,字符串2,...);返回的是拼接之后的新的字符串
var str = "小明";
console.log(str.concat("喜欢", "凤姐", "这是", "真的"));

//.indexOf(要找的字符串,从某个位置开始) 返回的是这个字符串的索引值，没找到返回-1，第二个参数可以不要
var str = "我们今天真开心";
var index = str.indexOf("真",5);
console.log(index);//返回-1，因为从第5个开始后面就没有真，如果不写后面的5结果就是4正好是真的索引位置

//.lastIndexOf(要找的字符串) 从后往前找，但是索引仍然是从左向右的方式，找不到则返回-1
var str="hello word";
var index=str.lastIndexOf("o");
console.log(index);//返回结果7，从后面往前找到后面的那个o
```

3、字符串操作相关方法

​	.replace("原来的字符串","新的字符串");用来替换字符串的

​    .slice(开始的索引，结束的索引) 从索引5的位置开始提取，到索引10的前一个结束，没有10，返回这个提取后的字符串；

```javascript
//.replace("原来的字符串","新的字符串");用来替换字符串的
var str = "小明真的好帅哦，真的好勇敢哦";
if(str.indexOf("帅") != -1){
   str = str.replace("帅","丑");
}else{
  console.log("不存在");
}
console.log(str);

//.slice(开始的索引，结束的索引) 从索引5的位置开始提取，到索引10的前一个结束，没有10，返回这个提取后的字符串
var str = "如果有一天我邪恶了,请记住,我曾纯洁过";
//从索引5的位置开始提取，到索引为10的前一个结束，不包含第10个字符，并返回这个提取后的字符串
str=str.slice(5,10);
console.log(str);
```

4、字符串操作相关方法
	.split("以什么字符串拆分",拆分后留下的字符个数);后面参数可以省略，直接以什么字符串拆分，他是把字符串以指定的字符拆分成数组

```javascript
//.split("以什么字符串拆分",拆分后留下的字符个数);后面参数可以省略，直接以什么字符串拆分，他是把字符串以指定的字符拆分成数组
var str="乔峰|慕容|凤姐|梅超风|小苏|大蛇丸";
var arr=str.split("|");
console.log(arr);//["乔峰", "慕容", "凤姐", "梅超风", "小苏", "大蛇丸"]

```

5、字符串操作相关方法
	.substr(开始的位置，个数) 返回的是截取后的新的字符串,个数也可以省略，就是从什么位置开始截取到最后
	.substring(开始的索引，结束的索引)，返回截取后的字符串，不包含结束的索引字符串

```javascript
//.substr(开始的位置，个数) 返回的是截取后的新的字符串,个数也可以省略，就是从什么位置开始截取到最后
var str="哈哈,小明真的是好帅哦";
str=str.substr(5,5);
console.log(str);//真的是好帅

//.substring(开始的索引，结束的索引)，返回截取后的字符串，不包含结束的索引字符串
var str="哈哈,小明真的是好帅哦";
str=str.substring(5,9);
console.log(str);
```

6、转换小写
.toLocaleLowerCase() 转小写字母

.toLowerCase();转小写,两个方法都是转小写。

```javascript
//.toLocaleLowerCase() 转小写字母
// .toLowerCase();转小写,两个方法都是转小写。
var str="HELLO";
//str=str.toLocaleLowerCase();
str=str.toLowerCase();
console.log(str);

//.toLocaleUpperCase()转大写
//.toUpperCase() 转大写
var str="hello";
//str=str.toLocaleUpperCase();
str=str.toUpperCase();
console.log(str);
```

7、转换小写
.trim() 删除两端空格,中间的空格是删除不了的

```javascript
//.trim() 删除两端空格,中间的空格是删除不了的
var str="     哦,这    是一个神奇的一天   ";
str=str.trim();
console.log("===="+str+"====");
```

### 需求（掌握）

#### 截取字符串

案例1、截取字符串"我爱中华人民共和国"，中的"中华"

```javascript
//1、截取字符串"我爱中华人民共和国"，中的"中华"
var str="我爱中华人民共和国";
var key="中华";
//先获取要截取的字符串的索引的位置
var index=str.indexOf(key);
/*console.log(index);*/
//从指定的位置开始截取，截取两个即可
str=str.substr(index,2);
console.log(str);
```

#### 查找位置

案例2：找到字符串中所有的o的出现的位置

```javascript
var str = "hello wod odd ott fbo nhyo";
var index=0;//开始的位置
var key="o";//要找的字符串
while((index=str.indexOf(key,index))!=-1){//如果是-1情况，说明找完了
     console.log(index);//这个必须放到上面，要不然多加了1
     index+=key.length;//等价于index+=1或者index++，上面就不用定义var key="o"了
}
```

## Array对象

我们已经知道如何创建一个数组，如 var arr = [3, 2, 1];  这是以前的做法，通过数组字面量的方式创建数组的。下面介绍另一种数组的创建方式，使用内置对象（即数组的构造函数）创建数组。

### 创建Array对象（掌握）

格式：var 对象名称 = new Array(数组元素或长度)；

```javascript
//如何创建一个数组
//方式一：数组字面量
var numbers = [1, 2, 3];
console.log(numbers);
//方式二：构造函数，使用构造函数创建对象，跟以前不同的是，此处使用的是数组的构造函数
var array = new Array(3,2,1);
console.log(array);
//创建一个长度为5的空数组
var array1 = new Array(5);
console.log(array1);
```

**注意**

构造函数参数中有一个参数为数字n时，构造函数将以数字n为数组的长度，创建一个长度为n的空数组。该数组是长度为n的空数据，并不存在数组元素！

### 判断变量是否是Array对象（掌握）

在使用数组时，我们往往要先确定该变量是数组变量之后，才能放心地使用数组的方法，否则程序可能会出错。那么如何确定一个变量是否是数组对象呢？

```javascript
//判断对象是不是数组类型有两种方式：
//1、instanceof关键字
var arr=[];
console.log(arr instanceof Array);//结果是true
//2、Array.isArray(对象)---->判断这个对象是不是数组
console.log(s);//结果是true
```



## Array对象的常用方法一

学习JavaScript的内置对象其实就是学习内置对象的属性和方法。Array对象中有很多属性和方法，下面我们来学习Array在开发中常用的属性和方法。

.push(值1,值2...)把值往数组后面添加，返回值也是追加数据之后的数组长度，参数的数据类型不限；

.unshift(值1,值2...)往数组前面添加，返回的是改变后的数组的长度、参数数据类型不限；

pop()删除数组的最后一项，参数无 返回值是删除的那一项 ；

shift()删除数组的第一项，参数无 返回值是删除的那一项 ；

```javascript
//.push(值1,值2...);把值往数组后面添加、返回值是追加数据之后的数组长度，参数的数据类型不限;
var arr1=[10,20,30,40,50];
var result = arr1.push(100,200);
console.log(result,arr1);//返回结果：7、[10, 20, 30, 40, 50, 100, 200]

//.unshift(值1,值2...)往数组前面添加，返回的是改变后的数组的长度参数数据类型不限;
var arr2=[10,20,30,40,50];
var result = arr2.unshift(100,200);
console.log(result,arr2);//返回结果：7、[100, 200, 10, 20, 30, 40, 50]

//pop()删除数组的最后一项，参数无 返回值是删除的那一项;
var arr3=[10,20,30,40,50];
var result=arr3.pop();
console.log(result,arr3);//返回结果：50和[10, 20, 30, 40]

//shift()删除数组的第一项，参数无 返回值是删除的那一项;
var arr4=[10,20,30,40,50];
var result=arr4.shift();
console.log(result,arr4);//返回结果：10和[20, 30, 40, 50]
```

### 数组一些其他方法（有些跟字符串类似）

```javascript
//.indexOf(元素值)查看某个元素在数组里面的索引，如果没有这个元素返回值是-1
var arr2=[10,20,30,40,50];
var index=arr2.indexOf(30);
console.log(index);
/*
* 返回值是该元素在数组中的索引值，如果没有返回-1
 indexOf（n，m）从索引m开始查看n在数组里面的索引值
 lastIndexOf（）从后往前看
* */

//join("字符串")把数组按照指定的字符串拼接成一个字符串,如果没有参数就按默认的逗号拼接成字符串，如果有参数就按照指定的字符串拼接成字符串
var arr2=["小白","小黑","小红","小芳","小绿","小花"];
var str = arr2.join("|");
console.log(str);


//reverse() 数组反转 参数无 返回值是反转后的数组，(改变原有数组)
var arr3=[10,20,30,40,50];
var temp=arr3.reverse();//反转
console.log(temp,arr3);//[50, 40, 30, 20, 10]两个结果一样

//sort()数组排序 返回值是排好序的数组，改变原有数组。参数可传可不传，如果传参数，参数是回调函数。如果不传参数的时候只能排10以内的数字
//不传参数的sort（）排序----从小到大
var ary=[1,2,3,6,5,4];
var temp=ary.sort();
console.log(temp); //结果：[1, 2, 3, 4, 5, 6]
console.log(ary);  //结果：[1, 2, 3, 4, 5, 6]

//sort（）带有参数的升序和降序
//1、从小到大排序 a-b
var ary=[1,2,3,6,5,4,13,12,15,16];
var temp=ary.sort(function (a,b) {
    return a-b;//把原数组升序排 从小到大
});
console.log(temp);//结果：[1, 2, 3, 4, 5, 6, 12, 13, 15, 16]

//2、从大到小排列 b-a
var temp=ary.sort(function (a,b) {
    return b-a;
});
console.log(temp);//结果：[16, 15, 13, 12, 6, 5, 4, 3, 2, 1]

//slice（n,m）从索引n开始获取到索引m（不包含m）返回值是获取到的元素组成的新数组
var ary=[10,20,30,40,50,60,70,80,90,100];
var temp=ary.slice(2,6);
console.log(temp); //结果是[30, 40, 50, 60] 从索引2开始获取到索引6不包括索引6
//注意：slice();和slice(0);都是把原数组复制一份

//splice(n,m,x/y/z...) 把数组从索引n开始删除m个元素，用x，y...替换删除的m项。返回值是删除的m项组成的新数组
var ary=[1,2,3,4,5,6];
var temp=ary.splice(1,2,7,8,9,10);
console.log(temp);//返回结果是：[2, 3]这个是删除的项组成的新数组，就是删除了2，3
console.log(ary);//返回结果是：[1, 7, 8, 9, 10, 4, 5, 6]

//当m项是0的时候，它把x,y...替换项放到索引n的前面
var ary=[1,2,3,4,5,6];
var temp=ary.splice(1,0,7,8,9,10);
console.log(temp);//[] 返回空数组，因为没有删除
console.log(ary); //结果：[1, 7, 8, 9, 10, 2, 3, 4, 5, 6]

//当不写x、y替换项的时候代表删除数组的元素
var ary=[1,2,3,4,5];
var temp=ary.splice(1,2);
console.log(temp);//结果：[2, 3]
console.log(ary);//结果：[1, 4, 5]

//当splice（）里面什么都不写的时候，代表没有对数组做任何操作，返回一个空数组
var ary=[1,2,3,4,5];
var temp=ary.splice();
console.log(temp); //结果：[]
console.log(ary);//结果：[1, 2, 3, 4, 5]

//当splice(0)  里面是0 的时候，代表删除整个数组，返回的是原数组的数据，原数组变为空数组
var ary=[1,2,3,4,5];
var temp=ary.splice(0);
console.log(temp); //结果： [1, 2, 3, 4, 5]
console.log(ary);//结果：[]原数组变为空数组
```
