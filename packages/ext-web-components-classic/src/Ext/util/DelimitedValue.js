import Ext_Base from '../../Ext/Base.js';

export default class Ext_util_DelimitedValue extends Ext_Base {
  static PROPERTIES() { return [
    'dateFormat',
    'delimiter',
    'lineBreak',
    'quote',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_util_DelimitedValue.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_DelimitedValue.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_DelimitedValue.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_DelimitedValue.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_DelimitedValue.PROPERTIES()),
      events.concat(Ext_util_DelimitedValue.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
