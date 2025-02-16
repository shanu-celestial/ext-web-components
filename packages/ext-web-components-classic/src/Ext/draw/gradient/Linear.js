import Ext_draw_gradient_Gradient from '../../../Ext/draw/gradient/Gradient.js';

export default class Ext_draw_gradient_Linear extends Ext_draw_gradient_Gradient {
  static PROPERTIES() { return [
    'degrees',
    'radians',
    'stops',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_draw_gradient_Linear.PROPERTIES());
    return Ext_draw_gradient_Gradient.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_draw_gradient_Linear.EVENTS());
    return Ext_draw_gradient_Gradient.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_draw_gradient_Linear.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_draw_gradient_Linear.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_draw_gradient_Linear.PROPERTIES()),
      events.concat(Ext_draw_gradient_Linear.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
