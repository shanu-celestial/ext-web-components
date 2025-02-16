import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../Ext/Base.js';

var Ext_EventObjectImpl =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_EventObjectImpl, _Ext_Base);

  Ext_EventObjectImpl.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_EventObjectImpl.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_EventObjectImpl.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_EventObjectImpl.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_EventObjectImpl.getEvents = function getEvents(events) {
    events = events.concat(Ext_EventObjectImpl.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_EventObjectImpl, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_EventObjectImpl.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_EventObjectImpl.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_EventObjectImpl(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_EventObjectImpl.PROPERTIES()), events.concat(Ext_EventObjectImpl.EVENTS())) || this;
  }

  var _proto = Ext_EventObjectImpl.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_EventObjectImpl;
}(Ext_Base);

export { Ext_EventObjectImpl as default };