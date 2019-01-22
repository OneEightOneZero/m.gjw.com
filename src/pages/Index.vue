<template>
  <div>
    <Banner/>
    <Main/>
    <List/>
  </div>
</template>
<script>
import Banner from "../components/IndexBanner.vue";
import Main from "../components/IndexMain.vue";
import List from "../components/IndexList.vue";
export default {
    components: {
    Banner,
    Main,
    List,
  }
};
</script>