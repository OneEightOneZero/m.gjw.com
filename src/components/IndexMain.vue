<template>
  <!-- 头条 -->
  <div class="home_class">
    <div class="container">
      <div class="notice">
        <div class="ico">
          <img src="../assets/hot.png" alt>
        </div>
        <van-swipe :autoplay="3000" vertical class="notice-con" :show-indicators="false">
          <van-swipe-item v-for="(item,idx) in toutiao" :key="idx">
            <a :href="item.link" v-text="item.text"></a>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <!-- 类型（统一跳到列表页） -->
    <div class="container">
      <div v-for="(item,idx) in typeImg" :key="idx">
        <a href="#">
          <div class="row_col_img van-col">
            <div class="van-row" :id="idx">
              <img :src="item" class="home_van_cat_image">
            </div>
          </div>
        </a>
      </div>
    </div>
    <div style="clear: both;"></div>
    <!-- 倒计时秒杀 -->
    <div class="seconds">
      <div class="van-cell-group van-hairline--top-bottom">
        <div class="van-cell van-hairline">
          <!---->
          <div class="van-cell__title">
            <b>掌上秒杀</b>
            <span class="fz">距结束</span>
            <i>13</i>:
            <i>36</i>:
            <i>32</i>
          </div>
        </div>
      </div>
    </div>
    <!-- 秒杀商品 (数据待获取)-->
    <div class="secods_good">
      <div
        class="swiper-container swiper-container-horizontal swiper-container-free-mode swiper-container-ios"
      >
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="good">
              <img
                src="http://img0.gjw.com/product/2017/0113/14fd1a8255ff4de6b5405cf532924f06.jpg"
                alt
                width="100"
              >
              <div class="box">
                <h5>53度 茅台王子酒 酱色 500ml</h5>
                <div class="bt">
                  <span class="price">￥188</span>
                  <a href="http://m.gjw.com/product/item-id-7135.html" class="btn_qg fr">马上抢</a>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="good">
              <img
                src="http://img0.gjw.com/product/2018/0517/5cd01b4c522d4a1aba342f3c830916a1.jpg"
                alt
                width="100"
              >
              <div class="box">
                <h5>52度 舍得 智慧 舍得酒 500ml</h5>
                <div class="bt">
                  <span class="price">￥528</span>
                  <a href="http://m.gjw.com/product/item-id-5845.html" class="btn_qg fr">马上抢</a>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="good">
              <img
                src="http://img0.gjw.com/product/2014/1225/f3739a75721142b1a3e913975ba1e195.jpg"
                alt
                width="100"
              >
              <div class="box">
                <h5>张裕 解百纳（特选级）红葡萄酒 750ml</h5>
                <div class="bt">
                  <span class="price">￥92</span>
                  <a href="http://m.gjw.com/product/item-id-5816.html" class="btn_qg fr">马上抢</a>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="good">
              <img
                src="http://img0.gjw.com/product/2017/0627/6adfe5f80b0941bb8df19d86701988c0.jpg"
                alt
                width="100"
              >
              <div class="box">
                <h5>智利 拉菲 华诗歌 巴斯克 赤霞珠 红葡萄酒 750ml</h5>
                <div class="bt">
                  <span class="price">￥79</span>
                  <a href="http://m.gjw.com/product/item-id-1237.html" class="btn_qg fr">马上抢</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
    </div>
    <!-- 促销 -->
    <div class="van-row" >
      <div class="van-col van-col--12" >
        <a href="#">
          <img src="http://img0.gjw.com/famous/2019/0121/721e0fb2621e49beb0c1c97065a43acf.jpg" alt>
        </a>
      </div>
      <div class="van-col van-col--12" style="padding-left: 5px; padding-right: 5px;">
        <a href="#">
          <img src="http://img0.gjw.com/famous/2019/0121/49863bec21984ed6b7e6f22a35ea2400.jpg" alt>
        </a>
      </div>
    </div>
    <!-- 促销2 -->
    <div class="container">
      <div class="van-row">
        <div class="van-col van-col--12">
          <a href="#">
            <img
              src="http://img0.gjw.com/famous/2019/0121/12fbf2e04f8149389a1bf4d6ddd83d05.jpg"
              alt
            >
          </a>
        </div>
        <div class="van-col van-col--6">
          <a href="#">
            <img
              src="http://img0.gjw.com/famous/2019/0118/81031d0cd9224e6891c3eeb2c01cb51e.jpg"
              alt
            >
          </a>
        </div>
        <div class="van-col van-col--6">
          <a href="#">
            <img
              src="http://img0.gjw.com/famous/2019/0118/1b8ebeb04cdc48fa85330ab4f143fe2f.jpg"
              alt
            >
          </a>
        </div>
      </div>
      <div class="index_ico">
        <div class="van-row" style="text-align: center;">
          <div class="van-col van-col--8">
            <i class="van-icon van-icon-bza">
              <!---->
            </i>
            <span class="red">正品保证</span>
          </div>
          <div class="van-col van-col--8">
            <i class="van-icon van-icon-kx">
              <!---->
            </i>
            <span class="red">开箱验货</span>
          </div>
          <div class="van-col van-col--8">
            <i class="van-icon van-icon-bz">
              <!---->
            </i>
            <span class="red">赔付保障</span>
          </div>
        </div>
        <a href="#">
          <img
            src="http://img0.gjw.com/famous/2018/0927/1c03a0b10a934f5fa5a6c2409a0caaa8.jpg"
            width="100%"
            alt
          >
        </a>
        <a href="#">
          <img
            src="http://img0.gjw.com/famous/2019/0118/9da4388b689a4948b5356eac5c12c9fe.jpg"
            width="100%"
            alt
          >
        </a>
      </div>
    </div>
    
  </div>
</template>
<script>
//引入swiper
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      
      
      //头条数据
      toutiao: [
        { link: "#", text: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦" },
        { link: "#", text: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦" },
        { link: "#", text: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦" },
        { link: "#", text: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦" }
      ],
      //类型图片
      typeImg: [
        "http://img0.gjw.com/famous/2018/0713/34c90a46f767478897208adca7681ae4.jpg",
        "http://img0.gjw.com/famous/2018/0713/3f257a2d80cb49e5a1e65340201329f0.jpg",
        "http://img0.gjw.com/famous/2018/0713/a8da83fed83c44f2a7a9f64862cd6489.jpg",
        "http://img0.gjw.com/famous/2018/0713/229cbdd4a909417ba6218c7e21b48131.jpg",
        "http://img0.gjw.com/famous/2018/0801/8bf04e420aa64ccfbb9ae530f82ddd7d.jpg",
        "http://img0.gjw.com/famous/2018/0713/b0041913b9844e519782312fa1c66118.jpg",
        "http://img0.gjw.com/famous/2018/0713/07223d7582de4438875efedac3d9cd90.jpg",
        "http://img0.gjw.com/famous/2018/0713/c7ee25ce88144ebe9f1c743c64df2000.jpg",
        "http://img0.gjw.com/famous/2018/0801/8fccd4a2c00947869641bd32c0a4c42f.jpg",
        "http://img0.gjw.com/famous/2018/0801/a4b34eda8bc24782994a4d86cd2528ce.jpg"
      ],
      
    };
  },
  methods: {
    
  },

  mounted() {
    /* eslint-disable no-new */
    new Swiper(".swiper-container", {});
    
  }
};
</script>
<style scoped>
.home_class{
  margin-bottom: 0px;
}
</style>

