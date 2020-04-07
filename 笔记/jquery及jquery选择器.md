## 一、JQuery简介

![1577156371204](assets/1577156371204.png)

jQuery是一款优秀的javaScript库（框架），该框架凭借简洁的语法和跨平台的兼容性，极大的简化了开发
人员对HTML文档，DOM，事件以及Ajax的操作。

主旨口号：写的更少, 干的更多(以更少的代码,实现更多的功能)

官方网站： http://jquery.com/

中文API网站: <http://jquery.cuishifeng.cn/>

版本情况：

JQuery目前分成1.x版、2.x版和3.x版本，**从 2.0.0开始不再支持IE 6/7/8**，2.0.0版本之前通过jQuery Migrate plugin与先前版本保持兼容。 

作者：John Resig(约翰·雷西格)   于2006年1月的BarCamp NYC上发布第一个版本

![1577156258926](assets/1577156258926.png)

JQuery优点和特点(暂时先做了解)：

- 轻量级
- 免费开源
- 完善的文档
- 丰富的插件支持
- 完善的Ajax功能
- 不会污染顶级变量
- 强大的选择器功能
- 出色的DOM操作封装
- 出色的浏览器兼容性
- 可靠的事件处理机制
- 链式编程操作



总结为一句话：**JQuery是一个javascript功能库，提供了许多网页开发常见的功能供我们直接使用**。



## 二、体验JQuery

完成JQuery体验案例：

```html
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        div{
            width: 200px;
            height: 200px;
            background-color: pink;
            display: none;
        }
    </style>
    <script src="js/jquery-3.4.1.js"></script>
    <script>
        $(function(){
            $("button:eq(0)").click(function(){
                $("div").show()
            })

            $("button:eq(1)").click(function(){
                $("div").hide()
            })
        })
    </script>
</head>
<body>
    <button>显示按钮</button>
    <button>隐藏按钮</button>
    <div></div>
</body>
```

## 三、JQ入口函数

JQ入口函数一般采用简写的方式，$(function(){   ...   })， 他也有完整的写法：

```html
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script>
        //js的入口函数
        window.onload = function(){
            //整个网页资源加载完毕再执行这里的代码
            console.log("1");
        };
        
        window.onload = function(){
            //整个网页资源加载完毕再执行这里的代码
            console.log("2");
        };
    </script>
    <script src="js/jquery-3.4.1.js"></script>
    <script>
        $(function(){ // 简写
            //网页文档(标签)加载完毕，就执行这里的代码
            console.log("3");
        });
        $(document).ready(function(){
            //网页文档(标签)加载完毕，就执行这里的代码
            console.log("4");
        });
        $().ready(function(){
            //网页文档(标签)加载完毕，就执行这里的代码
            console.log("5");
        });
    </script>
</head>
<body>
    <div></div>
</body>
```

**两种加载模式的区别：**

1. 执行时机不同

   window.onload方法需要等所有的资源（CSS\JS\图片等）都加载完毕后再执行函数中的代码。
   jQuery框架的ready方法只等DOM文档加载完毕后立即执行包裹代码。

2. 执行次数不同

   window.onload方法，只会执行一次，后面的会把前面的覆盖

   jQuery框架的ready方法，有几次执行几次，不存在覆盖的问题。

3. jQuery存在多种简写方式

   完整的编写方式：$(document).ready(function(){})

   简写方式：

   ​	$().ready(function () {}）
   ​	$(function () {})

**总结书写JQ的步骤：**

1、引入JQ

2、书写入口函数

3、根据JQ的用谁选谁的原则，对元素进行控制



## 四、JQ操作css

jQuery框架提供了css方法，我们通过调用该方法传递对应的参数，可以方便的来批量设置标签的CSS样
式。

1. $("selector").css(name,value);
2. $("selector").css(name1,value).css(name2,value)...;
3. $("selector").css( { name1 : value , name2 : value})

```html
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        div{
            width: 200px;
            height: 200px;
            background-color: pink;
        }
    </style>
    <script src="js/jquery-3.4.1.js"></script>
    <script>
        $(function(){

            $("button:eq(0)").click(function(){
                console.log($("div").css('width'))
            });
            $("button:eq(1)").click(function(){
               $("div").css('width', 300).css('height', 400)
            });
            $("button:eq(2)").click(function(){
                $("div").css({
                    "width":"500px",
                    "height":"500px",
                    "background-color": "blue"
                });
                // 也可以用以下方式：
                // $("div").css({
                //     width:500,
                //     height:500,
                //     backgroundColor: "green"
                // })
            });
        })
    </script>
</head>
<body>
    <button>获取css属性值</button>
    <button>修改css属性</button>
    <button>同时修改多个css属性</button>
    <div></div>
</body>
```



## 五、JQ操作html

jQuery提供了直接控制html结构的相关方法，化简了我们操作html。

1. $("selector").html(value); 修改html
2. $("selector").html(); 访问html
3. $("selector").text(value); 修改文本内容
4. $("selector").text(); 访问文本内容

```html
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        div{
            width: 500px;
            height: 200px;
            border: 1px solid #000;
        }
    </style>
    <script src="js/jquery-3.4.1.js"></script>
    <script>
        $(function(){

            $("button:eq(0)").click(function(){
                console.log($("div").html())
            });
            $("button:eq(1)").click(function(){
               $("div").html("<span>我们正在学习JQuery</span>")
            });
            $("button:eq(2)").click(function(){
                console.log($("div").text())
            });
            $("button:eq(3)").click(function(){
                $("div").text("我们正在学习JQuery....")
            });
        })
    </script>
</head>
<body>
    <button>获取内部html</button>
    <button>修改内部html</button>
    <button>获取内部纯文字文本</button>
    <button>修改内部纯文字文本</button>
    <div>
        <h1>JQuery介绍</h1>
        <p>jQuery是一个快速、简洁的JavaScript框架，是继Prototype之后又一个优秀的JavaScript代码库（或JavaScript框架）。jQuery设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互。</p>
    </div>
</body>
```



## 六、JQuery选择器

jQuery 最核心的组成部分就是选择器引擎。它完全继承了 CSS 的风格,可以对 DOM 元 素的标签名、属性
名、状态等进行快速准确的选择，而且不必担心浏览器的兼容性，写法更加简洁。

jQuery 选择器实现了 CSS1~CSS3 的大部分规则之外,还实现了一些自定义的选择器,用于各种特殊状态的选
择。

优点：相对于直接使用 JavaScript 获取页面元素和处理业务逻辑相比，使用jQuery 选择器来进行操作代码
更简单，且拥有完善的代码检测机制 。

jQuery 选择器根据获取页面中元素的不同，可以划分为四大类 : **基本选择器、层级选择器、筛选选择器和表单选择器。**

#### 6.1、基本选择器

顾名思义，基本选择器是jQuery中用的最多， 使用最频繁的选择器，通过基本选择器我们可以实现大多数
页面元素的选择。基本选择器主要有： **ID选择器、类选择器、标签选择器、并集选择器和通配符选择器。**

| 选择器       | 语法       | 功能                               | 参考实例           |
| ------------ | ---------- | ---------------------------------- | ------------------ |
| ID选择器     | #id        | 根据给定的id匹配一个元素           | $("#divId")        |
| 类选择器     | .class     | 根据给定的class匹配所有的元素      | $(".classValue")   |
| 标签选择器   | element    | 根据给定的元素名匹配所有的元素     | $("elementName")   |
| 通配符选择器 | *          | 匹配所有的元素                     | $("*")             |
| 并集选择器   | #id,.class | 将每中选择器的结果合并在一起后返回 | $("#divId,.class") |

#### 6.2、层级选择器

层次选择器通过 DOM 元素间的层次关系获取元素，其主要的层次关系包括 **后代 、 直接后代 、 下一个相邻兄弟和后面所有兄弟元素**的关系，通过其中某类关系可以方便快捷地定位元素。

| 选择器         | 语法          | 功能                               | 参考实例      |
| -------------- | ------------- | ---------------------------------- | ------------- |
| 后代选择器     | parent child  | 根据祖先元素匹配所有的后代元素     | $("div p")    |
| 直接后代选择器 | parent>child  | 根据父元素匹配所有的子元素         | $("div>.box") |
| 下一个相邻兄弟 | prev+next     | 匹配所有紧接在prev元素后的相邻元素 | $("#div+p")   |
| 后面所有兄弟   | prev~siblings | 匹配prev元素之后的所有兄弟元素     | $("#div~p")   |

案例：

```html
<script>
		$(function(){
			$("button:eq(0)").click(function(){
				$("p").css('background', "pink")
			});
			$("button:eq(1)").click(function(){
				$(".left").css('background', "pink")
			});
			$("button:eq(2)").click(function(){
				$("#box").css('background', "pink")
			});
			$("button:eq(3)").click(function(){
				$("*").css('background', "pink")
			});
			$("button:eq(4)").click(function(){
				$("h1,h2,h3").css('background', "pink")
			});
			$("button:eq(5)").click(function(){
				$("ul li").css('background', "pink")
			});
			$("button:eq(6)").click(function(){
				$("body>*").css('border', "1px solid #000")
			});
			$("button:eq(7)").click(function(){
				$("p+div").css('background', "pink")
			});
			$("button:eq(8)").click(function(){
				$("p~div").css('background', "pink")
			});
		})
	</script>
... ...

<button>选择所有段落标签</button>
<button>选择class为left的标签</button>
<button>选择id为box的标签</button>
<button>选择所有不分类型标签</button>
<button>选择所有标题标签</button>
<button>选择ul里面的li标签</button>
<button>选择body下的第一级所有标签并添加边框</button>
<button>选择p后的一个div</button>
<button>选择p后的所有div</button>
```

备注：前两种选择器可以总结为，css里面可以怎么写，$(" ")里面就可以怎么写



**补充几个方法:**

在通过$(" ")选择到元素后，可以通过：

​	prev()    获取上一个相邻兄弟

​	prevAll()  获取 前面所有兄弟

​	next()   获取下一个相邻兄弟

​	nextAll()   获取后面所有兄弟



#### 6.3、基本筛选选择器

| 选择器语法     | 功能                                    |
| -------------- | --------------------------------------- |
| :first         | 获取第一个元素                          |
| :last          | 获取最后一个元素                        |
| :eq            | 获取指定索引值的元素                    |
| :gt(index)     | 获取大于给定索引值的元素                |
| :lt(index)     | 获取小于给定索引值的元素                |
| :not(selector) | 获取除给定选择器外的所有元素            |
| :header        | 获取所有标题类型的元素                  |
| :animated      | 获取正在执行动画效果的元素              |
| :even          | 获取所有索引值为偶数的元素，索引从0开始 |
| :odd           | 获取所有索引值为奇数的元素，索引从0开始 |

```html
<script>
		$(function(){
			$("button:eq(0)").click(function(){
				$("li:first").css('background', "pink")
			});
			$("button:eq(1)").click(function(){
				$("li:last").css('background', "pink")
			});
			$("button:eq(2)").click(function(){
				$("li:not(:last)").css('background', "pink")
			});
			$("button:eq(3)").click(function(){
				$("li:not(:eq(1))").css('background', "pink")
			});
			$("button:eq(4)").click(function(){
				$("li:even").css('background', "pink")
			});
			$("button:eq(5)").click(function(){
				$("li:odd").css('background', "pink")
			});
			$("button:eq(6)").click(function(){
				$("li:gt(4)").css('background', "pink")
			});
			$("button:eq(7)").click(function(){
				$("li:lt(4)").css('background', "pink")
			});
			$("button:eq(8)").click(function(){
				$("li:eq(4)").css('background', "pink")
			});
		})
	</script>

... ...
<button>选择第一个li</button>
<button>选择最后一个li</button>
<button>选择所有li排除最后一个</button>
<button>选择所有li排除第二个</button>
<button>选择所有索引值为偶数个li</button>
<button>选择所有索引值为奇数个li</button>
<button>选择大于第5个的li</button>
<button>选择小于第5个的li</button>
<button>选择等于第5个的li</button>
```



#### 6.4、内容筛选选择器

内容筛选选择器根据元素中的文字内容或所包含的子元素特征获取元素，其文字内容可以模糊或绝对匹配
进行元素定位。

| 选择器语法      | 功能                               |
| --------------- | ---------------------------------- |
| :contains(text) | 获取包含给定文本的元素             |
| :parent         | 获取含有子元素或者文本的元素       |
| :empty          | 获取所有不包含子元素或者文本的元素 |
| :has(selector)  | 获取含有选择器所匹配的元素         |

```html
<script>
        $(function(){
            $("button:eq(0)").click(function(){
                $("div:contains('天')").css('background', "pink")
            });
            $("button:eq(1)").click(function(){
                $("div:empty").css('background', "pink")
            });
            $("button:eq(2)").click(function(){
                $("div:parent").css('background', "pink")
            });
            $("button:eq(3)").click(function(){
                $("div:has('span')").css('background', "pink")
            });
        })
    </script>
   
...  ...
    <button>选择包含“天”字的div元素</button>
    <button>选择不包含子元素或文本的空元素</button>
    <button>选择含有子元素或者是文本的div元素</button>
    <button>选择含有span子标签的div</button>
```



#### 6.5、属性筛选选择器

属性过滤选择器 根据元素的某个属性获取元素，在使用的时候我们可以匹配单个属性也可以进行多个属性的匹配。

| 选择器语法         | 功能                                       |
| ------------------ | ------------------------------------------ |
| [属性名]           | 获取包含给定属性的元素                     |
| [属性名1][属性名2] | 获取满足多个条件的符合属性的元素           |
| [属性名='value']   | 获取包含给定属性且等于指定值的元素         |
| [属性名!=value]    | 获取包含给定属性且值不等于给定值的元素     |
| [属性名^=value]    | 获取包含给定属性且值以指定字符开头的元素   |
| [属性名$=value]    | 获取包含给定属性且值以指定字符结尾的元素   |
| [属性名*=value]    | 获取包含给定属性且包含指定字符或子串的元素 |

```html
<script>

$(function(){
    $("button:eq(0)").click(function(){
    	$("a[href]").css('background', "pink")
    });
    $("button:eq(1)").click(function(){
    	$("a[href='www.baidu.com']").css('background', "pink")
    });
    $("button:eq(2)").click(function(){
    	$("a[href^='www']").css('background', "pink")
    });
    $("button:eq(3)").click(function(){
    	$("a[href$='com']").css('background', "pink")
    });
    $("button:eq(4)").click(function(){
    	$("a[href*='wolf']").css('background', "pink")
    });
    $("button:eq(5)").click(function(){
    	$("a[href^='www'][title*='demo']").css('background', "pink")
    });
    $("button:eq(6)").click(function(){
    	$("input[type=text]").css('background', "pink")
    });

})
</script>
		
... ...
<button>获取所有拥有href属性的a标签</button>
<button>获取href属性值为www.baidu.com的a标签</button>
<button>获取href属性值以www开头的a标签</button>
<button>获取href属性值以com结尾的a标签</button>
<button>获取href属性值包含wolf的a标签</button>
<button>获取href属性值中以www开头且title中包含demo的a标签</button>
<button>获取type为text的表单元素</button>
```

#### 6.6、其它选择器(了解)

| 选择器语法 | 功能                                       |
| ---------- | ------------------------------------------ |
| :visible   | 获取所有可见的元素                         |
| :hidden    | 获取所有不可见元素，获取type为hidden的元素 |

| 选择器语法 | 功能                             |
| ---------- | -------------------------------- |
| :checked   | 获取表单中所有被选中的元素       |
| :selected  | 获取表单中所有被选中的option元素 |

| 选择器语法 | 功能                                    |
| ---------- | --------------------------------------- |
| :file      | 获取所有的文件上传元素                  |
| :image     | 获取所有的图片域                        |
| :text      | 获取所有的单行文本域                    |
| :reset     | 获取所有的重置按钮                      |
| :radio     | 获取所有的单选按钮                      |
| :button    | 获取所有的按钮                          |
| :submit    | 获取所有的提交按钮                      |
| :checkbox  | 获取所有的复选框                        |
| :password  | 获取所偶遇的密码框                      |
| :input     | 获取所偶遇的input、textarea、select元素 |

#### 6.7、父子兄选择器(重点)

parent() 获取当前标签的父节点
parents() 获取当前标签的祖先节点
parentsUntil() 获取当前标签的祖先节点直到… (不包含该标签)
children() 获取当前标签的子节点
siblings() 获取当前标签的兄弟节点

```html
	<script>
        $(function () {
            $("button").click(function () {
                // (1) 获取当前标签的父节点
                // $(".active").parent().css("border","1px solid #000");
                // (2) 获取当前标签的祖先节点 (可以指定就要body标签)
                // $(".active").parents("body").css("border","1px solid #000");
                //(3) 获取当前标签的祖先节点直到...(不包含指定的这个标签)
                $(".active").parentsUntil("body").css("border","1px solid #000");
            });
        })
    </script>
```

## 七、命名冲突的解决

```
今天我们一直在通过  $ 获取元素，如果  $ 已经作为其他变量在使用了，则可能发生命名冲突的问题，导致$ 不可用，可以通过以下方式解决：
```

```html
<script src="js/jquery-3.4.1.js"></script>
    <script>
        $(function(){

            //如果遇到$命名冲突，可以这么解决：
            jQuery("div").css("background", "green");

            //也可以通过以下方式解决:
            // var jq = $.noConflict();
            // jq("div").css("background", "pink");
            
        });

    </script>
```

## 八、JQuery对象和DOM对象的转换

```js
//  $("div")    通过JQuery选择器选出来的对象称为JQ对象
// 通过原生DOM方法 获取的标签称为原生DOM对象
// var odiv = document.getElementById("box");   //odiv为原生DOM对象


// 原生DOM对象不能直接调用JQ提供的方法
// 而JQ对象也不能直接使用原生js的属性和方法
// 都需要经过转换
```

```html
	<script>

        $(function(){

            // DOM对象转JQ对象
            var odiv = document.getElementById("box");
            console.log($(odiv));

            
            // JQ对象转DOM对象
            console.log($("div")[0]);    // 方式一
            console.log($("div").get(0));   // 方式二


        })
    </script>
```

