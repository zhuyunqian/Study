## 一、网页文档坐标和窗口滚动距离

获取一个元素的网页文档坐标值： 

**$().offset().top     获取元素距离网页文档最顶部的距离**（元素的Y坐标）

**$().offset().left     获取元素距离网页文档最左边的距离**（元素的X坐标）

当窗口发生滚动事件的时候，可以获取网页超出浏览器窗口的距离：**$(window).scrollTop()**

吸顶导航案例：

```html
<script>
$(function(){
    // 获取盒子的Y坐标
    var box_ostop = $(".box").offset().top;
    $(window).scroll(function(){

        // 每当滚动的时候都需要获取超出窗口的范围  然后和盒子Y坐标做对比
        // 如果滚动距离大于等于盒子Y坐标，就设置成固定定位，否则去掉盒子定位
        var win_st = $(window).scrollTop();  
        if(win_st>=box_ostop){
            $(".box").css({
                "position":"fixed",
                top:0
            })
        }else{
            $(".box").css({
                "position":""
            })
        }
    });
})
</script>
```

## 二、each遍历

我们可以使用JQ提供的.each()方法来**遍历标签**

.each有两种格式的写法：

**格式一**：

```js
$("p").each(function(i, el){
    //遍历p标签，每遍历一个p标签，就会执行一遍函数里面的代码
 	//i是p标签的索引值，el是正在遍历的这个p标签(DOM对象)       
})
```

**格式二**：

```js
$.each($("p"),function(i, el){
    //遍历p标签，每遍历一个p标签，就会执行一遍函数里面的代码
	//i是p标签的索引值，el是正在遍历的这个p标签(DOM对象)
	console.log($(el).text());
})
```

注意：

**格式二这种写法还可以直接遍历数组或者对象**。例如：

```js
var arr = [10, 20, 30];
$.each(arr ,function(i, el){
	//i是元素在数组中的索引值，el是正在遍历的这个数组中的元素
	console.log(i, el);
})；

var obj = {
    name:"javascript",
    age:24,
    job:"web"
};
$.each(obj ,function(key, val){
    //i是键，el键所对应的值
    console.log(key, val);
})
```

## 三、map遍历

.map()也可以用来遍历标签，而且**最终会返回一个数组**。

可以通过在函数内部写返回值，这些返回值最终成为数组的每一个元素。

```js
var arr1 = $("p").map(function(i, el){
    //i是p标签的索引值，el是正在遍历的这个p标签(DOM对象)
    console.log($(el).text());

    return $(el).text()    //这里书写的返回值，就是将来数组中的元素
});

console.log(arr1);
```



## 四、让页面滚动到指定位置(兼容写法)

```js
$("html,body").stop(true).animate({scrollTop:指定位置});

//$("html,body")——html和body兼容不同浏览器的写法
//scrollTop——jQuery封装的网页滚动坐标的属性
```



## 五、增加节点

在页面中增加节点的步骤：

1、准备节点

2、找到要插入节点的位置，添加刚才准备好的节点

```html
<body>
    <button>按钮</button>
    <ul>

    </ul>
<script src="js/jquery-3.4.1.js"></script>
<script>
$(function(){

    $("button").click(function(){

        // 1、准备节点
        var oli = $("<li>文字</li>");
        // 2、找到要插入节点的位置，添加刚才准备好的节点
        // $("ul").append(oli);   //  在ul最后追加oli节点
        // $("ul").prepend(oli);   //  在ul最开始追加oli节点

        // oli.appendTo($("ul"))   //  把oli节点追加到ul最后
        oli.prependTo($("ul"))   //  把oli节点追加到ul开始
    })
})
</script>

```

插入节点的方法：

$("ul").**append**(oli);   //  在ul最后追加oli节点

$("ul").**prepend**(oli);   //  在ul最开始追加oli节点

oli.**appendTo**($("ul"))   //  把oli节点追加到ul最后

oli.**prependTo**($("ul"))   //  把oli节点追加到ul开始

## 六、删除节点

jQuery框架中定义了3个删除内容的方法：它们分别是**remove（）、empty（）和detach（）**。

$().remove()   删除指定节点

$().empty()   保留选中的这个节点，清空内部内容，包括标签上的事件也清除

$().detach()   删除指定节点，但是不清除事件

```html
<button>点击删除</button>
<button>点击增加</button>
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>
<script src="js/jquery-3.4.1.js"></script>
<script>
$(function(){
    var lis = $("li");

    $("li").click(function () {
        alert($(this).index())
    });
    $("button:eq(0)").click(function () {
        // $("ul").remove();  // 删除指定节点

        // $("ul").empty();  //保留选中的这个节点，清空内部内容，包括标签上的事件也清除

        $("li").detach(); //删除指定节点，保留节点事件
    });


    $("button:eq(1)").click(function () {

        $("ul").append(lis);
    });
})
</script>
```

## 七、复制节点

复制节点的步骤：

1、复制出节点

var oli = $("要复制的节点").**clone**(true);    //复制的时候带参数true，表示事件也一起复制，默认没传参不复制事件

2、插入到指定位置

$("ul").append(oli);

```html
<button>复制节点</button>
<ul>
    <li>这是li</li>
</ul>
<script src="js/jquery-3.4.1.js"></script>
<script>
$(function(){

    $("li").click(function () {
        alert($(this).index())
    });
    $("button").click(function () {
       var oli = $("li:first").clone(true);   // 复制的时候带参数true，表示事件也一起复制，默认没传参不复制事件
       $("ul").append(oli);
    })
})
</script>
```

## 八、替换节点

替换节点的步骤：

1、准备要替换成的节点

var op = $("<p>替换成p2</p>");

2、进行替换

选中要被替换元素**.replaceWith**(准备好的节点)       或者：

准备好的节点**.replaceAll**(选中要被替换元素)

```html
<button>点击替换</button>

<div>盒子</div>
<div>盒子</div>
<script src="js/jquery-3.4.1.js"></script>
<script>
$(function(){
   $("button").click(function(){
       // 准备要替换成的节点
       var op = $("<p>替换成p2</p>");
       
       // 把div替换成准备好的op节点
       // $("div").replaceWith(op);   
       op.replaceAll($("div"));
   })
})
</script>
```





