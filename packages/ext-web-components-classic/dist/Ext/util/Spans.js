import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_util_Spans =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_util_Spans, _Ext_Base);

  Ext_util_Spans.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_util_Spans.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_util_Spans.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_Spans.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_util_Spans.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_Spans.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_util_Spans, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_util_Spans.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_Spans.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_Spans(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_util_Spans.PROPERTIES()), events.concat(Ext_util_Spans.EVENTS())) || this;
  }

  var _proto = Ext_util_Spans.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_Spans;
}(Ext_Base);

export { Ext_util_Spans as default };