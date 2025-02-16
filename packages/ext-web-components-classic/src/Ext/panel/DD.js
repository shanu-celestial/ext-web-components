import Ext_dd_DragSource from '../../Ext/dd/DragSource.js';

export default class Ext_panel_DD extends Ext_dd_DragSource {
  static PROPERTIES() { return [
    'animRepair',
    'ddGroup',
    'dropAllowed',
    'dropNotAllowed',
    'repairHighlightColor',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_panel_DD.PROPERTIES());
    return Ext_dd_DragSource.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_panel_DD.EVENTS());
    return Ext_dd_DragSource.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_panel_DD.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_panel_DD.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_panel_DD.PROPERTIES()),
      events.concat(Ext_panel_DD.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
