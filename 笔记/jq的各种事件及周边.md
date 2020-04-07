## 一、绑定事件两种方式

在jQuery中，我们可以有多种方式来为标签绑定事件，可以简单的区分为 **专用方法绑定事件 和 快捷方法 绑**
**定事件。**

#### 1.1、快捷方法

格式：  选择元素.事件类型()

```js
$(".box").click(function(){
     alert(123);
});
```



#### 1.2、专用方法绑定事件(on方法)

格式：  .on("事件名称",事件参数对象, 事件函数)

```js
$(".box").on("click", {name:"JQuery"}, function(e){
     alert(e.data.name);
});
```



jQuery中可以使用四种专用方法来绑定事件，分别是 **bind方法、live方法、delegate方法和on方法** ,每个版本各有区别，建议使用on方法。

补充说明：

​	bind方法适用于所有的版本，1.7+ 推荐使用on方法来代替。
​	live方法适用于 1.9- 的版本，1.9+ 版本使用on方法来代替。
​	delegate方法适用于1.4.2 + 的版本。
​	on方法适用于1.7+ 的版本，1.7+ 用于替代bind和live方法。

on方法为指定的元素添加一个或者是多个事件，并规定这些事件发生时指定的函数。
on方法的语法： on（eventType,childselector,data,function）

参数说明：
	eventType：必传参数，指定事件的类型如click等。
	childselector：可选参数，用于事件委托。
	data：可选参数，设计需要传递的数据。
	function：必传参数，事件发生时，执行的函数。

#### 1.3、扩展资料

【快捷方法绑定事件】

jQuery框架中定义了多个快捷方法来为标签绑定特定类型的事件，这些方法和二级事件模型中的事件类型
对应，名称相同。
具体的快捷方法如下：
**<font color="red">blur() 当元素失去焦点时发生 blur 事件</font>**
**change() 当元素的值发生改变时，会发生 change 事件**
**click() 当点击元素时，会发生 click 事件**
dbclick() 当双击元素时，会发生 dblclick 事件
**<font color="red">focus() 当元素获得焦点时，发生 focus 事件</font>**
<font color="red">keydown() 当按键被按下时，发生 keydown 事件</font>
keyup() 当按键被松开时，发生 keyup 事件
keypress() 当按键被按下时，发生 keypress事件（响应每个字符）
**<font color="red">mouseenter()当鼠标指针穿过元素时，会发生 mouseenter 事件</font>**
**<font color="red">mouseleave()当鼠标指针离开元素时，会发生 mouseleave 事件</font>**
mouseover() 当鼠标指针位于元素上方时，会发生 mouseover 事件
mouseout() 当鼠标指针从元素上移开时，会发生 mouseout 事件
<font color="red">mousedown() 当鼠标进入元素，并按下按键时，会发生mousedown事件</font>

mouseup() 当在元素上放松鼠标按钮时，会发生 mouseup 事件
<font color="red">mousemove() 当鼠标在指定的元素中移动时，会发生 mousemove 事件</font>
**<font color="red">scroll() 当用户滚动指定的元素时，会发生 scroll 事件</font>**
submit() 当提交表单时，会发生 submit 事件(表单)

【one方法的使用】
one方法 是on方法中的一种特殊使用方式，由one方法绑定的事件在执行一次响应之后就会失效。其设计思路是：在事件处理函数的内部注销当前事件

```js
//事件只执行1次就失效
$(".box").one("click", {name:"JQuery"}, function(e){
    alert(e.data.name);
});
```

【事件委托说明】
事件委托是开发中常见的绑定事件方式，参考代码如下。

```js
//事件委托格式：
$("body").on("click",".box", {name:"JQuery"}, function(e){
    alert("事件委托格式");
    alert(e.data.name);
});
```

## 二、注销事件

有时候我们需要把一些元素的绑定事件注销，可以使用off方法来注销事件。

off方法 的使用示例

```js
$(".box").on("click", {name:"JQuery"}, function(e){
    alert(e.data.name);
    $(this).off("click");
});

// 或者直接：
$(".box").off("click");
```

## 三、事件对象

在注册事件的时候，event对象实例将作为第一个参数传递给事件的回调函数，这和DOM事件模型是完全相
同的。另外，jQuery统一了IE事件模型和DOM事件模型中event对象属性和方法的用法，使其符合DOM标准
事件模型的规范。

| 属性名                          | 描述                                             |
| ------------------------------- | ------------------------------------------------ |
| type                            | 获取这个事件的事件类型，例如：click              |
| target                          | 获取绑定事件的DOM元素                            |
| data（*）                       | 获取事件调用时的额外数据                         |
| relatedTarget                   | 获取移入移出目标点离开或进入的那个DOM元素        |
| currentTarget（*）              | 获取冒泡前触发的DOM元素，等同于this              |
| pageX/pageY（*）                | 获取相对于页面原点的水平/垂直坐标                |
| screenX/screenY                 | 获取显示器屏幕位置的水平/垂直坐标（非jQuery)封装 |
| clientX/clientY（*）            | 获取相对页面视口的水平/垂直坐标(非jQuery封装)    |
| result                          | 获取上一个相同事件的返回值                       |
| timeStamp                       | 获取事件触发的时间戳                             |
| which                           | 获取鼠标的左中右键（1,2,3），或获取键盘按键      |
| altKey/shiftKey/ctrlKey/metaKey | 获取是否按下了alt、shift、ctrl或meta键           |

在事件处理函数（回调函数）中，我们可以获取事件对象的相关信息。

```js
$("div").on("click",{name:"JQuery"},function (e) {
	console.log("点击了div");
	//获取事件的类型
	console.log(e.type);
	//获取目标对象
	console.log(e.target);
	//获取被省略的对象
	console.log(e.data);
})
```

## 四、阻止事件冒泡

事件冒泡的简单解释：如果某个标签的事件被触发，那么该标签父标签上被注册的相同类型事件也会被触发，并且会依次一直冒泡到顶端。

阻止事件冒泡的两种方式：
【1】在回调函数中返回false       return false
【2】调用事件对象的stopPropagation    e.stopPropagation();

```html
	<div class="big">
        大
        <div class="small">
            小
        </div>
    </div>
    <script src="js/jquery-3.4.1.js"></script>
    <script>
    $(function(){
        $(".big").on("click",function(){
            alert("点击了大盒子");
        });
        $(".small").on("click",function(e){
            alert("点击了小盒子");
            // 阻止事件冒泡
            // e.stopPropagation();
            // return false
        });
    })
    </script>
```

## 五、阻止标签默认行为

**默认行为**
	默认行为 ：页面中的一些标签常常存在默认的行为，比如表单的submit事件类型，如果该类型的事件被触发，则会导致表单的提交；比如a标签存在跳转网页连接的默认行为等。

如果需要在事件被触发的时候，阻止标签默认的行为，可以通过以下两种方式：

【1】在回调函数中返回false       return false
【2】调用事件对象的preventDefault    e.preventDefault();

```html
<a href="http://www.baidu.com">百度一下</a>

... ...
<script>
$("a").on("click",function(e){
    // 阻止默认行为
    // e.preventDefault();
    return false
})
</script>
```

## 六、自定义事件(了解)

我们可以给标签添加自定义事件，但是自定义事件需要.trigger()方法触发才能执行：

例如：给div自定义一个"shitihua"事件

```html
	<div></div>
    <script src="js/jquery-3.4.1.js"></script>
    <script>
    $(function(){
        // 自定义事件
        $("div").on("shitihua",function(){
           $(this).css({
               width:200,
               height:200,
               background:"#ccc"
           })
        });
        
        // 触发事件
        $("div").trigger("shitihua");
    })
    </script>
```

## 七、鼠标跟随效果

```js
$(document).on("mousemove", function(e){
    //鼠标在网页上移动的时候，执行这里的代码
    //e.pageX为鼠标所在位置相对于网页文档左上角的水平距离
    //e.pageY为鼠标所在位置相对于网页文档左上角的竖直距离
    console.log(e.pageX, e.pageY);  
});

```

让图片跟随鼠标

```html
<style>
    img{
        position: absolute;
    }
</style>
... ...
<img src="images/dian.gif" height="192" width="390"/></body>
<script src="js/jquery-3.4.1.js"></script>
<script>
$(function(){

   $(document).on("mousemove", function(e){
       //鼠标在网页上移动的时候，执行这里的代码
       //e.pageX为鼠标所在位置相对于网页文档左上角的水平距离
       //e.pageY为鼠标所在位置相对于网页文档左上角的竖直距离
       // console.log(e.pageX, e.pageY);

       $("img").css({
           left: e.pageX,
           top: e.pageY,
       })
   });
})
</script>
```



## 八、JQ控制标签属性

JQ中通过attr() 方法控制标签属性，**使用方式和.css()方法完全一致**

格式：

**$(selector).attr(name);**   传一个字符串参数表示访问指定属性的值

**$(selector).attr(name, "value");**   传两个参数表示修改指定属性的值

**$(selector).attr({**

​		**name:"value",**

​		**name:"value",**

​		**……**

**});**    传一个对象参数表示多属性修改

备注： 

JQ中还提供了prop()方法，也可以操作标签属性，使用方式和.attr()一致，但是只能操作原生标签属性

而attr()方法可以操作原生标签属性，和自定义标签属性

```html
<button>获取标签属性</button>
<button>修改标签属性</button>
<button>同时修改多个标签属性</button>
<br><br>
<img src="images/dian.gif" height="192" width="390" class="img01" title="这是一张图片" data-mypro="123456"/>
<script src="js/jquery-3.4.1.js"></script>
<script>
$(function(){
    $("button").eq(0).click(function(){
        console.log($("img").attr("class"))
    });

    $("button").eq(1).click(function(){
        $("img").attr("title","这是修改过的值")
    });

    $("button").eq(2).click(function(){
        $("img").attr({
            "class":"img02",
            "title":"这是修改过的值2222"
        })
    });
    //attr可以获取自定义标签属性
    console.log($("img").attr("data-mypro"));  // 123456
    //prop只能获取原生标签属性
    console.log($("img").prop("title"));  //  这是一张图片
    console.log($("img").prop("data-mypro"));  //undefined

})
</script>
```



## 九、键盘事件

事件对象**e.keyCode**可以获取对应按键的键码



## 十、视频/音频API

W3C为原生dom对象视频/音频提供了大量属性和方法，参考链接：

http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp

**方法：**

play()   播放

**属性：**

currentTime    设置/返回当前时间





  



