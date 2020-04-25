<template>
  <div class="homepage">
    <mt-header class="header" :title="jwd">
      <router-link to="/" slot="left">
        <mt-button icon="search">搜索</mt-button>
      </router-link>
      <mt-button slot="right">登陆注册</mt-button>
    </mt-header>
    <mt-swipe class="swiperbox list-icon" :auto="0">
      <mt-swipe-item v-for="(item , index) in list" :key="index">
        <ul>
          <li v-for="classes in item" :key="classes.id">
            <img :src="'https://fuss10.elemecdn.com'+classes.image_url" alt />
            <div class="title">{{classes.title}}</div>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>

    <div class="shop-list">
        <h3>商品列表</h3>
        <ul>
            <li v-for="shop in shoplist" :key="shop.id">
                <img :src="'/img/'+shop.image_path" alt="" class="left">
                <div class="left">
                    <p>品牌：{{shop.name}}</p>
                    <p>分数：{{shop.rating}} 月售：{{shop.rating_count}}</p>
                    <p>{{shop.float_minimum_order_amount}}起送/{{shop.piecewise_agent_fee.tips}}</p>
                </div>
                <div class="right">
                    <p>{{shop.supports[0].icon_name}}{{shop.supports[1].icon_name}}{{shop.supports[2].icon_name}}</p>
                    <p>{{shop.delivery_mode.text}}{{shop.supports[1].name}}</p>
                    <p>{{shop.distance}}/{{shop.order_lead_time}}</p>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { Toast,Swipe, SwipeItem } from 'mint-ui';
import { getJwd, getList,getShop } from "../../../request/api";
export default {
  data() {
    return {
      list: [],
      list1:[],
      list2:[],
      jwd:'地址',
      shoplist:[]
    };
  },
  components:{
      SwipeItem,
      Swipe
  },
  methods: {
    search() {}
  },
  computed: {
  },
  created() {
    
    //获取经纬度
    getJwd().then(res => {
      this.jwd = res.data.city
    });

    //分类
    getList().then((res) => {
      var ary1 = [];
      var ary2 = [];
      res.data.filter((item,index) => {
          if(index<8){
            ary1.push(item)
          }else{
            ary2.push(item)
          }
      }) 
      this.list = [ary2,ary1]
      console.log(this.list)
      
    });

    //商品列表
    getShop().then((res)=>{
        this.shoplist = res.data
    })
  }
};
</script>

<style scoped lang="less">
.swiperbox{
  height:300px;
}
.homepage{
    overflow: auto;
}
.homepage::-webkit-scrollbar{
    width:0;
}
.header {
  height: 80px;
  line-height: 80px;
  font-size: 24px;
}
.list-icon{
    overflow: hidden;
    li{
        width:25%;
        float:left;
        text-align:center;
        img{
            width:80px;
            display:block;
            margin:10px auto;
        }
    }
}

.shop-list{
    margin:40px 20px 0 20px;
    ul{
        width:100%;
    }
    li{
        width:100%;
        overflow: hidden;
        margin:20px 0 0 0;
        img{
            display:block;
            width:120px;
            height:120px;
            float: left;
            background:#ddd;
            margin:0 20px 0 0;
        }
        .left{
            float: left;
        }
        .right{
            float: right;
            text-align:right;
        }
    }
}

</style>