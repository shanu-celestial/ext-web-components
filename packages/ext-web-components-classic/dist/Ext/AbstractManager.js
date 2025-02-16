import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../Ext/Base.js';

var Ext_AbstractManager =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_AbstractManager, _Ext_Base);

  Ext_AbstractManager.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_AbstractManager.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_AbstractManager.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_AbstractManager.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_AbstractManager.getEvents = function getEvents(events) {
    events = events.concat(Ext_AbstractManager.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_AbstractManager, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_AbstractManager.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_AbstractManager.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_AbstractManager(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_AbstractManager.PROPERTIES()), events.concat(Ext_AbstractManager.EVENTS())) || this;
  }

  var _proto = Ext_AbstractManager.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_AbstractManager;
}(Ext_Base);

export { Ext_AbstractManager as default };