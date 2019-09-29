const state = {
    gpURL: 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=',
    autoCompSearchURL: 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=',
    conditionURL: 'http://dataservice.accuweather.com/currentconditions/v1/',
    fiveForecastURL: 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/',
    apikey: 'aenBo9h7UgW66T8A341LpdqZXJsqFtnD',
}
const getters = {
    gpURL: state => {
        return state.gpURL;
      },
      apikey: state => {
          return state.apikey
      },
      autoCompSearchURL: state =>{
          return state.autoCompSearchURL;
      },
      conditionURL: state =>{
        return state.conditionURL;
    },
    fiveForecastURL: state =>{
        return state.fiveForecastURL;
    }
}
const actions = {

}
const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations

}