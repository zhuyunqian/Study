<template>
  <div class="home">
    <p>{{num}}</p>
    <p><button @click="add(-10)">点击-1</button></p>
    <p>模块A : num {{boxnum}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState,mapGetters } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
  methods: {
    add(count){
      //更新vuex的mutations的remNum方法，调用更新
      this.$store.commit('addNum',count)
    }
  },
  components: {
      
  },
  //缓存机制-如果返回值不发生改变，就用缓存值，发生改变对应的计算属性就会发生改变
  computed: {
    ...mapState(['num']),
    ...mapState({
        boxnum: state => state.moduleA.boxnum
      })
  },
}
</script>
