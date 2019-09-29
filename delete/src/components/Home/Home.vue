<template>
  <b-container fluid class="w-75 h-100">
    <br />
      <search-bar></search-bar>
    <hr />
    <weather-body></weather-body>
    <five-days class="topMargin"></five-days>
  </b-container>
</template>
<script>
import FiveDays from "./FiveDays";
import WeatherBody from "./WeatherBody.vue";
import SearchBar from './SearchBar.vue'
export default {
  components: {
    WeatherBody,
    FiveDays,
    SearchBar
  }
};
</script>
<style scoped>
.topMargin {
  margin-top: 10%;
}

</style>