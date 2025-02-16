import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_validator_Validator from '../../../Ext/data/validator/Validator.js';

var Ext_data_validator_AbstractDate =
/*#__PURE__*/
function (_Ext_data_validator_V) {
  _inheritsLoose(Ext_data_validator_AbstractDate, _Ext_data_validator_V);

  Ext_data_validator_AbstractDate.PROPERTIES = function PROPERTIES() {
    return ['format', 'message'];
  };

  Ext_data_validator_AbstractDate.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_data_validator_AbstractDate.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_validator_AbstractDate.PROPERTIES());
    return Ext_data_validator_Validator.getProperties(properties);
  };

  Ext_data_validator_AbstractDate.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_validator_AbstractDate.EVENTS());
    return Ext_data_validator_Validator.getEvents(events);
  };

  _createClass(Ext_data_validator_AbstractDate, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_validator_V.observedAttributes;
      Ext_data_validator_AbstractDate.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_validator_AbstractDate.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_validator_AbstractDate(properties, events) {
    return _Ext_data_validator_V.call(this, properties.concat(Ext_data_validator_AbstractDate.PROPERTIES()), events.concat(Ext_data_validator_AbstractDate.EVENTS())) || this;
  }

  var _proto = Ext_data_validator_AbstractDate.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_validator_V.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_validator_V.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_validator_AbstractDate;
}(Ext_data_validator_Validator);

export { Ext_data_validator_AbstractDate as default };