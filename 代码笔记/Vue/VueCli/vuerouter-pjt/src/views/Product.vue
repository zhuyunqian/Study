<template>
  <div>
      <button @click="back">返回</button>
      {{num}}
  </div>
</template>

<script>
export default {
    data() {
        return {
            num : ''
        }
    },
    methods: {
        //返回上一级页面
        back(){
            this.$router.go(-1)
        }
    },
    created() {
        this.num = this.$route.params.pid
    },
}
</script>

<style>

</style>