import Ext_data_operation_Operation from '../../../Ext/data/operation/Operation.js';

export default class Ext_data_operation_Update extends Ext_data_operation_Operation {
  static PROPERTIES() { return [
    'batch',
    'callback',
    'id',
    'internalCallback',
    'internalScope',
    'params',
    'proxy',
    'recordCreator',
    'records',
    'request',
    'response',
    'resultSet',
    'scope',
    'synchronous',
    'url',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_operation_Update.PROPERTIES());
    return Ext_data_operation_Operation.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_operation_Update.EVENTS());
    return Ext_data_operation_Operation.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_operation_Update.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_operation_Update.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_operation_Update.PROPERTIES()),
      events.concat(Ext_data_operation_Update.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
