import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Mz_aggregate_axis_Abstract =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Mz_aggregate_axis_Abstract, _Ext_Base);

  Mz_aggregate_axis_Abstract.PROPERTIES = function PROPERTIES() {
    return ['dimensions'];
  };

  Mz_aggregate_axis_Abstract.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Mz_aggregate_axis_Abstract.getProperties = function getProperties(properties) {
    properties = properties.concat(Mz_aggregate_axis_Abstract.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Mz_aggregate_axis_Abstract.getEvents = function getEvents(events) {
    events = events.concat(Mz_aggregate_axis_Abstract.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Mz_aggregate_axis_Abstract, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Mz_aggregate_axis_Abstract.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Mz_aggregate_axis_Abstract.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Mz_aggregate_axis_Abstract(properties, events) {
    return _Ext_Base.call(this, properties.concat(Mz_aggregate_axis_Abstract.PROPERTIES()), events.concat(Mz_aggregate_axis_Abstract.EVENTS())) || this;
  }

  var _proto = Mz_aggregate_axis_Abstract.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Mz_aggregate_axis_Abstract;
}(Ext_Base);

export { Mz_aggregate_axis_Abstract as default };