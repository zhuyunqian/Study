<template>
  <div class="home">
    <to-search></to-search>
    <van-swipe :autoplay="3000" height="220">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <img v-lazy="item.image_url" width="100%" height="100%" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="channel.length">
      <van-grid-item
        v-for="item in channel"
        :key="item.sort_order"
        :icon="item.icon_url"
        :text="item.name"
        @click="jumpToChannel(item.id)"
      />
    </van-grid>
    <div class="brand">
      <div class="brand_title">品牌制造商直供</div>
      <ul>
        <li v-for="item in brandList" :key="item.id" @click="jumpToBrandDetail(item.id)">
          <h4>{{item.name}}</h4>
          <p>￥ {{item.floor_price | priceFilter}} 元</p>
          <img :src="item.pic_url" alt />
        </li>
      </ul>
    </div>
    <div class="brand new">
      <div class="brand_title">周一周四 · 新品首发</div>
      <product :list="newGoodsList"></product>
    </div>
    <div class="hot">
      <div class="hot_title">人气推荐</div>
      <van-card
        v-for="item in hotGoodsList"
        :key="item.id"
        :price="item.retail_price | priceFilter"
        :desc="item.goods_brief"
        :title="item.name"
        :thumb="item.list_pic_url"
        @click="jumpToProductDetail(item.id)"
      />
    </div>
    <div class="topic">
      <div class="topic_title">专题精选</div>
      <van-swipe :loop="false" :width="350" :show-indicators="false">
        <van-swipe-item v-for="item in topicList" :key="item.id">
          <img :src="item.scene_pic_url" width="100%" alt />
          <div>
            {{item.title}}
            <span>￥{{item.price_info | priceFilter}}元起</span>
          </div>
          <section>{{item.subtitle}}</section>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="brand new category" v-for="item in categoryList" :key="item.id">
      <div class="brand_title">{{item.name}}</div>
      <product :list="item.goodsList"></product>
    </div>
  </div>
</template>

<script>
import { GetHomeLists } from "@/request/api";
import Search from "@/components/Search.vue";
import Product from "@/components/Product.vue";
export default {
  name: "Home",
  data() {
    return {
      banner: [], // 轮播图
      channel: [], // 图标导航
      brandList: [], // 品牌制造商直供
      newGoodsList: [], // 新品首发
      hotGoodsList: [], // 人气推荐
      topicList: [], // 专题精选
      categoryList: [] // 分类数组
    };
  },
  components: {
    ToSearch: Search,
    Product
  },
  created() {
    let _this = this;
    GetHomeLists()
      .then(res => {
        // 解构数据
        let {
          banner,
          channel,
          brandList,
          newGoodsList,
          hotGoodsList,
          topicList,
          categoryList
        } = res.data;
        _this.banner = banner;
        _this.channel = channel;
        _this.brandList = brandList;
        _this.newGoodsList = newGoodsList;
        _this.hotGoodsList = hotGoodsList;
        _this.topicList = topicList;
        _this.categoryList = categoryList;
      })
      .catch(err => {
        console.log(err);
      });
  },
  filters: {
    // 价格过滤器，所有价格保留两位小数
    priceFilter(money) {
      return money.toFixed(2);
    }
  },
  methods: {
    // 跳转到品牌商详情页
    jumpToBrandDetail(id){
      this.$router.push({
        name: "BrandDetail",
        params: {
          id
        }
      })
    },
    // 跳转到channel页面
    jumpToChannel(id){
      this.$router.push("/channel/"+id);
    },
    // 跳转到商品详情页面
    jumpToProductDetail(id){
      this.$router.push("/productdetail/"+id);
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  padding-bottom: 40px;
}
.van-search__content {
  background: #ededed;
}
.van-grid {
  margin-bottom: 10px;
}
.brand {
  background: #fff;
  margin-bottom: 10px;
  .brand_title {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 49.5%;
      height: 126px;
      margin-bottom: 5px;
      position: relative;
      h4 {
        font-weight: normal;
        position: absolute;
        left: 5%;
        top: 10px;
        margin: 0;
      }
      p {
        position: absolute;
        left: 5%;
        top: 20px;
        color: #666;
        font-size: 14px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.new {
  margin-bottom: 10px;
}
.van-card__title {
  font-size: 14px;
}
.hot {
  padding: 0 4%;
  background: #fff;
  margin-bottom: 10px;
  .hot_title {
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
  }
  .van-card {
    border-bottom: 1px solid #ccc;
    &:last-of-type {
      border-bottom: 0;
    }
    .van-card__header {
      padding-bottom: 10px;
    }
    .van-card__title {
      font-size: 16px;
      margin-bottom: 10px;
    }
    .van-card__price {
      color: darkred;
    }
  }
}
.topic {
  background: #fff;
  margin-bottom: 10px;
  .topic_title {
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .van-swipe {
    .van-swipe__track {
      .van-swipe-item {
        padding-left: 10px;
        box-sizing: border-box;
        img {
          width: 100%;
          height: 193px;
        }
        div {
          margin-top: 10px;
          span {
            color: darkred;
          }
        }
        section {
          line-height: 30px;
          color: #666;
          font-size: 12px;
          width: 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        &:last-child {
          padding-right: 10px;
        }
      }
    }
  }
}
</style>
