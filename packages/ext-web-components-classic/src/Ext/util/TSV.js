import Ext_util_DelimitedValue from '../../Ext/util/DelimitedValue.js';

export default class Ext_util_TSV extends Ext_util_DelimitedValue {
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
    properties = properties.concat(Ext_util_TSV.PROPERTIES());
    return Ext_util_DelimitedValue.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_TSV.EVENTS());
    return Ext_util_DelimitedValue.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_TSV.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_TSV.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_TSV.PROPERTIES()),
      events.concat(Ext_util_TSV.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
