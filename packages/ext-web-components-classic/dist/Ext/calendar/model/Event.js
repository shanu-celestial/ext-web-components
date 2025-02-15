import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_Model from '../../../Ext/data/Model.js';

var Ext_calendar_model_Event =
/*#__PURE__*/
function (_Ext_data_Model) {
  _inheritsLoose(Ext_calendar_model_Event, _Ext_data_Model);

  Ext_calendar_model_Event.PROPERTIES = function PROPERTIES() {
    return ['belongsTo', 'clientIdProperty', 'convertOnSet', 'fields', 'hasMany', 'hasOne', 'identifier', 'idProperty', 'manyToMany', 'proxy', 'schema', 'summary', 'validationSeparator', 'validators', 'versionProperty'];
  };

  Ext_calendar_model_Event.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_calendar_model_Event.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_model_Event.PROPERTIES());
    return Ext_data_Model.getProperties(properties);
  };

  Ext_calendar_model_Event.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_model_Event.EVENTS());
    return Ext_data_Model.getEvents(events);
  };

  _createClass(Ext_calendar_model_Event, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_Model.observedAttributes;
      Ext_calendar_model_Event.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_model_Event.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_model_Event(properties, events) {
    return _Ext_data_Model.call(this, properties.concat(Ext_calendar_model_Event.PROPERTIES()), events.concat(Ext_calendar_model_Event.EVENTS())) || this;
  }

  var _proto = Ext_calendar_model_Event.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_Model.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_Model.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_model_Event;
}(Ext_data_Model);

export { Ext_calendar_model_Event as default };