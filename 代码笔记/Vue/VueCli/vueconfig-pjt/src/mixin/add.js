/*
混入 mixin 
Vue 组件中的可复用功能，置入mixin，然后调用

src -- 创建mixin文件夹 -- 加入想要复用的js文件（方法、data）
想要使用的组件

需要引入组件和，配置使用方法
import test from '../mixin/add.js'
export default {
  mixins:[test]
}

*/

export default{
    data() {
        return {
            count:1
        }
    },
    methods: {
        add(){
            this.count++
        }
    },
}