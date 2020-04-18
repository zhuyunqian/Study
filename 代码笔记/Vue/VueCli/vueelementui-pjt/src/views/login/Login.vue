<template>
  <div class=login-wrap>
        <el-form 
        :model="ruleForm" 
        status-icon 
        :rules="rules" 
        ref="ruleForm" 
        class="login-form">
            <el-form-item prop="pass">
                <el-input type="text" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="login-btn" type="primary" @click="submitForm('ruleForm')">登陆</el-button>
            </el-form-item>
        </el-form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm:{},
            rules:{}
        }
    },
}
</script>

<style lang="less" scoped>
/* scoped -- 当前组件渲染 ，不渲染其他组件 */
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

        .login-btn{
            width:100%;
        }
        
    }
}

</style>