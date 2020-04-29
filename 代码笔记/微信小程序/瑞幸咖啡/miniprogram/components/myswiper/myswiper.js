// components/myswiper/myswiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    swiperCurrent:0,
    banners: [
      "/images/banner/baner1.jpg",
      "/images/banner/baner2.jpg",
      "/images/banner/baner3.jpg",
      "/images/banner/baner4.jpg",
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    currentChange(e){
      console.log(e.detail.current);
      this.setData({
        swiperCurrent:e.detail.current
      })
    },
  }
})
