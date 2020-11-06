<template>
  <van-row>
    <van-col span="8">
      <van-icon name="checked" />
      {{day}}天无忧退货
    </van-col>
    <van-col span="8">
      <van-icon name="checked" />
      {{hour}}小时快速退款
    </van-col>
    <van-col span="8">
      <van-icon name="checked" />
      满{{price}}元免邮费
    </van-col>
  </van-row>
</template>
<script>
export default {
  name: "Info",
  props: {
    day: {
      type: Number,
      default: 30
    },
    hour: {
      type: Number,
      default: 48
    },
    price: {
      type: Number,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.van-row {
  font-size: 12px;
  text-align: center;
  line-height: 40px;
  color: #666;
  .van-icon {
    color: red;
    position: relative;
    top: 1px;
  }
}
</style>
