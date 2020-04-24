<template>
  <div>
    <h3>员工管理</h3>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="编号"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="email" label="email"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="dept.name" label="部门"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getEmployees } from "../../request/api";
export default {
  data() {
    return {
      tableData: [{}]
    };
  },
  methods: {
    //设置请求调用方法
    fetchData() {
      let data = {
        currentPage: 10,
        keyword: "",
        deptId: null,
        pageSize: 10
      };
      getEmployees(data).then(res => {
        if (res.data.success) {
          this.tableData = res.data.data.list;
        }
      });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scope lang="less">
h3 {
  margin: 20px 0 0 20px;
}
.el-table {
  margin: 20px 0 0 20px;
}
</style>