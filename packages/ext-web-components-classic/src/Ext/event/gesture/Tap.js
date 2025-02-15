import Ext_event_gesture_SingleTouch from '../../../Ext/event/gesture/SingleTouch.js';

export default class Ext_event_gesture_Tap extends Ext_event_gesture_SingleTouch {
  static PROPERTIES() { return [
    'moveDistance',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_event_gesture_Tap.PROPERTIES());
    return Ext_event_gesture_SingleTouch.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_event_gesture_Tap.EVENTS());
    return Ext_event_gesture_SingleTouch.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_event_gesture_Tap.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_event_gesture_Tap.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_event_gesture_Tap.PROPERTIES()),
      events.concat(Ext_event_gesture_Tap.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
