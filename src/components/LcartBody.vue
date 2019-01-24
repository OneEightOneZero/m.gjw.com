<template>
  <div id="app">
    <div class="van-hairline--bottom van-nav-bar van-nav-bar--fixed" style="z-index: 1;">
      <div class="van-nav-bar__left"></div>
      <div class="van-ellipsis van-nav-bar__title">购物车</div>
      <div class="van-nav-bar__right">
        <span class="van-nav-bar__text">编辑</span>
      </div>
    </div>
    <div class="cart">
      <!---->
      <div class="cart_list">
        <div class="card-item van-checkbox" data-id="79">
          <span class="van-checkbox__label" v-for="(arr,index) in arrs" :key="index">
            <div class="van-card">
              <input
                type="checkbox"
                value
                style="margin-top:35px"
                :checked="arr.check"
                @click="arr.check=!arr.check"
              >
              <div class="van-card__thumb">
                <div>
                  <a href>
                    <img :src="'http://img0.gjw.com/product/'+arr.Pic" alt style="width: 90px;">
                  </a>
                </div>
              </div>
              <div class="van-card__content">
                <div class="e2">
                  <a href v-text="arr.ProductName"></a>
                </div>
                <div class="tag"></div>
              </div>
              <div class="van-card__footer">
                <div>
                  <div>
                    <div class="fl">
                      <span class="red">￥
                        <b style="font-size: 14px;" v-text="arr.APPPrice"></b>
                      </span>
                    </div>
                    <div class="fr">
                      <div class="fr van-stepper">
                        <button
                          @click="cutnum"
                          class="van-stepper__minus van-stepper__minus--disabled"
                        ></button>
                        <input
                          type="number"
                          v-model="numinput"
                          class="van-stepper__input"
                          value="3"
                        >
                        <button @click="addnum" class="van-stepper__plus"></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!---->
            <!---->
          </span>
        </div>
        <div class="van-submit-bar">
          <!---->
          <div class="van-submit-bar__bar">
            <div class="qx van-checkbox">
              <input
                type="checkbox"
                class="van-checkbox__label"
                checked
                id="allcheck"
                @click="selAll"
              >全选
            </div>
            <div class="van-submit-bar__price">
              <span>合计：</span>
              <span class="van-submit-bar__price-integer">￥{{total_price}}</span>
              <span class="van-submit-bar__price-decimal">00</span>
            </div>
            <button
              disabled="disabled"
              class="van-button van-button--danger van-button--normal van-button--disabled van-button--unclickable"
            >
              <!---->
              <span class="van-button__text">结算(0)</span>
            </button>
          </div>
        </div>
        <!---->
      </div>
    </div>
    <!---->
    <div class="van-hairline--top-bottom foot van-tabbar van-tabbar--fixed" style="z-index: 999;">
      <div class="van-tabbar-item">
        <div class="van-tabbar-item__icon">
          <img src="images/home_clear.png">
          <!---->
        </div>
        <div class="van-tabbar-item__text">
          <span>首页</span>
        </div>
      </div>
      <div class="van-tabbar-item">
        <div class="van-tabbar-item__icon">
          <img src="images/cate_clear.png">
          <!---->
        </div>
        <div class="van-tabbar-item__text">
          <span>分类</span>
        </div>
      </div>
      <div class="active van-tabbar-item">
        <div class="van-tabbar-item__icon">
          <img src="images/bag.png">
          <!---->
        </div>
        <div class="van-tabbar-item__text">
          <span>专享福利</span>
        </div>
      </div>
      <div class="van-tabbar-item van-tabbar-item--active">
        <div class="van-tabbar-item__icon">
          <img src="images/car.png">
          <!---->
        </div>
        <div class="van-tabbar-item__text">
          <span>购物车</span>
        </div>
      </div>
      <div class="van-tabbar-item">
        <div class="van-tabbar-item__icon">
          <img src="images/mine_clear.png">
          <!---->
        </div>
        <div class="van-tabbar-item__text">
          <span>我的</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      check_goods: [],
      numinput: 1,
      arrs: [
        {
          ID: 2,
          ProductName: "53度 茅台 飞天带杯（2019年产）500ml",
          APPPrice: 1888,
          Pic: "2019/0115/8b95ae31274242b68f1d7237c83503ba.jpg",
          check: true
        },
        {
          ID: 3,
          ProductName: "53度 茅台 飞天带杯（2019年产）500ml",
          APPPrice: 1888,
          Pic: "2019/0115/8b95ae31274242b68f1d7237c83503ba.jpg",
          check: true
        }
      ]
    };
  },

  computed: {
    //总价
    total_price: function() {
      let price = 0;
      // console.log(this.arrs);
      this.arrs.forEach(item => {
        // 总价=数量*价格
        // console.log(item.APPPrice);
        price += parseInt(item.APPPrice) * parseInt(this.numinput);
        // console.log(price)
      });
      // console.log(price);
      return price;
    }
  },

  methods: {
	//   //拿商品数据
    // async getdetail() {
    //   let ID = this.$route.params.id;
    //   await this.$axios({
    //     method: "post",
    //     //headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
    //     url: "http://39.105.167.17:3000/getDetail",
    //     data: this.$qs.stringify({
    //       ID: ID
    //     })
    //   }).then(res => {
    //     // console.log(res);
    //     this.detail = res.data.data;
        
    //   });
    //   // console.log(this.detail[0].APPPrice);
	// },
	//拿购物车数据
    async getcart() {
      let uname = '18370791453';
      await this.$axios({
        method: "post",
        //headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
        url: "http://39.105.167.17:3000/getcart",
        data: this.$qs.stringify({
          uname
        })
      }).then(res => {
        console.log(res);
        // this.detail = res.data.data;
        
      });
      // console.log(this.detail[0].APPPrice);
    },
    cutnum() {
      this.numinput--;
      if (this.numinput <= 0) {
        this.numinput = 0;
      }
    },
    addnum() {
      this.numinput++;
    },
    //全选
    selAll() {
      let all = document.querySelector("#allcheck");
      // console.log(all);
      if (all.checked == true) {
        this.arrs.forEach(item => {
          item.check = true;
        });
      } else {
        this.arrs.forEach(item => {
          item.check = false;
        });
      }
    }
  },
  created() {
    this.getcart();
    
  },
};
</script>

<style>
.van-card__content {
  margin-left: 9px;
}
.red {
  margin-left: 24px;
}
</style>
