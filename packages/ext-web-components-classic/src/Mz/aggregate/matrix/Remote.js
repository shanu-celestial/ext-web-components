import Ext_pivot_matrix_Base from '../../../Ext/pivot/matrix/Base.js';

export default class Mz_aggregate_matrix_Remote extends Ext_pivot_matrix_Base {
  static PROPERTIES() { return [
    'aggregate',
    'calculateAsExcel',
    'cmp',
    'colGrandTotalsPosition',
    'collapsibleColumns',
    'collapsibleRows',
    'colSubTotalsPosition',
    'compactViewColumnWidth',
    'compactViewKey',
    'grandTotalKey',
    'keysSeparator',
    'leftAxis',
    'leftAxisType',
    'listeners',
    'resultType',
    'rowGrandTotalsPosition',
    'rowSubTotalsPosition',
    'showZeroAsBlank',
    'textGrandTotalTpl',
    'textRowLabels',
    'textTotalTpl',
    'timeout',
    'topAxis',
    'topAxisType',
    'type',
    'url',
    'useNaturalSorting',
    'viewLayoutType',
  ]};
  static EVENTS() { return [
    {name:'beforereconfigure', parameters:'matrix,config'},
    {name:'beforerequest', parameters:'matrix,params'},
    {name:'buildtotals', parameters:'matrix,totals'},
    {name:'cleardata', parameters:'matrix'},
    {name:'columnsbuilt', parameters:'matrix,columns'},
    {name:'done', parameters:'matrix'},
    {name:'modelbuilt', parameters:'matrix,model'},
    {name:'progress', parameters:'matrix,index,total'},
    {name:'reconfigure', parameters:'matrix,config'},
    {name:'recordbuilt', parameters:'matrix,record,item'},
    {name:'requestexception', parameters:'matrix,response'},
    {name:'start', parameters:'matrix'},
    {name:'storebuilt', parameters:'matrix,store'},
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Mz_aggregate_matrix_Remote.PROPERTIES());
    return Ext_pivot_matrix_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Mz_aggregate_matrix_Remote.EVENTS());
    return Ext_pivot_matrix_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Mz_aggregate_matrix_Remote.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Mz_aggregate_matrix_Remote.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Mz_aggregate_matrix_Remote.PROPERTIES()),
      events.concat(Mz_aggregate_matrix_Remote.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
