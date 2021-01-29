## 小练习

实现一个，数字转大写的功能      如：  123    转   壹佰贰拾叁

在  https://www.npmjs.com  上搜索功能关键字

找对应可能用上的包，参考文档，进行安装，使用

## 一、常用npm命令镜像源介绍（见附录npm.md）

## 二、npm install项目协同

目前如果把开发完的项目进行分享给同事应该怎么做？

**一般项目共享前，先把node_modules文件夹删除**

情景：

小明把它开发好的前端项目打包好发给你（这个项目文件夹中是没有node_modules文件夹的）。

此时，如果我们立刻启动项目，是会报错的，因为缺少了项目依赖的包，找不到需要的包。

在项目文件夹中执行 npm install  ，后面不跟包名，则自动查找package.json文件中的dependencies字段所对应的值的这些包，进行下载安装。 

如何启动项目？  （看package.json文件中的script字段有没有启动命令）

**npm run start**     

npm run是固定写法，start看的是package.json文件中script字段下的启动项目那句命令的属性。实际上这句命令的本质，就是在执行 start所对应的这个命令

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js",
    "dev": "node test.js",
    "build": "node build.js"
},
    
//三个注意点：
    //1、所有引号必须为双引号。
    //2、最后一项键值对后面不能有逗号。
    //3、这个package.json文件不能写注释
```

## 三、yarn安装与使用

`Yarn` 是于 2016 年 10 月 由 Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具，旨在取代 npm 这种包管理工具。

官网：
https://yarnpkg.com/en/docs

中文参考链接：
https://yarn.bootcss.com/



**特点**：

- 速度超快

> yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。 同时利用并行下载以最大化资源利用率，因此安装速度更快。

- 超级安全

> 在执行代码之前，yarn 会通过算法校验每个安装包的完整性。

- 超级可靠

> 使用详细、简洁的锁文件格式和明确的安装算法，yarn 能够保证在不同系统上无差异的工作。

**安装**:

管理员模式运行cmd   ：**npm install -g yarn**



**常用命令**：

| npm                          | yarn                     |
| ---------------------------- | ------------------------ |
| npm init -y                  | yarn init -y             |
| npm install react --save     | yarn add react           |
| npm uninstall react --save   | yarn remove react        |
| npm install react --save-dev | yarn add react --dev     |
| npm update --save            | yarn upgrade             |
| npm install -g @vue/cli      | yarn global add @vue/cli |

yarn init -y

yarn add md5

yarn add nzh



**yarn 全局安装后，命令不生效**

背景：

1. 执行 `yarn global add @vue/cli` 后，重启 `bash......`， vue 命令依然不生效
2. 而 npm 全局安装（npm install -g @vue/cli）后，命令生效

解决办法：

1.执行如下命令，得出 yarn 全局安装的命令所处的安装目录

```shell
yarn global bin 
```

2.复制安装目录至电脑的环境变量中
![](https://img-blog.csdnimg.cn/2018110718150477.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MTY0MzEzMw==,size_16,color_FFFFFF,t_70)

3.重新启动终端，发现全局命令行可以生效了



## 四、nodejs不支持ES6模块化规范的解决方案

在项目目录下新建src文件夹，src文件夹下新建m1.js模块和app.js模块：

m1.js模块中到处数据：

```js
export let name = "nodejs";
export let age = 11;
```

app.js中导入模块：

```
import {name,age} from "./m1.js"
```

此时运行app.js会报错！！！   SyntaxError: Unexpected token {

注意：**nodejs 不支持 es6 模块化规范**。
可以把这个代码转换一下，然后把 es6 规范转换为 commonjs 规范
学语法，兼容性如何不用管，可以交给第三方的转换工具（babel-cli 和 browserify）实现

解决：

1、在项目文件夹下生成生成 package.json 文件 

```shell
yarn init -y 或者  npm init -y
```

2、安装第三方工具:

在任意目录下执行，全局安装babel-cli 和 browserify：

```shell
yarn global add babel-cli browserify  或者  npm install babel-cli browserify -g        
```

在自己项目目录下执行：

```shell
yarn add babel-preset-es2015   或者   npm install babel-preset-es2015 --save-dev 
```

3、在项目根目录新建 .babelrc 文件 : 

```
{
  "presets": [
    "es2015"
  ]
}
```

4、在src目录下书写完代码后，执行:

```shell
babel src -d lib
```

(如果出现babel 不是内部或者外部命令，请按照第七点最后的yarn 全局安装后，命令不生效的解决办法)

5、运行lib下的app.js即可     node lib\app.js

（记得，修改代码需要执行babel src -d lib命令后，再运行lib下的app.js）

## 五、ES6模块化规范语法

导出数据方式一：

```js
export let name = "nodejs";
export let age = 11;
```

导出数据方式二：

```js
let name = "nodejs";
let age = 11;

export {name, age}
```

针对导出数据的前两种方式的导入数据：

```js
import {name,age} from "./m1.js"
```



导出数据方式三：

```js
// 默认导出只能写一次
export default {name, age}
```

导入并使用数据：

```js
import m3 from "./m3"
console.log(m3.name);
console.log(m3.age);
```



在es6中的默认导出的写法，允许和前面的导出方式一起写：

导出数据：

```js
let name = "nodejs";
let age = 11;

export let email = "nodejs@163.com";

// 默认导出只能写一次
export default {name, age}
```

导入并使用数据：

```js
import m3, {email} from "./m3"

console.log(m3.name);
console.log(m3.age);
console.log(email);
```



## 六、Promise 的基本使用

#### 6.1、Promise 简介

Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了`Promise`对象。

所谓`Promise`，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

`Promise`对象有以下两个特点。

（1）对象的状态不受外界影响。`Promise`对象代表一个异步操作，有三种状态：`pending`（进行中）、`fulfilled`（已成功）和`rejected`（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是`Promise`这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。`Promise`对象的状态改变，只有两种可能：从`pending`变为`fulfilled`和从`pending`变为`rejected`。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对`Promise`对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

#### 6.2、Promise 的基本使用

新建的Promise就是一个容器，里面可以存放异步操作，也可以存放同步操作

```js
const fs = require("fs");
const path = require("path");

let filePath = path.join(__dirname, "files", "3.txt");

// 异步操作可能成功或者失败
// 第一个形参resolve ， 成功的时候执行的函数
// 第二个形参reject ， 失败的时候执行的函数
let p1 = new Promise((resolve, reject)=>{
    //1、同步代码
    console.log("同步代码");

    // pending（进行中）、fulfilled（已成功）和rejected（已失败）
    //2、异步代码
    fs.readFile(filePath,"utf-8",(error1, data1)=>{
        if(error1){
            //失败的时候做的事情
            reject(error1)；    // 调用后面p1.then的第二个函数
        }
        //读取完之后做的事情
        resolve(data1)；    // 调用后面p1.then的第二个函数
    })
});

p1.then((data1)=>{
    console.log("读取成功", data1);
},(error1)=>{
    console.log("读取失败", error1);
});
```

#### 6.3、Promise的then链式调用的特点

链式调用的特点：
1、第一个then执行完会执行第二个then
2、then里面的函数的返回值，会被下一个then的形参接收
3、如果返回的是一个promise对象，下一个then的形参接收到的不是这个promise对象，而是这个promise对象内部调用resolve时候的实际参数

```js
const fs = require("fs");
const path = require("path");

let filePath = path.join(__dirname, "files", "3.txt");

// 新建的Promise就是一个容器，里面可以存放异步操作，也可以存放同步操作

// 异步操作可能成功或者失败
// 第一个形参resolve ， 成功的时候执行的函数
// 第二个形参reject ， 失败的时候执行的函数
let p1 = new Promise((resolve, reject)=>{
    //1、同步代码
    // console.log("同步代码");

    // pending（进行中）、fulfilled（已成功）和rejected（已失败）
    //2、异步代码
    fs.readFile(filePath,"utf-8",(error1, data1)=>{
        if(error1){
            //失败的时候做的事情
            reject(error1)
        }
        //读取完之后做的事情
        resolve("resolve的形参")
    })
});

//业内把promise then的写法被称为开火车开发

p1.then((data1)=>{
    return p1
},(error1)=>{
    console.log("读取失败", error1);
    return error1
}).then((data)=>{
    console.log(data);   // “resolve("resolve的形参")
});
```

## 七、使用promise实现之前文件读取的案例

#### 7.1、基础版

```js
//基础版
const fs = require("fs");
const path = require("path");

let filePath1 = path.join(__dirname, "files", "1.txt");
let filePath2 = path.join(__dirname, "files", "2.txt");
let filePath3 = path.join(__dirname, "files", "3.txt");


let p1 = new Promise((resolve, reject)=>{
    //1、同步代码
    // console.log("同步代码");

    // pending（进行中）、fulfilled（已成功）和rejected（已失败）
    //2、异步代码
    fs.readFile(filePath1,"utf-8",(error1, data1)=>{
        if(error1){
            //失败的时候做的事情
            reject(error1);
        }
        //读取完之后做的事情--成功调取
        resolve(data1)
    })
});
let p2 = new Promise((resolve, reject)=>{
    //1、同步代码
    // console.log("同步代码");

    // pending（进行中）、fulfilled（已成功）和rejected（已失败）
    //2、异步代码
    fs.readFile(filePath2,"utf-8",(error1, data1)=>{
        if(error1){
            //失败的时候做的事情
            reject(error1);
        }
        //读取完之后做的事情
        resolve(data1)
    })
});
let p3 = new Promise((resolve, reject)=>{
    //1、同步代码
    // console.log("同步代码");

    // pending（进行中）、fulfilled（已成功）和rejected（已失败）
    //2、异步代码
    fs.readFile(filePath3,"utf-8",(error1, data1)=>{
        if(error1){
            //失败的时候做的事情
            reject(error1)
        }
        //读取完之后做的事情
        resolve(data1)
    })
});

let str1 = "";

p1.then((data)=>{
    str1+=data;
    return p2
},(error1)=>{
    console.log("读取文件1失败", error1);
    return error1
}).then((data)=>{
    str1+=data;
    return p3;
}).then((data)=>{
    str1+=data;
    console.log(str1);
});

```

#### 7.2、封装函数版

```js
const fs = require("fs");
const path = require("path");

let filePath1 = path.join(__dirname, "files", "1.txt");
let filePath2 = path.join(__dirname, "files", "2.txt");
let filePath3 = path.join(__dirname, "files", "3.txt");

function readFilePromise(filePath){
    return new Promise((resolve, reject)=>{

        fs.readFile(filePath,"utf-8",(error1, data1)=>{
            if(error1){
                //失败的时候做的事情
                reject(error1);
            }
            //读取完之后做的事情
            resolve(data1)
        })
    });
}

let str1 = "";

readFilePromise(filePath1).then((data)=>{
    str1+=data;
    return readFilePromise(filePath2)
},(error1)=>{
    console.log("读取文件1失败", error1);
    return error1
}).then((data)=>{
    str1+=data;
    return readFilePromise(filePath3);
}).then((data)=>{
    str1+=data;
    console.log(str1);
});
```

#### 7.3、util版本

node中有一个util工具模块下，有一个promisify方法，这个方法相当于封装了一个返回promise对象的函数。

文档网址：<http://nodejs.cn/api/util.html#util_util_promisify_original> 

传入一个遵循常见的错误优先的回调风格的函数（即以 `(err, value) => ...` 回调作为最后一个参数），并返回一个返回 promise 的版本。 

```js
let readFilePromise = util.promisify(fs.readFile);  //这一句代码相当于下面的整个函数的代码
// function readFilePromise(filePath){
//     return new Promise((resolve, reject)=>{
//
//         fs.readFile(filePath,"utf-8",(error1, data1)=>{
//             if(error1){
//                 //失败的时候做的事情
//                 reject(error1);
//             }
//             //读取完之后做的事情
//             resolve(data1)
//         })
//     });
// }

// 总结 ：util.promisify(fs.readFile) 得到一个promise对象
```

完整代码：

```js
const fs = require("fs");
const path = require("path");
const util = require("util");

let filePath1 = path.join(__dirname, "files", "1.txt");
let filePath2 = path.join(__dirname, "files", "2.txt");
let filePath3 = path.join(__dirname, "files", "3.txt");
let filePath4 = path.join(__dirname, "files", "data.txt");

let readFilePromise = util.promisify(fs.readFile); 
let writeFilePromise = util.promisify(fs.writeFile);

let str1 = "";

readFilePromise(filePath1).then((data)=>{
    str1+=data;
    return readFilePromise(filePath2)
},(error1)=>{
    console.log("读取文件1失败", error1);
    return error1
}).then((data)=>{
    str1+=data;
    return readFilePromise(filePath3);
}).then((data)=>{
    str1+=data;
    console.log(str1);
    writeFilePromise(filePath4, str1);
});
```

#### 7.4、all版本(请先学习今天第八大点的 all方法的使用)

```js
const fs = require("fs");
const path = require("path");
const util = require("util");

let filePath1 = path.join(__dirname, "files", "1.txt");
let filePath2 = path.join(__dirname, "files", "2.txt");
let filePath3 = path.join(__dirname, "files", "3.txt");
let filePath4 = path.join(__dirname, "files", "data.txt");

let readFilePromise = util.promisify(fs.readFile);  //这一句代码相当于下面的整个函数的代码
let writeFilePromise = util.promisify(fs.writeFile);

Promise.all([readFilePromise(filePath1,"utf-8"), readFilePromise(filePath2,"utf-8"),readFilePromise(filePath3,"utf-8")]).then((data)=>{
    let str1 = data.join("");
    writeFilePromise(filePath4,str1);
}).catch((error)=>{
    //只要执行p1,p2时其中一个报错，就会执行这里的代码
    console.log(error);
});
```

#### 7.5、async+await版本(这个版本今天先不用看，明天学习了async+await后再看)

```js
const fs = require("fs");
const path = require("path");
const util = require("util");

let filePath1 = path.join(__dirname, "files", "1.txt");
let filePath2 = path.join(__dirname, "files", "2.txt");
let filePath3 = path.join(__dirname, "files", "3.txt");
let filePath4 = path.join(__dirname, "files", "data.txt");

let readFile = util.promisify(fs.readFile);
let writeFile = util.promisify(fs.writeFile);

async function func() {
    let data1 = await readFile(filePath1, "utf-8");
    let data2 = await readFile(filePath2, "utf-8");
    let data3 = await readFile(filePath3, "utf-8");

    console.log(data1+data2+data3);

    writeFile(filePath4, data1+data2+data3)
}

func();
```

## 八、Promise的常用其他方法

#### 8.1、promise对象catch()方法和finally()方法

```js
//一般，我们会把以下代码：
p1.then((data1)=>{
    console.log("承诺成功", data1);
},(error1)=>{
    console.log("承诺失败", error1);
});

//写成
p1.then((data1)=>{
    console.log("承诺成功", data1);
}).catch((error1)=>{
    console.log("承诺失败", error1);
}).finally(()=>{
    console.log("承诺成功与失败都会执行这里的代码");
});

```

#### 8.2、Promise类的all() 方法

参数：是一个数组，数组元素是Promise实例对象，只有数组里面所有的Promise成功了，则才会执行 then 第一个回调

```js
const fs = require("fs");
const path = require("path");

let filePath1 = path.join(__dirname, "files", "1.txt");
let filePath2 = path.join(__dirname, "files", "2.txt");


let p1 = new Promise((resolve, reject)=>{
    //1、同步代码
    // console.log("同步代码");

    // pending（进行中）、fulfilled（已成功）和rejected（已失败）
    //2、异步代码
    fs.readFile(filePath1,"utf-8",(error1, data1)=>{
        if(error1){
            //失败的时候做的事情
            reject(error1);
        }
        //读取完之后做的事情
        resolve(data1)
    })
});
let p2 = new Promise((resolve, reject)=>{
    //1、同步代码
    // console.log("同步代码");

    // pending（进行中）、fulfilled（已成功）和rejected（已失败）
    //2、异步代码
    fs.readFile(filePath2,"utf-8",(error1, data1)=>{
        if(error1){
            //失败的时候做的事情
            reject(error1);
        }
        //读取完之后做的事情
        resolve(data1)
    })
});

Promise.all([p1,p2]).then((data)=>{
    // data是一个数组，分别是p1和p2最后传来的数据
    console.log(data); // [ '我', '爱' ]
    console.log(data.join(""));  // 我爱
}).catch((error)=>{
    //只要执行p1,p2时其中一个报错，就会执行这里的代码
    console.log(error);
});
```

#### 8.3、Promise类的race()  方法

参数：是一个数组，数组元素是Promise实例对象，只要数组里面的任何一个Promise成功了，则才会执行 then 第一个回调，且只执行1次。

```js
const fs = require("fs")
const path = require("path")
const util = require('util');

let filePath1 = path.join(__dirname, "files", "1.txt") 
let filePath2 = path.join(__dirname, "files", "2.txt") 

let readFilePromise = util.promisify(fs.readFile);

let p1 = readFilePromise(filePath1,"utf-8")
let p2 = readFilePromise(filePath2,"utf-8")
Promise.race([p1,p2]).then((data)=>{
    // p1,p2只要其中一个执行完，就会执行一遍这里的代码，且这里的代码只会执行1次
    console.log(123);
    console.log(data);
});

//123
//我
```

 

