import Ext_dd_DragSource from '../../Ext/dd/DragSource.js';

export default class Ext_dd_DragZone extends Ext_dd_DragSource {
  static PROPERTIES() { return [
    'animRepair',
    'containerScroll',
    'ddGroup',
    'dropAllowed',
    'dropNotAllowed',
    'repairHighlightColor',
    'scrollEl',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_dd_DragZone.PROPERTIES());
    return Ext_dd_DragSource.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_dd_DragZone.EVENTS());
    return Ext_dd_DragSource.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_dd_DragZone.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_dd_DragZone.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_dd_DragZone.PROPERTIES()),
      events.concat(Ext_dd_DragZone.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
