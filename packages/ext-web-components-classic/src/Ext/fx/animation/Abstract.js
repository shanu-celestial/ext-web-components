import Ext_Evented from '../../../Ext/Evented.js';

export default class Ext_fx_animation_Abstract extends Ext_Evented {
  static PROPERTIES() { return [
    'before',
    'easing',
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_fx_animation_Abstract.PROPERTIES());
    return Ext_Evented.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_fx_animation_Abstract.EVENTS());
    return Ext_Evented.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_fx_animation_Abstract.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_fx_animation_Abstract.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_fx_animation_Abstract.PROPERTIES()),
      events.concat(Ext_fx_animation_Abstract.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
