import AppState from "./AppState";

let forecastJSON = [
  {
    "dt":1566313200,
    "main": {
      "temp":31.24,
      "temp_min":30.25,
      "temp_max":31.24,
      "pressure":1021.52,
      "sea_level":1021.52,
      "grnd_level":1005.71,
      "humidity":30,
      "temp_kf":0.99
    },
    "weather": [
      {
        "id":802,
        "main":"Clouds",
        "description":"scattered clouds",
        "icon":"03d"}
    ],
    "clouds":{"all":46},
    "wind":{"speed":0.23,"deg":93.193},
    "sys":{"pod":"d"},
    "dt_txt":"2019-08-20 15:00:00"
  },{"dt":1566388800,"main":{"temp":30.64,"temp_min":30.64,"temp_max":30.64,"pressure":1021.28,"sea_level":1021.28,"grnd_level":1005.27,"humidity":29,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.19,"deg":118.356},"sys":{"pod":"d"},"dt_txt":"2019-08-21 12:00:00"},{"dt":1566475200,"main":{"temp":25.06,"temp_min":25.06,"temp_max":25.06,"pressure":1022.05,"sea_level":1022.05,"grnd_level":1006.4,"humidity":56,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":87},"wind":{"speed":4.97,"deg":348.143},"sys":{"pod":"d"},"dt_txt":"2019-08-22 12:00:00"},{"dt":1566561600,"main":{"temp":21.59,"temp_min":21.59,"temp_max":21.59,"pressure":1023.83,"sea_level":1023.83,"grnd_level":1008.43,"humidity":61,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":98},"wind":{"speed":5.14,"deg":15.932},"sys":{"pod":"d"},"dt_txt":"2019-08-23 12:00:00"},{"dt":1566648000,"main":{"temp":25.45,"temp_min":25.45,"temp_max":25.45,"pressure":1025.25,"sea_level":1025.25,"grnd_level":1009.51,"humidity":33,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":4.45,"deg":31.538},"sys":{"pod":"d"},"dt_txt":"2019-08-24 12:00:00"}]


  class WeatherDataService {
    constructor() {
        this.appIds = [
            
          ]
          this.units = 'metric';
          this.getWeather = this.getWeather.bind(this);
        //   AppState.watch("UNITS", value => {this.units = value});
        //   AppState.watch("SIDEBAR", this.getWeather);
    }
  getWeekDay(dateString) {
      let date = new Date(dateString);
      return date.toString().slice(0,3);
  }
  getWeather(userInput) {
    

    // for (let i in a.list) {
    //   if (i === '1') {
    //      g.push(a.list[i]);}
    //   if (i > 1 && a["list"][i]["dt_txt"].slice(11) === "12:00:00") {
    //      g.push(a["list"][i]); }};
    AppState.update('WEATHER', {
      humidity: forecastJSON[0]['main']['humidity'],
      day: this.getWeekDay(forecastJSON[0]['dt_txt']),
      temp: forecastJSON[0]['main']['temp'],
      description: forecastJSON[0]['weather'][0]['description'],
      time: forecastJSON[0]['dt_txt'].slice(11,16),
      pressure: forecastJSON[0]['main']['pressure'], 
      wind: forecastJSON[0]['wind']['speed'], 
    });
    AppState.update('FORECAST', {

    })
  }
}

export default new WeatherDataService();


    
