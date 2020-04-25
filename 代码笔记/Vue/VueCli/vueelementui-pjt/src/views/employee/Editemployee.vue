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
      <el-form-item  label="超级管理员">
        <el-switch v-model="form.admin"></el-switch>
      </el-form-item>
      <el-form-item label="部门">
        <!-- 定一个deptId 接收dept对象里的值 和 本身的值 -->
        <el-select v-model="form.deptId" placeholder="请选择部门">
          <el-option v-for="item in list" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getEditemployees, getDepartment } from "../../request/api";
export default {
  data() {
    return {
      form: {},
      list:[]
    };
  },
  methods: {
    onSubmit() {}
  },
  created() {
      getEditemployees({
          //获取活跃路由的id
          id:this.$route.params.eid,
      }).then(res=>{

          // 判断res.data.data.dept是否存在 存在-显示里面的id 不存在为null-- 这样就可以显示部门名称
          res.data.data.deptId = res.data.data.dept ? res.data.data.dept.id : null
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