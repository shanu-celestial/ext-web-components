import Ext_Evented from '../../Ext/Evented.js';

export default class Ext_scroll_Scroller extends Ext_Evented {
  static PROPERTIES() { return [
    'A',
    'An',
    'an',
    'element',
    'listeners',
    'rtl',
    'scrollbars',
    'scrollElement',
    'size',
    'touchAction',
    'x',
    'y',
  ]};
  static EVENTS() { return [
    {name:'refresh', parameters:'sender'},
    {name:'scroll', parameters:'sender,x,y,deltaX,deltaY'},
    {name:'scrollend', parameters:'sender,x,y,deltaX,deltaY'},
    {name:'scrollstart', parameters:'sender,x,y'},
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_scroll_Scroller.PROPERTIES());
    return Ext_Evented.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_scroll_Scroller.EVENTS());
    return Ext_Evented.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_scroll_Scroller.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_scroll_Scroller.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_scroll_Scroller.PROPERTIES()),
      events.concat(Ext_scroll_Scroller.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
