<template>
  <div class="home-wrap">
      <section class="home-header">
          
            <h3>叩丁狼客户管理系统</h3>
            <i class="el-icon-menu"></i>
          <el-dropdown class="header-dropdown">
            <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
      </section>
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
      <section class="home-content">
          <router-view></router-view>
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
.home-wrap{
    position: relative;
    height:100%;

    .home-header{
        height: 70px;
        line-height: 70px;
        background-color: #409eff;

        .header-dropdown{
            margin-right: 10px;
             float: right;
        }

        .el-dropdown-link {
            cursor: pointer;
            color: #fff;
        }
        .el-icon-arrow-down {
            font-size: 12px;
        }
        h3{
            display: inline-block;
            margin: 0 10px;
            font-size: 24px;
            color: #fff;
        }
    }

    .home-menu{
        position: absolute;
        top:70px;
        left:0;
        bottom: 0;
        width:250px;
        
    }
    .home-content{
        position: absolute;
        top: 70px;
        left: 250px;
        right: 0;
        bottom: 0;
        background-color: skyblue;
    }
}
 

</style>