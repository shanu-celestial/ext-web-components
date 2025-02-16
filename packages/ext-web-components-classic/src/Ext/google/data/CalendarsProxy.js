import Ext_google_data_AbstractProxy from '../../../Ext/google/data/AbstractProxy.js';

export default class Ext_google_data_CalendarsProxy extends Ext_google_data_AbstractProxy {
  static PROPERTIES() { return [
    'api',
    'batchActions',
    'batchOrder',
    'cacheString',
    'directionParam',
    'extraParams',
    'filterParam',
    'groupDirectionParam',
    'groupParam',
    'idParam',
    'limitParam',
    'listeners',
    'model',
    'noCache',
    'pageParam',
    'reader',
    'requiredScripts',
    'simpleGroupMode',
    'simpleSortMode',
    'sortParam',
    'startParam',
    'timeout',
    'url',
    'writer',
  ]};
  static EVENTS() { return [
    {name:'exception', parameters:'sender,response,operation'},
    {name:'metachange', parameters:'sender,meta'},
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_google_data_CalendarsProxy.PROPERTIES());
    return Ext_google_data_AbstractProxy.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_google_data_CalendarsProxy.EVENTS());
    return Ext_google_data_AbstractProxy.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_google_data_CalendarsProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_google_data_CalendarsProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_google_data_CalendarsProxy.PROPERTIES()),
      events.concat(Ext_google_data_CalendarsProxy.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
