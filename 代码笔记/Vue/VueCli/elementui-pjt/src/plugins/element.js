import Vue from 'vue'
import { Button,Form,FormItem,Input,Message,Dropdown,DropdownItem,DropdownMenu,MenuItem,Menu,Submenu,MenuItemGroup } from 'element-ui'

Vue.use(Button).use(Form).use(FormItem).use(Input).use(Dropdown).use(DropdownItem).use(DropdownMenu).use(MenuItem).use(Menu).use(Submenu).use(MenuItemGroup)
Vue.prototype.$message = Message
