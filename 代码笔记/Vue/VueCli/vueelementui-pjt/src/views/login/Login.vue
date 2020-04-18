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
            this.$refs.ruleForm.validate((vali)=>{
                console.log(vali) // false
                
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