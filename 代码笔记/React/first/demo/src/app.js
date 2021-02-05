// 引入核心模块
import React from 'react'
import ReactDOM from 'react-dom'

// 定义组件

class App extends React.Component{
    //构造函数 -- 对象继承走的函数 ， 定义state
    constructor(props){
        super(props);
        
        this.state={
            num:20
        }
    }

    // 点击事件，里面的this没有指向，需要在onclick的时候绑定this
    clickNum(){
        this.setState({
            num : this.state.num+1
        })
    }

    render(){
        
        return(
            <div>
                组件化开发

                <div>{this.state.num}</div><br/>
                {/* 这里绑定bind(this) */}
                <button onClick={this.clickNum.bind(this)}>点击增加</button>

            </div>
        )
    }
}

// 导出组件
export default App