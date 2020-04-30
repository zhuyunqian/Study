<template>
  <div class="department">
    <ve-line :data="chartData"></ve-line>
    <ve-candle :data="chartDatass" :settings="chartSettings"></ve-candle>


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
    this.chartSettings = {
        showMA: true,
        showVol: true,
        labelMap: {
          MA5: 'ma5'
        },
        legendName: {
          '日K': 'day k'
        },
        showDataZoom: true
      }
    return {
      chartDatass: {
          columns: ['日期', 'open', 'close', 'lowest', 'highest', 'vol'],
          rows: [
            { '日期': '2004-01-05', open: 10411.85, close: 10544.07, lowest: 10411.85, highest: 10575.92, vol: 221290000 },
            { '日期': '2004-01-06', open: 10543.85, close: 10538.66, lowest: 10454.37, highest: 10584.07, vol: 191460000 },
            { '日期': '2004-01-07', open: 10535.46, close: 10529.03, lowest: 10432.12, highest: 10587.55, vol: 225490000 },
            { '日期': '2004-01-08', open: 10530.07, close: 10592.44, lowest: 10480.59, highest: 10651.99, vol: 237770000 },
            { '日期': '2004-01-09', open: 10589.25, close: 10458.89, lowest: 10420.52, highest: 10603.48, vol: 223250000 },
            { '日期': '2004-01-12', open: 10461.55, close: 10485.18, lowest: 10389.85, highest: 10543.03, vol: 197960000 },
            { '日期': '2004-01-13', open: 10485.18, close: 10427.18, lowest: 10341.19, highest: 10539.25, vol: 197310000 },
            { '日期': '2004-01-14', open: 10428.67, close: 10538.37, lowest: 10426.89, highest: 10573.85, vol: 186280000 },
            { '日期': '2004-01-15', open: 10534.52, close: 10553.85, lowest: 10454.52, highest: 10639.03, vol: 260090000 },
            { '日期': '2004-01-16', open: 10556.37, close: 10600.51, lowest: 10503.71, highest: 10666.88, vol: 254170000 },
            { '日期': '2004-01-20', open: 10601.42, close: 10528.66, lowest: 10447.92, highest: 10676.96, vol: 224300000 },
            { '日期': '2004-01-21', open: 10522.77, close: 10623.62, lowest: 10453.11, highest: 10665.72, vol: 214920000 },
            { '日期': '2004-01-22', open: 10624.22, close: 10623.18, lowest: 10545.03, highest: 10717.41, vol: 219720000 },
            { '日期': '2004-01-23', open: 10625.25, close: 10568.29, lowest: 10490.14, highest: 10691.77, vol: 234260000 },
            { '日期': '2004-01-26', open: 10568.12, close: 10702.51, lowest: 10510.44, highest: 10725.18, vol: 186170000 },
            { '日期': '2004-01-27', open: 10701.11, close: 10609.92, lowest: 10579.33, highest: 10748.81, vol: 206560000 },
            { '日期': '2004-01-28', open: 10610.07, close: 10468.37, lowest: 10412.44, highest: 10703.25, vol: 247660000 },
            { '日期': '2004-01-29', open: 10467.41, close: 10510.29, lowest: 10369.92, highest: 10611.56, vol: 273970000 },
            { '日期': '2004-01-30', open: 10510.22, close: 10488.07, lowest: 10385.56, highest: 10551.03, vol: 208990000 },
            { '日期': '2004-02-02', open: 10487.78, close: 10499.18, lowest: 10395.55, highest: 10614.44, vol: 224800000 },
            { '日期': '2004-02-03', open: 10499.48, close: 10505.18, lowest: 10414.15, highest: 10571.48, vol: 183810000 },
            { '日期': '2004-02-04', open: 10503.11, close: 10470.74, lowest: 10394.81, highest: 10567.85, vol: 227760000 },
            { '日期': '2004-02-05', open: 10469.33, close: 10495.55, lowest: 10399.92, highest: 10566.37, vol: 187810000 },
            { '日期': '2004-02-06', open: 10494.89, close: 10593.03, lowest: 10433.74, highest: 10634.81, vol: 182880000 },
            { '日期': '2004-02-09', open: 10592.41, close: 10579.03, lowest: 10433.72, highest: 10634.81, vol: 160720000 },
            { '日期': '2004-02-10', open: 10578.74, close: 10613.85, lowest: 10511.18, highest: 10667.03, vol: 160590000 },
            { '日期': '2004-02-11', open: 10605.48, close: 10737.72, lowest: 10561.55, highest: 10779.41, vol: 277850000 },
            { '日期': '2004-02-12', open: 10735.18, close: 10694.07, lowest: 10636.44, highest: 10775.03, vol: 197560000 },
            { '日期': '2004-02-13', open: 10696.22, close: 10627.85, lowest: 10578.66, highest: 10755.47, vol: 208340000 },
            { '日期': '2004-02-17', open: 10628.88, close: 10714.88, lowest: 10628.88, highest: 10762.07, vol: 169730000 },
            { '日期': '2004-02-18', open: 10706.68, close: 10671.99, lowest: 10623.62, highest: 10764.36, vol: 164370000 },
            { '日期': '2004-02-19', open: 10674.59, close: 10664.73, lowest: 10626.44, highest: 10794.95, vol: 219890000 },
            { '日期': '2004-02-20', open: 10666.29, close: 10619.03, lowest: 10559.11, highest: 10722.77, vol: 220560000 },
            { '日期': '2004-02-23', open: 10619.55, close: 10609.62, lowest: 10508.89, highest: 10711.84, vol: 229950000 },
            { '日期': '2004-02-24', open: 10609.55, close: 10566.37, lowest: 10479.33, highest: 10681.41, vol: 225670000 },
            { '日期': '2004-02-25', open: 10566.59, close: 10601.62, lowest: 10509.42, highest: 10660.73, vol: 192420000 },
            { '日期': '2004-02-26', open: 10598.14, close: 10580.14, lowest: 10493.71, highest: 10652.96, vol: 223230000 },
            { '日期': '2004-02-27', open: 10581.55, close: 10583.92, lowest: 10519.03, highest: 10689.55, vol: 200050000 }
          ]
        },

      chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        },
        
      tableData: [],
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