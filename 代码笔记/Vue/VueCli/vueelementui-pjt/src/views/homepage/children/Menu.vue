<template>
   <!-- <section class="home-menu"> -->
        <el-menu
                default-active="4"
                class="home-menu"
                background-color="#324157"
                text-color="#fff"
                active-text-color="#20a0ff"
                :router="true">
                <el-submenu index="1">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>系统管理</span>
                    </template>
                    <el-menu-item index="/department">部门管理</el-menu-item>
                    <el-menu-item index="1-2">员工管理</el-menu-item>
                    <el-menu-item index="1-3">权限管理</el-menu-item>
                    <el-menu-item index="1-4">角色管理</el-menu-item>
                
                </el-submenu>
                
        </el-menu>
      <!-- </section> -->
</template>

<script>
export default {

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