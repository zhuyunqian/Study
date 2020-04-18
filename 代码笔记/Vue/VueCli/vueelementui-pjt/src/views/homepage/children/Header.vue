<template>
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
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
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

</style>