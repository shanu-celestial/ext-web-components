import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dd_DD from '../../Ext/dd/DD.js';

var Ext_dd_DDProxy =
/*#__PURE__*/
function (_Ext_dd_DD) {
  _inheritsLoose(Ext_dd_DDProxy, _Ext_dd_DD);

  Ext_dd_DDProxy.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_dd_DDProxy.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_dd_DDProxy.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_dd_DDProxy.PROPERTIES());
    return Ext_dd_DD.getProperties(properties);
  };

  Ext_dd_DDProxy.getEvents = function getEvents(events) {
    events = events.concat(Ext_dd_DDProxy.EVENTS());
    return Ext_dd_DD.getEvents(events);
  };

  _createClass(Ext_dd_DDProxy, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dd_DD.observedAttributes;
      Ext_dd_DDProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_dd_DDProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dd_DDProxy(properties, events) {
    return _Ext_dd_DD.call(this, properties.concat(Ext_dd_DDProxy.PROPERTIES()), events.concat(Ext_dd_DDProxy.EVENTS())) || this;
  }

  var _proto = Ext_dd_DDProxy.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dd_DD.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dd_DD.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dd_DDProxy;
}(Ext_dd_DD);

export { Ext_dd_DDProxy as default };