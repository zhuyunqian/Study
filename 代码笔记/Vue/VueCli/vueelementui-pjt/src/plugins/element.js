import Vue from 'vue'

// 引入相应的方法，解决报错
import { Button,Form,FormItem,Input,Message } from 'element-ui'



// 注册相应方法，解决报错 -- use相当于调用 Button.install => Vue.component()注册全局组件
Vue.use(Button).use(Form).use(FormItem).use(Input)
//官方文档给出在原型对象上添加了$message方法，可以加一下指向
Vue.prototype.$message = Message
