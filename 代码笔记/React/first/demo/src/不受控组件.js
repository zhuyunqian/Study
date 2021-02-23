import React , {Component} from 'react'

export default class App extends Component{
    submitBtn(){
        // 表单中，并没有value的值（state中）--react是面向数据管理，所以此类型数据为不受控数据，组件为不受控组件
        // 点击进行验证，用户体验不佳
        console.log(this.refs.username.value)
        console.log(this.refs.password.value)
    }
    render(){
        return(
            <div>
                <div>
                    <label htmlFor="username">账号：<input type="text" ref="username" id="username"/></label>
                    
                </div>
                <div>
                    <label htmlFor="password">密码：<input type="text" ref="password" id="password"/></label>
                </div>
                <div>
                    <button onClick={this.submitBtn.bind(this)}>登陆</button>
                </div>
            </div>
        )
    }
}