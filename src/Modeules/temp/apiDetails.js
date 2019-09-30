import Vue from 'vue'
const state = {
    gpURL: 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=',
    autoCompSearchURL: 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=',
    conditionURL: 'http://dataservice.accuweather.com/currentconditions/v1/',
    fiveForecastURL: 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/',
    apiKey: 'girsYVPga63NrUmnAGYfhj2OGbPtUT3T'
}
const getters = {
    gpURL: state => {
        return state.gpURL;
    },
    apiKey: state => {
        return state.apiKey;
    },
    fiveForecast: contex =>{
        return contex.state.cityDetails.fiveForecast;
      },
}

const actions = {
    getWeather: contex => {
        const key = contex.state.cityDetails.key;
        const fullURL = contex.state.conditionURL + key + "?apikey=" + contex.getters.apiKey + "&language=en&details=true";
        Vue.axios.get(fullURL)
            .then(response => {
                const data = response.data;
                contex.state.cityDetails.tempC = data[0].Temperature.Metric.Value;
                contex.state.cityDetails.tempF = data[0].Temperature.Imperial.Value;
                contex.state.cityDetails.WeatherText = data[0].WeatherText;
            })
            .catch(err => {
                Vue.toasted.show(err.message, contex.getters.toastOptions);
            })
    },
    getFiveForecast: contex => {

        const key = contex.state.cityDetails.key;
        const fullURL = contex.state.fiveForecastURL + key + "?apikey=" + contex.getters.apiKey + "&language=en&details=true&metric=true";
        let Days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
        Vue.axios.get(fullURL)
            .then(response => {
                const data = response.data.DailyForecasts;
                const days = [];
                for (let i = 0; i < data.length; i++) {
                    const day = { Day: Days[i], Temperature: data[i].Temperature.Maximum.Value };

                    days.push(day);
                }
                contex.state.cityDetails.fiveForecast = days;


            })
            .catch(err => {
                Vue.toasted.show(err.message, contex.getters.toastOptions);
            })
    },
}

const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
}