## 一、显示隐藏动画切换

.show()

.hide()

.toggle()方法实现切换效果 (如果当前是显示，则切换为隐藏，如果当前为隐藏，则切换为显示)，同样可以传入数字表示动画时间

```js
	    $("button:eq(0)").click(function(){
            $("div").show();
        });
        $("button:eq(1)").click(function(){
            $("div").hide();
        });
        $("button:eq(2)").click(function(){
            $("div").toggle(400);
        });
```

## 二、滑动显示滑动隐藏动画

.slideDown()   向下滑动显示

.slideUp()  向上滑动隐藏

.slideToggle()   滑动切换

```js
 		$("button:eq(0)").click(function(){
            $("div").slideDown();
        });
        $("button:eq(1)").click(function(){
            $("div").slideUp();
        });
        $("button:eq(2)").click(function(){
            $("div").slideToggle();
        });
```

同样可以传入数字表示动画时间。

如果滑动的元素是图片，建议给width并且转块级元素。

## 三、JQuery动画列队机制

如果用户对一个带有动画的元素频繁操作使到动画被触发，则用户的操作次数会被记录下来，用户每操作一次，都会多执行一次动画效果，直到所有次数的动画被执行完毕。这是JQ的动画列队机制。

如果希望用户停止操作后就立刻停止动画，可以在动画函数前面提前调用stop() 方法

```js
$(".nav>ul>li").mouseenter(function(){
	$(this).children("ul").stop().slideDown();
}).mouseleave(function(){
	$(this).children("ul").stop().slideUp();
})
```

## 四、hover() 事件

hover(鼠标移上函数，鼠标离开函数)

如果两个函数代码一模一样，则可以只写一个函数

```js
$(".nav>ul>li").hover(function(){
     $(this).children("ul").stop().slideToggle();
},function(){
     $(this).children("ul").stop().slideToggle();
})

//上面代码可以简化为：
$(".nav>ul>li").hover(function(){
     $(this).children("ul").stop().slideToggle();
})
```

## 五、index()获取元素的索引值

jq中给每个元素编号，这个编号从0开始，我们称为这个元素的索引值。

我们通过选中元素后， .index() 方法来获取到这个索引值。

```html
<script>
    $(function(){
       $("li,p").click(function(){
           alert($(this).index())
       })
    })
</script>
```

注意：**索引值表示的是这个元素在同级标签中的排行的索引值，跟它自己本身是什么标签无关**

## 六、类的控制

**addClass() 添加类名**

**removeClass() 删除类名**

**toggleClass() 切换类名**

```html
<script>
    $(function(){
        $("button:eq(0)").click(function(){
            $("div").addClass("box box2");
        });
        $("button:eq(1)").click(function(){
            $("div").removeClass("box");
        });
        $("button:eq(2)").click(function(){
            $("div").toggleClass("box");
        });
    })
</script>
```

注意：

addClass() 可以一次性添加多个类名，类名间用空格隔开

removeClass() 如果没有指定删除的类名称，则删除所有类名

## 七、淡入淡出动画(透明度动画)

fadeIn()   淡入动画，即改变标签的透明度让标签慢慢的显示出来。

fadeOut()   淡出动画，即改变标签的透明度让标签慢慢的消失（透明度为0）。

fadeToggle()  透明度切换动画，如果当前标签的透明度不为0，那么就执行淡出动画，否则就执行淡入动画。

fadeTo(动画时间，透明值)  透明到指定值。

备注 ：标签透明度的取值范围为0.0~1.0。

```js
		$("button:eq(0)").click(function(){
            $("div").fadeIn();
        });
        $("button:eq(1)").click(function(){
            $("div").fadeOut();
        });
        $("button:eq(2)").click(function(){
            $("div").fadeToggle();
        });
        $("button:eq(3)").click(function(){
            $("div").fadeTo(1000, .5);
        });
        $("button:eq(4)").click(function(){
            $("div").fadeTo(1000, 1);
        });
```

## 八、JQ的自定义动画

jQuery框架中本身已经为我们封装好了一些简单的控制标签宽高、透明度相关的方法，如显示和隐藏、展开和收起、淡入和淡出，除了这些方法之外，jQuery还为我们提供了animate（）方法 ，允许我们自定义动画效果，通过一些设置我们可以实现更加复杂的动画效果，

**自定义动画的语法**
	animate(params,speed,easing,callBack)

**参数说明：**

第一个参数：

​	params是一个对象。在该对象中以键值对的方式来要控制的属性样式和对应的值表示。

第二个参数：

​	speed速度，可以是默认字符串中的某个（“slow” “normal” “fast”）或者是自定义的数字。

第三个参数：easing为动画插件使用的可选参数，用来控制动画的表现效果，通常有linear和swing等固定值。

第四个参数：动画执行完毕后的回调函数。

```js
			$("button").click(function () {
                $("div").animate({
                    width:400,  //width:"+=200"  或者：  "toggle" 在0和值之间做切换
                    height:400,
                    fontSize:100,
                    opacity:0.5,
                    marginLeft:200,
                    borderRadius:50,
                    "margin-top":"200px"
                },2000,'linear',function () {
                    alert("盒子变大了!")
                })
            });
```

注意：**animate动画只能实现属性值是数字的动画效果**

备注：JQuery所提供的其他动画函数也有这后面三个参数，例如：

```
$("div").show(1000,"linear",function(){
    alert("动画执行结束了")
});
```

## 九、delay()让动画延迟执行

delay() 方法可以让即将执行的动画延迟一段时间之后再执行，传入数字表示延迟时间

```js
$(".ad").slideDown().delay(2000).slideUp();
//表示两秒钟之后再执行.slideUp()函数
```

