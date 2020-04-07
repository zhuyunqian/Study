<template>
  <div class="login-wrap">
      <el-form 
      :model="ruleForm" 
      status-icon 
      :rules="rules" 
      ref="loginForm" 
      class="login-ruleForm">
      <h3>
          管理系统
      </h3>
        <el-form-item prop="username">
            <el-input type="text" v-model="ruleForm.username" autocomplete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" class="btn" @click="loginFn">提交</el-button>
        </el-form-item>
        </el-form>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs';
export default {
    data() {
        return {
            ruleForm:{},
            rules:{
                username:[
                    {required:true,message:'请输入名称',trigger:'blur'},
                    {min:3,max:5,message:'长度在3-5个',trigger:'blur'}
                ],
                password:[
                    // {required:true,message:'请输入密码',trigger:'blur'},
                    // {min:3,max:10,message:'您的密码长度应该为3-5个',trigger:'blur'},
                    {validator:this.testPwd,trigger:'blur'}
                ]
            }
        }
    },
    methods: {
        testPwd(rule,value,cb){
            console.log(rule)  
            // console.log(value)  获取当前input的value
            // console.log(cb)   函数跳转

            if(!value){
                cb('请输入密码')
            }else{
                cb()
            }
        },
        
        loginFn(){
            console.log(this.$refs.loginForm)
            this.$refs.loginForm.validate((vali)=>{
                console.log(vali)
                if(vali){
                    console.log('成功')
                    const params = {
                        username:this.ruleForm.username,
                        password:this.ruleForm.password
                    }
                    //qs.stringify 转换成字符串形式，接口可识别的形式
                    axios.post("/tokens",qs.stringify(params)).then((res)=>{
                         console.log(res.data.msg)
                        if(res.data.success){

                        }else{
                            this.$message.error(res.data.msg)
                        }
                         //ipconfig/flushdns  清除dns缓存
                    });
                }else{
                    console.log('失败')
                }
            })
        }
    },
}
</script>

<style lang="less" scoped>
@import url('../../assets/styles/login.less');
.login-wrap{
    display: flex;
    justify-content: center;
    align-items:center;
    height:100%;
    background:@bgcolor;

    .login-ruleForm{
        width: 350px;
        height:400px;

        .btn{
            width:100%;
        }
        h3{
            color:#fff;
            text-align:center;
            margin:0 0 30px 0;
        }
    }
}
</style>