import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_Schedulable from '../../../Ext/util/Schedulable.js';

var Ext_app_bind_BaseBinding =
/*#__PURE__*/
function (_Ext_util_Schedulable) {
  _inheritsLoose(Ext_app_bind_BaseBinding, _Ext_util_Schedulable);

  Ext_app_bind_BaseBinding.PROPERTIES = function PROPERTIES() {
    return ['single'];
  };

  Ext_app_bind_BaseBinding.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_app_bind_BaseBinding.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_app_bind_BaseBinding.PROPERTIES());
    return Ext_util_Schedulable.getProperties(properties);
  };

  Ext_app_bind_BaseBinding.getEvents = function getEvents(events) {
    events = events.concat(Ext_app_bind_BaseBinding.EVENTS());
    return Ext_util_Schedulable.getEvents(events);
  };

  _createClass(Ext_app_bind_BaseBinding, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_Schedulable.observedAttributes;
      Ext_app_bind_BaseBinding.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_app_bind_BaseBinding.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_app_bind_BaseBinding(properties, events) {
    return _Ext_util_Schedulable.call(this, properties.concat(Ext_app_bind_BaseBinding.PROPERTIES()), events.concat(Ext_app_bind_BaseBinding.EVENTS())) || this;
  }

  var _proto = Ext_app_bind_BaseBinding.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_Schedulable.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_Schedulable.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_app_bind_BaseBinding;
}(Ext_util_Schedulable);

export { Ext_app_bind_BaseBinding as default };