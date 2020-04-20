<template>
  <div>
    
      <el-dialog title="收货地址" :visible.sync="dialog" >
        <el-form :model="form">
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialog = false">取 消</el-button>
          <el-button type="primary" @click="dialog = false">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
export default {
  // 接收父组件参数
  props:{
    dialog:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      //这里的定义一定要去除
      // dialogFormVisible:false,
      form:{},
      formLabelWidth:'100px'
    }
  },
  created() {
    console.log(this.vis)
  },

}
</script>

<style>

</style>