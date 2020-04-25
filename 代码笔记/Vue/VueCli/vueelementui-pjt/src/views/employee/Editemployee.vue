<template>
  <div>
    <h3>编辑员工</h3>
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="部门">
        <!-- 定一个deptId 接收dept对象里的值 和 本身的值 -->
        <el-select v-model="form.deptId" placeholder="请选择部门">
          <el-option v-for="item in list" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item  label="超级管理员">
        <el-switch v-model="form.admin"></el-switch>
      </el-form-item>
      <el-form-item label="分配角色">
        <!-- :props="{key:'id',label:'name'}" 转换数据源形式 -->
        <!-- 展示form.roles -->
        <el-transfer v-model="form.roles" :data="roles" :props="{key:'id',label:'name'}"></el-transfer>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getEditemployees, getDepartment , getRoles ,saveEmployee} from "../../request/api";
export default {
  data() {
    return {
      form: {},
      list:[],
      roles:[]
    };
  },
  methods: {
    
    onSubmit() {
      //console.log(this.$route.params.eid)
      saveEmployee({
        //id:this.$route.params.eid,
        name:this.form.name,
        email:this.form.email,
        age:this.form.age,
        admin:this.form.admin,
        // 由于接口有求的这里的请求格式，需要qs转换
        dept:{
          id: this.form.deptId
        },
        ids:this.form.roles,
        //这里的员工id也是跳转的动态路由
        id:this.form.id,
      }).then((res)=>{
        if(res.data.success){
          this.$message.success('修改员工信息成功')
          //并且跳转列表
          this.$router.push('/employee')
        }else{
          this.$message.error(res.data.msg)
        }
      })
    },
  },
  created() {
      getEditemployees({
          //获取活跃路由的id
          id:this.$route.params.eid,
      }).then(res=>{

          // 判断res.data.data.dept是否存在 存在-显示里面的id 不存在为null-- 这样就可以显示部门名称
          res.data.data.deptId = res.data.data.dept ? res.data.data.dept.id : null

          // 已经赋予角色数据，渲染显示
          res.data.data.roles = res.data.data.roles.map(item => item.id)

          this.form = res.data.data
      }),

      //部门获取
      getDepartment({
          currentPage:1,
          pageSize:100
      }).then((res)=>{
        //   这里的箭头函数要加（） 不然报错，this指向undefined
          if(res.data.success){
              this.list = res.data.data.list;
          }else{}
      })

      // 角色列表 -- 所有数据
      getRoles({
        currentPage:1,
        pageSize:1000
      }).then((res) => {
        if(res.data.success){
          this.roles = res.data.data.list
        }
      })

  }
};
</script>

<style scope lang="less">
h3 {
  margin: 20px 0 0 20px;
}
.el-form {
  margin: 20px 0 0 20px;
}
</style>