import Ext_parse_Parser from '../../../Ext/parse/Parser.js';

export default class Ext_data_query_Parser extends Ext_parse_Parser {
  static PROPERTIES() { return [
    'constants',
    'infix',
    'infixRight',
    'prefix',
    'symbols',
    'token',
    'tokenizer',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_query_Parser.PROPERTIES());
    return Ext_parse_Parser.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_query_Parser.EVENTS());
    return Ext_parse_Parser.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_query_Parser.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_query_Parser.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_query_Parser.PROPERTIES()),
      events.concat(Ext_data_query_Parser.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
