import Ext_layout_Layout from '../../../Ext/layout/Layout.js';

export default class Ext_layout_container_Container extends Ext_layout_Layout {
  static PROPERTIES() { return [
    'animatePolicy',
    'childEls',
    'itemCls',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_layout_container_Container.PROPERTIES());
    return Ext_layout_Layout.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_layout_container_Container.EVENTS());
    return Ext_layout_Layout.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_layout_container_Container.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_layout_container_Container.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_layout_container_Container.PROPERTIES()),
      events.concat(Ext_layout_container_Container.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
