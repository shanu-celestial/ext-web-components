import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_exporter_File =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_exporter_File, _Ext_Base);

  Ext_exporter_File.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_exporter_File.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_exporter_File.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_File.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_exporter_File.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_File.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_exporter_File, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_exporter_File.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_File.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_exporter_File(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_exporter_File.PROPERTIES()), events.concat(Ext_exporter_File.EVENTS())) || this;
  }

  var _proto = Ext_exporter_File.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_exporter_File;
}(Ext_Base);

export { Ext_exporter_File as default };