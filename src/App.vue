<template>
  <div id="app">
    <m-header></m-header>
    <router-view/>
    <m-footer></m-footer>
    <s-pcar></s-pcar>
  </div>
</template>
<script>
import MHeader from './components/header/header.vue'
import MFooter from './components/footer/footer.vue'
import SPcar from './components/shopcar/shopcar.vue'
export default {
  name: 'app',
  components: {
    MHeader,
    MFooter,
    SPcar
  }
}
</script>
