<template>
  <div class="topic">
    <section v-for="item in topicArr" :key="item.id">
      <img :src="item.scene_pic_url" alt />
      <h4>{{item.title}}</h4>
      <div class="subTitle">{{item.subtitle}}</div>
      <div class="price">￥ {{item.price_info | priceFilter}} 元起</div>
    </section>
    <div class="btn_group">
      <van-button
        plain
        hairline
        :disabled="currentPage == 1 ? true : false"
        type="default"
        @click="getListData(currentPage-1)"
      >上一页</van-button>
      <van-button
        plain
        hairline
        :disabled="ifShowNext"
        type="default"
        @click="getListData(currentPage+1)"
      >下一页</van-button>
    </div>
  </div>
</template>
<script>
import { GetTopicList } from "@/request/api";
import axios from "axios";
export default {
  name: "Topic",
  data() {
    return {
      count: 0, // 总数据量
      totalPages: 0, // 总页数
      pageSize: 10, // 每个页面数据个数
      currentPage: 1, // 当前页数
      topicArr: []
    };
  },
  created() {
    this.getListData(this.currentPage);
  },
  computed: {
    // 是否显示下一页
    ifShowNext() {
      //  总页数-当前页数  大于零，则下一页可点击，小于等于零，则下一页不可点击
      return this.totalPages - this.currentPage > 0 ? false : true;
    }
  },
  methods: {
    // 获取列表数据
    getListData(page) {
      let _this = this;
      GetTopicList({
        params: {
          page: page,
          size: _this.pageSize
        }
      }).then(res => {
        if (res.errno == 0) {
          console.log(page, typeof page);
          console.log(res.data);
          _this.count = res.data.count;
          _this.totalPages = res.data.totalPages;
          _this.pageSize = res.data.pageSize;
          _this.currentPage = res.data.currentPage;
          _this.topicArr = res.data.data;
        }
      });
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
.topic {
  padding-bottom: 50px;
  section {
    text-align: center;
    background: #fff;
    margin-bottom: 10px;
    h4 {
      height: 40px;
      line-height: 40px;
      font-weight: normal;
      margin: 0;
    }
    img {
      width: 100%;
    }
    .subTitle {
      color: #666;
      font-size: 12px;
      width: 80%;
      margin: auto;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .price {
      color: darkred;
      height: 40px;
      line-height: 40px;
    }
  }
  .btn_group {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .van-button {
      width: 50%;
    }
  }
}
</style>
