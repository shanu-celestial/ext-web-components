import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_file_ooxml_Base from '../../../../../Ext/exporter/file/ooxml/Base.js';

var Ext_exporter_file_ooxml_excel_FieldItem =
/*#__PURE__*/
function (_Ext_exporter_file_oo) {
  _inheritsLoose(Ext_exporter_file_ooxml_excel_FieldItem, _Ext_exporter_file_oo);

  Ext_exporter_file_ooxml_excel_FieldItem.PROPERTIES = function PROPERTIES() {
    return ['autoGenerateId', 'autoGenerateKey', 'c', 'd', 'e', 'f', 'generateTplAttributes', 'h', 'id', 'idPrefix', 'm', 'n', 's', 'sd', 't', 'tplAttributes', 'tplNonAttributes', 'x'];
  };

  Ext_exporter_file_ooxml_excel_FieldItem.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_exporter_file_ooxml_excel_FieldItem.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_excel_FieldItem.PROPERTIES());
    return Ext_exporter_file_ooxml_Base.getProperties(properties);
  };

  Ext_exporter_file_ooxml_excel_FieldItem.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_excel_FieldItem.EVENTS());
    return Ext_exporter_file_ooxml_Base.getEvents(events);
  };

  _createClass(Ext_exporter_file_ooxml_excel_FieldItem, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_file_oo.observedAttributes;
      Ext_exporter_file_ooxml_excel_FieldItem.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_file_ooxml_excel_FieldItem.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_file_ooxml_excel_FieldItem(properties, events) {
    return _Ext_exporter_file_oo.call(this, properties.concat(Ext_exporter_file_ooxml_excel_FieldItem.PROPERTIES()), events.concat(Ext_exporter_file_ooxml_excel_FieldItem.EVENTS())) || this;
  }

  var _proto = Ext_exporter_file_ooxml_excel_FieldItem.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_file_oo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_file_oo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_file_ooxml_excel_FieldItem;
}(Ext_exporter_file_ooxml_Base);

export { Ext_exporter_file_ooxml_excel_FieldItem as default };