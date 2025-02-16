import Ext_event_gesture_SingleTouch from '../../../Ext/event/gesture/SingleTouch.js';

export default class Ext_event_gesture_LongPress extends Ext_event_gesture_SingleTouch {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_event_gesture_LongPress.PROPERTIES());
    return Ext_event_gesture_SingleTouch.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_event_gesture_LongPress.EVENTS());
    return Ext_event_gesture_SingleTouch.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_event_gesture_LongPress.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_event_gesture_LongPress.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_event_gesture_LongPress.PROPERTIES()),
      events.concat(Ext_event_gesture_LongPress.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
