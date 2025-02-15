import Ext_Base from '../../Ext/Base.js';

export default class Ext_data_Batch extends Ext_Base {
  static PROPERTIES() { return [
    'listeners',
    'pauseOnException',
  ]};
  static EVENTS() { return [
    {name:'complete', parameters:'batch,operation'},
    {name:'exception', parameters:'batch,operation'},
    {name:'operationcomplete', parameters:'batch,operation'},
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_Batch.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_Batch.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_Batch.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_Batch.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_Batch.PROPERTIES()),
      events.concat(Ext_data_Batch.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
