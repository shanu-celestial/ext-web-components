import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../Ext/Base.js';

var Ext_ComponentQuery =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_ComponentQuery, _Ext_Base);

  Ext_ComponentQuery.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_ComponentQuery.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_ComponentQuery.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_ComponentQuery.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_ComponentQuery.getEvents = function getEvents(events) {
    events = events.concat(Ext_ComponentQuery.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_ComponentQuery, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_ComponentQuery.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_ComponentQuery.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_ComponentQuery(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_ComponentQuery.PROPERTIES()), events.concat(Ext_ComponentQuery.EVENTS())) || this;
  }

  var _proto = Ext_ComponentQuery.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_ComponentQuery;
}(Ext_Base);

export { Ext_ComponentQuery as default };