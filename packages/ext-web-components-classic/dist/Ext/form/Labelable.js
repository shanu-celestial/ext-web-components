import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Mixin from '../../Ext/Mixin.js';

var Ext_form_Labelable =
/*#__PURE__*/
function (_Ext_Mixin) {
  _inheritsLoose(Ext_form_Labelable, _Ext_Mixin);

  Ext_form_Labelable.PROPERTIES = function PROPERTIES() {
    return ['activeError', 'activeErrorsTpl', 'afterBodyEl', 'afterLabelTextTpl', 'afterLabelTpl', 'afterSubTpl', 'ariaErrorText', 'ariaHelp', 'autoFitErrors', 'baseBodyCls', 'beforeBodyEl', 'beforeLabelTextTpl', 'beforeLabelTpl', 'beforeSubTpl', 'errorMsgCls', 'fieldBodyCls', 'fieldLabel', 'formItemCls', 'hideEmptyLabel', 'hideLabel', 'invalidCls', 'labelableRenderTpl', 'labelAlign', 'labelAttrTpl', 'labelCls', 'labelClsExtra', 'labelPad', 'labelSeparator', 'labelStyle', 'labelWidth', 'msgTarget', 'preventMark'];
  };

  Ext_form_Labelable.EVENTS = function EVENTS() {
    return [{
      name: 'errorchange',
      parameters: 'sender,error'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_form_Labelable.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_form_Labelable.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  };

  Ext_form_Labelable.getEvents = function getEvents(events) {
    events = events.concat(Ext_form_Labelable.EVENTS());
    return Ext_Mixin.getEvents(events);
  };

  _createClass(Ext_form_Labelable, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Mixin.observedAttributes;
      Ext_form_Labelable.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_form_Labelable.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_Labelable(properties, events) {
    return _Ext_Mixin.call(this, properties.concat(Ext_form_Labelable.PROPERTIES()), events.concat(Ext_form_Labelable.EVENTS())) || this;
  }

  var _proto = Ext_form_Labelable.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Mixin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Mixin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_Labelable;
}(Ext_Mixin);

export { Ext_form_Labelable as default };