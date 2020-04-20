<template>
  <div>
    <!-- 这里的关闭按钮应为引用了父组件的值并进行修改报错
        需要关闭自己的关闭功能，重新书写，给父组件传值
        根据组件的属性beforeclose书写 关闭前回调函数
     -->
      <el-dialog title="编辑部门" :visible.sync="dialog" :before-close="close">
        <el-form :model="diaDate">
          <el-form-item label="部门名称" :label-width="formLabelWidth">
            <el-input v-model="diaDate.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="部门编号" :label-width="formLabelWidth">
            <el-input v-model="diaDate.sn" autocomplete="off"></el-input>
          </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
          <!-- 
            组件作用域问题
            这里修改 父组件属性值会报错

            应该传值给父组件 定义新的指令
           -->
          <el-button @click="close">取 消</el-button>
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
    },
    diaDate:{
      type:Object,
      default:{},
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
  methods: {
    close(){
      //触发自定义事件
      this.$emit('closeVis',false);
    }
  },

}
</script>

<style>

</style>