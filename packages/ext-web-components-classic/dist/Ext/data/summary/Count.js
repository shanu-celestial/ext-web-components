import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_summary_Base from '../../../Ext/data/summary/Base.js';

var Ext_data_summary_Count =
/*#__PURE__*/
function (_Ext_data_summary_Bas) {
  _inheritsLoose(Ext_data_summary_Count, _Ext_data_summary_Bas);

  Ext_data_summary_Count.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_data_summary_Count.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_data_summary_Count.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_summary_Count.PROPERTIES());
    return Ext_data_summary_Base.getProperties(properties);
  };

  Ext_data_summary_Count.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_summary_Count.EVENTS());
    return Ext_data_summary_Base.getEvents(events);
  };

  _createClass(Ext_data_summary_Count, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_summary_Bas.observedAttributes;
      Ext_data_summary_Count.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_summary_Count.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_summary_Count(properties, events) {
    return _Ext_data_summary_Bas.call(this, properties.concat(Ext_data_summary_Count.PROPERTIES()), events.concat(Ext_data_summary_Count.EVENTS())) || this;
  }

  var _proto = Ext_data_summary_Count.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_summary_Bas.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_summary_Bas.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_summary_Count;
}(Ext_data_summary_Base);

export { Ext_data_summary_Count as default };