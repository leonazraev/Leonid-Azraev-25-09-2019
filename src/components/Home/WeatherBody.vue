<template>
  <b-container w-100 h-100 fluid>
    <b-row>
      <b-col cols="0">
        <img width="120px" height="120px" :src="showPhoto" />
      </b-col>
      <b-col>
        <b-row class="city">
          <b-col>
            <h1>{{showCity}}</h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h3 v-if="celFar === 'C'">{{showTempC}}</h3>
            <h3 v-else>{{showTempF}}</h3>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="auto" class="top">
        <b-button pill size="lg" :variant="warningStyle" @click="addRemoveFav">
          <span class="favorite">{{warinigText}}</span>
        </b-button>
      </b-col>
    </b-row>
    <b-row class="justify-content-md-center">
      <b-col class="text-center">
        <span class="weatherTXT">{{showWheaterText}}</span>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
export default {
  data() {
    return {
      warning: "warning",
      light: "light",
      add: "Add to Favorites",
      remove: "Remove from Favorites"
    };
  },
  methods: {
    ...mapActions([
      "setWarningStyle",
      "setWarningText",
      "addFavorite",
      "removeFavorite",

      ]),
    addRemoveFav() {
      if (this.warningStyle === this.light) {
        this.setWarningStyle(this.warning);
        this.setWarningText(this.remove);
        this.addFavorite(this.cityDetails);
      } else {
        this.setWarningStyle(this.light);
        this.setWarningText(this.add);
        this.removeFavorite(this.cityDetails);
      }
    }
  },
  computed: {
    ...mapGetters({
      celFar : "celFar" , 
      getWrningText: "warningText",
      getSarningStyle: "warningStyle",
      getCityDetails: "cityDetails",
      favorites: "favorites",


      }),
    showPhoto() {
      if (this.cityDetails.regionID !== "")
        return (
          "https://www.countryflags.io/" +
          this.cityDetails.regionID +
          "/shiny/64.png"
        );
      else return "";
    },
    getFavorites() {
      return this.favorites;
    },
    showCity() {
      return this.cityDetails.city;
    },
    showTempC() {
      return this.cityDetails.tempC + " °C";
    },
    showTempF() {
      return this.cityDetails.tempF + " °F";
    },
    showWheaterText() {
      return this.cityDetails.WeatherText;
    },
    cityDetails() {
      return this.getCityDetails;
    },
    warningStyle() {
      if (this.getFavorites.find(e => e.city === this.cityDetails.city)) {
        this.setWarningStyle(this.warning);
      }
      else this.setWarningStyle(this.light);
      return this.getSarningStyle;
    },
    warinigText() {
      if (this.getFavorites.find(e => e.city === this.cityDetails.city)) {
              this.setWarningText(this.remove);
      }
      else this.setWarningText(this.add);
      return this.getWrningText;
    },
  },
  created() {}
};
</script>
<style >
.customcontainer {
  border-style: solid;
}
.city {
  font-family: times, Times New Roman, times-roman, georgia, serif;
  color: #444;
  margin-top: 14px;
}
.favorite {
  font-weight: bolder;
}
.top {
  margin-top: 30px;
}
.weatherTXT {
  font-size: 150px;
}

</style>