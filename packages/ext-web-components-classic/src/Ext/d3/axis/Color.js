import Ext_Base from '../../../Ext/Base.js';

export default class Ext_d3_axis_Color extends Ext_Base {
  static PROPERTIES() { return [
    'field',
    'listeners',
    'maximum',
    'minimum',
    'processor',
    'scale',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_d3_axis_Color.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_d3_axis_Color.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_d3_axis_Color.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_d3_axis_Color.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_d3_axis_Color.PROPERTIES()),
      events.concat(Ext_d3_axis_Color.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
