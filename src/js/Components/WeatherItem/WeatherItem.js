import Component from "../../framework/Component";

export default class WeatherItem extends Component {
  constructor(host, props) {
    super(host, props);
  }
  

  render() {
    return `<p>${this.props.day}</p>
            <p class="temp">
              <span class="temp">${this.props.minTemp}&deg;</span><span>${this.props.maxTemp}&deg;</span>
            </p>`
  }

  
}
