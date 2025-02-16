import Ext_grid_plugin_RowExpander from '../../Ext/grid/plugin/RowExpander.js';

export default class Ext_ux_RowExpander extends Ext_grid_plugin_RowExpander {
  static PROPERTIES() { return [
    'bodyBefore',
    'columnWidth',
    'expandOnDblClick',
    'expandOnEnter',
    'headerWidth',
    'id',
    'lockedTpl',
    'rowBodyTpl',
    'scrollIntoViewOnExpand',
    'selectRowOnExpand',
    'stateEvents',
  ]};
  static EVENTS() { return [
    {name:'collapsebody', parameters:'rowNode,record,expandRow'},
    {name:'expandbody', parameters:'rowNode,record,expandRow'},
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_ux_RowExpander.PROPERTIES());
    return Ext_grid_plugin_RowExpander.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ux_RowExpander.EVENTS());
    return Ext_grid_plugin_RowExpander.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ux_RowExpander.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ux_RowExpander.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ux_RowExpander.PROPERTIES()),
      events.concat(Ext_ux_RowExpander.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
