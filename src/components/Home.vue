<template>
  <b-container fluid class="w-75 h-100">
    <br />
    <b-form-input list="input-list" v-model="searchedValue" id="search" placeholder=" Search"></b-form-input>
    <b-form-datalist id="input-list" :options="options"></b-form-datalist>
    <hr />
    <b-container h-75>
      <b-row>
        <b-col cols="0">
          <img :src="showPhoto" />
        </b-col>
        <b-col left class="city">
          <h1>{{cityDetails.city}}</h1>
        </b-col>
        <b-button
          pill
          size="lg"
          class="favorite"
          :variant="warningStyle"
          @click="cahngeIcon"
        >{{warinigText}}</b-button>
      </b-row>

      <b-row></b-row>
    </b-container>
  </b-container>
</template>
<script>
import Fav from "./Favorite.vue";
export default {
  data() {
    return {
      options: [],
      searchedValue: "",
      cityDetails: null,
      warningStyle: "light",
      warinigText: "Add to Favorite"
    };
  },
  computed: {
      getFavorites(){
          return this.$store.getters.favorites;
      }
  },
  methods: {
    cahngeIcon() {
      if (this.warningStyle === "light") {
        this.warningStyle = "warning";
        this.warinigText = "Remove from Favorite";
      } else {
        this.warningStyle = "light";
        this.warinigText = "Add to Favorite";
      }
    }
  },
  computed: {
    showPhoto() {
      if (this.cityDetails.regionID !== undefined)
        return (
          "https://www.countryflags.io/" +
          this.cityDetails.regionID +
          "/shiny/64.png"
        );
      else return "";
    }
  },
  created() {
    this.cityDetails = this.$store.getters.cityDetails;
  },
  components: {
    Fav
  }
};
</script>
<style lang="scss">
.customcontainer {
  border-style: solid;
}
.city {
  font-family: times, Times New Roman, times-roman, georgia, serif;
  color: #444;
  margin-top: 9px;
}
.favorite {
  padding-top: 10px;
}
</style>