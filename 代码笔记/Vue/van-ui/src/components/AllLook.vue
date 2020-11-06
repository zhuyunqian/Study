<template>
    <div class="allLook">
        <div class="allLook_title"><span>大家都在看</span></div>
        <product :list="list"></product>
    </div>
</template>
<script>
import { RelatedGoods } from "@/request/api";
import Product from '@/components/Product';
export default {
    name: "AllLook",
    props: ["goodsid"],
   data() {
      return {
          list: [],     // 传给Product组件的参数
      }
   },
   components: {
       Product
   },
   created(){
       let _this = this;
       RelatedGoods({
           params: {
               id: _this.goodsid
           }
       }).then(res=>{
           if(res.errno == 0){
               _this.list = res.data.goodsList;
           }
       })
   }
}
</script>
<style lang="less" scoped>
.allLook {
  background: #fff;
  .allLook_title {
    height: 50px;
    line-height: 50px;
    position: relative;
    &::after {
      content: "";
      width: 40%;
      height: 2px;
      background: #ccc;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 1;
    }
    span {
      position: absolute;
      width: 30%;
      background: #fff;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      z-index: 2;
      text-align: center;
      font-size: 18px;
    }
  }
}
</style>
