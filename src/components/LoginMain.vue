<template>
    <div class="login">
        <div>
            <div class="van-cell-group van-hairline--top-bottom">
                <div class="van-cell van-hairline van-field"><i class="van-icon van-icon-contact van-cell__left-icon">
                    <!----></i><!---->
                    <div class="van-cell__value van-cell__value--alone">
                        <div class="van-field__body"><input type="text" placeholder="用户名" v-model="name"
                                                            class="van-field__control"><!----><!----><!----></div>
                        <!----></div><!----></div>
                <div class="van-cell van-hairline van-field"><i
                        class="van-icon van-icon-login_pawwword van-cell__left-icon"><!----></i><!---->
                    <div class="van-cell__value van-cell__value--alone">
                        <div class="van-field__body"><input type="password" placeholder="密码" class="van-field__control" v-model="password">
                            <!----><!----><!----></div><!----></div><!----></div>
            </div>
            <p><a href="javascript:void(0);">忘记密码</a> <a href="javascript:void(0);" class="fr" @click="toReg">注册</a></p>
            <button
                    class="btn_log van-button van-button--danger van-button--large"
                    style="border-radius: 30px;" @click="yonghuming"><!----><span class="van-button__text">登录</span></button>
            <button class="van-button van-button--danger van-button--large van-button--plain"
                    style="border-radius: 30px;"><!----><span class="van-button__text">短信验证码登录</span></button>
        </div> <!----></div>
</template>
<script>
    export default {
        data() {
            return {
                name: '',
                password: '',
                flag : false
            }
        },
        methods: {
            async yonghuming() {
                let data = await this.$axios.get('http://39.105.167.17:3000/data/getUsers');
                let _this = this;
                // console.log(data);
                if(!(_this.name && _this.password)){
                    return;
                }
                data.data.forEach((item,index)=>{
                    if(item.name == _this.name && item.password== _this.password){
                        _this.flag = true;
                        localStorage.setItem("gjw",this.name);
                        this.$router.push({name : "Mine"});
                        return;
                    }
                    if(index == data.data.length - 1){
                        alert("账号或密码错误");
                    }
                });
            },
            toReg(){
                this.$router.push({name : "Reg"});
            }
        }
    }
</script>
<style scoped>
    .login {
        padding-top: 46px;
    }
</style>