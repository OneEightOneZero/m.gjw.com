<template>
  <div class="home_img">
    <div class="search_bg hide"></div>
    <div class="search_box">
      <i class="van-icon van-icon-search" style="color: rgb(204, 204, 204);">
        <input type="text" placeholder="请输入商品名称">
        <!---->
      </i>
    </div>
    <van-swipe :autoplay="3000" indicator-color="red">
      <van-swipe-item v-for="(item,idx) in bannerImg" :key="idx">
        <a :href="item.link">
          <img :src="item.img">
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerImg: [
        {
          link: "#",
          img:
            "http://img0.gjw.com/famous/2019/0102/4fe4aeb578a24242926a5dffe4f11ca2.jpg"
        },
        {
          link: "#",
          img:
            "http://img0.gjw.com/famous/2019/0117/efead80951e84ed09f67a2bdedfe6177.jpg"
        },
        {
          link: "#",
          img:
            "http://img0.gjw.com/famous/2019/0107/bd2b3ccad6b44ef0b19436ea1b3bb5bd.jpg"
        },
        {
          link: "#",
          img:
            "http://img0.gjw.com/famous/2019/0119/5343e92e8dc94ff6818513756bbb9509.jpg"
        }
      ],
      
    };
  }
};
</script>
<style scoped>
input{
  line-height: 18px;
  margin-left: 10px;
  font-size: 14px;
  border: none;
}
</style>

