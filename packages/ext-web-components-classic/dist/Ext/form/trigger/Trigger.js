import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_form_trigger_Trigger =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_form_trigger_Trigger, _Ext_Base);

  Ext_form_trigger_Trigger.PROPERTIES = function PROPERTIES() {
    return ['cls', 'extraCls', 'focusOnMouseDown', 'handler', 'hidden', 'hideOnReadOnly', 'preventMouseDown', 'repeatClick', 'scope', 'tooltip', 'weight', 'width'];
  };

  Ext_form_trigger_Trigger.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_form_trigger_Trigger.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_form_trigger_Trigger.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_form_trigger_Trigger.getEvents = function getEvents(events) {
    events = events.concat(Ext_form_trigger_Trigger.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_form_trigger_Trigger, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_form_trigger_Trigger.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_form_trigger_Trigger.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_form_trigger_Trigger(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_form_trigger_Trigger.PROPERTIES()), events.concat(Ext_form_trigger_Trigger.EVENTS())) || this;
  }

  var _proto = Ext_form_trigger_Trigger.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_form_trigger_Trigger;
}(Ext_Base);

export { Ext_form_trigger_Trigger as default };