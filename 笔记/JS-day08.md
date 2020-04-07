---
学习目标:
  - 理解面向对象开发思想
  - 掌握 JavaScript 面向对象开发相关模式
  - 掌握在 JavaScript 中使用正则表达式
  - 
typora-copy-images-to media
---

# JavaScript 高级

---

## 正则表达式

- 了解正则表达式基本语法
- 能够使用JavaScript的正则对象

### 正则表达式简介

#### 什么是正则表达式

正则表达式：用于匹配规律规则的表达式，正则表达式最初是科学家对人类神经系统的工作原理的早期研究，现在在编程语言中有广泛的应用。正则表通常被用来检索、替换那些符合某个模式(规则)的文本。
正则表达式是对字符串操作的一种逻辑公式，就是用事先定义好的一些特定字符、及这些特定字符的组合，组成一个“规则字符串”，这个“规则字符串”用来表达对字符串的一种过滤逻辑。

#### 正则表达式的作用

1. 给定的字符串是否符合正则表达式的过滤逻辑(匹配)
2. 可以通过正则表达式，从字符串中获取我们想要的特定部分(提取)
3. 强大的字符串替换能力(替换)

#### 正则表达式的特点

1. 灵活性、逻辑性和功能性非常的强
2. 可以迅速地用极简单的方式达到字符串的复杂控制
3. 对于刚接触的人来说，比较晦涩难懂

### 正则表达式的测试

- [在线测试正则](https://c.runoob.com/front-end/854)
- 工具中使用正则表达式
  + sublime/vscode/word
  + 演示替换所有的数字

### 正则表达式的组成

- 普通字符
- 特殊字符(元字符)：正则表达式中有特殊意义的字符

示例演示：

- `\d` 匹配数字
- `ab\d` 匹配 ab1、ab2

### 元字符串

通过测试工具演示下面元字符的使用

#### 常用元字符串

| 元字符  | 说明                                                     |
| ------- | -------------------------------------------------------- |
| .       | 除了换行以外的所有字符                                   |
| \       | 转义的意思 把在正则里面有特殊意义的字符 转成 字符本身    |
| ^       | 代表以某个字符串开头    栗子：/^q/  表示 以q开头的字符串 |
| $       | 代表以某个字符结尾   栗子: /e$/   表示以e结尾的字符      |
| \d      | 代表0-9之间的数字                                        |
| \D      | 代表0-9之外的字符                                        |
| \w      | 代表数字、字母、下划线                                   |
| \W      | 代表除了数字、字母、下划线以外的字符                     |
| \n      | 代表换行                                                 |
| \s      | 代表空白符                                               |
| \S      | 匹配任意不是空白符的字符                                 |
| [ ]     | 表示的是范围，[0-9] 表示的是0-9之间的任意一个数字        |
| [a-z]   | 表示的是:所有的小写的字母中的任意的一个                  |
| \| 或者 | [0-9]\|[a-z] 表示的是要么是一个数字,要么是一个小写的字母 |

#### 量词元字符(限定符)

| 量词元字符 | 说明                                                         |
| ---------- | ------------------------------------------------------------ |
| ？         | 代表前面的字符出现0次或者1次                                 |
| *          | 代表前面字符出现0次或者多次                                  |
| +          | 代表前面字符出现一次或 多次                                  |
| {n}        | 代表前面字符出现连续的n次 {5}代表前面字符出现连续的5次       |
| {n,}       | 代表最少出现n次  {2,} 代表最少出现2次                        |
| {n,m}      | 代表前面字符出现n到m次  {5,10} 表示前面的表达式出现了5次到10次 |

#### 其它

```
[] 字符串用中括号括起来，表示匹配其中的任一字符，相当于或的意思
[^]  匹配除中括号以内的内容
\ 转义符
| 或者，选择两者中的一个。注意|将左右两边分为两部分，而不管左右两边有多长多乱
() 从两个直接量中选择一个，分组
   eg：gr(a|e)y匹配gray和grey
[\u4e00-\u9fa5]  匹配汉字
```

### 添加的案例

```
写正则表达式，根据字符串来写正则表达式进行匹配
* 经验:1、找规律; 2、不要追求完美
* 1、身份证的正则表达式 15位或者18位,这个身份证号码1找规律了，但是不能体现出具体的年月日请参考第二条
* ([1-9][0-9]{14})|([1-9][0-9]{16}[0-9xX])  我们这个还是比较好的网上直接有人写 \d{15}
* 简化版 ?代表0次或者1次，如果是0次就是15位的身份证，如果是1次就是18位身份证
* ([1-9][0-9]{14})([0-9]{2}[0-9xX])? 前面15位加后面3位正好18位


* 2、座机号码的正则表达式
* 010-19876754
* 0431-87123490
* [0-9]{3,4}[-][0-9]{8} 或者
* \d{3,4}[-]\d{8}

* 3、qq号码的正则表达式 5到11位
* [0-9]{5,11} 或者[1-9][0-9]{4,10}这个表示没有0开头的
* \d{5,11}
*
* 4、手机号码的正则表达式 
* 130 131 132 133 134 135 136 137 138 139
* 143 147
* 150 151 152 153 154 155 156 157 158 159
* 170 171 173 176 177
* 180 181 182 183 184 185 186 187 188 189
* ([1][358][0-9][0-9]{8})|([1][4][37][0-9]{8})|([1][7][01367][0-9]{8}) 或者简化
* [1]\d{10}

* 5、邮箱的正则表达式 
* d2113_3.-fd@wolfcode.com.cn
* [0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}
*


//创建正则表达式有两种:正则表达式的作用匹配字符串的
//1、构造函数的方式创建
var reg = new RegExp(/\d{5}/);//正则
var str = "我的电话是10086";//字符串
//调用test方法验证字符串是否匹配
var flag = reg.test(str);//匹配 test 检验某个字符串是否符合定义的正则
console.log(flag);//true

//简化到下面写法
var reg = new RegExp(/\d{5}/);
//调用test方法验证字符串是否匹配
var flag = reg.test("我的电话号码是10086");
console.log(flag);//true

//字面量的方式创建
var reg = /\d{1,5}/;
var flag = reg.test("我的幸运数字是888");
console.log(flag);
```

## JavaScript 中使用正则表达式

### 创建正则对象

方式1：

```javascript
var reg = new Regex('\d', 'i');
var reg = new Regex('\d', 'gi');
```

方式2：

```javascript
var reg = /\d/i;
var reg = /\d/gi;
```

#### 修饰符(参数)

| 标志 | 说明                |
| ---- | ------------------- |
| i    | 忽略大小写          |
| m    | 多行匹配            |
| g    | 全局匹配            |
| gi   | 全局匹配+忽略大小写 |

### 正则匹配test检验 某个字符串是否符合定义的正则

```javascript
// 匹配日期
var dateStr = '2015-10-10';
var reg = /^\d{4}-\d{1,2}-\d{1,2}$/
console.log(reg.test(dateStr));
```
###匹配正则表达式
//        console.log(/./.test("除了回车换行以为的任意字符"));//true
//        console.log(/.*/.test("0个到多个"));//true
//        console.log(/.+/.test("1个到多个"));//true
//        console.log(/.?/.test("哈哈"));//true
//        console.log(/[0-9]/.test("9527"));//true
//        console.log(/[a-z]/.test("what"));//true
//        console.log(/[A-Z]/.test("Are"));//true
//        console.log(/[a-zA-Z]/.test("干啥子"));//false
//        console.log(/[0-9a-zA-Z]/.test("9ebg"));//true
//        console.log(/b|(ara)/.test("abra"));//true
//        console.log(/[a-z]{2,3}/.test("arfsf"));//true


        console.log(/\d/.test("998"));//true
        console.log(/\d*/.test("998"));//true
        console.log(/\d+/.test("998"));//true
        console.log(/\d{0,}/.test("998"));//true
        console.log(/\d{2,3}/.test("998"));//true
        console.log(/\D/.test("eat"));//true
        console.log(/\s/.test("  "));//true
        console.log(/\S/.test("嘎嘎"));//true
        console.log(/\w/.test("_"));//true
        console.log(/\W/.test("_"));//false

###作业正则表达式案例
1.验证密码强弱

```
<style type="text/css">
    #dv{
        width: 300px;
        height:200px;
        position: absolute;
        left:300px;
        top:100px;
    }
    .strengthLv0 {
        height: 6px;
        width: 120px;
        border: 1px solid #ccc;
        padding: 2px;
    }

    .strengthLv1 {
        background: red;
        height: 6px;
        width: 40px;
        border: 1px solid #ccc;
        padding: 2px;
    }

    .strengthLv2 {
        background: green;
        height: 6px;
        width: 80px;
        border: 1px solid #ccc;
        padding: 2px;
    }

    .strengthLv3 {
        background: blue;
        height: 6px;
        width: 120px;
        border: 1px solid #ccc;
        padding: 2px;
    }
</style>
<body>
<div id="dv">
    <label for="pwd">密码</label>
    <input type="text" id="pwd" maxlength="16"><!--课外话题-->
    <div>
        <em>密码强度：</em>
        <em id="strength"></em>
        <div id="strengthLevel" class="strengthLv0"></div>
    </div>
</div>
<script src="publick.js"></script>
<script>
    /*
    * 密码:数字，字母，特殊符号
    * 密码:只有数字,或者只有字母,或者只有特殊符号-----属于1级---弱显示红色
    * 两两组合:数字和字母,数字和特殊符号,字母和特殊符号-----属于2级---中显示绿色
    * 三者都有:数字和字母和特殊符号-----属于3级-----强显示蓝色
    * */
    //获取文本框注册键盘抬起事件
    my$("pwd").onkeyup = function () {
    //每次键盘抬起都要获取文本框中的内容,验证文本框中有什么东西,得到一个级别,然后下面的div显示对应的颜色
        //如果密码的长度是小于6的，没必要判断
        if(this.value.length >= 6){
            var lvl = getLvl(this.value);
            if(lvl == 1){//表示弱的
                my$("strengthLevel").className = "strengthLv1";
            }else if(lvl == 2){//表示中
                my$("strengthLevel").className = "strengthLv2";
            }else if(lvl == 3){
                my$("strengthLevel").className = "strengthLv3";
            }else{
                my$("strengthLevel").className = "strengthLv0";
            }
        }else{
            my$("strengthLevel").className = "strengthLv0";
        }
        //my$("strengthLevel").className = "strengthLv" +(this.value.length >=6 ?getLvl(this.value):0);
        
    };

    //给我密码,我返回对应的级别
    function getLvl(pwd) {//这个函数有参数和返回值的，给我密码是参数，返回级别是返回值
        var lvl = 0;//默认是0级别
        //密码中是否有数字，或者是字母，或者是特殊符号
        if(/[0-9]/.test(pwd)){//如果有数字返回true，就让级别++变成1级了
            lvl++;
        }
        //判断密码中有没有字母，判断完数字还要判断字母，我们不能用else if用if
        if(/[a-zA-Z]/.test(pwd)){
            lvl++;
        }
        //判断密码中有没有特殊符号,_下划线属于非特殊符号所以取反
        if(/[^0-9a-zA-Z_]/.test(pwd)){
            lvl++;
        }
        return lvl;// 1 2 3 最小值是1，最大值是3
    }
</script>

```

2.验证中文名字[\u4e00-\u9fa5] 可以百度直接搜索中文的正则表达式就会有不用记

```
可以在控制台输入escape("中文")编译成代码
//也可以通过控制台 unescape("\u4e00") 翻译成中文
```

### 案例：表单验证

```html
<div class="container" id="dv">
    <label for="qq">Q Q</label><input type="text" id="qq"><span></span><br/>
    <label>手机</label><input type="text" id="phone"><span></span><br/>
    <label>邮箱</label><input type="text" id="e-mail"><span></span><br/>
    <label>座机</label><input type="text" id="telephone"><span></span><br/>
    <label>姓名</label><input type="text" id="fullName"><span></span><br/>
</div>
```

```javascript
/*
    * 跟我文本框，给我这个文本框相应的正则表达式，我把结果显示出来
    * 通过正则表达式验证当前的文本框是否匹配并显示结果
    * */
function checkInput(input,reg) {//input文本框，reg正则表达式
        //文本框注册失去焦点的事件
        input.onblur = function () {
          if(reg.test(this.value)){
              this.nextElementSibling.innerText = "正确了";
              this.nextElementSibling.style.color = "green";
          }else{
              this.nextElementSibling.innerText = "让你得瑟,错了吧";
              this.nextElementSibling.style.color = "red";
          }
        };
}

//qq的正则表达式
    checkInput(my$("qq"),/^\d{5,11}$/);
    //手机的正则表达式
    checkInput(my$("phone"),/^\d{11}$/);
    //邮箱的正则表达式
    checkInput(my$("e-mail"),/^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/);
    //座机号码的正则表达式
    checkInput(my$("telephone"),/^\d{3,4}[-]\d{7,8}$/);
    //中文名字的正则表达式
    checkInput(my$("fullName"),/^[\u4e00-\u9fa5]{2,6}$/);
```

练习作业：

验证手机号：

```javascript
^\d{11}$
```

验证邮编：

```javascript
^\d{6}$
```

验证日期 2012-5-01

```javascript
^\d{4}-\d{1,2}-\d{1,2}$
```

### 正则替换配合前面的字符串方法

```javascript
// 1. 正则替换的方法replace
var str="你们好帅哦,真的是太帅了,帅,就是真帅";
str=str.replace(/帅/g,"靓");
console.log(str);

//2、去除两端空格
var str = "       哦真是神奇的一天    ,太幸福了。   ";
str = str.trim();
console.log("==="+str+"===");

//3、正则去除所有的空格
var str = "       哦真是神奇的一天    ,太幸福了。   ";
str = str.replace(/\s+/g,"");
console.log("==="+str+"===");

//4、所有的o或O都替换成大写的S
var str = "hello world O!";
str = str.replace(/[o]/gi,"S");//正则表达式中:i 表示的是忽略大小写
console.log(str);

//5、所有的o或O都替换成大写的S,用正则表达式对象方式来做也是可以的
var reg = new RegExp(/[o]/gi);
var str = "hello world O!";
str = str.replace(reg,"S");//正则表达式中:i 表示的是忽略大小写
console.log(str);
```