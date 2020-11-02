# Vue(组件化开发)

## 1. 深入响应式原理

> Vue 最独特的特性之一，是其非侵入性的响应式系统。数据模型仅仅是普通的 JavaScript 对象。而当你修改它们时，视图会进行更新。Vue里面是怎么做到的的呢？其实就是使用了`Object.defineProperty` 把Vue内的属性全部转成 `getter/setter`。`Object.defineProperty` 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。

 `Object.defineProperty` 实现了**对象劫持**这个功能

> <https://github.com/vuejs/vue/blob/1.0/src/observer/index.js>
>
> <https://github.com/vuejs/vue/blob/2.6/src/core/observer/index.js>



**语法：**

> Object.defineProperty(obj, prop, desc)
>
> 1. `obj` 需要定义属性的当前对象
> 2. `prop` 当前需要定义的属性名
> 3. `desc` 属性描述符



**数据属性：**

> 通过Object.defineProperty()为对象定义属性，有两种形式，分别为数据描述符，存取描述符，下面分别描述两者的区别：
>
> 1. `value` 表示它的默认值
> 2. `writable` 如果为true标识可以被修改，如果为false标识不能被修改（默认值为false）
> 3. `configrable` 描述属性是否配置，以及可否删除，可以认为是总开关 默认值 false（不可删除）
> 4. `enumerable` 描述属性是否出现在for in 或者 Object.keys()的遍历中 默认值false(不能遍历)



```js
let obj = {};
Object.defineProperty(obj, 'name', {
    value: '张三'
})
obj.name = '李四' //设置不成功，未允许
console.log(obj.name) // 张三
```



```js
let obj = {};
Object.defineProperty(obj, 'name', {
    value: '张三',
    writable: true //设置允许修改
})
obj.name = '李四'
console.log(obj.name)
```



```js
let obj = {};
  Object.defineProperty(obj, 'name', {
    value: '张三',
    writable: true,
    configurable: true, // 设置可以删除
    enumerable: true // 设置可循环遍历
  })
  obj.name = '李四'
  // delete obj.name
  console.log(obj.name) // 李四
  console.log(Object.keys(obj)) // ['name']
```



**存取属性：**

```js
let obj = {};
let temp = null;
Object.defineProperty(obj, 'name', {
    get() {
        return temp
    },
    set(val) {
        temp = val
    }
})
obj.name = '李四'
console.log(obj.name)
```



## 2. 自定义指令

除了一些内置的制定（v-model和v-show...）,Vue也允许注册自定义指令。

```js
// 注册一个全局自定义指令 v-focus
Vue.directive('demo', {
  bind:function(el,binding,vnode){
    if(binding.modifiers.num){
      el.innerHtml = "判断修饰符，来改变节点内容"
      
      //这里相当于就可以模仿v-show，来进行js底层实现
      //如果binding.value为true或者false，达成节点的display的显示和隐藏 -- 触发修改时，需要绑定函数updata，来获取vlaue并绑定修改
    }
  }
  
	inserted: function (el, binding, vnode) {
		// 
		console.log(el, binding, vnode);
   
	}
})
```



```
// 组件中注册局部指令
new Vue({
	el: '#app',
	data: {},
	directives: {
		demo: {
			inserted: function (el, binding, vnode) {
				cosnole.log(el, binding, vnode);
			}
		}
	}
})
```



```html
// 在模板中使用自定义指令
<div v-demo>
    
</div>
```



**钩子函数：**

- `bind` : 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- `inserted` ：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
- `update`：所在组件的 VNode （虚拟节点）更新时调用，**但是可能发生在其子 VNode 更新之前**。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
- `componentUpdated`：指令所在组件的 VNode **及其子 VNode** 全部更新后调用。
- `unbind`：只调用一次，指令与元素解绑时调用。

接下来我们来看一下钩子函数的参数 (即 `el`、`binding`、`vnode` 和 `oldVnode`)。



**钩子函数的参数：**

- `el`：指令所绑定的元素，可以用来直接操作 DOM 。
- `binding`：一个对象，包含以下属性：
  - `name`：指令名，不包括 `v-` 前缀。
  - `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
  - `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
  - `expression`：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"` 中，表达式为 `"1 + 1"`。
  - `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`。
- `vnode`：Vue 编译生成的虚拟节点。
- `oldVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用。



> 实现类似v-show的自定义指令

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
  <div id="app">
    <p v-demo="status">12</p>
    <button @click="status = !status">取反</button>
  </div>
</body>
<script>
const vm = new Vue({
  el: '#app',
  data: {
    status: true
  },
  directives: {
    demo: {
      inserted(el, binding, vnode) {
        console.log(el, binding)
        if (binding.value) {
          el.style.display = 'block'
        } else {
          el.style.display = 'none'
        }
      },
      update(el, binding, vnode, oldVnode){
        console.log(el, binding)
        if (binding.value) {
          el.style.display = 'block'
        } else {
          el.style.display = 'none'
        }
      }
    }
  }
})
</script>
</html>
```



## 3. 组件化简介

### 1. 什么是组件化？（页面结构）

> 面对复杂问题的处理方式，把问题拆解成很多个能处理的小问题，再将其放在整体中，会发现大的问题也会迎刃而解。
>
> 而组件化的思想也类似：
>
> 1. 如果我们实现一个页面结构和逻辑非常复杂的页面时，如果全部一起实现会变得非常复杂，而且也不利于后续的维护和迭代功能。
> 2. 但如果我们这时候把页面分成一个个小的功能块，每个功能块能完成属于自己这部分独立的功能，那么整个页面之后的维护和迭代也会变得非常容易。



### 2. Vue组件化思想

> 组件化是Vue重要的思想
>
> 1. 它提供了一种抽象，让我们可以开发出一个个独立可复用的小组件来构造我们的应用。
> 2. 任何的应用都会被抽象成一颗组件树。

![1568877913978](img/1568877913978.png)

> 组件化思想的应用开发：
>
> 1. 有了组件化的思想，我们在之后的开发中就要充分的利用它。
> 2. 尽可能的将页面拆分成一个个小的、可复用的组件。
> 3. 这样让我们的代码更加方便组织和管理，并且扩展性也更强。



### 3. 全局组件

> 通过`Vue component('组件名称', {})`，通过这个方法注册的都是全局组件，也就是他们再注册之后可以用在任何新创建的`Vue` 实例挂载的区域内。



```html
<body>
  <div id="app">
    <my-con></my-con>
    <div>
      <my-con></my-con>
    </div>
  </div>
  <my-con></my-con>
</body>
<script>
  Vue.component('my-con', {
    template: '<section><h3>组件标题</h3><p>组件内容</p></section>'
  })
  const vm = new Vue({
    el: '#app'
  })
</script>
```

> 上面案例中，在`<div id="app">...</div>` 外的组件 `my-con` 没有替换成组件真正的页面结构，是因为 `new Vue()` 挂载在 `id=app` 的节点上，不在这个节点上标签，不会受到Vue的影响。



### 4. 局部组件

> 通过 `Vue.component` 方式注册的组件，称之为全局组件。任何地方都可以使用。全局注册往往是不够理想的。比如，如果你使用一个像 webpack 这样的构建系统，全局注册所有的组件意味着即便你已经不再使用一个组件了，它仍然会被包含在你最终的构建结果中。这造成了用户下载的 JavaScript 的无谓的增加。



**注册局部组件**

```html
<body>
  <div id="app">
    <my-con></my-con>
    <div>
      <my-con></my-con>
    </div>
  </div>
  <div id="app1">
    <my-con1></my-con1>
  </div>
</body>
<template id="template1">
  <section>
    <h3>组件标题</h3>
    <p>组件内容</p>
  </section>
</template>
<template id="template2">
  <section>
    <h3>组件标题B</h3>
    <p>组件内容B</p>
  </section>
</template>
<script>
  var componentA = {
    template: '#template1'
  }

  var componentB = {
    template: '#template2'
  }
  const vm = new Vue({
    el: '#app',
    components: {
      'my-con': componentA
    }
  })
  const vm1 = new Vue({
    el: '#app1',
    components: {
      'my-con1': componentB
    }
  })
</script>
```



**父组件和子组件**

> 组件和组件之间存在层级关系，而其中一种最重要的关系就是父子组件关系。    



### 5. 组件可以访问Vue实例数据吗？

![1568884635108](img/1568884635108.png)

![1568884656744](img/1568884656744.png)



> 那组件如果要使用data定义自己属性保存数据要怎么做呢？
>
> 1. 组件对象也有一个data的属性（也有methods等属性，下面我们有用到）
> 2. 只是这个data属性必须是一个函数，而且函数返回一个对象 ，对象保存着数据



```html
<body>
  <div id="app">
    <my-con></my-con>
    <div>
      <my-con></my-con>
    </div>
  </div>
  <div id="app1">
    <my-con1></my-con1>
  </div>
</body>
<template id="template1">
  <section>
    <h3>{{title}}</h3>
    <p>组件内容</p>
  </section>
</template>
<template id="template2">
  <section>
    <h3>{{title}}B</h3>
    <p>组件内容B</p>
    <aa></aa>
  </section>
</template>
<script>
  var componentA = {
    template: '#template1',
    data() {
      return {
        title: 'zujianbiaoti'
      }
    }
  }

  var componentB = {
    template: '#template2',
    data() {
      return {
        title: 'zj'
      }
    },
    components: {
      'aa': {
        template: '<div>aa</div>'
      }
    }
  }
  const vm = new Vue({
    el: '#app',
    data: {title: '组件标题'},
    components: {
      'my-con': componentA
    }
  })
  const vm1 = new Vue({
    el: '#app1',
    components: {
      'my-con1': componentB
    }
  })
</script>
```

> 为什么data在组件中必须是一个函数呢？
>
> 原因是在于Vue让每个组件对象都返回一个新的对象，因为如果是同一个对象的，组件在多次使用后会相互影响。



### 6. 父子组件间的通讯

#### 父级向子级传递

> 在组件中，使用选项props来声明需要从父级接收到的数据。
>
> props的值有两种方式：
>
> 1. 字符串数组，数组中的字符串就是传递时的名称。
> 2. 对象，对象可以设置传递时的类型（String，Number，Boolean，Array， Object，Date，Function，Symbol），也可以设置默认值等。



```html
<body>
  <div id="app1">
    <my-con1></my-con1>
  </div>
</body>

<template id="template2">
  <section>
    <h3>{{title}}B</h3>
    <p>组件内容B</p>
    <!-- my-con1组件内的aa组件 --> 
    <aa v-bind:parent-txt="childtxt"></aa>
  </section>
</template>
<script>
  var componentB = {
    template: '#template2',
    data() {
      return {
        title: 'zj',
        childtxt: 'child text'
      }
    },
    components: {
      'aa': {
        template: '<div>{{parentTxt}}</div>',
        props: ['parentTxt']
      }
    }
  }
  
  const vm1 = new Vue({
    el: '#app1',
    components: {
      'my-con1': componentB
    }
  })
</script>
```



#### 子级向父级传递

> 父组件向子组件传递数据，通过自定义事件

```html
<body>
  <div id="app1">
    <my-con1></my-con1>
  </div>
</body>

<template id="template2">
  <section>
    <h3>{{title}}B</h3>
    <p>组件内容B</p>
    <aa v-bind:parent-txt="childtxt" v-on:changetitle="changeTitle"></aa>
  </section>
</template>
<script>
  var componentB = {
    template: '#template2',
    data() {
      return {
        title: 'zj',
        childtxt: 'child text'
      }
    },
    components: {
      'aa': {
        template: '<div v-on:click="change">{{parentTxt}}</div>',
        props: ['parentTxt'],
        methods: {
          change() {
            this.$emit('changetitle', {
              a: 1
            })
          }
        }
      }
    },
    methods: {
      changeTitle(obj) {
        console.log(obj)
        this.title = obj.a
      }
    }
  }

  const vm1 = new Vue({
    el: '#app1',
    components: {
      'my-con1': componentB
    }
  })
</script>
```

> 案例分析：
>
> 1. 现在的需求是点击子组件`aa` 然后把父组件`my-con1`上的标题给改变；
> 2. 首先，在父组件的具体页面结构找到子组件`aa` ，在子组件`aa` 上使用`v-on:changetitle="changeTitle"` , `changetitle`是子组件的自定义事件名称，`changeTitle`是父组件`my-con1`里的`methods`属性定义的方法；
> 3. 其次，在子组件`aa`里为div绑定点击事件 `v-on:click="change"`, 在子组件`aa`里的methods定义change方法，change方法里使用`this.$emit('changetitle')`，使用$emit方法来触发绑定在子组件上的自定义事件，$emit第一个参数就是上一步定义的自定义事件`changetitle`,第二个参数就是传递到父组件的参数，可以不传。



**弹窗例子:**

![1568945029817](img/1568945029817.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }
    html,body, #app1{
      width: 100%;
      height: 100%;
    }
    
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0, 0.3);
    }
    .content {
      width: 220px;
      height: 160px;
      background-color: #fff;
    }
    .title {
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
    .msg {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 5px 10px;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      height: 80px;
      text-align: center;
      color: gray;
      font-size: 14px;
    }
    .bottom {
      display: flex;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
    .bottom div {
      flex: 1;
      color: green;
    }
    .bottom div:nth-of-type(1) {
      border-right: 1px solid #eee;
      color: red;
    }
  </style>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
  <div id="app1">
    <my-con v-show="showCon" :txt-obj="textObj" @btn-handle="handleBtnClick"></my-con>
  </div>
</body>

<template id="template1">
    <div class="wrapper">
        <div class="content">
          <p class="title">{{txtObj.title}}</p>
          <div class="msg">{{txtObj.msg}}</div>
          <div class="bottom">
            <div @click="cancel">{{txtObj.cancelTxt}}</div>
            <div @click="submit">{{txtObj.submitTxt}}</div>
          </div>
        </div>
      </div>
</template>
<script>
  var componentA = {
    template: '#template1',
    props: {
      txtObj: {
        type: Object,
        default: {}
      }
    },
    methods: {
      cancel() {
        // 自定义事件名称建议全小写
        this.$emit('btn-handle', 'cancel')
      },
      submit() {
        // 自定义事件名称建议全小写
        this.$emit('btn-handle', 'submit')
      },
    }
  }
  const vm1 = new Vue({
    el: '#app1',
    data: {
      textObj: {
        title: 'bug提示',
        msg: '亲，你还有53633个bug，是否要处理?',
        cancelTxt: '忽略，下班',
        submitTxt: '加班处理'
      },
      showCon: true
    },
    components: {
      myCon: componentA
    },
    methods: {
      handleBtnClick(type) {
        console.log(type)
        if (type === 'cancel') {
          this.showCon = false
        }
      }
    }
  })
</script>

</html>
```



#### 非父子组件通讯

> 实际工作中如果遇到跨组件或者非父组件间的传递数据，那该怎么办？第一个可以使用中央事件总线，也就是一个中介来完成。第二个就是使用 `Vuex` 提供的功能，这里先暂时不讨论这种方案，后续专门学习Vuex。



**案例：**点击按钮1，改变按钮2的背景颜色

![1568942668557](img/1568942668557.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>

<body>
  <div id="app1">
    <my-con></my-con>
    <my-con1></my-con1>
  </div>
</body>

<template id="template1">
  <button @click="click1">按钮1</button>
</template>
<template id="template2">
  <button @click="click2" :style="{backgroundColor: fontColor}">按钮2</button>
</template>
<script>
  const bus = new Vue();
  const componentA = {
    template: '#template1',
    methods: {
      click1() {
        // 点击按钮1
        bus.$emit('xxx', this.getRandomColor());
      },
      getRandomColor() {
        return `rgb(${this.getRandomNum()},${this.getRandomNum()},${this.getRandomNum()})`
      },
      getRandomNum() {
        return Math.floor(Math.random() * 256)
      }
    }
  }
  const componentB = {
    template: '#template2',
    data() {
      return {
        fontColor: ''
      }
    },
    methods: {
      click2() {
        // 点击按钮2
      }
    },
    mounted() {
      bus.$on('xxx', (color) => {
        console.log(color)
        this.fontColor = color
      })
    }
  }
  const vm1 = new Vue({
    el: '#app1',
    components: {
      myCon: componentA,
      myCon1: componentB
    }
  })
</script>

</html>
```

### 7. 编译作用域（掌握）

> 父组件模板的所有东西都会在父级作用域内编译；子组件模板的所有东西都会在子级作用域内编译。
>
> 也就是说父组件上的数据，只能在父组件上修改，不能传递到子组件里修改。



