const state = {
    gpURL: 'https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=',
    autoCompSearchURL: 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=',
    conditionURL: 'https://dataservice.accuweather.com/currentconditions/v1/',
    fiveForecastURL: 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/',
    apikey: 'ouWNiN2XvmKLdXdpDzdOAeXmUBfQGAPw',
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