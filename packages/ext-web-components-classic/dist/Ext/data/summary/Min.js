import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_summary_Base from '../../../Ext/data/summary/Base.js';

var Ext_data_summary_Min =
/*#__PURE__*/
function (_Ext_data_summary_Bas) {
  _inheritsLoose(Ext_data_summary_Min, _Ext_data_summary_Bas);

  Ext_data_summary_Min.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_data_summary_Min.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_data_summary_Min.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_summary_Min.PROPERTIES());
    return Ext_data_summary_Base.getProperties(properties);
  };

  Ext_data_summary_Min.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_summary_Min.EVENTS());
    return Ext_data_summary_Base.getEvents(events);
  };

  _createClass(Ext_data_summary_Min, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_summary_Bas.observedAttributes;
      Ext_data_summary_Min.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_summary_Min.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_summary_Min(properties, events) {
    return _Ext_data_summary_Bas.call(this, properties.concat(Ext_data_summary_Min.PROPERTIES()), events.concat(Ext_data_summary_Min.EVENTS())) || this;
  }

  var _proto = Ext_data_summary_Min.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_summary_Bas.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_summary_Bas.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_summary_Min;
}(Ext_data_summary_Base);

export { Ext_data_summary_Min as default };