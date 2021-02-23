import React , {Component} from 'react'

export default class app extends Component{
    constructor(props){
        // 声明周期 -- 挂载初始
        console.log('构造初始化')

        super(props)

        // 访问this必须先访问调用超级构造函数super（props）
        this.handClick = this.handClick.bind(this)
    }
    // UNSAFE_ -- 为撤除警告
    UNSAFE_componentWillMount(){
        console.log('准备性工作ps：正在加载')
    }

    componentDidMount(){
        console.log('异步加载数据（取决于加载内容，一般为最后）')
    }

    handClick(){
        console.log('0123')
    }

    render(){
        console.log('render')
        return(
            <div >
                <div onClick={this.handClick}> 点击事件</div>
                <div onClick={this.handClick}> 点击事件</div>
                <div onClick={this.handClick}> 点击事件</div>
                <div onClick={this.handClick}> 点击事件</div>
                <div onClick={this.handClick}> 点击事件</div>
                <div onClick={this.handClick}> 点击事件</div>
            </div>
        )
    }
}