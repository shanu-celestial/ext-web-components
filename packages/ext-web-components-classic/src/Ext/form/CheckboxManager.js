import Ext_util_MixedCollection from '../../Ext/util/MixedCollection.js';

export default class Ext_form_CheckboxManager extends Ext_util_MixedCollection {
  static PROPERTIES() { return [
    'allowFunctions',
    'defaultSortDirection',
    'listeners',
    'multiSortLimit',
    'sorters',
    'sortRoot',
  ]};
  static EVENTS() { return [
    {name:'add', parameters:'index,o,key'},
    {name:'beforesort', parameters:'me,sorters'},
    {name:'clear', parameters:''},
    {name:'remove', parameters:'o,key'},
    {name:'replace', parameters:'key,old,new'},
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_form_CheckboxManager.PROPERTIES());
    return Ext_util_MixedCollection.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_form_CheckboxManager.EVENTS());
    return Ext_util_MixedCollection.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_form_CheckboxManager.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_form_CheckboxManager.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_form_CheckboxManager.PROPERTIES()),
      events.concat(Ext_form_CheckboxManager.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
