import Component from '../../framework/Component';
import AppState from '../../Services/AppState';
import WeatherDataService from '../../Services/WeatherDataService';

export default class Temperature extends Component {
  constructor(host, props) {
    super(host, props);
    AppState.watch('WEATHER', this.updateMyself);
    WeatherDataService.getWeather("kiev");
  }

  updateMyself(subState) { 
    this.updateState(subState);
  }

  init() {
    this.updateMyself = this.updateMyself.bind(this);
    this.state = {
      unit: 'C',
      day: '',
      time: '',
      description: '',
      temp: '',
      humidity: '',
      pressure: '', 
      wind: '', 
      windUnit: 'm/s',
    };
    
  }

  render() {
    return `<div class="temp">
              <p>${this.state.day} ${this.state.time}</p>
              <p>${this.state.description}</p>
              <p><span>${parseInt(this.state.temp)}&deg;${this.state.unit}</span></p>
              <p>Pressure: ${parseInt(this.state.pressure)} hPa</p>
              <p>Humidity: ${this.state.humidity}%</p>
              <p>Wind: ${this.state.wind} ${this.state.windUnit}</p>
            </div>
            <div class="img"></div>
            <div class="time"></div>`;
  }
}
