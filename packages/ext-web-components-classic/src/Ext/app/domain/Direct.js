import Ext_app_EventDomain from '../../../Ext/app/EventDomain.js';

export default class Ext_app_domain_Direct extends Ext_app_EventDomain {
  static PROPERTIES() { return [
    'idProperty',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_app_domain_Direct.PROPERTIES());
    return Ext_app_EventDomain.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_app_domain_Direct.EVENTS());
    return Ext_app_EventDomain.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_app_domain_Direct.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_app_domain_Direct.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_app_domain_Direct.PROPERTIES()),
      events.concat(Ext_app_domain_Direct.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
