import Ext_util_translatable_Abstract from '../../../Ext/util/translatable/Abstract.js';

export default class Ext_util_translatable_Dom extends Ext_util_translatable_Abstract {
  static PROPERTIES() { return [
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'animationend', parameters:'sender,x,y'},
    {name:'animationframe', parameters:'sender,x,y'},
    {name:'animationstart', parameters:'sender,x,y'},
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_util_translatable_Dom.PROPERTIES());
    return Ext_util_translatable_Abstract.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_translatable_Dom.EVENTS());
    return Ext_util_translatable_Abstract.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_translatable_Dom.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_translatable_Dom.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_translatable_Dom.PROPERTIES()),
      events.concat(Ext_util_translatable_Dom.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
