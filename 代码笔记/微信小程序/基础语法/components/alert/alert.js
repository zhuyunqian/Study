// components/alert/alert.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    alertHtml:{
      type:Object,
      default:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    bool:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    close(e){
      this.triggerEvent('sendclose', !this.data.bool)
    }
  }
})
