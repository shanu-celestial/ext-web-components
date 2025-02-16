import Ext_exporter_file_ooxml_theme_Base from '../../../../../Ext/exporter/file/ooxml/theme/Base.js';

export default class Ext_exporter_file_ooxml_theme_Office extends Ext_exporter_file_ooxml_theme_Base {
  static PROPERTIES() { return [
    'autoGenerateId',
    'autoGenerateKey',
    'contentType',
    'fileName',
    'fileNameTemplate',
    'folder',
    'id',
    'idPrefix',
    'index',
    'name',
    'nameTemplate',
    'path',
    'relationship',
    'tplAttributes',
    'tplNonAttributes',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_theme_Office.PROPERTIES());
    return Ext_exporter_file_ooxml_theme_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_theme_Office.EVENTS());
    return Ext_exporter_file_ooxml_theme_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_exporter_file_ooxml_theme_Office.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_exporter_file_ooxml_theme_Office.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_exporter_file_ooxml_theme_Office.PROPERTIES()),
      events.concat(Ext_exporter_file_ooxml_theme_Office.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
