import Ext_form_action_Submit from '../../../Ext/form/action/Submit.js';

export default class Ext_form_action_DirectSubmit extends Ext_form_action_Submit {
  static PROPERTIES() { return [
    'clientValidation',
    'failure',
    'form',
    'headers',
    'method',
    'params',
    'reset',
    'scope',
    'submitEmptyText',
    'success',
    'timeout',
    'url',
    'waitMsg',
    'waitTitle',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_form_action_DirectSubmit.PROPERTIES());
    return Ext_form_action_Submit.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_form_action_DirectSubmit.EVENTS());
    return Ext_form_action_Submit.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_form_action_DirectSubmit.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_form_action_DirectSubmit.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_form_action_DirectSubmit.PROPERTIES()),
      events.concat(Ext_form_action_DirectSubmit.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
