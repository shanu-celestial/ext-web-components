import Ext_fx_easing_Abstract from '../../../Ext/fx/easing/Abstract.js';

export default class Ext_fx_easing_Linear extends Ext_fx_easing_Abstract {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_fx_easing_Linear.PROPERTIES());
    return Ext_fx_easing_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_fx_easing_Linear.EVENTS());
    return Ext_fx_easing_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_fx_easing_Linear.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_fx_easing_Linear.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_fx_easing_Linear.PROPERTIES()),
      events.concat(Ext_fx_easing_Linear.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
