// components/test.js
Component({

  options:{
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的属性列表
   */
  properties: {
    // 接收定义传参
    valParam:{
      type:String,
      default:'111'
    },
    obj:{
      type:Object,
      default:{}
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
    arr:[1,2,3,4,5,6,7]
  },

  

  /**
   * 组件的方法列表
   */
  methods: {
    //事件触发
    tapsend(){
      console.log(123)
      // console.log(this)
      // 触发自定义事件传送event事件
      this.triggerEvent('sendarr',this.data.arr);
    },

  }
})
