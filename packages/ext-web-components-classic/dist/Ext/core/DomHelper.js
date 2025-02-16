import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_core_DomHelper =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_core_DomHelper, _Ext_Base);

  Ext_core_DomHelper.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_core_DomHelper.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_core_DomHelper.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_core_DomHelper.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_core_DomHelper.getEvents = function getEvents(events) {
    events = events.concat(Ext_core_DomHelper.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_core_DomHelper, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_core_DomHelper.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_core_DomHelper.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_core_DomHelper(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_core_DomHelper.PROPERTIES()), events.concat(Ext_core_DomHelper.EVENTS())) || this;
  }

  var _proto = Ext_core_DomHelper.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_core_DomHelper;
}(Ext_Base);

export { Ext_core_DomHelper as default };