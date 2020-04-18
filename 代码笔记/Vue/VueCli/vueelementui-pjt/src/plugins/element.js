import Vue from 'vue'

// 引入相应的方法，解决报错
import { Button,Form,FormItem,Input } from 'element-ui'

// 注册相应方法，解决报错 -- use相当于调用 Button.install => Vue.component()注册全局组件
Vue.use(Button).use(Form).use(FormItem).use(Input)
