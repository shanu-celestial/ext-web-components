import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_promise_Promise =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_promise_Promise, _Ext_Base);

  Ext_promise_Promise.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_promise_Promise.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_promise_Promise.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_promise_Promise.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_promise_Promise.getEvents = function getEvents(events) {
    events = events.concat(Ext_promise_Promise.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_promise_Promise, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_promise_Promise.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_promise_Promise.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_promise_Promise(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_promise_Promise.PROPERTIES()), events.concat(Ext_promise_Promise.EVENTS())) || this;
  }

  var _proto = Ext_promise_Promise.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_promise_Promise;
}(Ext_Base);

export { Ext_promise_Promise as default };