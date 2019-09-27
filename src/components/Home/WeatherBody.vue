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
            <h3>{{showTempC}}</h3>
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
    addRemoveFav() {
      if (this.warningStyle === this.light) {
        this.$store.dispatch("setWarningStyle", this.warning);
        this.$store.dispatch("setWarningText", this.remove);
        this.$store.dispatch("addFavorite", this.cityDetails);
      } else {
        this.$store.dispatch("setWarningStyle", this.light);
        this.$store.dispatch("setWarningText", this.add);
        this.$store.dispatch("removeFavorite", this.cityDetails);
      }
    }
  },
  computed: {
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
      return this.$store.getters.favorites;
    },
    showCity() {
      //this.cityDetails = this.$store.getters.cityDetails;
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
      return this.$store.getters.cityDetails;
    },
    warningStyle() {
      if (this.getFavorites.find(e => e.city === this.cityDetails.city)) {
        this.$store.dispatch("setWarningStyle", this.warning);
      }
      else this.$store.dispatch("setWarningStyle", this.light);
      return this.$store.getters.warningStyle;
    },
    warinigText() {
      if (this.getFavorites.find(e => e.city === this.cityDetails.city)) {
              this.$store.dispatch("setWarningText", this.remove);
      }
      else this.$store.dispatch("setWarningText", this.add);
      return this.$store.getters.warningText;
    }
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
.text {
  position: absolute;
  top: 50%;
  right: 50%;
  margin-top: 100px;
  transform: translate(50%, -50%);
  text-transform: uppercase;
  font-family: verdana;
  font-size: 12em;
  font-weight: 700;
  color: #f5f5f5;
  text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191,
    1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191,
    1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191,
    1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
    1px 30px 60px rgba(16, 16, 16, 0.4);
}
</style>