import Ext_layout_container_Container from '../../Ext/layout/container/Container.js';

export default class Ext_layout_Fit extends Ext_layout_container_Container {
  static PROPERTIES() { return [
    'animatePolicy',
    'childEls',
    'itemCls',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_layout_Fit.PROPERTIES());
    return Ext_layout_container_Container.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_layout_Fit.EVENTS());
    return Ext_layout_container_Container.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_layout_Fit.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_layout_Fit.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_layout_Fit.PROPERTIES()),
      events.concat(Ext_layout_Fit.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
