import Ext_fx_animation_Abstract from '../../../Ext/fx/animation/Abstract.js';

export default class Ext_fx_animation_SlideIn extends Ext_fx_animation_Abstract {
  static PROPERTIES() { return [
    'before',
    'direction',
    'easing',
    'listeners',
    'offset',
    'out',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_fx_animation_SlideIn.PROPERTIES());
    return Ext_fx_animation_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_fx_animation_SlideIn.EVENTS());
    return Ext_fx_animation_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_fx_animation_SlideIn.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_fx_animation_SlideIn.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_fx_animation_SlideIn.PROPERTIES()),
      events.concat(Ext_fx_animation_SlideIn.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
