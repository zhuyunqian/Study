<template>
  <div>
    <van-search
      v-model="searchVal"
      shape="round"
      background="#fff"
      readonly
      placeholder="商品搜索, 共239款好物"
      @focus="focusEvent"
    />
    <van-popup
      v-model="showpopup"
      position="right"
      :style="{ width: '90%', height: '100vh', background: '#f4f4f4' }"
    >
      <van-search
        class="popupSearch"
        v-model="popupSearchVal"
        show-action
        placeholder="请输入搜索关键词"
        @clear="onClear"
        @focus="onFocus"
        @search="onSearch"
        @input="onInput"
        @cancel="onCancel"
      />
      <section v-if="ifShowHistory">
        <div class="history" v-show="historyRecordArr.length">
          <div class="history_title">
            <span>历史记录</span>
            <van-icon name="delete" size="24" @click="deleteHistory" />
          </div>
          <div class="history_box">
            <van-tag
              plain
              v-for="(item, index) in historyRecordArr"
              :key="index"
              color="#666"
              @click="tagClick(item)"
            >{{item}}</van-tag>
          </div>
        </div>
        <div class="history">
          <div class="history_title">
            <span>热门搜索</span>
          </div>
          <div class="history_box">
            <van-tag
              plain
              v-for="(item, index) in hotArr"
              :key="index"
              :style="{'color': item.is_hot == 1 ? 'red' : '#666'}"
              @click="tagClick(item.keyword)"
            >{{item.keyword}}</van-tag>
          </div>
        </div>
      </section>
      <section class="popup_product" v-else>
        <van-dropdown-menu active-color="#ee0a24">
          <van-dropdown-item @change="dropDownEvent1" v-model="value1" :options="option1" />
          <van-dropdown-item @change="dropDownEvent2" title="价格" v-model="value2" :options="option2" />
          <van-dropdown-item @change="dropDownEvent3" v-model="value3" :options="option3" />
        </van-dropdown-menu>
        <van-list>
          <van-cell
            v-for="item in searchHelpArr"
            :key="item"
            :title="item"
            @click="listCellEvent(item)"
          />
        </van-list>
        <product :list="goodsList"></product>
        <section v-show="ifShowNone" style="text-align: center;color: #666;position: absolute;top:35vh;width: 100%;">
           <van-icon name="comment-o" size="60" color="#666" />
           <div>您寻找的商品还未上架</div>
        </section>
      </section>
    </van-popup>
  </div>
</template>
<script>
import {
  GetSearchList,
  DelHistory,
  SearchTag,
  ActiveSearch
} from "@/request/api";
import Product from "@/components/Product.vue";
export default {
  data() {
    return {
      searchVal: "", // 搜索框的值
      showpopup: false, // 右侧弹出层的显隐
      popupSearchVal: "", // popup的搜索框值
      historyRecordArr: [], // 历史记录数组
      hotArr: [], // 热门搜索数组
      ifShowHistory: true, // 显示历史记录区块
      value1: null, // 综合
      value2: 0, // 价格
      value3: 0, // 分类
      // 综合选项
      option1: [
        { text: "综合", value: 0 }
      ],
      // 价格选项
      option2: [
        { text: "价格由高到低", value: 0 },
        { text: "价格由低到高", value: 1 }
      ],
      // 分类选项
      option3: [
        { text: "全部", value: 0 },
        { text: "居家", value: 1 }
      ],
      goodsList: [], // 搜索出来的商品数组
      searchHelpArr: [], // 检测输入时请求出来的数组
      ifShowNone: false,     // 是否显示商品未上架
    };
  },
  components: {
    Product
  },
  methods: {
    // 聚焦主页面搜索框
    focusEvent() {
      this.showpopup = true;
      let _this = this;
      GetSearchList().then(res => {
        // console.log(res)
        if (res.errno == 0) {
          console.log(res.data);
          _this.popupSearchVal = res.data.defaultKeyword.keyword; // 拿到搜索框里的默认值
          _this.historyRecordArr = res.data.historyKeywordList; // 拿到历史记录数组
          _this.hotArr = res.data.hotKeywordList; // 拿到热门搜索数组
        }
      });
    },
    // 删除历史记录
    deleteHistory() {
      let _this = this;
      DelHistory({
        params: {}
      }).then(res => {
        if(res.errno == 0){
          _this.historyRecordArr = [];
        }
      });
    },
    // popup搜索框中按下回车
    onSearch(val) {
      this.getGoodsList(val); // 调用请求函数
      // 按下回车那一刻，分类栏应该恢复原状
      this.value1 = this.option1[0].value;
      this.value2 = this.option2[0].value;
      this.value3 = this.option3[0].value;
    },
    // 点击了popup的取消
    onCancel() {
      this.showpopup = false;
    },
    // 标签点击事件
    tagClick(item) {
      this.popupSearchVal = item;
      // 直接调用回车事件
      this.onSearch(this.popupSearchVal);
    },
    // 发起请求，搜索选项
    getGoodsList(item) {
      let _this = this;
      _this.ifShowNone = false;  // 搜索之前先把“商品未上架”取消
      // 搜索标签
      SearchTag({
        params: {
          keyword: item,
          page: 1,
          size: 20,
          sort: _this.value1==null ? "id" : "price",
          order: _this.value2==1 ? 'asc' : "desc",
          categoryId: _this.value3==0 ? 0 : 1005000
        }
      }).then(res => {
        if (res.errno == 0) {
           // 如果搜索出来没有结果，就显示商品未上架
           if(res.data.goodsList.length<=0){
              _this.ifShowNone = true;
           }
          _this.goodsList = res.data.goodsList; // 获取商品项数组
          _this.searchHelpArr = [];    // 清空下拉框数组
          _this.ifShowHistory = false;    // 隐藏历史记录区块
        }
      });
    },
    // 点击了输入框的清除图标
    onClear() {
      this.getSearchHelp(undefined);
      this.goodsList = [];
      this.ifShowHistory = true;
    },
    // 监听输入
    onInput(val) {
      this.showDropDown = true;
      this.getSearchHelp(val);
    },
    // 发起请求，根据搜索框动态变化的值
    getSearchHelp(val) {
      this.ifShowHistory = false; // 隐藏掉历史记录区块
      let _this = this;
      ActiveSearch({
        params: {
          keyword: val
        }
      }).then(res => {
        if (res.errno == 0) {
          _this.searchHelpArr = res.data;
        }
      });
    },
    // 输入框聚焦
    onFocus() {
      this.ifShowHistory = false; // 显示历史记录区块
      this.showDropDown = true;
      this.getSearchHelp(this.popupSearchVal); // 聚焦时进行一次实时搜索
    },
    // 下拉菜单点击事件，调用商品项请求函数
    listCellEvent(item) {
      // 下拉菜单点击的那一刻，分类栏应该恢复原状
      this.value1 = this.option1[0].value;
      this.value2 = this.option2[0].value;
      this.value3 = this.option3[0].value;
      this.popupSearchVal = item;
      this.getGoodsList(item); // 调用请求函数
    },
    // 点击综合选项
    dropDownEvent1(value){
       this.getGoodsList(value); // 调用请求函数
    },
    // 点击价格选项
    dropDownEvent2(value){
       this.getGoodsList(this.popupSearchVal); // 调用请求函数
    },
    // 点击分类选项
    dropDownEvent3(value){
       this.getGoodsList(this.popupSearchVal)
    }
  }
};
</script>
<style lang="less" scoped>
.popupSearch {
  border-bottom: 1px solid #ccc;
}
.history {
  padding: 10px 2%;
  background: #fff;
  margin-bottom: 10px;
  .history_title {
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .van-tag {
    margin-right: 2%;
    margin-bottom: 2%;
    font-size: 14px;
  }
}
.popup_product {
  position: relative;
  width: 100%;
  .van-list {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
}
</style>
