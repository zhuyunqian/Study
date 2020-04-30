// components/myswiper/myswiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    swiperHeight:{
      type:String,
      default:'',
    },
    swiDots:{
      type:Boolean,
      default:null,
    },
    swiperBanner:{
      type:Array,
      default:[],
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    swiperCurrent:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    currentChange(e){
      // console.log(e.detail.current);
      this.setData({
        swiperCurrent:e.detail.current
      })
    },
  }
})
