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
    <!-- 类型（统一调到列表页） -->
    <div class="container">
      <div v-for="(item,idx) in typeImg" :key="idx">
        <a href="#">
          <div class="row_col_img van-col">
            <div class="van-row" :id="idx">
              <img
              :src= item
              class="home_van_cat_image"
              >
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toutiao: [
        { link: "#", text: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦" },
        { link: "#", text: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦" },
        { link: "#", text: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦" },
        { link: "#", text: "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦" }
      ],
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
      ]
    };
  }
};
</script>
