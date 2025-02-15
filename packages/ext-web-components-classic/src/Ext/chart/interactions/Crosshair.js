import Ext_chart_interactions_Abstract from '../../../Ext/chart/interactions/Abstract.js';

export default class Ext_chart_interactions_Crosshair extends Ext_chart_interactions_Abstract {
  static PROPERTIES() { return [
    'axes',
    'chart',
    'enabled',
    'gesture',
    'lines',
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_interactions_Crosshair.PROPERTIES());
    return Ext_chart_interactions_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_interactions_Crosshair.EVENTS());
    return Ext_chart_interactions_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_interactions_Crosshair.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_interactions_Crosshair.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_interactions_Crosshair.PROPERTIES()),
      events.concat(Ext_chart_interactions_Crosshair.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
