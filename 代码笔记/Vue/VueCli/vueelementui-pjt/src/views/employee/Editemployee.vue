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
        <el-select v-model="form.id" placeholder="请选择部门">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="超级管理员">
        <el-input type="textarea" v-model="form.admin"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getEditemployees } from "../../request/api";
export default {
  data() {
    return {
      form: {}
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
          console.log(res)
          this.form = res.data.data
      })
  },
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