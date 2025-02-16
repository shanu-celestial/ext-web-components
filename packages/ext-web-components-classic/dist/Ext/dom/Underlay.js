import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_dom_Underlay =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_dom_Underlay, _Ext_Base);

  Ext_dom_Underlay.PROPERTIES = function PROPERTIES() {
    return ['target', 'zIndex'];
  };

  Ext_dom_Underlay.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_dom_Underlay.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_dom_Underlay.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_dom_Underlay.getEvents = function getEvents(events) {
    events = events.concat(Ext_dom_Underlay.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_dom_Underlay, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_dom_Underlay.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_dom_Underlay.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dom_Underlay(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_dom_Underlay.PROPERTIES()), events.concat(Ext_dom_Underlay.EVENTS())) || this;
  }

  var _proto = Ext_dom_Underlay.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dom_Underlay;
}(Ext_Base);

export { Ext_dom_Underlay as default };