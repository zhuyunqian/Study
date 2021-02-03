

## 一、Express框架简介

在前面Node基础中我们学习了 **Node.js 中的 http 模块**，虽然知道使用 Node.js 中的 http 模块是可以开发 Web 应用的，处理静态资源，处理动态资源，请求分发（路由）等等，也可以让开发者对 HTTP 协议的理解更加清晰，但是使用起来比较复杂，开发效率低。

npm 提供了大量的第三方模包，其中不乏许多 Web 框架，我们没有必要重复发明轮子，因而选择使用 [Express](http://www.expressjs.com.cn/) 作为开发框架，因为它是目前最稳定、使用最广泛，而且 Node.js 官方推荐的唯一一个 Web 开发框架。除了为 http 模块提供了更高层的接口外，还实现了许多功能，其中包括：

- 静态文件服务；
- 路由控制；
- 模板解析支持；
- 动态视图；
- 用户会话；
- CSRF 保护；
- 错误控制器；
- 访问日志；
- 缓存；
- 插件支持。

官网：<http://www.expressjs.com.cn/> 

express 是一个基于`内置核心 http 模块`的，一个`第三方的包`，专注于 `web 服务器`的构建。

## 二、使用Express搭建服务器的Hello world程序

- 首先创建一个名为 myapp 的目录，在命令行输入并运行 **yarn init -y** （或者 npm init -y）。 
- 使用 **yarn add express --save** （或者 npm install express --save）安装 Express 包；
- 其次在 myapp 目录中，创建一个名为 app.js 的文件，并复制下面示例中的代码。

```js
// 1、引入express模块并创建express对象
const express = require('express');
const app = express();

// 2、书写处理请求的方法，来响应请求
app.get('/', (req, res) => {
    // 这里的代码在浏览器以get请求/的时候执行，  
    // 这个函数就是用来处理浏览器的 对于/的get请求 的
    // 第一个参数req是请求头对象，里面包含请求头信息
    // 第二个参数res用来做响应
    console.log(req);
    
    res.send('Hello World!222');
});

// 3、监听端口
app.listen(3000, () => {
    //这里的代码服务器刚启动的时候执行1次
    console.log('Example app listening on port 3000!')
});
```

使用 node app.js 启动应用，访问 http://localhost:3000/ 就可以看到效果。

## 三、使用Express对get请求方式的处理

### 3.1、返回页面

myapp 目录下新建views文件夹放入register.html页面。

register.html中：

```html
<h1>注册页面11</h1>
<hr>
<form action="/register" method="POST" enctype="application/x-www-form-urlencoded">
    <p>
        用户名：<input type="text" name="username" placeholder="请输入用户名...">
    </p>
    <p>
        邮箱：<input type="text" name="email" placeholder="请输入email...">
    </p>
    <p>
        密码：<input type="password" name="password">
    </p>
    <p>
        确认密码：<input type="password" name="repwd">
    </p>
    <p>
        <input type="submit" value="注册提交">
    </p>
</form>
```

在app.js 中:

```js
const express = require('express');
const app = express();

// 1、引入fs和path模块
const fs = require("fs");
const path = require("path");

// 2、处理/register的get请求
app.get('/register', (req, res) => {
    //读取页面内容，并返回这个页面
    let pathName = path.join(__dirname, 'views', "register.html");
    const regPage = fs.readFileSync(pathName, "utf-8");
    res.send(regPage);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
```

### 3.2、获取查询参数

```js
app.get('/index', (req, res) => {
    let ret = req.query   // 获取到一个对象
    res.send(ret.curPage);

    //可以在请求的时候传入查询参数：
    //http://localhost:3000/index?curPage=3&perPage=10
});
```

## 四、使用Express对post请求方式的处理

### 4.1、post请求处理格式

```js
app.post('/register', (req, res) => {
    //可以在回调函数中，获取请求参数(用户在页面填写的信息)，并进行处理
    res.send("post---");
});
```

### 4.2、获取请求参数

我们使用第三方的包body-parser ，更加简便专业地处理请求参数

首先，项目目录下安装body-parser:

```
yarn add body-parser  或者  npm install body-parser
```

使用body-parser获取请求参数：

```js
// 1、引入body-parser
const bodyParser = require('body-parser')

// 2、bodyParser功能添加到项目app中
// parse application/x-www-form-urlencoded   针对普通页面提交功能
app.use(bodyParser.urlencoded({ extended: false }))  //false接收的值为字符串或者数组，true则为任意类型
// parse application/json    
app.use(bodyParser.json())   // 解析json格式

// 3、在接口中获取请求参数 req.body
app.post('/register', (req, res) => {
    // 可以在回调函数中，获取请求参数(用户在页面填写的信息)

    // 获取请求参数
    console.log(req.body);
    
    // 获取到请求参数之后就可以在这里处理这些请求参数，比如保存到数据库中(后面我们学习数据库知识)

    res.send("post ok");
});
```

## 五、重定向到其他接口

一般注册成功之后可以跳转到登录页面，这就是重定向

我们使用  res.redirect('/login'); 来实现跳转到另外一个接口进行处理

```js
// 添加登录页面的接口
app.get('/login', (req, res) => {
    //读取页面内容，并返回这个页面
    let pathName = path.join(__dirname, 'views', "login.html");
    const loginPage = fs.readFileSync(pathName, "utf-8");
    res.send(loginPage);
});

app.post('/register', (req, res) => {
    // 可以在回调函数中，获取请求参数(用户在页面填写的信息)

    // 获取请求参数
    console.log(req.body.username);
    
    // 一般注册成功之后可以跳转到登录页面，这就是重定向
    res.redirect('/login');   // 重定向到'/login'接口，对应的接口函数会执行
});
```

## 六、all() 方法合并同个请求路径的不同方式

针对上面案例 /register 请求的方式可以有两种GET和POST，Express提供了合并书写接口的all()方法：

```js
app.all('/register',(req, res) => {
    let method = req.method
    if(method==='GET'){
        //读取页面内容，并返回这个页面
        let pathName = path.join(__dirname, 'views', "register.html");
        const regPage = fs.readFileSync(pathName, "utf-8");
        res.send(regPage);
    }else if(method==='POST'){
        console.log(req.body.username);
        
        // 一般注册成功之后可以跳转到登录页面，这就是重定向
        res.redirect('/login');    
    }
    
})
```

## 七、使用Express获取静态资源

```js
const express = require('express');
const app = express();


// 获取静态资源
// app.use(express.static("public"))  
// "public"表示指定在本地public下找静态资源 
// 请求： localhost:3000/images/01.jpg  


// 如果想要在请求的路径里面添加前缀
app.use("/static", express.static("public"))
// localhost:3000/static/images/01.jpg     // 可能有延迟，如果延迟尝试重启服务器或者浏览器


app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
```

## 八、使用Express渲染模板页面

我们采用的是art-templates模板引擎

文档网址：<http://aui.github.io/art-template/zh-cn/express/index.html> 

使用之前需要安装 art-template和express-art-template

```
yarn add art-template   或者   npm install art-template
yarn add express-art-template  或者  npm install express-art-template
```

 在views目录下新建index.html

```js
// 1、修改模板引擎为html，导入express-art-template
app.engine('html', require('express-art-template'));
// 2、设置运行的模式为生产模式
// production 生产模式，线上模式
// development 开发模式
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
// 3、设置模板存放目录为views文件夹
app.set('views', path.join(__dirname, 'views'));
// 4、设置引擎后缀为html
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('index') //通过render返回该模板
});
```

## 九、art-templates模板引擎的使用

使用语法： <http://aui.github.io/art-template/zh-cn/docs/syntax.html> 

我们可以把数据从后端接口传入到前端页面中，这也是我们为什么用模板引擎的原因。

```js
app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get('/', (req, res) => {
    let data = {
        user:{
            id:1,
            name: "Jack",
            age:18,
            job: "coder"
        },
        books:["《西游记》", "《三国演义》","《红楼梦》", "《水浒传》"],
        num1:20,
        num2:30
    }
    res.render('index', data);   // 把data数据传入到index.html页面中。
});
```

在views下的index.html中：

```html
<body>
    <h1>这是首页</h1>
    <hr>
    <div>{{ user.id }}</div>
    <div>{{ user.name }}</div>
    <div>{{ user.age }}</div>
    <div>{{ user['age'] }}</div>
    <ul>
        {{each books}}
        <li>{{$index}}、{{$value}}</li>
        {{/each}}
    </ul>
    <p>num1和num2中比较大的那个数是： {{num1>num2?num1:num2}}</p>
    {{ if user.name === "Jacka"}}
        <p>{{ user.name }}的年龄是{{ user.age }}</p>
    {{/if}}
</body>
```

类似的模板引擎还有 ejs 模板引擎 <https://ejs.bootcss.com/> 

## 十、在项目中使用路由

在项目中，我们不会把路由接口直接书写在项目入口文件中。

我们第六节中的路由抽取出来，项目文件夹下新建routes文件夹，新建passport.js:

```js
// 抽取路由
const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require("path");


router.get('/login', (req, res) => {
    //读取页面内容，并返回这个页面
    let pathName = path.join(__dirname, '../views', "login.html");
    const loginPage = fs.readFileSync(pathName, "utf-8");
    res.send(loginPage);
});


router.all('/register',(req, res) => {
    let method = req.method
    if(method==='GET'){
        //读取页面内容，并返回这个页面
        let pathName = path.join(__dirname, '../views', "register.html");
        const regPage = fs.readFileSync(pathName, "utf-8");
        res.send(regPage);
    }else if(method==='POST'){
        console.log(req.body.username);
        
        // 一般注册成功之后可以跳转到登录页面，这就是重定向
        res.redirect('/login');    
    }
    
})

module.exports = router
```

在项目入口文件app.js中：

```js
const express = require('express');
const app = express();

// 1、引入对应的路由模块
const passportRouters = require('./routes/passport');


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// 2、书写的路由添加到app上
app.use(passportRouters)


app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
```

## 十一、处理请求之前的勾子函数

**这个功能在此先做了解，后面在项目中再去用。**

如果在执行处理请求的函数之前想执行一些代码，例如验证是否已经登录的工作。

可以在app.use(**utils.checkLogin**, routers);  前面添加一个函数

新建utils文件夹，新建index.js文件：

```js
function checkLogin(req, res, next){
    console.log("执行接口代码之前会执行这里的代码");


    next();  //直接跳入请求的接口执行代码
}

module.exports = {
    checkLogin
}
```

在项目入口函数app.js中：

```js
// 项目中使用路由
const express = require('express');
const app = express();

// 1、引入对应工具模块
const utils = require('./utils/index.js');

const passportRouters = require('./routes/passport');


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// 2、补上执行接口函数之前所执行的函数
app.use(utils.checkLogin, passportRouters)


app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
```

效果：在执行routers下面每一个接口之前，都会执行checkLogin函数里面的代码。

应用：这可以用来我们后面在项目中做验证登录工作。
