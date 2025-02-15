import Ext_data_validator_List from '../../../Ext/data/validator/List.js';

export default class Ext_data_validator_Inclusion extends Ext_data_validator_List {
  static PROPERTIES() { return [
    'list',
    'message',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_validator_Inclusion.PROPERTIES());
    return Ext_data_validator_List.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_validator_Inclusion.EVENTS());
    return Ext_data_validator_List.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_validator_Inclusion.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_validator_Inclusion.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_validator_Inclusion.PROPERTIES()),
      events.concat(Ext_data_validator_Inclusion.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
