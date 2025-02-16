import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_list_AbstractTreeItem from '../../Ext/list/AbstractTreeItem.js';

var Ext_list_RootTreeItem =
/*#__PURE__*/
function (_Ext_list_AbstractTre) {
  _inheritsLoose(Ext_list_RootTreeItem, _Ext_list_AbstractTre);

  Ext_list_RootTreeItem.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'controller', 'defaultListenerScope', 'disabled', 'expandable', 'expanded', 'focusCls', 'height', 'hidden', 'hideMode', 'iconCls', 'iconClsProperty', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'leaf', 'listeners', 'loading', 'margin', 'name', 'nameable', 'node', 'over', 'owner', 'parentItem', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'selected', 'selectedParent', 'session', 'shareableName', 'style', 'text', 'textProperty', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'viewModel', 'width'];
  };

  Ext_list_RootTreeItem.EVENTS = function EVENTS() {
    return [{
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeheightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehiddenchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'sender,event'
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'focus',
      parameters: 'sender,event'
    }, {
      name: 'focusenter',
      parameters: 'sender,event'
    }, {
      name: 'focusleave',
      parameters: 'sender,event'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_list_RootTreeItem.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_list_RootTreeItem.PROPERTIES());
    return Ext_list_AbstractTreeItem.getProperties(properties);
  };

  Ext_list_RootTreeItem.getEvents = function getEvents(events) {
    events = events.concat(Ext_list_RootTreeItem.EVENTS());
    return Ext_list_AbstractTreeItem.getEvents(events);
  };

  _createClass(Ext_list_RootTreeItem, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_list_AbstractTre.observedAttributes;
      Ext_list_RootTreeItem.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_list_RootTreeItem.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_list_RootTreeItem(properties, events) {
    return _Ext_list_AbstractTre.call(this, properties.concat(Ext_list_RootTreeItem.PROPERTIES()), events.concat(Ext_list_RootTreeItem.EVENTS())) || this;
  }

  var _proto = Ext_list_RootTreeItem.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_list_AbstractTre.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_list_AbstractTre.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_list_RootTreeItem;
}(Ext_list_AbstractTreeItem);

export { Ext_list_RootTreeItem as default };