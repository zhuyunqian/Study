<template>
  <div class="about">
    <!-- 使用公共num -->
    <p>{{num}}</p>
    <p><button @click="add(1)">点击+1</button></p>
    <p><button @click="add(10)">点击+10</button></p>
    <p>{{boxnum}}</p>
    <!-- ul遍历mapgetters后的数据 -->
    <ul>
      <li v-for="good in showGoods" :key="good.id">{{good.name}}</li>
    </ul>

  </div>
</template>

<script>
//引入vuex导出的mapState方法，用来调取共享状态
//引入mapGetters定义，用来调取，处理过的状态
import {mapState ,mapGetters} from "vuex"
import { ADDNUM } from '../store/mutation-types.js'
export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
  methods: {
    add(count){
      //this.$store.state.num++;
      //功能可以实现但是 - dev插件 并不显示每次调用

      //只能调用 mutation里的方法 -- 如果需要更新state的值
      //根据封装方法，传入方法名称和参数
      this.$store.commit(addNum,count)
      //调用 action
      //this.$store.dispatch(ADDNUM,count)
    }
  },
  computed: {
    //方法1 - 返回 调用vuex.num值
    // num(){
    //   return this.$store.state.num
    // }
    //方法2
    // ... - 去掉括号 - ...mapState(['num']) == ...{num(){return this.$store.state.num}} == 方法1
    ...mapState(['num']),
    ...mapGetters(['showGoods']),
    // ...mapState({
    //   boxnum: state => state.moduleA.boxnum
    //})

    // ... -- es6语法  -- 去掉{} 和 []
    // [...[1,2,3],2,...[2,3,4]] == [1,2,3,2,2,3,4]
  },
}
</script>
