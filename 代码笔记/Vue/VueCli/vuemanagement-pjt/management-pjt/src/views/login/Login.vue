<template>
  <div class="login-wrap">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm login-form"
    >
      <h3 class="login-title">管理后台</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="username" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="login()">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {loginApi} from '../../request/api'
export default {
  data() {
    return {
      ruleForm:{},
      rules:{}
    }
  },
  methods: {
    login(){
      loginApi(this.ruleForm).then(res => {
        console.log(res);
        if(res.data.errno == 0){
          
          localStorage.setItem('token',res.data.data.token);
          //console.log(123);
          this.$store.commit('updateMenu',res.data.data.menu);
          this.$router.push('/')
          
        }
      })
    }
  },
};
</script>

<style lang="less" scoped>
.login-wrap{
    background:#324057;
    height:100%;

    // display-flex 居中样式 横轴和纵轴居中
    display:flex; 
    justify-content: center;
    align-items: center;
    .login-form{

        width:400px;
        height:280px;

        .login-title{
            color:#fff;
            text-align:center;
            font-size:24px;
            margin:0 0 20px 0;
        }
        .login-btn{
            width:100%;
        }
        
    }
}
</style>