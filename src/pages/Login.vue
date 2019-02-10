<template>
    <div>
        <LoginHeader />
        <LoginMain />
    </div>
</template>
<script>
    import LoginHeader from '../components/LoginHeader.vue'
    import LoginMain from '../components/LoginMain'
    export default {
        components : {
            LoginHeader,
            LoginMain
        }
    }
</script>
<style scoped>

</style>