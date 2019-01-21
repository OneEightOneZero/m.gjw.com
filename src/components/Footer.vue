<template>
  <div
    class="van-hairline--top-bottom foot van-tabbar van-tabbar--fixed"
    id="footer"
    style="z-index: 999;"
  >
    <div class="van-tabbar-item active" @click="toIndex">
      <div class="van-tabbar-item__icon">
        <img src="../assets/home.png">
        <!---->
      </div>
      <div class="van-tabbar-item__text">
        <span>首页</span>
      </div>
    </div>
    <div class="van-tabbar-item" @click="toClassify">
      <div class="van-tabbar-item__icon">
        <img src="../assets/cate_clear.png">
        <!---->
      </div>
      <div class="van-tabbar-item__text">
        <span>分类</span>
      </div>
    </div>
    <div class="active van-tabbar-item">
      <div class="van-tabbar-item__icon">
        <img src="../assets/bag.png">
        <!---->
      </div>
      <div class="van-tabbar-item__text">
        <span>专享福利</span>
      </div>
    </div>
    <div class="van-tabbar-item">
      <div class="van-tabbar-item__icon">
        <img src="../assets/car_clear.png">
        <!---->
      </div>
      <div class="van-tabbar-item__text" @click="toCart">
        <span>购物车</span>
      </div>
    </div>
    <div class="van-tabbar-item">
      <div class="van-tabbar-item__icon">
        <img src="../assets/mine_clear.png">
        <!---->
      </div>
      <div class="van-tabbar-item__text" @click="toMine">
        <span>我的</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    toIndex() {
      // 根据命名路由来进行跳转
      this.$router.push({ name: "Index" });
    },
    toClassify() {
      // 根据命名路由来进行跳转
      this.$router.push({ name: "Classify" });
    },
    toCart() {
      // 根据命名路由来进行跳转
      this.$router.push({ name: "Cart" });
    },
    toMine() {
      // 根据命名路由来进行跳转
      this.$router.push({ name: "Mine" });
    }
  }
};
</script>
<style scoped>
#footer .active {
  color: #cd0011;
}
</style>
