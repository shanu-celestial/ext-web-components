import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_data_schema_Schema =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_data_schema_Schema, _Ext_Base);

  Ext_data_schema_Schema.PROPERTIES = function PROPERTIES() {
    return ['defaultIdentifier', 'keyCheckDelay', 'namer', 'namespace', 'proxy', 'urlPrefix'];
  };

  Ext_data_schema_Schema.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_data_schema_Schema.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_schema_Schema.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_data_schema_Schema.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_schema_Schema.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_data_schema_Schema, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_data_schema_Schema.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_schema_Schema.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_schema_Schema(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_data_schema_Schema.PROPERTIES()), events.concat(Ext_data_schema_Schema.EVENTS())) || this;
  }

  var _proto = Ext_data_schema_Schema.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_schema_Schema;
}(Ext_Base);

export { Ext_data_schema_Schema as default };