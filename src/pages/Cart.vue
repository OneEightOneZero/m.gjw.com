<template>
  <div>
    <LcartHearder></LcartHearder>
    <LcartBody></LcartBody>
  </div>
</template>
<script>
import LcartHearder from "../components/LcartHaeder.vue";
// import LcartBody from "../components/LcartBody.vue1";
import LcartBody from "../components/Lcart.vue";


export default {
  components: {
    LcartHearder,
    LcartBody
  }
};
</script>