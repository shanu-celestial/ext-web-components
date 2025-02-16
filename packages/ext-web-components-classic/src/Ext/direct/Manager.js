import Ext_Base from '../../Ext/Base.js';

export default class Ext_direct_Manager extends Ext_Base {
  static PROPERTIES() { return [
    'listeners',
    'varName',
  ]};
  static EVENTS() { return [
    {name:'event', parameters:'event,provider'},
    {name:'exception', parameters:'event,provider'},
    {name:'providerload', parameters:'url,provider'},
    {name:'providerloaderror', parameters:'url,error'},
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_direct_Manager.PROPERTIES());
    return Ext_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_direct_Manager.EVENTS());
    return Ext_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_direct_Manager.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_direct_Manager.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_direct_Manager.PROPERTIES()),
      events.concat(Ext_direct_Manager.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
