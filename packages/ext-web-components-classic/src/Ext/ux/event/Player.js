import Ext_ux_event_Driver from '../../../Ext/ux/event/Driver.js';

export default class Ext_ux_event_Player extends Ext_ux_event_Driver {
  static PROPERTIES() { return [
    'eventQueue',
    'keyFrameEvents',
    'listeners',
    'pauseForAnimations',
    'speed',
  ]};
  static EVENTS() { return [
    {name:'beforeplay', parameters:'sender,eventDescriptor'},
    {name:'keyframe', parameters:'sender,eventDescriptor'},
    {name:'start', parameters:'sender'},
    {name:'stop', parameters:'sender'},
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_ux_event_Player.PROPERTIES());
    return Ext_ux_event_Driver.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ux_event_Player.EVENTS());
    return Ext_ux_event_Driver.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ux_event_Player.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ux_event_Player.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ux_event_Player.PROPERTIES()),
      events.concat(Ext_ux_event_Player.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
