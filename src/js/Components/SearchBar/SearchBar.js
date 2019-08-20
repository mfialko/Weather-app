import Component from "../../framework/Component";
export default class SearchBar extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return `<div class="fav">@</div> 
            <div class="city-name">Kiev</div>
            <div class="search">%</div>`;
  }
}
