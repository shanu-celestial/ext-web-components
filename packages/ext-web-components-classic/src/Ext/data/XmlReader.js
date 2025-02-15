import Ext_data_reader_Reader from '../../Ext/data/reader/Reader.js';

export default class Ext_data_XmlReader extends Ext_data_reader_Reader {
  static PROPERTIES() { return [
    'groupRootProperty',
    'implicitIncludes',
    'keepRawData',
    'listeners',
    'messageProperty',
    'model',
    'namespace',
    'proxy',
    'readRecordsOnFailure',
    'record',
    'rootProperty',
    'successProperty',
    'summaryRootProperty',
    'totalProperty',
    'transform',
    'typeProperty',
  ]};
  static EVENTS() { return [
    {name:'exception', parameters:'reader,response,error'},
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_XmlReader.PROPERTIES());
    return Ext_data_reader_Reader.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_XmlReader.EVENTS());
    return Ext_data_reader_Reader.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_XmlReader.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_XmlReader.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_XmlReader.PROPERTIES()),
      events.concat(Ext_data_XmlReader.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
