import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory} from 'react-router'
import Home from './Home';
import List from './List';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><a href="#/">索引</a></li>
          <li><a href="#/home">首页</a></li>
          <li><a href="#/list">列表页</a></li>
        </ul>
      </div>
    )
  }
}

// 定义路由
let routes = <Router history={hashHistory}>
  {/* 路径定义 */}
  <Route path="/" component={App}></Route>
  <Route path="/home" component={Home}></Route>
  <Route path="/list" component={List}></Route>
</Router>

ReactDOM.render(
  // 渲染路由
  routes,
  document.getElementById('root')
);

