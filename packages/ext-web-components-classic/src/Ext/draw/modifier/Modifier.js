import Ext_Base from '../../../Ext/Base.js';

export default class Ext_draw_modifier_Modifier extends Ext_Base {
  static PROPERTIES() { return [
    'listeners',
    'lower',
    'sprite',
    'upper',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_draw_modifier_Modifier.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_draw_modifier_Modifier.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_draw_modifier_Modifier.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_draw_modifier_Modifier.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_draw_modifier_Modifier.PROPERTIES()),
      events.concat(Ext_draw_modifier_Modifier.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
