import Ext_Gadget from '../../Ext/Gadget.js';

export default class Ext_list_Tree extends Ext_Gadget {
  static PROPERTIES() { return [
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'border',
    'cls',
    'controller',
    'defaultListenerScope',
    'defaults',
    'disabled',
    'expanderFirst',
    'expanderOnly',
    'floatLeafItems',
    'focusCls',
    'height',
    'hidden',
    'hideMode',
    'highlightPath',
    'indent',
    'instanceCls',
    'itemRipple',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'listeners',
    'margin',
    'micro',
    'name',
    'nameable',
    'plugins',
    'publishes',
    'reference',
    'renderTo',
    'ripple',
    'selection',
    'selectOnExpander',
    'session',
    'shareableName',
    'singleExpand',
    'store',
    'style',
    'touchAction',
    'twoWayBindable',
    'ui',
    'userCls',
    'viewModel',
    'width',
  ]};
  static EVENTS() { return [
    {name:'beforedisabledchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforeheightchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforehiddenchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforewidthchange', parameters:'sender,value,oldValue,undefined'},
    {name:'blur', parameters:'sender,event'},
    {name:'disabledchange', parameters:'sender,value,oldValue'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'heightchange', parameters:'sender,value,oldValue'},
    {name:'hiddenchange', parameters:'sender,value,oldValue'},
    {name:'itemclick', parameters:'sender,info'},
    {name:'selectionchange', parameters:'treelist,record'},
    {name:'widthchange', parameters:'sender,value,oldValue'},
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_list_Tree.PROPERTIES());
    return Ext_Gadget.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_list_Tree.EVENTS());
    return Ext_Gadget.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_list_Tree.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_list_Tree.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_list_Tree.PROPERTIES()),
      events.concat(Ext_list_Tree.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
