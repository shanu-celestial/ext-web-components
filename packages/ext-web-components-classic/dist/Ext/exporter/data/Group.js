import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_data_Base from '../../../Ext/exporter/data/Base.js';

var Ext_exporter_data_Group =
/*#__PURE__*/
function (_Ext_exporter_data_Ba) {
  _inheritsLoose(Ext_exporter_data_Group, _Ext_exporter_data_Ba);

  Ext_exporter_data_Group.PROPERTIES = function PROPERTIES() {
    return ['autoGenerateId', 'autoGenerateKey', 'groups', 'id', 'idPrefix', 'rows', 'summaries', 'summary', 'text'];
  };

  Ext_exporter_data_Group.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_exporter_data_Group.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_data_Group.PROPERTIES());
    return Ext_exporter_data_Base.getProperties(properties);
  };

  Ext_exporter_data_Group.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_data_Group.EVENTS());
    return Ext_exporter_data_Base.getEvents(events);
  };

  _createClass(Ext_exporter_data_Group, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_data_Ba.observedAttributes;
      Ext_exporter_data_Group.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_data_Group.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_data_Group(properties, events) {
    return _Ext_exporter_data_Ba.call(this, properties.concat(Ext_exporter_data_Group.PROPERTIES()), events.concat(Ext_exporter_data_Group.EVENTS())) || this;
  }

  var _proto = Ext_exporter_data_Group.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_data_Ba.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_data_Ba.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_data_Group;
}(Ext_exporter_data_Base);

export { Ext_exporter_data_Group as default };