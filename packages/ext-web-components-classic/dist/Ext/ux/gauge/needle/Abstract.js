import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../../Ext/Base.js';

var Ext_ux_gauge_needle_Abstract =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_ux_gauge_needle_Abstract, _Ext_Base);

  Ext_ux_gauge_needle_Abstract.PROPERTIES = function PROPERTIES() {
    return ['gauge', 'innerRadius', 'outerRadius', 'path', 'radius', 'style'];
  };

  Ext_ux_gauge_needle_Abstract.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_ux_gauge_needle_Abstract.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_gauge_needle_Abstract.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_ux_gauge_needle_Abstract.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_gauge_needle_Abstract.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_ux_gauge_needle_Abstract, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_ux_gauge_needle_Abstract.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_gauge_needle_Abstract.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_gauge_needle_Abstract(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_ux_gauge_needle_Abstract.PROPERTIES()), events.concat(Ext_ux_gauge_needle_Abstract.EVENTS())) || this;
  }

  var _proto = Ext_ux_gauge_needle_Abstract.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_gauge_needle_Abstract;
}(Ext_Base);

export { Ext_ux_gauge_needle_Abstract as default };