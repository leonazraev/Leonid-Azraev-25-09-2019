<template>
  <b-container fluid class="w-75 h-100">
    <br />
    <b-row>
      <b-col cols="0">
        <i class="fas fa-search" style="padding-top: 10px;"></i>
      </b-col>
      <b-col >
        <b-form-input
          list="input-list"
          v-model="searchedValue"
          id="search"
          placeholder="Search"
        ></b-form-input>

        <b-form-datalist id="input-list"></b-form-datalist>
      </b-col>
    </b-row>
    <hr />
    <weather-body></weather-body>
    <five-days class="topMargin"></five-days>
  </b-container>
</template>
<script>
import FiveDays from "./FiveDays";
import WeatherBody from "./WeatherBody.vue";
export default {
  computed: {
    searchedValue: {
      get(evt) {
        return '';
      },
      set(evt) {
        this.$store.dispatch("userSearch", evt);
      }
    }
  },
  components: {
    WeatherBody,
    FiveDays
  }
};
</script>
<style >
@import "//netdna.bootstrapcdn.com/font-awesome/3.0/css/font-awesome.css";
.topMargin {
  margin-top: 10%;
}
.fontAwesome {
  font-family: "Helvetica", FontAwsome, sans-serif;
}
</style>