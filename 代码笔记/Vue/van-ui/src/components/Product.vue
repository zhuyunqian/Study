<template>
  <ul>
    <li v-for="item in list" :key="item.id" @click="jumpToProductDetail(item.id)">
      <img :src="item.list_pic_url" alt />
      <section class="van-ellipsis">{{item.name}}</section>
      <div>￥ {{item.retail_price | priceFilter}} 元</div>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    list: {
      required: true,
      type: Array
    }
  },
  data() {
    return {};
  },
  methods: {
    jumpToProductDetail(id){
      this.$router.push({
        name: "ProductDetail",
        params: {
          id
        }
      })
    }
  },
  filters: {
    // 价格过滤器，所有价格保留两位小数
    priceFilter(money) {
      return money.toFixed(2);
    }
  }
};
</script>
<style lang="less" scoped>
ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5px;
  li {
    width: 49.5%;
    margin-bottom: 5px;
    background: #fff;
    position: relative;
    height: auto;
    img {
      height: auto !important;
      width: 100%;
    }
    section {
      text-align: center;
    }
    div {
      color: darkred;
      text-align: center;
      line-height: 30px;
    }
  }
}
</style>
