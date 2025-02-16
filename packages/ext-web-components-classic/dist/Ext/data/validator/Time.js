import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_validator_AbstractDate from '../../../Ext/data/validator/AbstractDate.js';

var Ext_data_validator_Time =
/*#__PURE__*/
function (_Ext_data_validator_A) {
  _inheritsLoose(Ext_data_validator_Time, _Ext_data_validator_A);

  Ext_data_validator_Time.PROPERTIES = function PROPERTIES() {
    return ['format', 'message'];
  };

  Ext_data_validator_Time.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_data_validator_Time.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_validator_Time.PROPERTIES());
    return Ext_data_validator_AbstractDate.getProperties(properties);
  };

  Ext_data_validator_Time.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_validator_Time.EVENTS());
    return Ext_data_validator_AbstractDate.getEvents(events);
  };

  _createClass(Ext_data_validator_Time, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_validator_A.observedAttributes;
      Ext_data_validator_Time.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_validator_Time.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_validator_Time(properties, events) {
    return _Ext_data_validator_A.call(this, properties.concat(Ext_data_validator_Time.PROPERTIES()), events.concat(Ext_data_validator_Time.EVENTS())) || this;
  }

  var _proto = Ext_data_validator_Time.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_validator_A.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_validator_A.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_validator_Time;
}(Ext_data_validator_AbstractDate);

export { Ext_data_validator_Time as default };