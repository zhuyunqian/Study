<template>
  <div class="issue">
    <div class="issue_title">
      <span>常见问题</span>
    </div>
    <section v-for="item in issue" :key="item.id">
      <div class="issue_block_title">{{item.question}}</div>
      <div class="issue_block_content">{{item.answer}}</div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Issue",
  props: ["issue"],
  data() {
    return {};
  }
};
</script>
<style lang="less">
.issue {
  background: #fff;
  .issue_title {
    height: 50px;
    line-height: 50px;
    position: relative;
    &::after {
      content: "";
      width: 40%;
      height: 2px;
      background: #ccc;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      z-index: 1;
    }
    span {
      position: absolute;
      width: 30%;
      background: #fff;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      z-index: 2;
      text-align: center;
      font-size: 18px;
    }
  }
  section {
    padding: 0 6%;
    margin: 10px;
    .issue_block_title {
      line-height: 30px;
      height: 30px;
      position: relative;
      &::before {
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: darkred;
        vertical-align: middle;
        position: absolute;
        left: -4%;
        top: 50%;
        margin-top: -2px;
      }
    }
    .issue_block_content {
      color: #666;
      font-size: 14px;
      line-height: 24px;
    }
  }
}
</style>
