import Ext_chart_axis_segmenter_Segmenter from '../../../../Ext/chart/axis/segmenter/Segmenter.js';

export default class Ext_chart_axis_segmenter_Names extends Ext_chart_axis_segmenter_Segmenter {
  static PROPERTIES() { return [
    'axis',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_axis_segmenter_Names.PROPERTIES());
    return Ext_chart_axis_segmenter_Segmenter.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_axis_segmenter_Names.EVENTS());
    return Ext_chart_axis_segmenter_Segmenter.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_axis_segmenter_Names.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_axis_segmenter_Names.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_axis_segmenter_Names.PROPERTIES()),
      events.concat(Ext_chart_axis_segmenter_Names.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
