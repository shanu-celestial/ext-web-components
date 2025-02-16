import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_writer_Writer from '../../../Ext/data/writer/Writer.js';

var Ext_data_writer_Json =
/*#__PURE__*/
function (_Ext_data_writer_Writ) {
  _inheritsLoose(Ext_data_writer_Json, _Ext_data_writer_Writ);

  Ext_data_writer_Json.PROPERTIES = function PROPERTIES() {
    return ['allDataOptions', 'allowSingle', 'clientIdProperty', 'dateFormat', 'encode', 'expandData', 'nameProperty', 'partialDataOptions', 'rootProperty', 'transform', 'writeAllFields', 'writeRecordId'];
  };

  Ext_data_writer_Json.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_data_writer_Json.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_writer_Json.PROPERTIES());
    return Ext_data_writer_Writer.getProperties(properties);
  };

  Ext_data_writer_Json.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_writer_Json.EVENTS());
    return Ext_data_writer_Writer.getEvents(events);
  };

  _createClass(Ext_data_writer_Json, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_writer_Writ.observedAttributes;
      Ext_data_writer_Json.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_writer_Json.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_writer_Json(properties, events) {
    return _Ext_data_writer_Writ.call(this, properties.concat(Ext_data_writer_Json.PROPERTIES()), events.concat(Ext_data_writer_Json.EVENTS())) || this;
  }

  var _proto = Ext_data_writer_Json.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_writer_Writ.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_writer_Writ.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_writer_Json;
}(Ext_data_writer_Writer);

export { Ext_data_writer_Json as default };