<template>
  <div>
    <van-tabs v-model="active" @click="tabClick">
      <van-tab
        v-for="item in brotherCategory"
        :key="item.id"
        :title="item.name"
        :title-active-color="activeColor"
      >
        <div class="title">
          <div class="title1">{{currentCategory.name}}</div>
          <div class="title2">{{currentCategory.front_name}}</div>
        </div>
        <product :list="productList"></product>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { ChannelTab, ChannelList } from "@/request/api";
import Product from "@/components/Product";
export default {
  name: "Channel",
  data() {
    return {
      brotherCategory: [], // 标题栏数组
      currentCategory: {}, // 当前标题栏选中项
      activeColor: "darkred", // 当前选中项颜色
      active: 0, // 标题栏的当前项索引
      productList: [] // 商品列表数组
    };
  },
  components: {
    Product
  },
  created() {
      this.doAxios();   // 调用请求数据的方法
  },
  methods: {
      // 点击了标题栏
      tabClick(){
          let newid = this.brotherCategory[this.active].id;
          this.doAxios(newid);
      },
      // 做请求的函数
    doAxios(newid) {
      let id = newid ? newid : this.$route.params.id;
      let _this = this;
      // 请求标题栏数据
      ChannelTab({
        params: {
          id
        }
      }).then(res => {
        if (res.errno == 0) {
          _this.brotherCategory = res.data.brotherCategory;
          _this.currentCategory = res.data.currentCategory;

          // 遍历数组
          _this.brotherCategory.map((val, index) => {
            if (val.id == _this.currentCategory.id) {
              _this.active = index;
            }
          });
        }
      });

      // 请求商品列表数据
      ChannelList({
        params: {
          categoryId: id,
          page: 1,
          size: 10000
        }
      }).then(res => {
        if (res.errno == 0) {
          _this.productList = res.data.goodsList;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.title {
  text-align: center;
  line-height: 30px;
  padding: 20px 0 10px;
  .title2 {
    color: #666;
  }
}
</style>
