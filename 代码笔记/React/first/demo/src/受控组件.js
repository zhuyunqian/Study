import React , {Component} from 'react'

export default class App extends Component{
    constructor(props){
        super(props)
        this.state={
            value:'admin'
        }
    }
    handChange(e){
        console.log(e.target.value)
        // 提升用户体验 -- 这里进行一些验证，输入即验证
        this.setState({
            value : e.target.value
        })
    }
    submitBtn(){
    }
    render(){
        return(
            <div>
                <div>
                    <label htmlFor="username">账号：<input type="text" value={this.state.value}  id="username" onChange={this.handChange.bind(this)}/></label>
                    
                </div>
                <div>
                    <label htmlFor="password">密码：<input type="text" id="password"/></label>
                </div>
                <div>
                    <button onClick={this.submitBtn.bind(this)}>登陆</button>
                </div>
            </div>
        )
    }
}