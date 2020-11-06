<template>
  <div class="sku" v-show="show">
      <div class="sku_content">
        <section>
          <van-image width="25vw" height="25vw" :src="goodsInfo.list_pic_url" />
          <div class="sku_info">
            <div>价格：￥ {{goodsInfo.retail_price | priceFilter}}</div>
            <div>库存：{{goodsInfo.goods_number}}</div>
          </div>
          <van-icon name="cross" @click="closeSku" />
        </section>
        <p>数量：</p>
        <van-stepper
          v-model="stepperVal"
          :min="1"
          :max="goodsInfo.goods_number"
          input-width="100px"
          button-size="32px"
          @change="stepChangeFn"
        />
      </div>
  </div>
</template>
<script>
export default {
  name: "Sku",
  props: ["show", "goodsInfo"],
  data() {
    return {
      price: 0, //商品价格
      stock: 0, // 库存
      stepperVal: 1 // 步进器的值
    };
  },
  created(){
    // 步进器初始化，即添加默认个数为1
    localStorage.setItem('stepNum', 1);
  },
  methods: {
    closeSku() {
      this.$emit("closesku");
    },
    // 步进器的值改变时，存到localStorage中
    stepChangeFn(){
      localStorage.setItem('stepNum', this.stepperVal);
    }
  },
  filters: {
    // 价格过滤器，所有价格保留两位小数
    priceFilter(money) {
      return Number(money).toFixed(2);
    }
  }
};
</script>
<style lang="less" scoped>
.sku {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 3;
  left: 0;
  bottom: 50px;
  background: rgba(0, 0, 0, 0.6);
  .sku_content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30vh;
    background: #fff;
    border-bottom: 1px solid #ccc;
    padding: 10px 2%;
    box-sizing: border-box;
    section {
      display: flex;
      justify-content: space-between;
      .sku_info {
        text-align: left;
        width: 60vw;
        line-height: 12.5vw;
      }
    }
  }
}
</style>
