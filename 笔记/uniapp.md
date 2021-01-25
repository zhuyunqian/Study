

## 一、Express本地安装

uniApp官网地址  https://uniapp.dcloud.io/

[官方IDE下载地址] https://uniapp.dcloud.io/quickstart

appid https://mp.weixin.qq.com/cgi-bin/loginpage?t=wxm2-login&lang=zh_CN



清除CSS样式 https://www.npmjs.com/package/reset-css



图标字体 http://at.alicdn.com/t/font_760782_hmtvl7u64w9.css



grid插件网址 https://ext.dcloud.net.cn/plugin?id=27

新建一个空白文件夹，如 `backend` ，先安装express 然后执行：

```js
npm i express --save-dev
npm init -y
```

## 二、返回数据给前端

得到 `package.json` 与 `node_modules` 之后，将 `houseSource.json` 放在文件夹根目录，并在根目录新建 `index.js` 文件，在其中写入：

```js
// 引入依赖 express 直接粘贴笔记上代码
const express = require("express");// 什么是const，就是用来声明常量的
const fs = require("fs");// fs模块是nodeJs中自带的模块，用于读取文件
const app = express();//express 自执行一次 并赋值给app
//设置跨域访问,这个跨域加上去就可以解决在浏览器上看页面了
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
// 监听路由
app.get('/mydata', function(req, res){
   // request代表请求，resspond代表响应
   // fs.readFile(url,callback(err,data)) 读取文件
   fs.readFile('./houseSource.json',function(err,data){
	  if(err) return;
	  //console.log(data) 
	   //console.log(JSON.parse(data)) 
	  res.send(JSON.parse(data)); //这样，去浏览器输入 `http://localhost:8020` ，即可看到数据。
   })
});
// 测试、监听端口号
app.listen(8002, ()=>{
    console.log('Server is running at http://localhost:8002');
})
```

这样，去浏览器输入 `http://localhost:8020/mydata` ，即可看到数据。



## 三 、 UniApp基本配置



- unpackage   --  启动生成目录，会自动生成多版本代码（运行产生）

- Pages.json  --  通用配置--导航条、选项卡、页面路由、新增页面、

- manifest.json -- 项目常用配置 -- 微信小程序appid

- Main.js -- 项目入口文件

- App.js -- 监听生命周期，应用配置

- static -- 静态资源-图片视频等

- pages -- 页面

- Uni_scss -- 全局通用css，无需引入

- Components -- 新建目录

  ​						-- 兄弟组件 -- $on $emit $once



## 四、生命周期

生命周期分为

1. 应用生命周期 -- app.js
2. 页面生命周期 -- 页面使用
3. 组件生命周期 -- 组件引入后在组件内使用

详情，请看文档https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f



#### 应用生命周期

```javascript
		//当uni-app 初始化完成时触发（全局只触发一次）
		onLaunch: function() {
			console.log('App Launch')
		},
    //当 uni-app 启动，或从后台进入前台显示
		onShow: function() {
			console.log('App Show')
		},
    //当 uni-app 从前台进入后台
		onHide: function() {
			console.log('App Hide')
		}
```



#### 页面生命周期

- onLoad -- 页面初始化 执行一次 

- onReady -- 页面加载完毕 执行一次

- onShow -- 页面进入执行 执行多次

- onHide -- 页面进入离开 执行多次

- onPullDownRefresh -- 监听页面下拉刷新  需要配置page.json.  开启 enablePullDownRefresh:true

- onTabItemTap -- 监听用户点击tabbar

- onShareAppMessages -- 监听用户进行了分享 -- 可控制用户分享内容

  ```javascript
  onShareAppMessages(){
    console.log("用户进行了分享，相当于退出了当前界面后又再进入")
    return{
      title:"",
      path:"pages/home/home",
      imageUrl:"图片链接"
    }
  }
  ```

  

- onPageScroll -- 监听页面滚动，参数为Object



#### 组件生命周期

```
beforMount(){
	console.log("挂载开始之前被调用")
}
mounted(){
	console.log("挂载到实例之后调用")
	this.$nextTick(function(){
		//渲染完毕，可以调用接口获取数据
	})
}
```



## 五、路由

1. navigateTo -- 最多只能有4层跳转 -- 跳转非tabbar配置的页面

   ```javascript
   uni.navigateTo({
   	url:"../one/one"
   })
   ```

2. switchTab -- tabBar配置的页面页面跳转

   ```
   uni.switchTab({
   	url:"../home/home"
   })
   ```

3. redirectTo-- 关闭当前页面跳转app内的页面

   ```
   uni.redirectTo({
       url: 'test?id=1'
   });
   ```



## 六、Uniapp-Dom节点获取 

#### 查询节点信息 -- selectorQuery

```
getNodeMsg(e){
				const query = uni.createSelectorQuery().in(this);
				query.selectAll('.tt').boundingClientRect(data => {
				  // console.log(data);
					  
				  for(var i= 0; i<data.length; i++){
					  this.scrollArr.push(data[i].top)
				  }
				 
				  
				// console.log(this.scrollArr)
				}).exec();//执行
}

changeScroll(e){
				//console.log(e.detail.scrollTop)
				let st = e.detail.scrollTop;
				for(var i=0; i<this.scrollArr.length; i++){
					let h1 = this.scrollArr[i];
					let h2 = this.scrollArr[i+1];
					if(h1 <= st && h2>= st){
						this.currentNum = i
					}
				}
			},
			scrolltolower(){
				console.log(1)
				setTimeout(()=>{
					this.currentNum = 3
				},80)
 },
```



## 七、VueX

1. 创建文件夹及js文件

2. 引入vuex

   ```
   import Vue form "vue"
   import Vuex from "vuex"
   Vue.use(Vuex)
   export default new Vuex.store({
   	state:{
   	
   	},
   	//全局通用方法
   	mutations:{
   		//commit调用
   	},
   	//计算属性，再处理方法
   	getters:{
   		.getters.state
   	},
   	//异步方法 ajax ，可调用state、mutations、getters、actions方法
   	actions:{
   		//dispatch调用
   	}
   })
   ```

   

3. 并创建基本vuex对象方法

4. main.js引入并使用

5. 正常如vue使用 vuex -- computed监听值的变化