<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <router-view ></router-view>
  </div>
</template>
<script>
/* eslint-disable */
import navigationBar from './components/Header.vue'
export default {
  components:{
    navigationBar
  },
  created(){
      
  },
  beforeCreate(){
    //this.$store.dispatch('setUserLocationByDefault');
  }
}
</script>
<style lang="scss">

</style>
