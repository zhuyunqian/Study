import React , {Component} from 'react'

export default class app extends Component{
    constructor(props){
        // 声明周期 -- 挂载初始
        console.log('构造初始化')

        super(props)

        this.state = {
            num:1,
            num1:10
        }

        // 访问this必须先访问调用超级构造函数super（props）
        this.handClick = this.handClick.bind(this)
    }

    handClick(){
        this.setState({
            num : this.state.num + 1,
        })
    }

    UNSAFE_componentWillReceiveProps(){
        console.log('组件将收到props数据')
    }
    shouldComponentUpdate(nextProps,nextState){
        // 这里的生命周期会进行判断，如果更新再进行render更新
        console.log('更新')
        console.log(this.state.num)
        console.log(nextState.num)
        return this.state.num !== nextState.num
        // if(this.state.num !== nextState.num){
        //     return nextState.num
        // }else{
        //     return this.state.num
        // }
    }
    componentWillUpdate(){
        console.log('更新前回调 -- render前')
    }
    componentDidUpdate(){
        console.log('更新后回调 -- render后')
    }



    render(){
        console.log('render')
        return(
            <div >
                <div onClick={this.handClick}> 点击事件 {this.state.num}</div>
            </div>
        )
    }

}