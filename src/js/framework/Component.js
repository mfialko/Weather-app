export default class Component {
  constructor(host, props = {}) {
    this.host = host;
    this.props = props;
    this.init();
    this._render();
  }
  init() {
  }
  updateState(stateDelta) {
    this.state = Object.assign({}, this.state, stateDelta);
    this._render();
  }
  _render() {
    this.host.innerHTML = "";
    let content = this.render();

    if (!Array.isArray(content)) {
      content = [ content ];
    }

    // console.log(content);

    content.map(item => this._vDomPrototypeElementToHtmlElement(item)) // [string|HTMLElement] => [HTMLElement]
      .forEach(htmlElement => {
        if (typeof htmlElement === 'string') {
          this.host.insertAdjacentHTML('afterbegin', htmlElement);
        }
        else {
          this.host.appendChild(htmlElement);
        }
      });
  }
  /* @returns {string|[string|HTMLElement|Component]} */
  render() {
    return 'OMG! They wanna see me!!!!!! Aaaaaa';
  }

  /**
   *
   * @param {string|HTMLElement|Object} element
   * @private
   */
  _vDomPrototypeElementToHtmlElement(element) {
    let container;
    if (typeof element === 'string') {
      const containsHtmlTags = /[<>&]/.test(element);
      if (containsHtmlTags) {
        return element;
      } else {
        container = document.createTextNode(element);
      }
      return container;
    } 
    else {
      if (element.tag) {
        if (typeof element.tag === 'function') { 
          container = document.createElement('div');
          new element.tag(container, element.props);

        } else {
          // string
          container = document.createElement(element.tag);
          if (element.content !== undefined) {
            container.innerHTML = element.content;
          }

        }
          // ensure following element properties are Array
        ['classList', 'attributes', 'children'].forEach(item => {
          if (element[item] && !Array.isArray(element[item])) {
            element[item] = [element[item]];
          }
        });
        if (element.classList) {
          container.classList.add(...element.classList);
        }
        if (element.attributes) {
          for (let key in element.attributes[0]) {
            container.setAttribute(key, element.attributes[0][key]);
          }
        }

        // process eventHandlers
        if (element.eventHandlers) {
          Object.keys(element.eventHandlers).forEach(eventType => {
            container.addEventListener(eventType, element.eventHandlers[eventType]);
          });
        }

        // process children
        if (element.children) {
          element.children.forEach(el => {
            const htmlElement = this._vDomPrototypeElementToHtmlElement(el);
            container.appendChild(htmlElement);
          });
        }

        return container;
        
      }
    }
    return element;
  }
}
