import Ext_exporter_Base from '../../../Ext/exporter/Base.js';

export default class Ext_exporter_excel_PivotXlsx extends Ext_exporter_Base {
  static PROPERTIES() { return [
    'author',
    'binary',
    'charset',
    'data',
    'fileName',
    'matrix',
    'mimeType',
    'pivotTableStyle',
    'showSummary',
    'title',
    'titleStyle',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_exporter_excel_PivotXlsx.PROPERTIES());
    return Ext_exporter_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_exporter_excel_PivotXlsx.EVENTS());
    return Ext_exporter_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_exporter_excel_PivotXlsx.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_exporter_excel_PivotXlsx.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_exporter_excel_PivotXlsx.PROPERTIES()),
      events.concat(Ext_exporter_excel_PivotXlsx.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
