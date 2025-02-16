import Ext_Base from '../../Ext/Base.js';

export default class Ext_drag_Constraint extends Ext_Base {
  static PROPERTIES() { return [
    'element',
    'horizontal',
    'region',
    'snap',
    'source',
    'vertical',
    'x',
    'y',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_drag_Constraint.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_drag_Constraint.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_drag_Constraint.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_drag_Constraint.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_drag_Constraint.PROPERTIES()),
      events.concat(Ext_drag_Constraint.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
