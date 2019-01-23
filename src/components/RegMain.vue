<template>
    <div class="login reset">
        <div>
            <div class="van-cell-group van-hairline--top-bottom">
                <div class="van-cell van-hairline van-field"><i
                        class="van-icon van-icon-login_account van-cell__left-icon"><!----></i><!---->
                    <div class="van-cell__value van-cell__value--alone">
                        <div class="van-field__body"><input type="text" placeholder="请输入账号"
                                                            class="van-field__control" v-model="name"
                                                            @blur="yonghuming"><!----><!----><!----></div>
                        <!----></div><!----></div>
                <div class="van-cell van-cell--center van-hairline van-field"><i
                        class="van-icon van-icon-login_phone van-cell__left-icon"><!----></i><!---->
                    <div class="van-cell__value van-cell__value--alone">
                        <div class="van-field__body"><input type="text" placeholder="请输入验证码"
                                                            class="van-field__control" v-model="yzm"><!----><!---->
                            <div class="van-field__button">
                                <button class="van-button van-button--danger van-button--small van-button--plain"
                                        @click="changeYZM">
                                    <!----><span class="van-button__text" v-text="yanzhengma"></span></button>
                            </div>
                        </div><!----></div><!----></div>
                <div class="van-cell van-hairline van-field"><i
                        class="van-icon van-icon-login_pawwword van-cell__left-icon"><!----></i><!---->
                    <div class="van-cell__value van-cell__value--alone">
                        <div class="van-field__body"><input type="password" placeholder="密码" class="van-field__control"
                                                            v-model="password">
                            <!----><!----><!----></div><!----></div><!----></div>
                <div class="van-cell van-hairline van-field"><i
                        class="van-icon van-icon-login_pawwword van-cell__left-icon"><!----></i><!---->
                    <div class="van-cell__value van-cell__value--alone">
                        <div class="van-field__body"><input type="password" placeholder="确认密码"
                                                            class="van-field__control" v-model="confirmPwd"><!---->
                            <!----><!----></div>
                        <!----></div><!----></div>
            </div>
            <div class="van-checkbox">
                <div class="van-checkbox__icon van-checkbox__icon--round van-checkbox__icon--checked"><i
                        class="van-icon van-icon-success"><!----></i></div>
                <span class="van-checkbox__label">同意 <a href="#" class="red">《同意协意并注册》</a></span>
            </div>
            <button
                    class="btn_log van-button van-button--danger van-button--large" @click="reg">
                <!----><span class="van-button__text">注册</span></button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                yanzhengma: '',
                name: '',
                yzm: '',
                password: '',
                confirmPwd: '',
                flag : true
            }
        },
        methods: {
            getYZM() {
                this.yanzhengma = '';
                for (let i = 0; i < 4; i++) {
                    this.yanzhengma += parseInt(Math.random() * 10);
                }
            },
            changeYZM() {
                this.getYZM();
            },
            async yonghuming() {
                let data = await this.$axios.get('http://39.105.167.17:3000/data/getUsers');
                let _this = this;
                // console.log(data);
                data.data.forEach((item)=>{
                    if(item.name == _this.name){
                        _this.flag = false;
                        return;
                    }
                    _this.flag = true;
                })
            },
            reg() {
                if(this.flag){
                    if (this.yzm === this.yanzhengma) {
                        if (this.password === this.confirmPwd) {
                            this.$axios({
                                method: "post",
                                //headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
                                url: "http://39.105.167.17:3000/data/plus",
                                data: this.$qs.stringify({
                                    name: this.name,
                                    password: this.password
                                })
                            }).then(res => {
                                if (res.data == "插入成功") {
                                    localStorage.setItem("gjw",this.name);
                                    this.$router.push({name : "Mine"});
                                }
                            });
                        } else {
                            alert("两次密码不一致");
                            return;
                        }
                    } else {
                        alert("验证码错误");
                        return;
                    }
                }else{
                    alert("用户名已存在");
                    return;
                }
            }
        },
        mounted() {
            this.getYZM();
        }
    }
</script>
<style scoped>
    .login {
        padding-top: 46px;
    }
</style>