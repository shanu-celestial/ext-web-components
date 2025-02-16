import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_toolbar_Toolbar from '../../../Ext/toolbar/Toolbar.js';

var Ext_ux_statusbar_StatusBar =
/*#__PURE__*/
function (_Ext_toolbar_Toolbar) {
  _inheritsLoose(Ext_ux_statusbar_StatusBar, _Ext_toolbar_Toolbar);

  Ext_ux_statusbar_StatusBar.PROPERTIES = function PROPERTIES() {
    return ['actions', 'activeChildTabIndex', 'activeCounter', 'activeItem', 'alignOnScroll', 'alignTarget', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoClear', 'autoDestroy', 'autoEl', 'autoRender', 'autoShow', 'baseCls', 'bind', 'border', 'bubbleEvents', 'busyIconCls', 'busyText', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultButtonUI', 'defaultFieldUI', 'defaultFocus', 'defaultFooterButtonUI', 'defaultFooterFieldUI', 'defaultIconCls', 'defaultListenerScope', 'defaults', 'defaultText', 'defaultType', 'detachOnRemove', 'disabled', 'disabledCls', 'dock', 'draggable', 'emptyText', 'enableOverflow', 'fixed', 'flex', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'iconCls', 'id', 'inactiveChildTabIndex', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'nameHolder', 'overCls', 'overflowHandler', 'padding', 'plugins', 'publishes', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'statusAlign', 'style', 'suspendLayout', 'tabGuard', 'tabIndex', 'text', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'trackMenus', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'vertical', 'viewModel', 'weight', 'width', 'xtype'];
  };

  Ext_ux_statusbar_StatusBar.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'sender'
    }, {
      name: 'add',
      parameters: 'sender,component,index'
    }, {
      name: 'added',
      parameters: 'sender,container,pos'
    }, {
      name: 'afterlayout',
      parameters: 'sender,layout'
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
      name: 'beforeadd',
      parameters: 'sender,component,index'
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
      name: 'beforeremove',
      parameters: 'sender,component'
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
      name: 'childmove',
      parameters: 'sender,component,prevIndex,newIndex'
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
      name: 'overflowchange',
      parameters: 'lastHiddenCount,hiddenCount,hiddenItems'
    }, {
      name: 'remove',
      parameters: 'sender,component'
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

  Ext_ux_statusbar_StatusBar.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_statusbar_StatusBar.PROPERTIES());
    return Ext_toolbar_Toolbar.getProperties(properties);
  };

  Ext_ux_statusbar_StatusBar.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_statusbar_StatusBar.EVENTS());
    return Ext_toolbar_Toolbar.getEvents(events);
  };

  _createClass(Ext_ux_statusbar_StatusBar, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_toolbar_Toolbar.observedAttributes;
      Ext_ux_statusbar_StatusBar.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_statusbar_StatusBar.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_statusbar_StatusBar(properties, events) {
    return _Ext_toolbar_Toolbar.call(this, properties.concat(Ext_ux_statusbar_StatusBar.PROPERTIES()), events.concat(Ext_ux_statusbar_StatusBar.EVENTS())) || this;
  }

  var _proto = Ext_ux_statusbar_StatusBar.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_toolbar_Toolbar.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_toolbar_Toolbar.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_statusbar_StatusBar;
}(Ext_toolbar_Toolbar);

export { Ext_ux_statusbar_StatusBar as default };