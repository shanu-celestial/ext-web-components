import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_data_Operation =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_data_Operation, _Ext_Base);

  Ext_data_Operation.PROPERTIES = function PROPERTIES() {
    return ['batch', 'callback', 'id', 'internalCallback', 'internalScope', 'params', 'proxy', 'recordCreator', 'records', 'request', 'response', 'resultSet', 'scope', 'synchronous', 'url'];
  };

  Ext_data_Operation.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_data_Operation.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_Operation.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_data_Operation.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_Operation.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_data_Operation, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_data_Operation.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_Operation.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_Operation(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_data_Operation.PROPERTIES()), events.concat(Ext_data_Operation.EVENTS())) || this;
  }

  var _proto = Ext_data_Operation.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_Operation;
}(Ext_Base);

export { Ext_data_Operation as default };