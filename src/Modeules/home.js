const state = {
    defaultLocation: null,
    cityDetails: {
        key: '',
        regionID: '',
        city: '',

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
          console.log(contex.state.fullURL);
  
          contex.state.cityDetails.city = autocomplete[0].LocalizedName;
          contex.state.cityDetails.key = daautocompleteta[0].Key;
          contex.state.cityDetails.regionID = autocomplete[0].Country.ID;
  
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
}
const mutations = {

}

export default {
    mutations,
    actions,
    getters,
    state
}