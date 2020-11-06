<template>
  <div class="cart">
    <info :price="98"></info>
    <van-checkbox-group v-model="result" ref="checkboxGroup">
      <van-checkbox
        :name="item"
        v-for="(item, index) in cartList"
        :key="item.goods_id"
        :label-disabled="true"
      >
        <van-swipe-cell>
          <van-card
            :num="item.number"
            :price="item.retail_price | priceFilter"
            :title="item.goods_name"
            :thumb="item.list_pic_url"
          >
            <template #footer>
              <van-stepper v-show="ifShowFooter" v-model="item.number" integer />
            </template>
          </van-card>
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
              @click.prevent="deleteCartList(item, index)"
            />
          </template>
        </van-swipe-cell>
      </van-checkbox>
    </van-checkbox-group>
    <!-- <van-button type="primary" @click="toggleAll">全选</van-button> -->
    <van-submit-bar :disabled="ifSubmit" :price="totalPrice" button-text="下单" @submit="onSubmit">
      <van-checkbox v-model="checkedAll">全选</van-checkbox>
      <template #tip>
        累计共
        <strong>{{totalNum}}</strong> 件商品，可点击
        <van-button
          :type="ifEditting ? 'danger' : 'primary'"
          size="small"
          @click="editCount"
        >{{ifEditting ? '完成编辑' : '编辑'}}</van-button>&nbsp;按钮进行商品数量修改
      </template>
    </van-submit-bar>
  </div>
</template>
<script>
import { GetCartList, DelProduct } from "@/request/api";
import Info from "@/components/Info";
export default {
  name: "Cart",
  data() {
    return {
      result: [], // 所有商品项的选择结果
      cartList: [], // 购物车列表
      checked: false, // 全选复选框
      ifShowFooter: false, // 是否显示商品步进器
      ifEditting: false // 是否正在编辑中
    };
  },
  filters: {
    // 价格过滤器，所有价格保留两位小数
    priceFilter(money) {
      return " " + money.toFixed(2);
    }
  },
  components: {
    Info
  },
  methods: {
    // 点击下单
    onSubmit() {
      this.$toast("该功能暂未开放");
    },
    // 编辑商品数量
    editCount() {
      this.ifShowFooter = !this.ifShowFooter; // 切换商品步进器的显隐
      this.ifEditting = !this.ifEditting; // 切换编辑安装状态
    },
    // 删除商品
    deleteCartList(item, index) {
      let _this = this;
      DelProduct({
        productIds: item.product_id
      }).then(res => {
        if (res.errno == 0) {
          _this.cartList = res.data.cartList;
        }
      });

      this.result.splice(index, 1);
      this.cartList.splice(index, 1);
    }
  },
  computed: {
    // 是否可点击下单按钮，false代表可点击
    ifSubmit() {
      return this.result.length > 0 ? false : true;
    },
    // 商品总价
    totalPrice() {
      return this.result.reduce((total, val) => {
        total += val.number * val.retail_price; // 数量乘以价格
        return total * 100;
      }, 0);
    },
    // 商品总数量
    totalNum() {
      return this.result.reduce((total, val) => {
        return (total += val.number); // 商品总数量
      }, 0);
    },
    // 全选
    checkedAll: {
      get() {
        return this.result.length == this.cartList.length ? true : false;
      },
      set() {
        let _this = this;
        if (_this.result.length == _this.cartList.length) {
          _this.result.splice(0, _this.result.length);
        } else {
          _this.cartList.map(item => {
            _this.result.push(item);
          });
        }
      }
    }
  },
  created() {
    let _this = this;
    GetCartList().then(res => {
      if (res.errno == 0) {
        console.log(res.data.cartList);
        _this.cartList = res.data.cartList;

        // 抽离所有的checked，拼到result数组
        _this.cartList.map((item, index) => {
          _this.result.push(item);
        });
      }
    });
  }
};
</script>
<style lang="less" scoped>
strong {
  font-weight: bold;
  font-size: 16px;
}
.van-checkbox--label-disabled {
  border-bottom: 1px solid #ccc;
}
.cart {
  width: 100%;
  height: calc(100vh - 50px);
  padding-bottom: 100px;
  .van-checkbox-group {
    padding-left: 2%;
    background: #fff;
    /deep/.van-checkbox__label {
      flex: 1;
      .van-card {
        padding-left: 0;
      }
    }
  }
  .van-submit-bar {
    bottom: 50px;
  }
}
.van-button--square {
  height: 100%;
}
</style>
