import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_data_Field =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_data_Field, _Ext_Base);

  Ext_data_Field.PROPERTIES = function PROPERTIES() {
    return ['allowBlank', 'allowNull', 'calculate', 'convert', 'critical', 'defaultValue', 'depends', 'mapping', 'name', 'persist', 'reference', 'serialize', 'sortType', 'summary', 'summaryField', 'unique', 'validators'];
  };

  Ext_data_Field.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_data_Field.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_Field.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_data_Field.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_Field.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_data_Field, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_data_Field.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_Field.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_Field(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_data_Field.PROPERTIES()), events.concat(Ext_data_Field.EVENTS())) || this;
  }

  var _proto = Ext_data_Field.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_Field;
}(Ext_Base);

export { Ext_data_Field as default };