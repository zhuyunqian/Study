<template>
  <div class="home-wrap">
      <section class="home-header">
          <h3>管理后台</h3>
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
      <!-- <section class="home-menu"> -->
        <el-menu
                default-active="4"
                class="home-menu"
                background-color="#324157"
                text-color="#fff"
                active-text-color="#20a0ff">
                <el-submenu index="1">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>系统管理</span>
                    </template>
                    <el-menu-item index="1-1">部门管理</el-menu-item>
                    <el-menu-item index="1-2">员工管理</el-menu-item>
                    <el-menu-item index="1-3">权限管理</el-menu-item>
                    <el-menu-item index="1-4">角色管理</el-menu-item>
                
                </el-submenu>
                
        </el-menu>
      <!-- </section> -->
      <section class="home-content">

      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.home-wrap{
    height:100%;

    .home-header{
        height:70px;
        line-height:70px;
        background:#409eff;

        h3{
            display:inline-block;
            color:#fff;
            margin:0 10px;
            font-size:24px;
        }
        .el-icon-menu{
            color:#fff;
            font-size:20px;
        }

        .header-dropdown{
            float:right;
            .el-dropdown-link,.el-icon-arrow-down{
                color:#fff;
            }
        }
    }

    .home-menu{
        position: absolute;
        left:0;
        top:70px;
        width:250px;
        bottom:0;
        // 这里可以让占满屏幕
    }
    .home-content{
        position:absolute;
        left:250px;
        top:70px;
        right:0;
        bottom:0;
        background:skyblue;
    }
}
</style>