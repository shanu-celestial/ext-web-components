import Ext_dd_DragTracker from '../../Ext/dd/DragTracker.js';

export default class Ext_util_ComponentDragger extends Ext_dd_DragTracker {
  static PROPERTIES() { return [
    'autoStart',
    'constrain',
    'constrainDelegate',
    'constrainTo',
    'delegate',
    'el',
    'listeners',
    'overCls',
    'preventDefault',
    'stopEvent',
    'tolerance',
    'trackOver',
  ]};
  static EVENTS() { return [
    {name:'beforedragstart', parameters:'sender,e'},
    {name:'drag', parameters:'sender,e'},
    {name:'dragend', parameters:'sender,e'},
    {name:'dragstart', parameters:'sender,e'},
    {name:'mousedown', parameters:'sender,e'},
    {name:'mousemove', parameters:'sender,e'},
    {name:'mouseout', parameters:'sender,e'},
    {name:'mouseover', parameters:'sender,e,target'},
    {name:'mouseup', parameters:'sender,e'},
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_util_ComponentDragger.PROPERTIES());
    return Ext_dd_DragTracker.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_util_ComponentDragger.EVENTS());
    return Ext_dd_DragTracker.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_util_ComponentDragger.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_util_ComponentDragger.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_util_ComponentDragger.PROPERTIES()),
      events.concat(Ext_util_ComponentDragger.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
