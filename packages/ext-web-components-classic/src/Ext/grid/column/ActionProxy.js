import Ext_Base from '../../../Ext/Base.js';

export default class Ext_grid_column_ActionProxy extends Ext_Base {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_column_ActionProxy.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_column_ActionProxy.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_column_ActionProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_column_ActionProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_column_ActionProxy.PROPERTIES()),
      events.concat(Ext_grid_column_ActionProxy.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
