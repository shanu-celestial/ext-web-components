import Ext_grid_plugin_Editing from '../../../Ext/grid/plugin/Editing.js';

export default class Ext_grid_plugin_RowEditing extends Ext_grid_plugin_Editing {
  static PROPERTIES() { return [
    'autoCancel',
    'autoUpdate',
    'clicksToEdit',
    'clicksToMoveEditor',
    'default',
    'errorSummary',
    'formAriaLabel',
    'formAriaLabelRowBase',
    'id',
    'listeners',
    'removeUnmodified',
    'stateEvents',
    'triggerEvent',
  ]};
  static EVENTS() { return [
    {name:'beforeedit', parameters:'editor,context'},
    {name:'canceledit', parameters:'editor,context'},
    {name:'edit', parameters:'editor,context'},
    {name:'validateedit', parameters:'editor,context'},
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_RowEditing.PROPERTIES());
    return Ext_grid_plugin_Editing.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_plugin_RowEditing.EVENTS());
    return Ext_grid_plugin_Editing.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_plugin_RowEditing.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_plugin_RowEditing.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_plugin_RowEditing.PROPERTIES()),
      events.concat(Ext_grid_plugin_RowEditing.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
