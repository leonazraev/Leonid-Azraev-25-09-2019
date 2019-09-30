<template>
  <b-container fluid>
    <b-row>
      <b-col cols="0">
        <i class="fas fa-search" style="padding-top: 10px;"></i>
      </b-col>
      <b-col>
        <b-form-input
          list="input-list"
          :value="search"
          @keydown="checkTheLetters($event)"
          id="input-with-list"
          placeholder="Search"
        ></b-form-input>

        <b-form-datalist id="input-list" :options="autoCompleteOptions"></b-form-datalist>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    ...mapActions(["setAutoComplete"]),
    checkTheLetters(evt) {
      let re = /[^a-zA-Z]+$/gi;
      evt.target.value = evt.target.value.replace(re, "");
      if (evt.target.value === "") {
        this.search = "";
        return;
      } else {
        this.setAutoComplete(evt.target.value);
        this.search = evt.target.value;
      }
    }
  },
  computed: {
    ...mapGetters({
      getAutoCompleteTxT: "getAutoCompleteTxT"
    }),
    autoCompleteOptions() {
      return this.getAutoCompleteTxT.filter(
        (v, i) => this.getAutoCompleteTxT.indexOf(v) === i
      );
    }
  }
};
</script>
<style scoped>
@import "//netdna.bootstrapcdn.com/font-awesome/3.0/css/font-awesome.css";
.fontAwesome {
  font-family: "Helvetica", FontAwsome, sans-serif;
}
</style>