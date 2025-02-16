import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_toolbar_TextItem from '../../../Ext/toolbar/TextItem.js';

var Ext_ux_desktop_TrayClock =
/*#__PURE__*/
function (_Ext_toolbar_TextItem) {
  _inheritsLoose(Ext_ux_desktop_TrayClock, _Ext_toolbar_TextItem);

  Ext_ux_desktop_TrayClock.PROPERTIES = function PROPERTIES() {
    return ['activeCounter', 'alignOnScroll', 'alignTarget', 'alwaysOnTop', 'anchor', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoEl', 'autoRender', 'autoShow', 'baseCls', 'bind', 'border', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultListenerScope', 'disabled', 'disabledCls', 'dock', 'draggable', 'fixed', 'flex', 'floating', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'id', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'overCls', 'overflowText', 'padding', 'plugins', 'publishes', 'reference', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'style', 'tabIndex', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'viewModel', 'weight', 'width', 'xtype'];
  };

  Ext_ux_desktop_TrayClock.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'sender'
    }, {
      name: 'added',
      parameters: 'sender,container,pos'
    }, {
      name: 'afterlayoutanimation',
      parameters: 'sender'
    }, {
      name: 'afterrender',
      parameters: 'sender'
    }, {
      name: 'beforeactivate',
      parameters: 'sender'
    }, {
      name: 'beforedeactivate',
      parameters: 'sender'
    }, {
      name: 'beforedestroy',
      parameters: 'sender'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforerender',
      parameters: 'sender'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforestaterestore',
      parameters: 'sender,state'
    }, {
      name: 'beforestatesave',
      parameters: 'sender,state'
    }, {
      name: 'blur',
      parameters: 'sender,event'
    }, {
      name: 'boxready',
      parameters: 'sender,width,height'
    }, {
      name: 'deactivate',
      parameters: 'sender'
    }, {
      name: 'destroy',
      parameters: 'sender'
    }, {
      name: 'disable',
      parameters: 'sender'
    }, {
      name: 'enable',
      parameters: 'sender'
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
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'move',
      parameters: 'sender,x,y'
    }, {
      name: 'removed',
      parameters: 'sender,ownerCt'
    }, {
      name: 'render',
      parameters: 'sender'
    }, {
      name: 'resize',
      parameters: 'sender,width,height,oldWidth,oldHeight'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'staterestore',
      parameters: 'sender,state'
    }, {
      name: 'statesave',
      parameters: 'sender,state'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_ux_desktop_TrayClock.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_desktop_TrayClock.PROPERTIES());
    return Ext_toolbar_TextItem.getProperties(properties);
  };

  Ext_ux_desktop_TrayClock.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_desktop_TrayClock.EVENTS());
    return Ext_toolbar_TextItem.getEvents(events);
  };

  _createClass(Ext_ux_desktop_TrayClock, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_toolbar_TextItem.observedAttributes;
      Ext_ux_desktop_TrayClock.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_desktop_TrayClock.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_desktop_TrayClock(properties, events) {
    return _Ext_toolbar_TextItem.call(this, properties.concat(Ext_ux_desktop_TrayClock.PROPERTIES()), events.concat(Ext_ux_desktop_TrayClock.EVENTS())) || this;
  }

  var _proto = Ext_ux_desktop_TrayClock.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_toolbar_TextItem.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_toolbar_TextItem.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_desktop_TrayClock;
}(Ext_toolbar_TextItem);

export { Ext_ux_desktop_TrayClock as default };