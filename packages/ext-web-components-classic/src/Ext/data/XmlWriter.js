import Ext_data_writer_Writer from '../../Ext/data/writer/Writer.js';

export default class Ext_data_XmlWriter extends Ext_data_writer_Writer {
  static PROPERTIES() { return [
    'allDataOptions',
    'clientIdProperty',
    'dateFormat',
    'defaultDocumentRoot',
    'documentRoot',
    'header',
    'nameProperty',
    'partialDataOptions',
    'record',
    'transform',
    'writeAllFields',
    'writeRecordId',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_XmlWriter.PROPERTIES());
    return Ext_data_writer_Writer.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_XmlWriter.EVENTS());
    return Ext_data_writer_Writer.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_XmlWriter.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_XmlWriter.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_XmlWriter.PROPERTIES()),
      events.concat(Ext_data_XmlWriter.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
