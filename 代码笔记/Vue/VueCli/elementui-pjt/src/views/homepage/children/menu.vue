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
               <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>系统管理</span>
                </template>
                <el-menu-item index="/department">部门管理</el-menu-item>
                <el-menu-item index="/employee">员工管理</el-menu-item>
                <el-menu-item index="1-4-3">权限管理</el-menu-item>
                <el-menu-item index="1-4-4">角色管理</el-menu-item>
            </el-submenu>
                </el-menu>
  
      </section>
  </div>
</template>

<script>
export default {
    
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