<template>
  <div class="product_detail">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="image in gallery" :key="image.id">
        <img v-lazy="image.img_url" />
      </van-swipe-item>
    </van-swipe>
    <info :price="88"></info>
    <section class="goodsInfo">
      <div class="title">{{goodsInfo.name}}</div>
      <div class="brief">{{goodsInfo.goods_brief}}</div>
      <div class="price">￥ {{goodsInfo.retail_price | priceFilter}}</div>
    </section>
    <van-cell title="请选择规格数量" is-link @click="showSkuFn" />
    <canshu v-show="attribute.length>0" :attribute="attribute" :goodsdesc="goodsInfo.goods_desc"></canshu>
    <sku :show="showSku" :goodsInfo="goodsInfo" @closesku="closeSkuFn"></sku>
    <product-tabbar
      :show="showSku"
      :productList="productList"
      @showsku="showSkuFn"
      @closesku="closeSkuFn"
    ></product-tabbar>
    <issue :issue="issue"></issue>
    <all-look :goodsid="$route.params.id"></all-look>
    <back-btn></back-btn>
  </div>
</template>
<script>
import { GoodsDetail } from "@/request/api";
import Info from "@/components/Info";
import Sku from "@/components/Sku";
import ProductTabbar from "@/components/ProductTabbar";
import Canshu from "@/components/Canshu";
import Issue from "@/components/Issue";
import AllLook from "@/components/AllLook";
import BackBtn from "@/components/BackBtn";
export default {
  data() {
    return {
      gallery: [], // 轮播图
      attribute: [], // 商品参数
      goodsInfo: {}, // 商品信息
      showSku: false, // 显示选择框
      issue: [], // 常见问题数组
      productList: [] // 给添加到购物车使用的产品列表信息
    };
  },
  components: {
    Info,
    Sku,
    ProductTabbar,
    Canshu,
    Issue,
    AllLook,
    BackBtn
  },
  filters: {
    // 价格过滤器，所有价格保留两位小数
    priceFilter(money) {
      return Number(money).toFixed(2);
    }
  },
  methods: {
    // 显示选择框
    showSkuFn() {
      this.showSku = true;
    },
    // 关闭选择框
    closeSkuFn() {
      this.showSku = false;
    }
  },
  created() {
    let _this = this;
    let productId = this.$route.params.id;

    // 获取商品参数
    GoodsDetail({
      params: {
        id: productId
      }
    }).then(res => {
      if (res.errno == 0) {
        _this.attribute = res.data.attribute;
        _this.gallery = res.data.gallery;
        _this.goodsInfo = res.data.info;
        _this.issue = res.data.issue;
        _this.productList = res.data.productList;
      }
    });
  }
};
</script>
<style lang="less" scoped>
.product_detail {
  min-height: calc(100vh - 50px);
  padding-bottom: 50px;
  .van-swipe__track {
    width: 100%;
    .van-swipe-item {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .goodsInfo {
    background: #fff;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    line-height: 30px;
    .title {
      font-weight: normal;
      font-size: 24px;
    }
    .brief {
      font-size: 14px;
      color: #666;
    }
    .price {
      color: darkred;
    }
  }
  .van-cell {
    border-top: 1px solid #ccc;
    background: #fff;
    margin-bottom: 10px;
  }
  .van-sku-container {
    min-height: auto;
    .van-sku-header-item {
      &:nth-of-type(2) {
        color: #fff !important;
      }
    }
  }
}
</style>
