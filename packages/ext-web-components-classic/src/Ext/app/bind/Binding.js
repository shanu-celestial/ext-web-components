import Ext_app_bind_BaseBinding from '../../../Ext/app/bind/BaseBinding.js';

export default class Ext_app_bind_Binding extends Ext_app_bind_BaseBinding {
  static PROPERTIES() { return [
    'deep',
    'single',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_app_bind_Binding.PROPERTIES());
    return Ext_app_bind_BaseBinding.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_app_bind_Binding.EVENTS());
    return Ext_app_bind_BaseBinding.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_app_bind_Binding.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_app_bind_Binding.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_app_bind_Binding.PROPERTIES()),
      events.concat(Ext_app_bind_Binding.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
