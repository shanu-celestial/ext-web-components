import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../../Ext/Base.js';

var Ext_draw_engine_SvgContext_Gradient =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_draw_engine_SvgContext_Gradient, _Ext_Base);

  Ext_draw_engine_SvgContext_Gradient.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_draw_engine_SvgContext_Gradient.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_draw_engine_SvgContext_Gradient.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_draw_engine_SvgContext_Gradient.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_draw_engine_SvgContext_Gradient.getEvents = function getEvents(events) {
    events = events.concat(Ext_draw_engine_SvgContext_Gradient.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_draw_engine_SvgContext_Gradient, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_draw_engine_SvgContext_Gradient.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_draw_engine_SvgContext_Gradient.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_engine_SvgContext_Gradient(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_draw_engine_SvgContext_Gradient.PROPERTIES()), events.concat(Ext_draw_engine_SvgContext_Gradient.EVENTS())) || this;
  }

  var _proto = Ext_draw_engine_SvgContext_Gradient.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_engine_SvgContext_Gradient;
}(Ext_Base);

export { Ext_draw_engine_SvgContext_Gradient as default };