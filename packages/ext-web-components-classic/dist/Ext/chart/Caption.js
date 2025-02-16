import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_chart_Caption =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_chart_Caption, _Ext_Base);

  Ext_chart_Caption.PROPERTIES = function PROPERTIES() {
    return ['align', 'alignTo', 'bind', 'chart', 'controller', 'debug', 'defaultListenerScope', 'docked', 'hidden', 'listeners', 'nameable', 'padding', 'publishes', 'rect', 'reference', 'session', 'shareableName', 'sprite', 'style', 'text', 'twoWayBindable', 'viewModel', 'weight'];
  };

  Ext_chart_Caption.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_chart_Caption.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_Caption.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_chart_Caption.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_Caption.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_chart_Caption, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_chart_Caption.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_Caption.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_Caption(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_chart_Caption.PROPERTIES()), events.concat(Ext_chart_Caption.EVENTS())) || this;
  }

  var _proto = Ext_chart_Caption.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_Caption;
}(Ext_Base);

export { Ext_chart_Caption as default };