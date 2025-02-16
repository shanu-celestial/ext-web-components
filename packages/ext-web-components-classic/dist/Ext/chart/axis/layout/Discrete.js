import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_axis_layout_Layout from '../../../../Ext/chart/axis/layout/Layout.js';

var Ext_chart_axis_layout_Discrete =
/*#__PURE__*/
function (_Ext_chart_axis_layou) {
  _inheritsLoose(Ext_chart_axis_layout_Discrete, _Ext_chart_axis_layou);

  Ext_chart_axis_layout_Discrete.PROPERTIES = function PROPERTIES() {
    return ['axis', 'listeners'];
  };

  Ext_chart_axis_layout_Discrete.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_chart_axis_layout_Discrete.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_axis_layout_Discrete.PROPERTIES());
    return Ext_chart_axis_layout_Layout.getProperties(properties);
  };

  Ext_chart_axis_layout_Discrete.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_axis_layout_Discrete.EVENTS());
    return Ext_chart_axis_layout_Layout.getEvents(events);
  };

  _createClass(Ext_chart_axis_layout_Discrete, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_axis_layou.observedAttributes;
      Ext_chart_axis_layout_Discrete.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_axis_layout_Discrete.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_axis_layout_Discrete(properties, events) {
    return _Ext_chart_axis_layou.call(this, properties.concat(Ext_chart_axis_layout_Discrete.PROPERTIES()), events.concat(Ext_chart_axis_layout_Discrete.EVENTS())) || this;
  }

  var _proto = Ext_chart_axis_layout_Discrete.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_axis_layou.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_axis_layou.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_axis_layout_Discrete;
}(Ext_chart_axis_layout_Layout);

export { Ext_chart_axis_layout_Discrete as default };