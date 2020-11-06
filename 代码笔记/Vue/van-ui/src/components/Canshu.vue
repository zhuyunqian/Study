<template>
  <div class="canshu">
    <h3>商品参数</h3>
    <ul>
      <li v-for="(item, index) in attribute" :key="index">
        <span>{{item.name}}：</span>
        <strong class="van-ellipsis">{{item.value}}</strong>
      </li>
    </ul>
    <div class="desc" v-html="goodsdesc"></div>
  </div>
</template>
<script>
export default {
  name: "Canshu", // 商品参数组件
  props: ["attribute", "goodsdesc"],
  data() {
    return {};
  }
};
</script>
<style lang="less">
.canshu{
    background: #fff;
    h3{
        padding: 10px 2%;
        margin: 0;
        font-weight: normal;
    }
    ul{
        padding: 0 2%;
        li{
            background: #f4f4f4;
            height: 30px;
            line-height: 30px;
            border-radius: 3px;
            width: 100%;
            display: flex;
            margin-bottom: 10px;
            justify-content: space-between;
            span{
                color: #666;
                font-size: 14px;
                width: 90px;
                padding-right: 5px;
                box-sizing: border-box;
                text-align: right;
            }
            strong{
                flex: 1;
                font-weight: normal;
                font-size: 16px;
            }
        }
    }
    .desc{
        width: 100%;
        p{
            margin: 0;
            img{
                width: 100%;
                display: block;
            }
        }
    }
}
</style>
