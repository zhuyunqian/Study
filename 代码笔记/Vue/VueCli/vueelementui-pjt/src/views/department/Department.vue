<template>
  <div class="department">
    <el-table :data="tableData" border style="width: 100%">
      <!--  -->
      <el-table-column prop="id" label="编号" width="180"></el-table-column>
      <el-table-column prop="name" label="部门名称" width="180"></el-table-column>
      <el-table-column prop="sn" label="部门编号"></el-table-column>
      <el-table-column prop label="操作">
        <template slot-scope="scope">
          <el-button size="small" type="primary" >编辑</el-button>
          <el-button size="small" type="danger" >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
//注意使用一定要引入
import axios from "axios";

export default {
  data() {
    return {
      tableData: [],
      token: localStorage.getItem("token")
    };
  },
  created() {
    var _this = this;
    // 进入页面进行请求，获取列表数据
    axios
      .get("/departments", {
        params: {
          currentPage: 1,
          pageSize: 10,
          token: this.token
        }
      })
      .then(
        res =>
          //console.log(res)
          // 接收数据 赋值给 tabledata
          (_this.tableData = res.data.data.list)
      );
  }
};
</script>

<style>
</style>