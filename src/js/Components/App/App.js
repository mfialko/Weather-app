import Component from '../../framework/Component';
import {Temperature} from '../Temperature/';
import {WeatherForecast} from '../WeatherForecast';
import {SearchBar} from '../SearchBar';
import AppState from '../../Services/AppState';

export default class App extends Component {
  constructor(host) {
    super(host);
  }

  init() {
    
    // ['click']
    //   .forEach(methodName => this[methodName] = this[methodName].bind(this));
  }

  render() {
    return [
      {
        tag: SearchBar,
        classList: ['search-bar'],
      },
      {
        tag: Temperature,
        props: {
          temperature: 0,
          unit: 'C',
        },
        classList: ['main'],
      },
      {
        tag:  WeatherForecast,
        // props: {
        //   weatherForecast: this.state.weatherForecast,
        //   click: i => this.click(i),
        // },
        classList: ['week-weather'],
      },
    ]
  }

  // click(i) {
  //   this.state.currentWeather = this.state.weatherForecast[i];
  //   AppState.update('TEMP', {
  //     tempMax: this.state.weatherForecast[i]['temp'][1],
  //   }); 
  // }
}
