<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <transition name="jump">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
/* eslint-disable */
import navigationBar from "./components/Header.vue";
export default {
  data() {
    return {
      show: true
    };
  },
  components: {
    navigationBar
  },
  beforeCreate() {
    this.$store.dispatch("setUserLocationByDefault");
  }
};
</script>
<style scoped>
.jump-enter {
}
.jump-enter-active {
  animation: jump-in 1s ease-out forwards;

  /*to mix transition and animation transition: 1s; */
}

.jump-move {
  transition: transform 1s;
}
@keyframes jump-in {
  from {
    transform: translateY(10px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes jump-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(10px);
  }
}
</style>
