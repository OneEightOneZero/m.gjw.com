<template>
    <div class="user mb50">
        <div class="usr_top login ">
            <div class="no_login" v-show="!hasToken"><img src="../assets/icon_head_no_login.png" alt="">
                <a href="javascript:void(0);" @click="toLogin">登录/注册
                    &gt;</a>
            </div>
            <div class="no_login" v-show="hasToken"><img src="../assets/icon_head_no_login.png" alt="">
                <a href="javascript:void(0);" v-text="token"></a>
                <span class="exit" @click="exit">退出</span>
            </div>
        </div>
        <div class="my_order">
            <div class="van-cell-group van-hairline--top-bottom van-panel">
                <div>
                    <div class="tit_right van-cell van-cell--clickable van-hairline"><!---->
                        <div class="van-cell__title"><span>我的订单</span><!----></div>
                        <div class="van-cell__value"><span>查看全部订单</span></div>
                        <i class="van-icon van-icon-arrow van-cell__right-icon"><!----></i></div>
                </div>
                <div class="van-panel__content">
                    <div class="user-links van-row">
                        <div class="van-col van-col--6"><a href="/usercenter/MyOrders-1.html">
                            <div class="ord_ico"><img src="../assets/wd_01dfk.png" alt="">
                                <div class="van-icon__info">0</div>
                            </div>
                            <p>待付款</p></a></div>
                        <div class="van-col van-col--6"><a href="/usercenter/MyOrders-2.html">
                            <div class="ord_ico"><img src="../assets/wd_02dfh.png" alt="">
                                <div class="van-icon__info">0</div>
                            </div>
                            <p>待发货</p></a></div>
                        <div class="van-col van-col--6"><a href="/usercenter/MyOrders-3.html">
                            <div class="ord_ico"><img src="../assets/wd_03dsh.png" alt="">
                                <div class="van-icon__info">0</div>
                            </div>
                            <p>待收货</p></a></div>
                        <div class="van-col van-col--6"><a href="/usercenter/MyOrders-4.html">
                            <div class="ord_ico"><img src="../assets/wd_04dpj.png" alt="">
                                <div class="van-icon__info"></div>
                            </div>
                            <p>待评价</p></a></div>
                    </div>
                </div><!----></div>
            <div class="mt10 van-cell-group van-hairline--top-bottom van-panel">
                <div>
                    <div class="tit_right van-cell van-cell--clickable van-hairline"><!---->
                        <div class="van-cell__title"><span>我的钱包</span><!----></div>
                        <div class="van-cell__value"><span>查看明细</span></div>
                        <i class="van-icon van-icon-arrow van-cell__right-icon"><!----></i></div>
                </div>
                <div class="van-panel__content">
                    <div class="user-links  van-row">
                        <div class="van-col van-col--8"><a href="/pages/user/assets1.html?num=0"><p>0</p>
                            <p>账户余额</p></a></div>
                        <div class="van-col van-col--8"><a href="/pages/user/assets2.html?num=0"><p>0</p>
                            <p>优惠券</p></a></div>
                        <div class="van-col van-col--8"><a href="/pages/user/assets3.html?num=0"><p>0</p>
                            <p>积分</p></a></div>
                    </div>
                </div><!----></div>
        </div>
        <div class="user-group mt10 van-cell-group van-hairline--top-bottom">
            <div class="user-like van-row">
                <div class="van-col van-col--6"><a href="/pages/user/fav.html"><img src="../assets/icon_collection.png"
                                                                                    alt="">
                    <p>商品收藏</p></a></div>
                <div class="van-col van-col--6"><a href="/pages/user/footprint.html"><img
                        src="../assets/icon_foot_print.png" alt="">
                    <p>浏览足迹</p></a></div>
                <div class="van-col van-col--6"><a href="tel:4007221919"><img src="../assets/kfrx.png" alt="">
                    <p style="color: red;">400-722-1919</p></a></div>
                <div class="van-col van-col--6"><a href="http://m.gjw.com/Minisite/1687.html"><img
                        src="../assets/bag.png" alt="">
                    <p>领券福利</p></a></div>
            </div>
        </div>
        <div class="hot">
            <div class="bg_tit"><b>推荐商品</b>
                <div class="line"></div>
            </div>
            <div class="tp_box">
                <div class="swiper-container swiper-container-horizontal swiper-container-ios">
                    <div class="swiper-wrapper"
                         style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
                        <div class="swiper-slide swiper-slide-active" style="margin-right: 10px;"><a
                                href="http://m.gjw.com/product/item-id-3671.html"><img
                                src="http://img0.gjw.com/product/2018/0928/12e5040b8deb46dabb6da650339b8a05_1.jpg"
                                style="max-width: 130px;"></a>
                            <div class="price">￥269</div>
                            <div class="mask"></div>
                        </div>
                        <div class="swiper-slide swiper-slide-next" style="margin-right: 10px;"><a
                                href="http://m.gjw.com/product/item-id-4229.html"><img
                                src="http://img0.gjw.com/product/2018/0409/5d2493ff2eb44a088b96ed363559be3e_1.jpg"
                                style="max-width: 130px;"></a>
                            <div class="price">￥329</div>
                            <div class="mask"></div>
                        </div>
                        <div class="swiper-slide" style="margin-right: 10px;"><a
                                href="http://m.gjw.com/product/item-id-1239.html"><img
                                src="http://img0.gjw.com/product/2017/0527/418ff41a27584913a07cb1645059bd89_1.jpg"
                                style="max-width: 130px;"></a>
                            <div class="price">￥69</div>
                            <div class="mask"></div>
                        </div>
                        <div class="swiper-slide" style="margin-right: 10px;"><a
                                href="http://m.gjw.com/product/item-id-6510.html"><img
                                src="http://img0.gjw.com/product/2019/0104/e6880d5031e54f07992100a9aee50350_1.jpg"
                                style="max-width: 130px;"></a>
                            <div class="price">￥288</div>
                            <div class="mask"></div>
                        </div>
                        <div class="swiper-slide" style="margin-right: 10px;"><a
                                href="http://m.gjw.com/product/item-id-4098.html"><img
                                src="http://img0.gjw.com/product/2017/0629/16340c5123714b24addb46a05330410f_1.jpg"
                                style="max-width: 130px;"></a>
                            <div class="price">￥588</div>
                            <div class="mask"></div>
                        </div>
                        <div class="swiper-slide" style="margin-right: 10px;"><a
                                href="http://m.gjw.com/product/item-id-2469.html"><img
                                src="http://img0.gjw.com/product/2017/0915/5199c28ec17248838deab58e73cdae00_1.jpg"
                                style="max-width: 130px;"></a>
                            <div class="price">￥49</div>
                            <div class="mask"></div>
                        </div>
                        <div class="swiper-slide" style="margin-right: 10px;"><a
                                href="http://m.gjw.com/product/item-id-29.html"><img
                                src="http://img0.gjw.com/product/2016/1018/b971eda780fb470abab624b940492905_1.jpg"
                                style="max-width: 130px;"></a>
                            <div class="price">￥158</div>
                            <div class="mask"></div>
                        </div>
                        <div class="swiper-slide" style="margin-right: 10px;"><a
                                href="http://m.gjw.com/product/item-id-5769.html"><img
                                src="http://img0.gjw.com/product/2017/0629/c1d1d4b044634c808fec93a7b167c64e_1.jpg"
                                style="max-width: 130px;"></a>
                            <div class="price">￥219</div>
                            <div class="mask"></div>
                        </div>
                        <div class="swiper-slide" style="margin-right: 10px;"><a
                                href="http://m.gjw.com/product/item-id-2186.html"><img
                                src="http://img0.gjw.com/product/2017/0629/92b8f818ecd14bbe9a3c55865e7bae38_1.jpg"
                                style="max-width: 130px;"></a>
                            <div class="price">￥768</div>
                            <div class="mask"></div>
                        </div>
                        <div class="swiper-slide" style="margin-right: 10px;"><a
                                href="http://m.gjw.com/product/item-id-4322.html"><img
                                src="http://img0.gjw.com/product/2017/0522/018b40d366fd458a9bbd7d4d2711917d_1.jpg"
                                style="max-width: 130px;"></a>
                            <div class="price">￥228</div>
                            <div class="mask"></div>
                        </div>
                        <div class="swiper-slide" style="margin-right: 10px;"><a
                                href="http://m.gjw.com/product/item-id-3305.html"><img
                                src="http://img0.gjw.com/product/2017/0510/5c4e66681c614b6e91421068e9c1bdc1_1.jpg"
                                style="max-width: 130px;"></a>
                            <div class="price">￥49</div>
                            <div class="mask"></div>
                        </div>
                        <div class="swiper-slide" style="margin-right: 10px;"><a
                                href="http://m.gjw.com/product/item-id-14.html"><img
                                src="http://img0.gjw.com/product/2018/0523/472d0547a9c44a4488d04dc5eabbf2e1_1.jpg"
                                style="max-width: 130px;"></a>
                            <div class="price">￥1099</div>
                            <div class="mask"></div>
                        </div>
                    </div>
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </div>
        </div>
    </div>
</template>
<script>
    import '../css/mine.css'
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css';
    // import MineHeader from '../components/MineHeader.vue'
    export default {
        data() {
            return {
                token: "",
                hasToken: false
            }
        },
        components: {},
        methods: {
            toLogin() {
                this.$router.push({name: "Login"});
            },
            exit(){
                localStorage.removeItem("gjw");
                this.$router.push({name: "Login"});
            }
        },
        created() {
            let token = localStorage.getItem("gjw");
            if (token) {
                this.token = token;
                this.hasToken = true;
            }
        },
        mounted() {
            new Swiper('.swiper-container', {
                loop: true,
                autoplay: 1000,
            })
        }
    };
</script>
<style scoped>
    .swiper-slide {
        width: 140px !important;
    }
    .exit{
        position:absolute;
        right:20px;
        top:0;
        z-index:9999;
        color:#fff;
    }
</style>