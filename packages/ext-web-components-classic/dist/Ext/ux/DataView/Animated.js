import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_ux_DataView_Animated =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_ux_DataView_Animated, _Ext_Base);

  Ext_ux_DataView_Animated.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_ux_DataView_Animated.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_ux_DataView_Animated.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ux_DataView_Animated.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_ux_DataView_Animated.getEvents = function getEvents(events) {
    events = events.concat(Ext_ux_DataView_Animated.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_ux_DataView_Animated, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_ux_DataView_Animated.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ux_DataView_Animated.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ux_DataView_Animated(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_ux_DataView_Animated.PROPERTIES()), events.concat(Ext_ux_DataView_Animated.EVENTS())) || this;
  }

  var _proto = Ext_ux_DataView_Animated.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ux_DataView_Animated;
}(Ext_Base);

export { Ext_ux_DataView_Animated as default };