<template>
  <div>
      <section class="home-menu">
        <el-menu
        :default-active="activeRoute"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
            <el-submenu class="bgtitle" index="1" v-for="(menu ,index) in menuConfig " :key="index" >
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{menu.title}}</span>
                </template>
                <el-menu-item v-for="(childenmen,childindex) in menu.subs" :key="childindex">{{childenmen.title}}</el-menu-item>
                </el-submenu>
        </el-menu>
  
      </section>
  </div>
</template>

<script>
import { menuConfig } from '../../../config/menuConfig'
export default {
    data() {
        return {
            menuConfig,
        }
    },
    methods: {
        
    },
    computed: {
        activeRoute(){
            console.log(this.$route.path);
            return this.$route.path
        }
    },
    
}
</script>

<style lang="less" scoped>
    @bgcolor :#324157;
    .home-menu{
        position: absolute;
        top:70px;
        left:0;
        bottom: 0;
        width:250px;
        background:@bgcolor;

        .bgtitle{
            background:@bgcolor;
        }
        
    }
</style>