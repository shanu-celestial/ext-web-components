import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_chart_interactions_Abstract =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_chart_interactions_Abstract, _Ext_Base);

  Ext_chart_interactions_Abstract.PROPERTIES = function PROPERTIES() {
    return ['chart', 'enabled', 'gesture', 'listeners'];
  };

  Ext_chart_interactions_Abstract.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_chart_interactions_Abstract.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_interactions_Abstract.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_chart_interactions_Abstract.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_interactions_Abstract.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_chart_interactions_Abstract, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_chart_interactions_Abstract.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_interactions_Abstract.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_interactions_Abstract(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_chart_interactions_Abstract.PROPERTIES()), events.concat(Ext_chart_interactions_Abstract.EVENTS())) || this;
  }

  var _proto = Ext_chart_interactions_Abstract.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_interactions_Abstract;
}(Ext_Base);

export { Ext_chart_interactions_Abstract as default };