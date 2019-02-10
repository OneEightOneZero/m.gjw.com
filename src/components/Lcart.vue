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
          <span
            class="van-checkbox__label"
            v-for="(arr,index) in newarr"
            :key="index"
            v-show="ge[index].qty>0"
          >
            <div class="van-card">
              <input
                type="checkbox"
                style="margin-top:35px"
                @click="check(arr,index)"
                :checked="arr[0].isChecked"
              >

              <div class="van-card__thumb">
                <div>
                  <a href>
                    <img :src="'http://img0.gjw.com/product/'+arr[0].Pic" alt style="width: 90px;">
                  </a>
                </div>
              </div>
              <div class="van-card__content">
                <div class="e2">
                  <a href v-text="arr[0].ProductName"></a>
                </div>
                <div class="tag"></div>
              </div>
              <div class="van-card__footer">
                <div>
                  <div>
                    <div class="fl">
                      <span class="red">
                        ￥
                        <b style="font-size: 14px;">{{arr[0].APPPrice}}</b>
                      </span>
                    </div>
                    <div class="fr">
                      <div class="fr van-stepper">
                        <button
                          @click="reduce(arr,index)"
                          :disabled="ge[index].qty==0"
                          class="van-stepper__minus van-stepper__minus--disabled"
                        ></button>
                        <input type="text" class="van-stepper__input" :value="ge[index].qty">
                        <!-- <span v-text="numinput"></span> -->
                        <button @click="add(arr,index)" class="van-stepper__plus"></button>
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
        <div class="van-submit-bar" v-for="(aa,index) in newarr" :key="index">
          <!---->
          <div class="van-submit-bar__bar">
            <div class="qx van-checkbox" style="width:60px;padding-left:44px">
              <input
                type="checkbox"
                class="van-checkbox__label"
                @click="checkAll(index)"
                :checked="isCheckedAll"
                style="width:10px;"
              >
              全选
            </div>
            <div class="van-submit-bar__price" style="width:150px">
              <span
                class="van-submit-bar__price-integer"
                style="font-size: 15px;"
              >总价:￥{{checkedPrice}}</span>
              <br>
            </div>
            <button @click="remove()" class="van-button van-button--danger van-button--normal">
              <!---->
              <span class="van-button__text">结算</span>
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
    <div class="cover" v-show="loading">
      <van-loading type="spinner"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      staus: false,
      loading: false,
      newarr: [],
      numinput: 1,
      ge: [],
      gg: []
    };
  },

  computed: {
    //总价
    totalPrice: function() {
      var total = 0;
      var _this = this;
      //遍历相加
      this.newarr.forEach(function(item, index) {
        // console.log(_this.ge[index].qty);
        total += item[0].APPPrice * _this.ge[index].qty;
        // console.log(total)
      });
      return total;
    },

    //是否全选
    isCheckedAll: function() {
      var flag = true;
      //遍历数组选项
      this.newarr.forEach(function(item, index) {
        //数组项没有选中
        // console.log(!item.isChecked);
        if (!item[0].isChecked) {
          flag = false;
        }
      });
      return flag;
    },
    //选中的产品价格
    checkedPrice: function() {
      var total = 0;
      var _this = this;
      // console.log(_this.ge);
      this.newarr.forEach(function(item, index) {
        if (item[0].isChecked) {
          total += item[0].APPPrice * _this.ge[index].qty;
        }
      });
      return total;
    },
    //选中的产品id
    checkedId: function() {
      var total = [];
      var _this = this;
      // console.log(_this.ge);
      this.newarr.forEach(function(item, index) {
        if (item[0].isChecked) {
          total.push(_this.ge[index].ID);
        }
      });
      return total;
    }
  },

  methods: {
    //支付所有
    async payAll(arr) {
      let uname = localStorage.getItem("gjw");
      arr = JSON.stringify(arr);
      let data = await this.$axios({
        method: "post",
        //headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
        url: "http://39.105.167.17:3000/removeItem",
        data: this.$qs
          .stringify({
            uname,
            arr
          })
          
      }).then(res => {
            this.newarr = [];
            this.getcart();
            this.loading = false;
          });

      this.staus = true;
      // console.log(this.detail[0].APPPrice);
    },
    //拿购物车数据
    async getcart() {
      let uname = localStorage.getItem("gjw");
      let data = await this.$axios({
        method: "post",
        //headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
        url: "http://39.105.167.17:3000/getcart",
        data: this.$qs.stringify({
          uname
        })
      }).then(res => {
        // console.log(res);
        this.ge = res.data.data;
        // console.log(this.ge,this.newarr);

        // console.log(this.ge)
        // var ge= this.newarr

        for (var i = 0; i < this.ge.length; i++) {
          // console.log(ge[i].detail);
          this.newarr.push(this.ge[i].detail);
        }

        // console.log(this.newarr);
        // console.log(this.vivo);
      });
      return data;
    },
    //更新购物车
    async updatecart(ID, qty) {
      let uname = localStorage.getItem("gjw");
      let data = await this.$axios({
        method: "post",
        //headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
        url: "http://39.105.167.17:3000/editCart",
        data: this.$qs.stringify({
          uname,
          ID,
          qty
        })
      });
      return data;
      // console.log(this.detail[0].APPPrice);
    },
    //减号
    reduce: function(arr, index) {
      //   console.log(this.ge[index]);
      this.ge[index].qty--;
      let qty = this.ge[index].qty;
      let ID = this.ge[index].detail[0].ID;
      if (this.ge[index].qty <= 0) {
        this.ge[index].qty = 0;
      }
      this.updatecart(ID, qty);

      //   console.log(this.ge[index].qty);
    },
    //加号
    add: function(arr, index) {
      // console.log(index);
      this.ge[index].qty++;
      //   console.log(this.newarr);
      let qty = this.ge[index].qty;
      let ID = this.ge[index].detail[0].ID;
      if (this.ge[index].qty <= 0) {
        this.ge[index].qty = 0;
      }
      this.updatecart(ID, qty);
    },

    remove: function() {
      this.loading = true;
      this.payAll(this.checkedId);
    },
    //全选
    checkAll: function(index) {
      //   console.log(123);
      this.newarr.forEach(item => {
        // console.log(item);
        item[0].isChecked = !item[0].isChecked;
        //                 console.log(item.isChecked);
      });
    },

    //单选
    check: function(arr, index) {
      // console.log(arr);
      arr[0].isChecked = !arr[0].isChecked;
    }
  },
  created() {
    this.getcart();
  },
  mounted() {}
};
</script>

<style>
.van-card__content {
  margin-left: 9px;
}
.red {
  margin-left: 24px;
}
.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ccc;
  opacity: 0.7;
}
.van-loading {
  color: black !important;
  top: 50%;
  left: 50%;
}
</style>
