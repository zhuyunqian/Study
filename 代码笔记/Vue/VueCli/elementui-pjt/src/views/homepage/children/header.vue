<template>
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
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
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
</style>