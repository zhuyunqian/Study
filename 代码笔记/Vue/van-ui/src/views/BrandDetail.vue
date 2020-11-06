<template>
  <div class="brandDetail">
    <div class="brandDetail1">
      <div class="brandDetail1_up" :style="{'background-image': 'url('+brandBanner.list_pic_url+')', filter: 'brightness(95%)'}">
        <h3>{{brandBanner.name}}</h3>
      </div>
      <div class="brandDetail1_down">{{brandBanner.simple_desc}}</div>
    </div>
    <product :list="listArr"></product>
  </div>
</template>
<script>
import { BrandDetailBanner, BrandDetailList } from "@/request/api";
import Product from '@/components/Product'
export default {
  name: "BrandDetail",
  data() {
    return {
      brandBanner: {},
      listArr: []   // 商品列表数组
    };
  },
  components: {
    Product
  },
  created() {
    // 保存上级页面传过来的id
    let id = this.$route.params.id;
    let _this = this;
    // 获取banner数据
    BrandDetailBanner({
      params: {
        id
      }
    }).then(res => {
      _this.brandBanner = res.data.brand;
    });

    // 获取商品列表数组
    BrandDetailList({
      params: {
        brandId: id,
        page: 1,
        size: 1000
      }
    }).then(res=>{
      if(res.errno == 0){
        _this.listArr = res.data.goodsList;
      }
    })
  }
};
</script>
<style lang="less" scoped>
.brandDetail {
  min-height: calc(100vh - 50px);
  background: #f4f4f4;
  .brandDetail1 {
    margin-bottom: 10px;
    .brandDetail1_up {
      width: 100%;
      height: 145px;
      background-repeat: no-repeat;
      background-size: cover;
      h3 {
        text-align: center;
        line-height: 145px;
        width: 100%;
        margin: 0;
        font-weight: normal;
        color: #fff;
        text-decoration: underline;
      }
    }
    .brandDetail1_down{
      padding: 20px 2%;
      text-align: center;
      font-size: 18px;
      line-height: 26px;
      color: #666;
      background: #fff;
    }
  }
}
</style>
