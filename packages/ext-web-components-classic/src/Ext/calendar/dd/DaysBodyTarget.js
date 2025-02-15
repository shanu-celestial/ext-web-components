import Ext_drag_Target from '../../../Ext/drag/Target.js';

export default class Ext_calendar_dd_DaysBodyTarget extends Ext_drag_Target {
  static PROPERTIES() { return [
    'accepts',
    'autoDestroy',
    'component',
    'element',
    'groups',
    'invalidCls',
    'listeners',
    'validCls',
  ]};
  static EVENTS() { return [
    {name:'beforedrop', parameters:'sender,info'},
    {name:'dragenter', parameters:'sender,info'},
    {name:'dragleave', parameters:'sender,info'},
    {name:'dragmove', parameters:'sender,info'},
    {name:'drop', parameters:'sender,info'},
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_calendar_dd_DaysBodyTarget.PROPERTIES());
    return Ext_drag_Target.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_calendar_dd_DaysBodyTarget.EVENTS());
    return Ext_drag_Target.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_calendar_dd_DaysBodyTarget.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_calendar_dd_DaysBodyTarget.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_calendar_dd_DaysBodyTarget.PROPERTIES()),
      events.concat(Ext_calendar_dd_DaysBodyTarget.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
