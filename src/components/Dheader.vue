<template>
    <div class="van-hairline--bottom van-nav-bar van-nav-bar--fixed" style="z-index: 1;">
        <div class="van-nav-bar__left"><i class="van-icon van-icon-arrow van-nav-bar__arrow" @click="goback"></i></div>
        <div class="van-ellipsis van-nav-bar__title">53度 茅台王子酒 酱色 500ml</div>
        <div class="van-nav-bar__right"></div>
    </div>
</template>
<script>
    export default {
        methods : {
            goback(){
                this.$router.back(-1);
            }
        }
    }
</script>
<style scoped>
    .van-nav-bar__arrow {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
    }
</style>