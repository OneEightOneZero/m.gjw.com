<template>
  <div>
    <Banner/>
    <Main/>
  </div>
</template>
<script>
import Banner from "../components/IndexBanner.vue";
import Main from "../components/IndexMain.vue";
export default {
    components: {
    Banner,
    Main,
  }
};
</script>