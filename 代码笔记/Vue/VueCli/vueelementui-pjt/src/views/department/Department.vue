<template>
  <div class="department">
    <h3>部门管理</h3>
    <section>
          <el-button class="addbtn" @click="add()"  type="success" >添加</el-button>
    </section>
    <el-table :data="tableData" border style="width: 100%">
      <!--  -->
      <el-table-column prop="id" label="编号" width="180"></el-table-column>
      <el-table-column prop="name" label="部门名称" width="180"></el-table-column>
      <el-table-column prop="sn" label="部门编号"></el-table-column>
      <el-table-column prop label="操作">
        <!-- 
          作用域插槽 可传递标签
         -->
        <template slot-scope="scope">
          <el-button @click="edit(scope)" size="small" type="primary" >编辑</el-button>
          <el-button @click="edit(scope)" size="small" type="danger" >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      class="page"
      >
    </el-pagination>
    <!-- 使用组件  注意这里的组件名称 不要纯小写，容易冲突-->
    <dept-dialog :dialog="dialogSh" :diaDate="diaDate" @closeVis="closeVis" :title="diaTitle"/>
    <!-- 定义接收方法 -->
  </div>
</template>

<script>
//注意使用一定要引入
import axios from "axios";

// 引入封装api
import {getDepartment } from '../../request/api'

// 引入子组件，去注册
import DeptDialog from './children/DeptDialog'

export default {
  data() {
    return {
      tableData: [],
      token: localStorage.getItem("token"),
      currentPage:1,
      pageSize:10,
      total:0,
      dialogSh:false,
      diaDate:{},
      //这需要定义传给子组件的方法，不然会报错未实力化
      diaTitle:''
    };
  },
  components:{
    // 注册组件
    DeptDialog
  },
  methods: {

    // 添加
    add(){
      this.dialogSh = true
      this.diaDate = {}
      // 添加部门文案修改
      this.diaTitle = '添加部门'
    },

    // 接收子组件传参
    closeVis(val){
      // 进行的了对象传输
      this.dialogSh = val.val

      console.log(val)
      //进行判断 reload
      if(val.reload == 'reload'){
        this.fetchData()
      }
    },

    // 点击更改组件传参props
    edit(val){
      //console.log(val)
      this.dialogSh = true;
      this.diaDate = val.row ;
      this.diaTitle = '编辑部门'
    },

    // 每页条数 - 方法
    handleSizeChange(size){
      console.log(size)
      this.pageSize = size;
      this.fetchData();
    },
    // 页面改变 - 方法 都要进行axios ，所以封装axios请求
    handleCurrentChange(page){
      console.log(page)
      this.currentPage = page
      this.fetchData()
    },
    fetchData(){
      // 封装后进行更新
      getDepartment({
        currentPage: this.currentPage,
          pageSize: this.pageSize,
          token: this.token
      })
      // axios
      // .get("/departments", {
      //   params: {
      //     currentPage: this.currentPage,
      //     pageSize: this.pageSize,
      //     token: this.token
      //   }
      // })
      .then(
        res =>
          //console.log(res)
          // 接收数据 赋值给 tabledata
          {
            this.tableData = res.data.data.list
            this.total = res.data.data.total
          }
      )
    }
  },
  created() {
    // 进入页面进行请求，获取列表数据
    this.fetchData();
  }
};
</script>

<style lang="less" scoped>
.page{
  margin:20px 0 40px 20pxc;
}
.addbtn{
  margin:20px;
}
h3{
  margin:20px 0 0 20px;
}
.el-table{
  margin:0 0 0 20px;
}
</style>