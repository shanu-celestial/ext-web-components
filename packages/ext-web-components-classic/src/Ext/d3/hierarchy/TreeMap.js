import Ext_d3_hierarchy_Hierarchy from '../../../Ext/d3/hierarchy/Hierarchy.js';

export default class Ext_d3_hierarchy_TreeMap extends Ext_d3_hierarchy_Hierarchy {
  static PROPERTIES() { return [
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'border',
    'busyLayoutText',
    'clipScene',
    'cls',
    'colorAxis',
    'componentCls',
    'controller',
    'defaultListenerScope',
    'disabled',
    'expandEventName',
    'focusCls',
    'height',
    'hidden',
    'hideMode',
    'hierarchyCls',
    'instanceCls',
    'interactions',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'leafTile',
    'linkKey',
    'listeners',
    'margin',
    'name',
    'nameable',
    'nodeChildren',
    'nodeClass',
    'nodeKey',
    'nodeText',
    'nodeTransform',
    'nodeValue',
    'noParentValue',
    'noSizeLayout',
    'padding',
    'parentTile',
    'plugins',
    'publishes',
    'reference',
    'renderLinks',
    'renderTo',
    'ripple',
    'rootVisible',
    'scaleLabels',
    'selectEventName',
    'selection',
    'session',
    'shareableName',
    'size',
    'sorter',
    'store',
    'style',
    'tiling',
    'tooltip',
    'touchAction',
    'transitions',
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
    {name:'layout', parameters:'component'},
    {name:'sceneresize', parameters:'component,scene,size'},
    {name:'scenesetup', parameters:'component,scene'},
    {name:'widthchange', parameters:'sender,value,oldValue'},
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_d3_hierarchy_TreeMap.PROPERTIES());
    return Ext_d3_hierarchy_Hierarchy.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_d3_hierarchy_TreeMap.EVENTS());
    return Ext_d3_hierarchy_Hierarchy.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_d3_hierarchy_TreeMap.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_d3_hierarchy_TreeMap.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_d3_hierarchy_TreeMap.PROPERTIES()),
      events.concat(Ext_d3_hierarchy_TreeMap.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
