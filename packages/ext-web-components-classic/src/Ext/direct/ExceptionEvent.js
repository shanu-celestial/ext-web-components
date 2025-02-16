import Ext_direct_RemotingEvent from '../../Ext/direct/RemotingEvent.js';

export default class Ext_direct_ExceptionEvent extends Ext_direct_RemotingEvent {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_direct_ExceptionEvent.PROPERTIES());
    return Ext_direct_RemotingEvent.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_direct_ExceptionEvent.EVENTS());
    return Ext_direct_RemotingEvent.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_direct_ExceptionEvent.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_direct_ExceptionEvent.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_direct_ExceptionEvent.PROPERTIES()),
      events.concat(Ext_direct_ExceptionEvent.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
