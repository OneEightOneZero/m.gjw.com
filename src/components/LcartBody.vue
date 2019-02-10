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
        <div class="card-item van-checkbox" data-id="79" v-for="(arr,idx) in arrs" :key="idx">
          <span class="van-checkbox__label" v-for="(a,index) in arr.detail" :key="index">
            <div class="van-card">
              <input
                type="checkbox"
                value
                style="margin-top:35px"
                :checked="checked"
                @click="checked = !checked"
              >
              <div class="van-card__thumb">
                <div>
                  <a href>
                    <img :src="'http://img0.gjw.com/product/'+a.Pic" alt style="width: 90px;">
                  </a>
                </div>
              </div>
              <div class="van-card__content">
                <div class="e2">
                  <a href v-text="a.ProductName"></a>
                </div>
                <div class="tag"></div>
              </div>
              <div class="van-card__footer">
                <div>
                  <div>
                    <div class="fl">
                      <span class="red">
                        ￥
                        <b style="font-size: 14px;" v-text="a.APPPrice"></b>
                      </span>
                    </div>
                    <div class="fr">
                      <div class="fr van-stepper">
                        <button
                          @click="cutnum(idx)"
                          class="van-stepper__minus van-stepper__minus--disabled"
                        ></button>
                        <input type="number" class="van-stepper__input" :value="arr.qty">
                        <button @click="addnum(idx)" class="van-stepper__plus"></button>
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
                :checked="checked"
                id="allcheck"
                @click="selAll"
              >全选
            </div>
            <div class="van-submit-bar__price">
              <span>合计：</span>
              <span class="van-submit-bar__price-integer">￥{{total_price}}</span>
              <span class="van-submit-bar__price-decimal">.00</span>
            </div>
            <button class="van-button van-button--danger van-button--normal" @click="pay()">
              <!---->
              <span class="van-button__text" >结算</span>
            </button>
          </div>
        </div>
        <!---->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      check_goods: [],
      numinput: 1,
      arrs: []
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
        price += parseInt(item.detail[0].APPPrice) * parseInt(item.qty);
        // console.log(price)
      });
      // console.log(price);
      // for(var i = 0;i<){}

      return price;
    }
  },

  methods: {
	//支付所有
	async payAll() {
      let uname = localStorage.getItem('gjw');
      await this.$axios({
        method: "post",
        //headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
        url: "http://39.105.167.17:3000/removeItem",
        data: this.$qs.stringify({
          uname,
        })
      });
      // console.log(this.detail[0].APPPrice);
    },
    //拿购物车数据
    async getcart() {
      let uname = "18370791453";
      await this.$axios({
        method: "post",
        //headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
        url: "http://39.105.167.17:3000/getcart",
        data: this.$qs.stringify({
          uname
        })
      }).then(res => {
        // console.log(res);
        this.arrs = this.arrs.concat(res.data.data);
      });
      // console.log(this.detail[0].APPPrice);
    },
    async updatecart(ID, qty) {
      let uname = "18370791453";
      await this.$axios({
        method: "post",
        //headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
        url: "http://39.105.167.17:3000/editCart",
        data: this.$qs.stringify({
          uname,
          ID,
          qty
        })
      });
      // console.log(this.detail[0].APPPrice);
    },
    cutnum(idx) {
      this.arrs[idx].qty--;
      let qty = this.arrs[idx].qty;
      let ID = this.arrs[idx].detail[0].ID;
      if (this.arrs[idx].qty <= 0) {
        this.arrs[idx].qty = 0;
      }
      this.updatecart(ID, qty);
    },
    addnum(idx) {
      this.arrs[idx].qty++;
      let qty = this.arrs[idx].qty;
      let ID = this.arrs[idx].detail[0].ID;
      this.updatecart(ID, qty);
	},
	pay(){
    this.payAll();
      // let ID = this.arrs[idx].detail[0].ID;
		this.arrs = [];
		alert('支付成功');
		
		// this.getcart();
	},
    //全选
    selAll() {
      //   let all = document.querySelector("#allcheck");
      //   // console.log(all);
      //   if (all.checked == true) {
      //     this.arrs.forEach(item => {
      //       item.check = true;
      //     });
      //   } else {
      //     this.arrs.forEach(item => {
      //       item.check = false;
      //     });
      //   }
      // if(this.checked){

      // }
      this.checked = !this.checked;
    }
  },
  created() {
	this.getcart();
  }
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
