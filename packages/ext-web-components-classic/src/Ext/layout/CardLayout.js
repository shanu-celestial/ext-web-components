import Ext_layout_container_Fit from '../../Ext/layout/container/Fit.js';

export default class Ext_layout_CardLayout extends Ext_layout_container_Fit {
  static PROPERTIES() { return [
    'animatePolicy',
    'childEls',
    'deferredRender',
    'itemCls',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_layout_CardLayout.PROPERTIES());
    return Ext_layout_container_Fit.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_layout_CardLayout.EVENTS());
    return Ext_layout_container_Fit.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_layout_CardLayout.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_layout_CardLayout.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_layout_CardLayout.PROPERTIES()),
      events.concat(Ext_layout_CardLayout.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
