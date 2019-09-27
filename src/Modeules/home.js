import data from '../resources/data.js'
import newyork from '../resources/newyork'
import jerusalem from '../resources/Jerusalem.js'
import munich from '../resources/munich.js'
import telavivweather from '../resources/telavivweather'
import fivelastdays from '../resources/fivefaysmunich.js'
const state = {
  defaultLocation: null,
  cityDetails: {
    key: '',
    regionID: '',
    city: '',
    tempC: '',
    tempF: '',
    WeatherText: '',
    lastFiveDays: [],

  },
  gpURL: 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=girsYVPga63NrUmnAGYfhj2OGbPtUT3T&q=',
  autoCompSearchURL: 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=girsYVPga63NrUmnAGYfhj2OGbPtUT3T&q=',
  searchField: ''
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
  lastFiveDays: state =>{
    return state.cityDetails.lastFiveDays;
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
    console.log(data)
    contex.state.cityDetails.city = data.EnglishName;
    contex.state.cityDetails.key = data.Key;
    contex.state.cityDetails.regionID = data.Country.ID;

    /*
          Vue.axios.get(fullURL)
            .then(response => {
              const data = response.data;
              contex.state.cityDetails.city = data[0].EnglishName;
              contex.state.cityDetails.key = data[0].Key;
              contex.state.cityDetails.regionID = data.Country.ID;
    
            })
            .catch(err => {
    
            })
            */

  },
  userSearch: (contex, userLocation) => {
    if (userLocation !== '' && userLocation !== undefined) {
      const fullURL = contex.state.autoCompSearchURL + userLocation + '&language=en';
      console.log(userLocation);
      if (userLocation.toLowerCase() === jerusalem[0].LocalizedName.toLowerCase()) {
        contex.state.cityDetails.city = jerusalem[0].LocalizedName;
        contex.state.cityDetails.key = jerusalem[0].Key;
        contex.state.cityDetails.regionID = jerusalem[0].Country.ID;
      }
      if (userLocation.toLowerCase() === newyork[0].LocalizedName.toLowerCase()) {
        contex.state.cityDetails.city = newyork[0].LocalizedName;
        contex.state.cityDetails.key = newyork[0].Key;
        contex.state.cityDetails.regionID = newyork[0].Country.ID;
      }
      if (userLocation.toLowerCase() === munich[0].LocalizedName.toLowerCase()) {
        contex.state.cityDetails.city = munich[0].LocalizedName;
        contex.state.cityDetails.key = munich[0].Key;
        contex.state.cityDetails.regionID = munich[0].Country.ID;
        contex.dispatch('getWeather')
        contex.dispatch('getLastFiveDays');
      }



      /*
      Vue.axios.get(fullURL)
      .then(response =>{
 
        const data = response.data;
        contex.state.cityDetails.city = data[0].LocalizedName;
        contex.state.cityDetails.key = data[0].Key;
        contex.state.cityDetails.regionID = data[0].Country.ID;
 
      })
      .catch( err=>{
        
      })
      */
    }
  },
  getWeather: (contex) => {
    contex.state.cityDetails.tempC = telavivweather[0].Temperature.Metric.Value;
    contex.state.cityDetails.tempF = telavivweather[0].Temperature.Imperial.Value;
    contex.state.cityDetails.WeatherText = telavivweather[0].WeatherText;
  },
  getLastFiveDays: contex =>{
    let lastDaysArrayAPI = fivelastdays.DailyForecasts;
    let Days = ['Sun', 'Mon' , 'Tue' ,'Wed','Thu'];
    for(let i=0;i<lastDaysArrayAPI.length;i++)
    { 
        const day = {Day: Days[i] , Temperature: lastDaysArrayAPI[i].Temperature.Maximum.Value};
        contex.state.cityDetails.lastFiveDays.push(day);
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