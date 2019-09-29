<template>
  <b-container fluid class="w-75 h-100">
    <br />
    <b-card-group deck class="text-center">
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
import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters({
      getFavorites:"favorites",
      colorTheme: "themeChange"
    }),
  }
};
</script>
<style  scoped>
.b-card-group .b-card {
  max-width: 25%;
}
.card-deck .card {
  max-width: calc(25% - 30px);
}
@media (min-width: 20em) {
  .card-deck > .card {
    width: 25%;
    flex-wrap: wrap;
    flex: initial;
    margin: 10px;
  }
}
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