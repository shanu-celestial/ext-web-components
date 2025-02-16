import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_app_EventDomain from '../../../Ext/app/EventDomain.js';

var Ext_app_domain_Direct =
/*#__PURE__*/
function (_Ext_app_EventDomain) {
  _inheritsLoose(Ext_app_domain_Direct, _Ext_app_EventDomain);

  Ext_app_domain_Direct.PROPERTIES = function PROPERTIES() {
    return ['idProperty'];
  };

  Ext_app_domain_Direct.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_app_domain_Direct.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_app_domain_Direct.PROPERTIES());
    return Ext_app_EventDomain.getProperties(properties);
  };

  Ext_app_domain_Direct.getEvents = function getEvents(events) {
    events = events.concat(Ext_app_domain_Direct.EVENTS());
    return Ext_app_EventDomain.getEvents(events);
  };

  _createClass(Ext_app_domain_Direct, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_app_EventDomain.observedAttributes;
      Ext_app_domain_Direct.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_app_domain_Direct.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_app_domain_Direct(properties, events) {
    return _Ext_app_EventDomain.call(this, properties.concat(Ext_app_domain_Direct.PROPERTIES()), events.concat(Ext_app_domain_Direct.EVENTS())) || this;
  }

  var _proto = Ext_app_domain_Direct.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_app_EventDomain.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_app_EventDomain.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_app_domain_Direct;
}(Ext_app_EventDomain);

export { Ext_app_domain_Direct as default };