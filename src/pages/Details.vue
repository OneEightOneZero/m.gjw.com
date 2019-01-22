<template>
    <div>
        <Dheader/>
        <Dmain/>
        <Dfooter/>
    </div>
</template>
<script>
    import '../css/details.css'
    import '../css/index.css'
    import Dheader from '../components/Dheader.vue'
    import Dfooter from '../components/Dfooter.vue'
    import Dmain from '../components/Dmain.vue'

    export default {
        components: {
            Dheader,
            Dfooter,
            Dmain
        }
    }
</script>
<style scoped>

</style>