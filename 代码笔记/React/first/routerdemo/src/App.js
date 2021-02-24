import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, IndexRedirect, Link} from 'react-router'
import Home from './Home';
import List from './List';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          {/* <li><a href="#/home">首页</a></li>
          <li><a href="#/list/111">列表页</a></li> */}

          {/* link 组件， 代替href，直接使用链接即可 */}
          <li><Link to="/home">首页</Link></li>
          <li><Link to="/list/111">列表页</Link></li>
        </ul>
        <hr/>
        <div>
          {this.props.children}
          {/* 
            优点
            1. 局部刷新
            2. 按需要引入
            3. 使用相对路径
          */}
        </div>
      </div>
    )
  }
}

// 定义路由
let routes = <Router history={hashHistory}>
  {/* 路径定义 */}
  <Route path="/" component={App}>
    {/* 相对路径 */}
    {/* 默认展示视图 {this.props.children}*/}
    <IndexRoute component={Home}></IndexRoute>
    {/* 重定向组件 */}
    {/* <IndexRedirect to="Home"/> */}
    <Route path="home" component={Home}></Route>
    {/* 绝对路径 */}
    <Route path="/list/:newId" component={List}></Route>
  </Route>
</Router>

ReactDOM.render(
  // 渲染路由
  routes,
  document.getElementById('root')
);

// 路由原理
// 1. 定义路由 -- 路由哈希地址 对应 视图
// 2. 监听路由地址的改变
// 3. 改变后视图加载对应哈希地址 let url = louter[location.hash]   $("#routerView").load(url)
