import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_field_Field from '../../../Ext/data/field/Field.js';

var Ext_data_field_Date =
/*#__PURE__*/
function (_Ext_data_field_Field) {
  _inheritsLoose(Ext_data_field_Date, _Ext_data_field_Field);

  Ext_data_field_Date.PROPERTIES = function PROPERTIES() {
    return ['allowBlank', 'allowNull', 'calculate', 'convert', 'critical', 'dateFormat', 'dateReadFormat', 'dateWriteFormat', 'defaultValue', 'depends', 'mapping', 'name', 'persist', 'reference', 'serialize', 'sortType', 'summary', 'summaryField', 'unique', 'useStrict', 'validators'];
  };

  Ext_data_field_Date.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_data_field_Date.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_field_Date.PROPERTIES());
    return Ext_data_field_Field.getProperties(properties);
  };

  Ext_data_field_Date.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_field_Date.EVENTS());
    return Ext_data_field_Field.getEvents(events);
  };

  _createClass(Ext_data_field_Date, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_field_Field.observedAttributes;
      Ext_data_field_Date.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_field_Date.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_field_Date(properties, events) {
    return _Ext_data_field_Field.call(this, properties.concat(Ext_data_field_Date.PROPERTIES()), events.concat(Ext_data_field_Date.EVENTS())) || this;
  }

  var _proto = Ext_data_field_Date.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_field_Field.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_field_Field.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_field_Date;
}(Ext_data_field_Field);

export { Ext_data_field_Date as default };