<template>
  <div class=login-wrap>
      <!-- :rules="rules" 验证规则 -->
        <el-form 
        :model="ruleForm" 
        status-icon 
        :rules="rules" 
        ref="ruleForm" 
        class="login-form">
        <!-- ref相当于一个标记， 获取dom this.$refs.ruleForm(ref="ruleForm")-->

            <h3 class="login-title">管理后台</h3>
            <!--  prop="pass" 验证name -->
            <el-form-item prop="username">
                <!-- v-model="ruleForm.username" 注意绑定的数值为更改后的prop-name，用于再验证，书写后验证 -->
                <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="checkpwd">
                <el-input type="password" v-model="ruleForm.checkpwd" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="login-btn" type="primary" @click="loginFn()">登陆</el-button>
            </el-form-item>
        </el-form>
  </div>
</template>

<script>
// 安装依赖 ， 引入依赖
// import axios from 'axios'

// 引入转换模块
// import qs from 'qs'

import {apiLogin} from '../../request/api'

export default {
    data() {
        return {
            ruleForm:{},
            rules:{
                // 设置验证规则
                username:[
                    /*
                        required:true,  = 必填
                        message:'请输入用户名',  =  信息提示
                        trigger:'blur' = 事件
                    */
                    
                    {required:true, message:'请输入用户名',trigger:'blur'},
                    {min:3,max:10, message:'长度3-10',trigger:'blur'},
                ],
                checkpwd:[
                    {validator:this.validPwd, trigger:'blur'},
                ]

            }
        }
    },
    methods: {
        validPwd(rule, value, callback){
            //这里的判断条件 == ‘’ 获取不到该条件
            if (value == undefined) {
                callback(new Error('请输入密码'));
            } else{
                callback();
            }
        },

        // 登陆判断是否成功
        loginFn(){
            // 这里调用validate，方法是想判断之前的判断是否成功，错误，进行下一步所以，之前的判断建议都用 validator书写
            console.log(this.$refs.ruleForm.validate)
            // validate方法调用
            this.$refs.ruleForm.validate((vali)=>{
                console.log(vali) // false
                // 判断是否成功
                if(vali){
                    console.log('成功')

                    // 定义 传输参数
                    const params = {
                        username:this.ruleForm.username,
                        password:this.ruleForm.checkpwd
                    }
                    // axios请求接口
                    //qs.stringify 转换成formdata形式，接口可识别的形式
                    //qs - 为数据转换模块 ，这里的接口要求为formdata形式传输参数
                    //要想查看qs模块方法，具体其他方式到github查询
                    // axios.post("/tokens",qs.stringify(params)).then((res)=>{
                        apiLogin(params).then( res => {
                         console.log(res.data.msg)
                        if(res.data.success){
                            // 成功跳转home页面 引用 $router(全局路由对象) - terry 1
                            // token凭证存储 localStorage 永久存储
                            localStorage.setItem( 'token',res.data.data)

                            this.$router.replace('/')
                        }else{
                            console.log(res.data.msg)
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

        .login-title{
            color:#fff;
            text-align: center ;
            font-size:24px;
            margin:0 0 20px 0;
        }

        .login-btn{
            width:100%;
        }
        
    }
}

</style>