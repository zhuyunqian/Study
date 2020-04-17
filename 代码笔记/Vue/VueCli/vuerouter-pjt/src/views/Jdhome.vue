<template>
  <div>
      11111111
      <p @click="jumppid(119054643272)">
        商品
      </p>
  </div>
</template>

<script>
export default {
  methods: {
    jumppid(index){
      this.$router.push('/product/'+index)
    }
  },
}
</script>

<style>

</style>