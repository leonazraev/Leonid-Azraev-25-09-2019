<template>
  <b-container>
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
        ></b-form-input>

        <b-form-datalist id="input-list" :options="autoCompleteOptions"></b-form-datalist>
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
      search: ""
    };
  },
  methods:{
    ...mapActions([
      "setAutoComplete"
    ])
  },
  computed: {
    ...mapGetters({
      getAutoCompleteTxT: "getAutoCompleteTxT"
    }),
    searchedValue: {
      get() {
        return this.search;
      },
      set(evt) {
        this.setAutoComplete(evt);
        this.search = evt;
      }
    },
    autoCompleteOptions(){
      return this.getAutoCompleteTxT.filter((v,i) => this.getAutoCompleteTxT.indexOf(v) === i);
    }
  },
};
</script>
<style scoped>
@import "//netdna.bootstrapcdn.com/font-awesome/3.0/css/font-awesome.css";
.fontAwesome {
  font-family: "Helvetica", FontAwsome, sans-serif;
}
</style>