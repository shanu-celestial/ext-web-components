import Ext_data_summary_Base from '../../../Ext/data/summary/Base.js';

export default class Ext_data_summary_None extends Ext_data_summary_Base {
  static PROPERTIES() { return [
    'value',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_summary_None.PROPERTIES());
    return Ext_data_summary_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_summary_None.EVENTS());
    return Ext_data_summary_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_summary_None.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_summary_None.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_summary_None.PROPERTIES()),
      events.concat(Ext_data_summary_None.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
