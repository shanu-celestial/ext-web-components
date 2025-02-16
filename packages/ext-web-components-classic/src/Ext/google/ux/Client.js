import Ext_Mixin from '../../../Ext/Mixin.js';

export default class Ext_google_ux_Client extends Ext_Mixin {
  static PROPERTIES() { return [
    'requiredScripts',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_google_ux_Client.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_google_ux_Client.EVENTS());
    return Ext_Mixin.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_google_ux_Client.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_google_ux_Client.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_google_ux_Client.PROPERTIES()),
      events.concat(Ext_google_ux_Client.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
