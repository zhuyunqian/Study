<template>
  <div class="productTabbar">
    <van-goods-action>
      <van-goods-action-icon
        :icon="shoucang ? 'star' : 'star-o'"
        text="已收藏"
        :color="shoucang ? '#ff5000' : '#666666'"
        @click="toShowCangFn"
      />
      <van-goods-action-icon icon="cart-o" text="购物车" :badge="goodsCount" @click="toCartPageFn" />
      <van-goods-action-button type="danger" text="立即购买" @click="buyNow" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addToCart" />
    </van-goods-action>
  </div>
</template>
<script>
import { GoodsCount, AddToCart } from "@/request/api";
export default {
  name: "ProductTabbar",
  props: ["show", "productList"], // 接收商品详情页过来的sku显示与否的参数，点击“加入购物车”时可用
  data() {
    return {
      shoucang: false, // 是否收藏
      goodsCount: 0 // 购物车商品总数量
    };
  },
  methods: {
    // 点击收藏
    toShowCangFn() {
      this.shoucang = !this.shoucang;
    },
    // 点击购物车，跳转去购物车页面
    toCartPageFn() {
      this.$router.push("/cart");
    },
    // 立即购买
    buyNow() {
      this.$toast("该功能暂未开放");
    },
    // 点击加入购物车
    addToCart() {
      let _this = this;
      let num = Number(localStorage.getItem("stepNum"));

      if (this.show) {
        // 直接加入购物车
        AddToCart({
          goodsId: _this.productList[0].goods_id,
          productId: _this.productList[0].id,
          number: num
        })
          .then(res => {
            if (res.errno == 0) {
              _this.$toast.success("成功加入购物车");
              _this.$emit("closesku"); // 关闭sku
              _this.goodsCount = _this.goodsCount + num; // 让用户看到购物车数量的增加
            }
          })
          .catch(() => {
            _this.$toast.fail("加入购物车失败");
          });
      } else {
        // 先打开购物车
        this.$emit("showsku");
      }
    }
  },
  created() {
    let _this = this;
    // 获取购物车总数量
    GoodsCount().then(res => {
      if (res.errno == 0) {
        _this.goodsCount = res.data.cartTotal.goodsCount;
      }
    });
  }
};
</script>
<style lang="less" scoped>
.productTabbar {
  .van-goods-action {
    background: #fff;
    z-index: 3;
  }
}
</style>
