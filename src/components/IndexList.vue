<template>
  <div class="home_class">
    <!-- 首页商品列表 -->
    <div class="tabs home">
      <div class="van-tabs van-tabs--line">
        <van-tabs @click="onClick">
          <van-tab v-for="(item,idx) in type" :key="idx" :title="item.Itemname" :id="idx"></van-tab>
        </van-tabs>
        <div class="van-tabs__content">
          <div class="van-tab__pane" style>
            <div class="van-list">
              <div class="van-row" style="margin-left: -5px; margin-right: -5px;">
                <div
                  class="van-col van-col--12"
                  style="padding-left: 5px; padding-right: 5px; margin-top: 30px!important;"
                  v-for="(item,idx) in wine"
                  :key="idx"
                  :id="item.ProductId"
                >
                  <div class="pro_item">
                    <a href="#">
                      <img :src="'http://img0.gjw.com/product/'+item.Pic" alt class="pic">
                      <p class="tit2" v-text="item.ProductName"></p>
                      <div class="tag" v-if="item.activityTitle.length>0">
                        <span style="background-color: rgb(197, 140, 255);">满额立减</span>
                        <!---->
                      </div>
                      <div class="red" v-text="item.ActivityMoney">￥768</div>
                    </a>
                  </div>
                </div>
              </div>
              <!-- 加载 -->
              <div class="van-list__loading" v-show="isLoading">
                <div class="van-loading van-loading--circular van-loading--black">
                  <span class="van-loading__spinner van-loading__spinner--circular">
                    <svg viewBox="25 25 50 50" class="van-loading__circular">
                      <circle cx="50" cy="50" r="20" fill="none"></circle>
                    </svg>
                  </span>
                </div>
                <span class="van-list__loading-text">加载中...</span>
              </div>
            </div>
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
            <!---->
          </div>
          <div class="van-tab__pane" style="display: none;">
            <!---->
            <!---->
          </div>
          <div class="van-tab__pane" style="display: none;">
            <!---->
            <!---->
          </div>
          <div class="van-tab__pane" style="display: none;">
            <!---->
            <!---->
          </div>
          <div class="van-tab__pane" style="display: none;">
            <!---->
            <!---->
          </div>
          <div class="van-tab__pane" style="display: none;">
            <!---->
            <!---->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      // 商品类型，用于获取数据
      idx: 0,
      //判断加载框是否出现
      isLoading: false,
      //空数组（用于存放首页商品数据）
      wine: [],
      //商品类型
      type: [
        { seriesid: 0, pageindex: 1, pagesize: 10, Itemname: "精选" },
        { seriesid: 1, pageindex: 1, pagesize: 10, Itemname: "白酒" },
        { seriesid: 2, pageindex: 1, pagesize: 10, Itemname: "葡萄酒" },
        { seriesid: 3, pageindex: 1, pagesize: 10, Itemname: "威士忌" },
        { seriesid: 4, pageindex: 1, pagesize: 10, Itemname: "黄酒" },
        { seriesid: 5, pageindex: 1, pagesize: 10, Itemname: "啤酒" }
      ]
    };
  },

  methods: {
    //   获取首页商品信息
    async getIndexWine() {
      let data = await this.$axios.get("http://39.105.167.17:3000/Indexwine", {
        params: {
          idx: this.idx
        }
      });
      this.wine = this.wine.concat(data.data.data);
      //   console.log(this.wine);
      return data;
    },
    //tab切换修改idx，更换商品类型
    onClick(index) {
      //   this.$toast(title);
      //   傻逼后端接口没有3所以做判断大于等于3 就++
      if (index >= 3) {
        index++;
        this.idx = index;
        this.wine = [];
        this.getIndexWine();
      } else {
        this.idx = index;
        this.wine = [];
        this.getIndexWine();
      }
    },
    changeStyle(){
      let sty = document.querySelector('.van-tabs__wrap')
      sty.position = "static"
    }
  },

  mounted() {
    this.changeStyle()
    /* eslint-disable no-new */
    new Swiper(".swiper-container", {});
    //上拉加载
    let data = this.getIndexWine();
    window.onscroll = () => {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop; //变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight; //变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight; //滚动条到底部的条件
      if (scrollTop + windowHeight == scrollHeight) {
        //写后台加载数据的函数
        //判断lodaing是否出现
        this.isLoading = true;
        this.getIndexWine();
        if (data.statusText == "OK") {
          this.isLoading = false;
        }
      }
    };
    

  }
};
</script>
<style scoped>
.van-tabs--line {
  padding-top: 0px;
}
.tag {
    text-align: left;
    /* height: 22px; */
    clear: both;
    float: right;
}

</style>
