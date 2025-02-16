import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../Ext/Base.js';

var Ext_PluginManager =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_PluginManager, _Ext_Base);

  Ext_PluginManager.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_PluginManager.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_PluginManager.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_PluginManager.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_PluginManager.getEvents = function getEvents(events) {
    events = events.concat(Ext_PluginManager.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_PluginManager, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_PluginManager.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_PluginManager.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_PluginManager(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_PluginManager.PROPERTIES()), events.concat(Ext_PluginManager.EVENTS())) || this;
  }

  var _proto = Ext_PluginManager.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_PluginManager;
}(Ext_Base);

export { Ext_PluginManager as default };