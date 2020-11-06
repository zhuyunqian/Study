<template>
  <div class="user">
    <div class="user_panel" @click="openLoginModal">
      <van-image width="10rem" height="10rem" fit="contain" round :src="avatar" />
      <div class="tologin">
        <h3>{{ username=="" ? '点击登录' : username }}</h3>
        <van-icon name="arrow" />
      </div>
    </div>
    <van-grid :column-num="3" :border="true" clickable square>
      <van-grid-item
        v-for="(item, index) in gridArr"
        :key="index"
        :icon="item.icon"
        :text="item.text"
        @click="gridItemEvent"
      />
    </van-grid>
    <login-modal
      :showloginmodal="showLoginModal"
      @closeloginmodal="closeLoginModal"
      @senduserinfo="changeUserInfo"
    ></login-modal>
  </div>
</template>
<script>
import LoginModal from "@/components/LoginModal";
export default {
  data() {
    return {
      isLogined: false, // 是否处于登录状态
      gridArr: [
        { icon: "label-o", text: "我的订单", url: "/" },
        { icon: "bill-o", text: "优惠券", url: "/" },
        { icon: "goods-collect-o", text: "礼品卡", url: "/" },
        { icon: "location-o", text: "我的收藏", url: "/" },
        { icon: "flag-o", text: "我的足迹", url: "/" },
        { icon: "user-o", text: "会员福利", url: "/" },
        { icon: "aim", text: "地址管理", url: "/" },
        { icon: "warn-o", text: "账号安全", url: "/" },
        { icon: "manager-o", text: "联系客服", url: "/" },
        { icon: "question-o", text: "帮助中心", url: "/" },
        { icon: "photo-o", text: "意见反馈", url: "/" }
      ],
      showLoginModal: false, // 显示登录框
      avatar:
        "http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png", //  头像
      username: "" // 用户名称
    };
  },
  components: {
    LoginModal
  },
  created() {
    let userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      return;
    }
    userInfo = JSON.parse(userInfo);
    this.avatar = userInfo.avatar;
    this.username = userInfo.username;
  },
  methods: {
    // 打开模太框
    openLoginModal() {
      this.showLoginModal = true;
    },
    // 关闭模太框
    closeLoginModal() {
      this.showLoginModal = false;
    },
    // 修改用户信息
    changeUserInfo(info) {
      this.avatar = info.avatar;
      this.username = info.username;
    },
    // 九宫格点击
    gridItemEvent() {
      this.$toast("该模块尚未开放");
    }
  }
};
</script>
<style lang="less" scoped>
/deep/[class*="van-hairline"]::after {
  border-color: #666;
}
.user {
  height: calc(100vh - 50px);
  .user_panel {
    padding: 30px 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #333;
    .van-image--round {
      width: 5rem !important;
      height: 5rem !important;
      margin-right: 4%;
    }
    .tologin {
      flex: 1;
      color: #fff;
      display: flex;
      h3 {
        font-weight: normal;
      }
      font-size: 18px;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
