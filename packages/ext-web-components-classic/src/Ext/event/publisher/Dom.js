import Ext_event_publisher_Publisher from '../../../Ext/event/publisher/Publisher.js';

export default class Ext_event_publisher_Dom extends Ext_event_publisher_Publisher {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_event_publisher_Dom.PROPERTIES());
    return Ext_event_publisher_Publisher.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_event_publisher_Dom.EVENTS());
    return Ext_event_publisher_Publisher.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_event_publisher_Dom.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_event_publisher_Dom.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_event_publisher_Dom.PROPERTIES()),
      events.concat(Ext_event_publisher_Dom.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
