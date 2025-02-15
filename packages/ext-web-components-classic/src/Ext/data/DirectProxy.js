import Ext_data_proxy_Server from '../../Ext/data/proxy/Server.js';

export default class Ext_data_DirectProxy extends Ext_data_proxy_Server {
  static PROPERTIES() { return [
    'api',
    'batchActions',
    'batchOrder',
    'cacheString',
    'directFn',
    'directionParam',
    'extraParams',
    'filterParam',
    'groupDirectionParam',
    'groupParam',
    'idParam',
    'limitParam',
    'listeners',
    'metadata',
    'model',
    'noCache',
    'pageParam',
    'paramOrder',
    'paramsAsHash',
    'reader',
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
    properties = properties.concat(Ext_data_DirectProxy.PROPERTIES());
    return Ext_data_proxy_Server.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_DirectProxy.EVENTS());
    return Ext_data_proxy_Server.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_DirectProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_DirectProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_DirectProxy.PROPERTIES()),
      events.concat(Ext_data_DirectProxy.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
