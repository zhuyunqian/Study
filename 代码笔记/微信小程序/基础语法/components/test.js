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

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
