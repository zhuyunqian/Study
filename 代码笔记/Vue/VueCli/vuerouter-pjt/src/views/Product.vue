<template>
  <div>
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
    created() {
        this.num = this.$route.params.pid
    },
}
</script>

<style>

</style>