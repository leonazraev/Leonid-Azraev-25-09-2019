import Vue from 'vue'
const state = {
  defaultLocation: null,
  cityDetails: {
    key: '',
    regionID: '',
    city: '',
    tempC: '',
    tempF: '',
    WeatherText: '',
    fiveForecast: [],

  },
  gpURL: 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=girsYVPga63NrUmnAGYfhj2OGbPtUT3T&q=',
  autoCompSearchURL: 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=girsYVPga63NrUmnAGYfhj2OGbPtUT3T&q=',
  conditionURL: 'http://dataservice.accuweather.com/currentconditions/v1/',
  fiveForecastURL: 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/',
  searchField: '',
  autoCompleteTxT: [],
  autoCompleteKey:[]

}
const getters = {
  defaultLocation: state => {
    return state.defaultLocation;
  },
  cityDetails: state => {
    return state.cityDetails;
  },
  gpURL: state => {
    return state.gpURL;
  },
  fiveForecast: state =>{
    return state.cityDetails.fiveForecast;
  },
  getAutoCompleteTxT: state =>{
    return state.autoCompleteTxT;
  }
}
const actions = {
  setUserLocationByDefault: contex => {
    navigator.geolocation.getCurrentPosition(position => {
      contex.state.defaultLocation = position;

      contex.dispatch('getDefaultLocation')
    })
  },
  getDefaultLocation: contex => {

    const lat = contex.state.defaultLocation.coords.latitude;
    const lon = contex.state.defaultLocation.coords.longitude;
    const fullURL = contex.getters.gpURL + lat + '%2C' + lon + '&language=en&toplevel=true';
    console.log(fullURL)

          Vue.axios.get(fullURL)
            .then(response => {
              const data = response.data;
              contex.state.cityDetails.city = data.EnglishName;
              contex.state.cityDetails.key = data.Key;
              contex.state.cityDetails.regionID = data.Country.ID;
              contex.dispatch('getWeather');
              contex.dispatch('getFiveForecast');
            })
            .catch(err => {
              
            })
            

  },
  userSearch: (contex, userLocation) => {
    if (userLocation !== '' && userLocation !== undefined) {
      const fullURL = contex.state.autoCompSearchURL + userLocation + '&language=en';
      Vue.axios.get(fullURL)
      .then(response =>{
        const data = response.data;
        contex.state.cityDetails.city = data[0].LocalizedName;
        contex.state.cityDetails.key = data[0].Key;
        contex.state.cityDetails.regionID = data[0].Country.ID;
        contex.dispatch('getWeather');
        contex.dispatch('getFiveForecast');
      })
      .catch( err=>{
        
      })
      
    }
  },
  getWeather: contex => {
    const key = contex.state.cityDetails.key;
    const fullURL = contex.state.conditionURL + key + "?apikey=girsYVPga63NrUmnAGYfhj2OGbPtUT3T&language=en&details=true";
    Vue.axios.get(fullURL)
    .then(response =>{
      const data = response.data;
      contex.state.cityDetails.tempC = data[0].Temperature.Metric.Value;
      contex.state.cityDetails.tempF = data[0].Temperature.Imperial.Value;
      contex.state.cityDetails.WeatherText = data[0].WeatherText;
    })
    .catch( err=>{
      
    })
  },
  getFiveForecast: contex =>{
    const key = contex.state.cityDetails.key;
    const fullURL = contex.state.fiveForecastURL + key + "?apikey=girsYVPga63NrUmnAGYfhj2OGbPtUT3T&language=en&details=true&metric=true";
    console.log(fullURL)
    let Days = ['Sun', 'Mon' , 'Tue' ,'Wed','Thu'];
    Vue.axios.get(fullURL)
    .then(response =>{
      const data = response.data.DailyForecasts;
      const days =[];
      for(let i=0;i<data.length;i++)
      { 
          const day = {Day: Days[i] , Temperature: data[i].Temperature.Maximum.Value};
          days.push(day);
      }
      contex.state.cityDetails.fiveForecast = days;
    })
    .catch( err=>{
      
    })
  },
  setAutoComplete: (contex,search) =>{

    if (search !== '' && search !== undefined) {

      const found = contex.state.autoCompleteKey.find(e=> e.cityNameDesc === search);
      console.log(found)
      if((typeof found) !== 'undefined')
      {
        contex.state.cityDetails.city = found.cityName;
        contex.state.cityDetails.key = found.key;
        contex.state.cityDetails.regionID = found.ID;
        contex.dispatch('getWeather');
        contex.dispatch('getFiveForecast');
      }
      else{
      const fullURL = contex.state.autoCompSearchURL + search + '&language=en';
      Vue.axios.get(fullURL)
      .then(response =>{
        const data = response.data;
        contex.state.autoCompleteTxT = [];
        contex.state.autoCompleteKey = [];
        for(let i=0 ; i < data.length ; i++)
        {
          contex.state.autoCompleteTxT.push(data[i].LocalizedName + ' , ' + data[i].Country.LocalizedName);
          const city = {key: data[i].Key
          ,cityNameDesc: data[i].LocalizedName + ' , ' + data[i].Country.LocalizedName
          ,ID: data[i].Country.ID
          ,cityName:  data[i].LocalizedName}
          contex.state.autoCompleteKey.push(city);
        }
      })
      .catch( err=>{
        
      })
    }
      
    }

}
}

const mutations = {

}

export default {
  mutations,
  actions,
  getters,
  state
}