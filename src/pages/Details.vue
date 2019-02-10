<template>
    <div>
        <Dmain/>
        <Dfooter/>
    </div>
</template>
<script>
    import '../css/details.css'
    import '../css/index.css'

    import Dfooter from '../components/Dfooter.vue'
    import Dmain from '../components/Dmain.vue'

    export default {
        components: {

            Dfooter,
            Dmain
        }
    }
</script>
<style scoped>

</style>