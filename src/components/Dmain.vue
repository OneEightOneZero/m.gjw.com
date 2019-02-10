<template>
  <div>
    <div
      class="van-hairline--bottom van-nav-bar van-nav-bar--fixed"
      style="z-index: 1;"
      v-for="(item,idx) in detail"
      :key="idx"
    >
      <div class="van-nav-bar__left">
        <i class="van-icon van-icon-arrow van-nav-bar__arrow" @click="goback"></i>
      </div>
      <div class="van-ellipsis van-nav-bar__title" v-text="item.ProductName">53度 茅台王子酒 酱色 500ml</div>
      <div class="van-nav-bar__right"></div>
    </div>
    <div class="good_tab">
      <div class="van-tabs van-tabs--line" offset-top="0" style="top: 70px;">
        <div
          class="van-tabs__wrap van-hairline--top-bottom"
          :class="{
            'van-tabs__wrap--content-top' : xiding,
            'van-tabs__wrap--page-top' : xiding
            }"
        >
          <div class="van-tabs__nav van-tabs__nav--line">
            <div
              class="van-tabs__line"
              :style="{'width': '125px'
                         , 'transform':'translateX('+vanTabId * 125+'px)',
                          'transition-duration':' 0.2s'}"
            ></div>
            <div
              v-for="(v,index) in vanTab"
              :key="index"
              class="van-tab"
              :class="{
                    'van-tab--active' : index == vanTabId
                    }"
              @click="changeVanTab(index)"
            >
              <span class="van-ellipsis" v-text="v.title"></span>
            </div>
          </div>
        </div>
        <div class="van-tabs__content">
          <div class="van-tab__pane" v-show="vanTabId == 0">
            <div class="good_item">
              <div class="tit">
                <!--轮播图-->
                <van-swipe :autoplay="3000" v-for="(item,idx) in detail" :key="idx">
                  <van-swipe-item v-for="(l,index) in item.Pic_A" :key="index">
                    <a href="#">
                      <img class="vanImg" :src="l.imgUrl" alt>
                    </a>
                  </van-swipe-item>
                </van-swipe>
              </div>
              <div class="info" v-for="(item,idx) in detail" :key="idx">
                <div class="kill_bg">
                  <div class="fl">
                    <p>
                      <i>￥</i>
                      <b v-text="item.APPPrice">188</b>
                    </p>
                    <p>
                      购酒秒杀：
                      <s>￥298</s>
                    </p>
                  </div>
                  <div class="fr">
                    <b>距结束还剩：</b>
                    <div class="down">
                      <span v-text="hour"></span>:
                      <span v-text="minute"></span>:
                      <span v-text="second"></span>
                    </div>
                  </div>
                </div>
                <div class="van-cell-group van-hairline--top-bottom">
                  <div class="van-cell van-hairline">
                    <!---->
                    <div class="van-cell__title">
                      <span class="van-cell-text" v-text="item.ProductName">53度 茅台王子酒 酱色 500ml</span>
                      <div class="fr">
                        <i class="van-icon van-icon-like-o">
                          <div>关注</div>
                          <!---->
                        </i>
                      </div>
                      <span class="van-cell-text red"></span>
                    </div>
                    <!---->
                    <!---->
                  </div>
                  <!---->
                  <!---->
                  <div class="van-cell van-hairline">
                    <div class="van-cell__title">
                      <div class="fl">已选</div>
                      <div class="zlist">
                        <div class="van-cell van-hairline">
                          <div class="van-cell__title">
                            <span v-text="item.ProductName">53度 茅台王子酒 酱色 500ml</span>
                          </div>
                        </div>
                        <p>收货后可得298积分</p>
                      </div>
                    </div>
                  </div>

                  <div class="coupon van-cell van-hairline">
                    <!---->
                    <div class="van-cell__title" @click="show2=true">
                      <div class="fl">领券</div>
                      <span class="ico">满800减70</span>
                      <span class="ico">满500减40</span>
                    </div>
                    <!---->
                    <div>
                      <img src="/images/foot_print_select.png" width="15" alt>
                    </div>
                  </div>
                  <div class="van-cell van-hairline">
                    <!---->
                    <div class="van-cell__title">
                      <div class="fl">数量</div>
                      <div class="van-stepper">
                        <button
                          class="van-stepper__minus van-stepper__minus--disabled"
                          @click="jian"
                        ></button>
                        <input type="number" class="van-stepper__input" v-model="itemNum">
                        <button class="van-stepper__plus" @click="jia"></button>
                      </div>
                    </div>
                    <!---->
                    <!---->
                  </div>
                  <div class="van-cell van-cell--clickable van-hairline" @click="show3 = true">
                    <!---->
                    <div class="van-cell__title">
                      送至
                      <span v-text="addr"></span>
                      <p style="color: rgb(251, 34, 62);">有货</p>
                    </div>
                    <!---->
                    <i class="van-icon van-icon-arrow van-cell__right-icon">
                      <!---->
                    </i>
                  </div>
                  <div class="van-cell van-hairline">
                    <!---->
                    <div class="van-cell__title">
                      提示
                      <span v-text="item.BagExplain">每购买2瓶，即赠送原厂手提袋1个</span>
                      <p></p>
                    </div>
                    <!---->
                    <!---->
                  </div>
                </div>
                <ul class="bg tip_list">
                  <li>
                    <i class="van-icon van-icon-passed">
                      <!---->
                    </i>购酒发货&amp;售后
                  </li>
                  <li>
                    <i class="van-icon van-icon-passed">
                      <!---->
                    </i>正品保障
                  </li>
                  <li>
                    <i class="van-icon van-icon-passed">
                      <!---->
                    </i>满100包邮
                  </li>
                  <li>
                    <i class="van-icon van-icon-passed">
                      <!---->
                    </i>七天退换
                  </li>
                </ul>
              </div>
            </div>
            <!---->
            <!---->
          </div>
          <div class="van-tab__pane" v-show="vanTabId == 1">
            <div class="good_item">
              <div id="here" name="here" class="good_item">
                <div class="van-tabs van-tabs--line" style="z-index: 0;">
                  <div class="van-tabs__wrap van-tabs__wrap--content-top van-hairline--top-bottom">
                    <div class="van-tabs__nav van-tabs__nav--line">
                      <div
                        class="van-tabs__line"
                        style="width: 0px; transform: translateX(62.5px); transition-duration: 0.2s;"
                      ></div>
                      <div
                        v-for="(xq,index) in xqTab"
                        :key="index"
                        class="van-tab"
                        :class="{
                                             'van-tab--active' : index == xqCur
                                            }"
                        @click="xqIdx(index)"
                      >
                        <span class="van-ellipsis" v-text="xq.title"></span>
                      </div>
                    </div>
                  </div>
                  <div class="van-tabs__content">
                    <div class="van-tab__pane" v-show="xqCur==0">
                      <div class="good_info">
                        <div class="lp">
                          <img
                            src="http://img0.gjw.com/Minisite/2018/luy/11/11/19/9/LP_01.jpg"
                            width="790"
                            alt
                          >
                        </div>
                        <div class="lp">
                          <img
                            src="http://img0.gjw.com/Minisite/2018/luy/11/11/19/9/LP_02.jpg"
                            width="790"
                            alt
                          >
                        </div>
                        <div class="lp">
                          <img
                            src="http://img0.gjw.com/Minisite/2018/luy/11/11/19/9/LP_03.jpg"
                            width="790"
                            alt
                          >
                        </div>
                        <div class="lp">
                          <img
                            src="http://img0.gjw.com/Minisite/2018/luy/11/11/19/9/LP_04.jpg"
                            width="790"
                            alt
                          >
                        </div>
                      </div>
                    </div>
                    <div class="van-tab__pane" v-show="xqCur==1">
                      <!---->
                      <table border="0" cellspacing="0" cellpadding="0" class="attr">
                        <tbody>
                          <tr>
                            <td>品牌</td>
                            <td>茅台</td>
                          </tr>
                          <tr>
                            <td>商品编号</td>
                            <td>6902952892686</td>
                          </tr>
                          <tr>
                            <td>净含量</td>
                            <td>500ml</td>
                          </tr>
                          <tr>
                            <td>度数</td>
                            <td>50度以上</td>
                          </tr>
                          <tr>
                            <td>手提袋</td>
                            <td>每购买2瓶，即赠送原厂手提袋1个</td>
                          </tr>
                          <tr>
                            <td>香型</td>
                            <td>酱香型</td>
                          </tr>
                          <tr>
                            <td>箱规</td>
                            <td>1*6</td>
                          </tr>
                          <tr>
                            <td>规格</td>
                            <td>单瓶</td>
                          </tr>
                        </tbody>
                      </table>
                      <div style="min-height: 1000px;"></div>
                      <!---->
                      <!---->
                    </div>
                    <div class="van-tab__pane" v-show="xqCur==2">
                      <!---->
                      <!---->
                      <div style="min-height: 1500px;">包装由购酒网专箱及胶带封箱</div>
                      <!---->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!---->
            <!---->
          </div>
          <div class="van-tab__pane" v-show="vanTabId == 2" style>
            <!---->
            <div class="good_item">
              <div class="pj">
                <div class="van-cell-group van-hairline--top-bottom">
                  <div class="van-cell van-cell--clickable van-hairline">
                    <!---->
                    <div class="van-cell__title">
                      <span class="bt-pj cur">全部(112)</span>
                    </div>
                    <div class="van-cell__value">
                      <span class="red">
                        好评度
                        95.54
                        %
                      </span>
                    </div>
                    <i class="van-icon van-icon-arrow van-cell__right-icon">
                      <!---->
                    </i>
                  </div>
                  <div class="pj_ico">
                    <span class="bt-pj">好评 107</span>
                    <span class="bt-pj">中评 3</span>
                    <span class="bt-pj">差评 2</span>
                    <span class="bt-pj">晒图 15</span>
                  </div>
                </div>
                <ul class="pj_list">
                  <div class="van-list">
                    <li v-for="(p,index) in pjList" :key="index">
                      <div class="left">
                        <img src="../assets/avtar_com.png" alt>
                      </div>
                      <div class="right">
                        <p v-html="`${p.Usr_NiceName}<b class='dj'>${p.Usr_LeveName}</b>`"></p>
                        <div>
                          <img
                            v-for="(x,index) in p.DescriptionScore"
                            :key="index"
                            src="../assets/comment_good.png"
                            width="15"
                            alt
                          >
                          <span class="fr date" v-text="p.CreateTime"></span>
                        </div>
                        <p v-text="p.Content"></p>
                        <p></p>
                      </div>
                    </li>
                    <div class="van-list__loading" style="display: none;">
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
                </ul>
              </div>
            </div>
            <!---->
          </div>
        </div>
      </div>
    </div>
    <!--选择优惠券弹出层-->
    <van-popup v-model="show2" position="bottom">
      <div class="van-hairline--bottom van-nav-bar" style="z-index: 1;">
        <div class="van-nav-bar__left">
          <!---->
          <!---->
        </div>
        <div class="van-ellipsis van-nav-bar__title">促销</div>
        <div class="van-nav-bar__right">
          <i class="van-icon van-icon-close">
            <!---->
          </i>
        </div>
      </div>
      <div class="preferential_list">
        <ul>
          <li>
            <div class="left">
              <h3>
                <i>￥</i>70
              </h3>
              <p>满800可用</p>
            </div>
            <div class="right">
              <p>APP专享福利【800-70】</p>
              <div class="ft" style="font-size: 10px;">
                -
                <a
                  href="javascript:;"
                  style="background-color: rgb(93, 133, 217); color: rgb(255, 255, 255); padding: 3px 5px; border-radius: 10px;"
                >点击领取</a>
                <!---->
              </div>
            </div>
          </li>
          <li>
            <div class="left">
              <h3>
                <i>￥</i>40
              </h3>
              <p>满500可用</p>
            </div>
            <div class="right">
              <p>APP专享福利【500-40】</p>
              <div class="ft" style="font-size: 10px;">
                -
                <a
                  href="javascript:;"
                  style="background-color: rgb(93, 133, 217); color: rgb(255, 255, 255); padding: 3px 5px; border-radius: 10px;"
                >点击领取</a>
                <!---->
              </div>
            </div>
          </li>
        </ul>
      </div>
    </van-popup>
    <!--地址选择-->
    <van-popup v-model="show3" position="bottom">
      <van-picker :columns="columns" show-toolbar @confirm="confirm" @cancel="cancel"/>
    </van-popup>
  </div>
</template>
<script>
import Vue from "vue";
import { Popup } from "vant";

Vue.use(Popup);
import { Picker } from "vant";

Vue.use(Picker);
import axios from "axios";

Vue.prototype.$axios = axios;

export default {
  data() {
    return {
      detail: [],
      vanTabId: 0,
      xiding: false,
      vanTab: [
        {
          title: "商品"
        },
        {
          title: "详情"
        },
        {
          title: "评价"
        }
      ],
      lunbo: [
        {
          imgUrl:
            "http://img0.gjw.com/product/2017/0113/14fd1a8255ff4de6b5405cf532924f06_4.jpg"
        },
        {
          imgUrl:
            "http://img0.gjw.com/product/2017/0112/02e3f408895342a9b9b89ac25202921b_4.jpg"
        },
        {
          imgUrl:
            "http://img0.gjw.com/product/2017/0112/52ef49d1ea4b448588e39e78ce909a64_4.jpg"
        },
        {
          imgUrl:
            "http://img0.gjw.com/product/2017/0112/3cf437a5ab5541fda2e9f5810e4ab2f1_4.jpg"
        },
        {
          imgUrl:
            "http://img0.gjw.com/product/2017/0112/245f65f1fc48404597fb5881ae2e2eb2_4.jpg"
        }
      ],
      // 弹出层
      show2: false,
      show3: false,
      columns: ["广东", "福建", "上海", "北京", "浙江", "湖南", "湖北"],
      addr: "广东",
      //倒计时事件
      hours: 10,
      minutes: 10,
      seconds: 10,
      pj: 5,
      pjList: [],
      // 详情页tab切换
      xqTab: [
        {
          title: "商品介绍"
        },
        {
          title: "规格参数"
        },
        {
          title: "包装售后"
        }
      ],
      xqCur: 0
    };
  },
  watch: {
    second: {
      handler(newVal) {
        this.num(newVal);
      }
    },
    minute: {
      handler(newVal) {
        this.num(newVal);
      }
    },
    hour: {
      handler(newVal) {
        this.num(newVal);
      }
    }
  },
  computed: {
    itemNum: function() {
      return this.$store.state.qty;
    },
    second: function() {
      return this.num(this.seconds);
    },
    minute: function() {
      return this.num(this.minutes);
    },
    hour: function() {
      return this.num(this.hours);
    },
    xing: function() {
      return [1, 1, 1, 1, 1].slice(0, this.pj);
    }
  },
  methods: {
    goback() {
      this.$router.push({ name: "list" });
    },
    changeVanTab(index) {
      this.vanTabId = index;
      window.scrollTo(0, 0);
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop >= 50) {
        this.xiding = true;
      } else {
        this.xiding = false;
      }
    },
    confirm(value) {
      this.addr = value;
      this.show3 = false;
    },
    cancel() {
      this.show3 = false;
    },
    //倒计时
    num: function(n) {
      return n < 10 ? "0" + n : "" + n;
    },
    countdown: function() {
      var _this = this;
      var time = window.setInterval(function() {
        if (_this.seconds == 0 && _this.minutes == 0 && _this.hours != 0) {
          _this.seconds = 59;
          _this.minutes = 59;
          _this.hours -= 1;
        } else if (_this.seconds == 0 && _this.minutes != 0) {
          _this.seconds = 59;
          _this.minutes -= 1;
        } else if (_this.minutes == 0 && _this.seconds == 0) {
          _this.seconds = 0;
          window.clearInterval(time);
        } else {
          _this.seconds -= 1;
        }
      }, 1000);
    },
    // 数量框加减
    jia() {
      this.$store.commit("qtyplus");
    },
    jian() {
      this.$store.commit("qtyjian");
    },

    //拿商品数据
    async getdetail() {
      let ID = this.$route.params.id;
      await this.$axios({
        method: "post",
        //headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
        url: "http://39.105.167.17:3000/getDetail",
        data: this.$qs.stringify({
          ID: ID
        })
      }).then(res => {
        // console.log(res);
        this.detail = res.data.data;
        localStorage.setItem('data',JSON.stringify(res.data.data))
      });
    },

    // 拿评价
    async getPj() {
      let data = await this.$axios.get("http://39.105.167.17:3000/users/pj");
      this.pjList = data.data.data;
    },
    //详情页tab切换
    xqIdx(index) {
      this.xqCur = index;
    }
  },
  created() {
    this.getdetail();
    window.addEventListener("scroll", this.handleScroll);
    this.getPj();
  },
  mounted() {
    this.countdown();
  }
};
</script>
<style scoped>
.vanImg {
  width: 100%;
  height: 100%;
}
.van-nav-bar__arrow {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

/*.van-cell:not(:last-child)::after {*/
/*left: 15px;*/
/*right: 0;*/
/*width: auto;*/
/*-webkit-transform: scale(1, .5);*/
/*transform: scale(1, .5);*/
/*border-bottom-width: 1px;*/
/*}*/
</style>