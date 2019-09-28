<template>
  <b-container fluid class="w-75 h-100">
    <br />
    <b-card-group deck>
      <b-card
        v-for="(day,index) in getFavorites"
        :key="index"
        bg-variant="light"
        :header="day.city"
        class="text-center headerSize"
        :header-bg-variant="colorTheme"
        :border-variant="colorTheme"
        header-text-variant="white"
        style="max-width: 20rem; height: 20rem;"
      >
        <b-card-text class="bodysize">{{day.tempC}} °C</b-card-text>
        <b-card-text class="bodysize">{{day.WeatherText}}</b-card-text>
      </b-card>
    </b-card-group>
  </b-container>
</template>
<script>
export default {
  computed: {
    getFavorites() {
      return this.$store.getters.favorites;
    },
    colorTheme() {
      return this.$store.getters.themeChange;
    }
  }
};
</script>
<style  scoped>
.headerSize {
  font-size: 30px;
  font-weight: bold;
}
.headerSize .bodysize {
  padding-top: 30px;
  font-size: 30px;
  font-weight: bold;
}
</style>