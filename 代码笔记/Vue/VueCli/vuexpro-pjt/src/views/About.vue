<template>
  <div class="about">
    <!-- 使用公共num -->
    <p>{{num}}</p>
    <p><button @click="add(1)">点击+1</button></p>
    <p><button @click="add(10)">点击+10</button></p>
    <p>{{boxnum}}</p>
    <ul>
      <li v-for="good in showGoods" :key="good.id">{{good.name}}</li>
    </ul>

  </div>
</template>

<script>
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
      //调用 mutation
      //this.$store.commit(ADDNUM,count)
      //调用 action
      this.$store.dispatch(ADDNUM,count)
    }
  },
  computed: {
    //方法1 - 返回 调用vuex.num值
    num(){
      return this.$store.state.num
    }
    //方法2
    // ...mapState(['num']),
    // ...mapGetters(['showGoods']),
    // ...mapState({
    //   boxnum: state => state.moduleA.boxnum
    //})

    // ... -- es6语法  -- 去掉{} 和 []
    // [...[1,2,3],2,...[2,3,4]] == [1,2,3,2,2,3,4]
  },
}
</script>
