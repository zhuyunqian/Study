<template>
  <div class="overlay" v-show="showloginmodal">
    <div class="overlay_bg" @click="closeLoginModal"></div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录/注册</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { UserLogin } from "@/request/api";
export default {
  name: "LoginModal",
  props: ["showloginmodal"],
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      let username = values["用户名"];
      let pwd = values["密码"];
      let _this = this;

      UserLogin({
        username,
        pwd
      }).then(res => {
        console.log(res);
        if (res.errno == 0) {
          _this.closeLoginModal(); // 关闭模太框
          // 存储token
          localStorage.setItem("token", res.data.token);
          // 存储用户信息
          localStorage.setItem("userInfo", JSON.stringify(res.data.userInfo));
          // 将用户信息抛给父组件
          _this.$emit("senduserinfo", res.data.userInfo);
        }
      });
    },
    // 关闭登录模太框
    closeLoginModal() {
      this.$emit("closeloginmodal");
    }
  }
};
</script>
<style lang="less" scoped>
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  .overlay_bg {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  .van-form {
    width: 90%;
    background: #fff;
    position: absolute;
    left: 50%;
    top: calc(50% - 50px);
    transform: translate(-50%, -50%);
  }
}
</style>