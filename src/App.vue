<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/content/footer.vue";
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components:{
    Footer
  }
}
</script>

<style>
@import url("assets/css/normalize.css");
</style>
