import React , {Component} from 'react'

class Child extends Component{
    static defaultProps = {
        num1 : 1
    }
    UNSAFE_componentWillReceiveProps(nextProps,nextState){
        console.log(nextProps)
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps)
        //props修改这里 需要return出去true or false
        return this.props.num1 !== nextProps.num1
    }
    render(){
        return(
            <div>
                {this.props.num1}
            </div>
        )
    }
}

export default class app extends Component{
    constructor(props){
        // 声明周期 -- 挂载初始
        console.log('构造初始化')

        super(props)

        this.state = {
            num:1,
            num1:10,
        }

        // 访问this必须先访问调用超级构造函数super（props）
        this.handClick = this.handClick.bind(this)
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                num1 : 30
            })
            document.addEventListener("click", this.closeMenu);
        },2000)
    }

    handClick(){
        this.setState({
            num : this.state.num + 1,
        })
    }

    closeMenu(){
        console.log('close事件')
    }

    componentWillUnmount(){
        console.log('回收操作，卸载')
        document.removeEventListener("click", this.closeMenu);
    }

    UNSAFE_componentWillReceiveProps(){
        console.log('组件将收到props数据')
    }
    shouldComponentUpdate(nextProps,nextState){
        // 这里的生命周期会进行判断，如果更新再进行render更新
        console.log('更新')
        console.log(this.state.num)
        console.log(nextState.num)
        //这里num1修改后，需要更新
        return this.state.num !== nextState.num  || this.state.num1 !== nextState.num1
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
                <Child num1 = {this.state.num1}></Child>
            </div>
        )
    }

}