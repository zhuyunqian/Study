<template>
   <!-- <section class="home-menu"> -->
       <!-- 
           改变选中状态，获取当前路由的路径赋值
           this.$route.path
           unique-opened -- 默认只打开一个折叠菜单
        -->
        <el-menu
                :default-active="activeRoute"
                class="home-menu"
                background-color="#324157"
                text-color="#fff"
                active-text-color="#20a0ff"
                :router="true"
                unique-opened="true"
                >
                
                <!-- v-for循环 -->
                <el-submenu v-for="(menu , index) in menuConfig" :key="index" :index="index+''" >
                    <template slot="title">
                    <i :class="menu.icon"></i>
                    <span>{{menu.title}}</span>
                    </template>
                    <el-menu-item v-for="(menusub , index) in menu.subs" :key="index" :index="menusub.index">
                        {{menusub.title}}
                    </el-menu-item>
                    
                
                </el-submenu>
                
        </el-menu>
      <!-- </section> -->
</template>

<script>
// 引入需要遍历的js数据文件
import { menuConfig } from '../../../config/menuconfig'

export default {
    data() {
        return {
            // 简式写法， 这里的属性 == 引入的js的变量
            menuConfig
        }
    },
    computed: {
        activeRoute(){
            return this.$route.path
        }
    },
}
</script>

<style lang="less" scoped>
    .home-menu{
        position: absolute;
        left:0;
        top:70px;
        width:250px;
        bottom:0;
        // 这里可以让占满屏幕
    }
</style>