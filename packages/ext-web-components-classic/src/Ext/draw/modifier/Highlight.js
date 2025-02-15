import Ext_draw_modifier_Modifier from '../../../Ext/draw/modifier/Modifier.js';

export default class Ext_draw_modifier_Highlight extends Ext_draw_modifier_Modifier {
  static PROPERTIES() { return [
    'enabled',
    'listeners',
    'lower',
    'sprite',
    'style',
    'upper',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_draw_modifier_Highlight.PROPERTIES());
    return Ext_draw_modifier_Modifier.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_draw_modifier_Highlight.EVENTS());
    return Ext_draw_modifier_Modifier.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_draw_modifier_Highlight.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_draw_modifier_Highlight.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_draw_modifier_Highlight.PROPERTIES()),
      events.concat(Ext_draw_modifier_Highlight.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
