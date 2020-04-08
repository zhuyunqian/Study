<template>
  <div>
      <section class="home-menu">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
               <el-submenu index="1" v-for="(menu ,index) in menuConfig " :key="index" >
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
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    
}
</script>

<style lang="less" scoped>
    .home-menu{
        position: absolute;
        top:70px;
        left:0;
        bottom: 0;
        width:250px;
        
    }
</style>