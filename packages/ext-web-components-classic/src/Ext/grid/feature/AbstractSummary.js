import Ext_grid_feature_Feature from '../../../Ext/grid/feature/Feature.js';

export default class Ext_grid_feature_AbstractSummary extends Ext_grid_feature_Feature {
  static PROPERTIES() { return [
    'listeners',
    'showSummaryRow',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_feature_AbstractSummary.PROPERTIES());
    return Ext_grid_feature_Feature.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_feature_AbstractSummary.EVENTS());
    return Ext_grid_feature_Feature.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_feature_AbstractSummary.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_feature_AbstractSummary.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_feature_AbstractSummary.PROPERTIES()),
      events.concat(Ext_grid_feature_AbstractSummary.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
