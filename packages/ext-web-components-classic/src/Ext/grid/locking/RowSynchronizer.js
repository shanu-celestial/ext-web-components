import Ext_Base from '../../../Ext/Base.js';

export default class Ext_grid_locking_RowSynchronizer extends Ext_Base {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_locking_RowSynchronizer.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_locking_RowSynchronizer.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_locking_RowSynchronizer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_locking_RowSynchronizer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_locking_RowSynchronizer.PROPERTIES()),
      events.concat(Ext_grid_locking_RowSynchronizer.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
