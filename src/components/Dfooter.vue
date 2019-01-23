<template>
  <footer>
    <div class="van-goods-action">
      <a class="van-hairline van-goods-action-mini-btn">
        <i class="van-icon van-icon-home van-goods-action-mini-btn__icon">
          <!---->
        </i>首页
      </a>
      <a class="van-hairline van-goods-action-mini-btn">
        <i class="van-icon van-icon-cart van-goods-action-mini-btn__icon">
          <div class="van-icon__info">0</div>
        </i>购物车
      </a>
      <a
        @click="addcart"
        class="van-button van-button--default van-button--normal van-button--bottom-action van-goods-action-big-btn"
      >
        <!---->
        <span class="van-button__text">加入购物车</span>
      </a>
      <a
        class="van-button van-button--primary van-button--normal van-button--bottom-action van-goods-action-big-btn"
      >
        <!---->
        <span class="van-button__text">立即购买</span>
      </a>
    </div>
  </footer>
</template>
<script>
export default {
  methods: {
    async addcart() {
      let islogin = localStorage.getItem("gjw");
      if (islogin) {
        let ID = this.$route.params.id;
        let qty = this.$store.state.qty;
        await this.$axios({
          method: "post",
          //headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
          url: "http://39.105.167.17:3000/addcart",
          data: this.$qs.stringify({
            ID: ID,
            qty: qty,
            uname: islogin
          })
        }).then(res => {
            if(res.status==1){
                alert("添加成功");
            }
          
        });
        // console.log(this.detail[0].APPPrice);
      }else{
          alert('您尚未登录,无法添加购物车哦！')
      }
    }
  }
};
</script>

<style scoped>
</style>