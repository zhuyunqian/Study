<template>
  <van-tabbar
    v-model="active"
    active-color="#07c160"
    inactive-color="#000000"
    :route="ifRoute"
    :inactive-color="inactiveColor"
    :active-color="activeColor"
    fixed
  >
    <van-tabbar-item
      v-for="(item, index) in tabbarArr"
      :key="index"
      @change="changeFn(index)"
      :to="item.url"
    >
    <template #icon="props">
      <img :src="props.active ? item.icon.active : item.icon.inactive" />
    </template>
    <span>{{item.name}}</span>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      ifRoute: true, // 是否开启路由模式
      active: 0, // 当前第几个
      tabbarArr: [
        {
          name: "首页",
          url: "/home",
          icon: {
            active: require("@/assets/tabbar/ic_menu_choice_pressed.png"),
            inactive: require("@/assets/tabbar/ic_menu_choice_nor.png")
          }
        },
        {
          name: "专题",
          url: "/topic",
          icon: {
            active: require("@/assets/tabbar/ic_menu_topic_pressed.png"),
            inactive: require("@/assets/tabbar/ic_menu_topic_nor.png")
          }
        },
        {
          name: "分类",
          url: "/catalog",
          icon: {
            active: require("@/assets/tabbar/ic_menu_sort_pressed.png"),
            inactive: require("@/assets/tabbar/ic_menu_sort_nor.png")
          }
        },
        {
          iconUrl: require("@/assets/tabbar/ic_menu_shoping_nor.png"),
          iconActiveUrl: require("@/assets/tabbar/ic_menu_shoping_pressed.png"),
          name: "购物车",
          url: "/cart",
          icon: {
            active: require("@/assets/tabbar/ic_menu_shoping_pressed.png"),
            inactive: require("@/assets/tabbar/ic_menu_shoping_nor.png")
          }
        },
        {
          name: "我的",
          url: "/user",
          icon: {
            active: require("@/assets/tabbar/ic_menu_me_pressed.png"),
            inactive: require("@/assets/tabbar/ic_menu_me_nor.png")
          }
        }
      ],
      activeColor: "#b4282d", // 选中标签的颜色
      inactiveColor: "#666666" // 未选中的颜色
    };
  },
  created() {
    let path = this.$route.path;
    this.tabbarArr.map((item, index) => {
      if (path == item.url) {
        this.active = index;
      }
    });
  },
  methods: {
    changeFn(index) {
      //    this.active = index;
      console.log(index);
    }
  }
};
</script>
<style lang="less" scoped>
// .van-tabbar{
//     position: fixed;
//     bottom: 0;
//     left: 0;
// }
</style>
