<template>
  <b-container fluid class="w-75 h-100">
    <br />
    <b-row>
      <b-col cols="0">
        <i class="fas fa-search" style="padding-top: 10px;"></i>
      </b-col>
      <b-col>
        <b-form-input
          list="input-list"
          v-model="searchedValue"
          id="input-with-list"
          placeholder="Search"
          @keypress="executeSearch($event)"
        ></b-form-input>

        <b-form-datalist id="input-list" :options = "autoCompleteOptions"></b-form-datalist>
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
  data() {
    return {
      search: ""
    };
  },
  computed: {
    searchedValue: {
      get() {
        return this.search;
      },
      set(evt) {
        this.$store.dispatch('setAutoComplete',evt);
        this.search = evt;
      }
    },
    autoCompleteOptions(){
      return this.$store.getters.getAutoCompleteTxT.filter((v,i) => this.$store.getters.getAutoCompleteTxT.indexOf(v) === i);
    }
  },
  methods: {
    executeSearch(e) {
      if(e.charCode === 13)
        this.$store.dispatch("userSearch", this.search);
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