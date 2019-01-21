<template>
  <div id="app">
    <Banner />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Banner from './components/IndexBanner.vue'
import Main from './components/IndexMain.vue'

export default {
  name: 'app',
  components: {
    Footer,
    Banner,
    Main,
  }
}
</script>

<style>

</style>
