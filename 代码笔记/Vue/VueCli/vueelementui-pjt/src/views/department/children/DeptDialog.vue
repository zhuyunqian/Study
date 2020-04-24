<template>
  <div>
    <!-- 这里的关闭按钮应为引用了父组件的值并进行修改报错
        需要关闭自己的关闭功能，重新书写，给父组件传值
        根据组件的属性beforeclose书写 关闭前回调函数
     -->
      <el-dialog title="编辑部门" :visible.sync="dialog" :before-close="close">
        <el-form :model="form">
          <el-form-item label="部门名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="部门编号" :label-width="formLabelWidth">
            <el-input v-model="form.sn" autocomplete="off"></el-input>
          </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
          <!-- 
            组件作用域问题
            这里修改 父组件属性值会报错

            应该传值给父组件 定义新的指令
           -->
          <el-button @click="close">取 消</el-button>
          <el-button type="primary" @click="addBtn">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs' //引入qs库，准备转换data为接口需要值
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
  /*
    由于v-model 是 数据层和 view层同步  --  所以传输过来的data直接进行了改变 这里需要见天数据发生改变再进行改变
    watch -- view监听对象
    watch 和 computed 两个的区别是 一个从外到内 一个是从内到外， 看情况而用
  */
  watch: {
    diaDate(val,oldval){
      console.log(val)
      console.log(oldval)
      this.form = JSON.parse(JSON.stringify(val));
    }
  },
  methods: {
    close(){
      //触发自定义事件
      this.$emit('closeVis',false);
    },
    addBtn(){
      // 触发方法，确定
      // 发送请求
      // 关闭弹框
      // 提示成功或者失败
      // 重新请求表格数据
      let data = {
        name : this.form.name,
        sn : this.form.sn,
        token : localStorage.getItem('token')
      }
      data = qs.stringify(data)
      axios.put('/departments/'+this.form.id,data).then((res)=>{
        if(res.data.success){
          // 提示是否成功
          console.log(res)
          // 这里箭头函数的指向和es5写法指向this不同注意注意
          console.log(this)
          this.$message.success('修改成功')
          //关闭弹框
          this.close();

          // 到了这里已经修改成功（后台数据），但是页面没有刷新，因为未重新请求表格数据
        }else{
          this.$message.error(res.data.msg)
        }
      })
    }
  },

}
</script>

<style>

</style>