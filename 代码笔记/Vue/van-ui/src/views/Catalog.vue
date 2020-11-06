<template>
  <div class="catalog">
    <to-search></to-search>
    <van-tree-select height="100vw" :items="categoryList" :main-active-index.sync="active" @click-nav="clickNavFn">
      <template #content>
        <section>
          <div>{{imageTitle}}</div>
          <img width="100%" height="150" :src="imageSrc" />
        </section>
        <div class="title">
          <h4>{{categoryTitle}}分类</h4>
          <div class="line"></div>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="item in categoryRightList" :key="item.id">
            <van-image fit="cover" :src="item.wap_banner_url" />
            <div class="imgTitle">{{item.name}}</div>
          </van-grid-item>
        </van-grid>
      </template>
    </van-tree-select>
  </div>
</template>
<script>
import { GetCatalogList, GetCatalogDetailsList } from "@/request/api";
import Search from "@/components/Search.vue";
export default {
  data() {
    return {
      active: 0,
      categoryList: [], // 左侧分类项
      imageSrc: "", // banner图片路径
      imageTitle: "", // banner图片标题
      categoryRightList: [], // 右侧商品项
      categoryTitle: "居家"   // 右侧分类的标题
    };
  },
  components: {
    ToSearch: Search
  },
  created() {
    let _this = this;
    GetCatalogList().then(res => {
      if (res.errno == 0) {
        _this.categoryList = res.data.categoryList;
        /* 
            这里将响应的数组项中，每个name属性名都转化为text属性名
          */
        let obj = {};
        _this.categoryList.map(item => {
          obj = item;
          obj["text"] = item["name"];
          delete obj["name"];
        });
        // 获取初始banner图片
        _this.imageSrc = _this.categoryList[0].img_url;
        // 获取初始banner标题
        _this.imageTitle = _this.categoryList[0].front_name;
        // 获取右侧初始商品项数组
        _this.categoryRightList = _this.categoryList[0].subCategoryList;
        // 获取右侧分类的标题
        _this.categoryTitle = res.data.currentCategory.name;
      }
    });
  },
  methods: {
    // 点击左侧导航
    clickNavFn(index){
      let navId = this.categoryList[index].id;
      let _this = this;
      GetCatalogDetailsList({
        params: {
          id: navId
        }
      }).then(res=>{
        if(res.errno == 0){
          _this.imageSrc = res.data.currentCategory.banner_url;
          _this.imageTitle = res.data.currentCategory.front_name;
          _this.categoryRightList = res.data.currentCategory.subCategoryList;
          _this.categoryTitle = res.data.currentCategory.name;
        }
      })
    }
  }
};
</script>
<style lang="less" scoped>
.catalog {
  height: 100vh;
  .van-sidebar {
    height: calc(100vh - 100px);
    flex: 0.5;
  }
  .van-tree-select__content {
    height: calc(100vh - 100px);
    section {
      padding: 10px 2%;
      position: relative;
      div {
        position: absolute;
        left: 0;
        top: 0;
        line-height: 150px;
        text-align: center;
        width: 100%;
        z-index: 1;
        color: #fff;
      }
      img {
        box-shadow: 0 0 3px #000;
        // css3的filter属性，brightness函数让元素变暗
        filter: brightness(70%);
      }
    }
    .title {
      height: 50px;
      line-height: 50px;
      position: relative;
      h4 {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 30%;
        text-align: center;
        font-weight: normal;
        margin: auto;
        z-index: 2;
        background: #fff;
      }
      .line {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;
        height: 2px;
        width: 40%;
        background: #ccc;
        z-index: 1;
      }
    }
  }
}
</style>
