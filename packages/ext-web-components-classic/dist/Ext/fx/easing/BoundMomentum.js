import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_fx_easing_Abstract from '../../../Ext/fx/easing/Abstract.js';

var Ext_fx_easing_BoundMomentum =
/*#__PURE__*/
function (_Ext_fx_easing_Abstra) {
  _inheritsLoose(Ext_fx_easing_BoundMomentum, _Ext_fx_easing_Abstra);

  Ext_fx_easing_BoundMomentum.PROPERTIES = function PROPERTIES() {
    return ['bounce', 'minVelocity', 'momentum', 'startVelocity'];
  };

  Ext_fx_easing_BoundMomentum.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_fx_easing_BoundMomentum.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_fx_easing_BoundMomentum.PROPERTIES());
    return Ext_fx_easing_Abstract.getProperties(properties);
  };

  Ext_fx_easing_BoundMomentum.getEvents = function getEvents(events) {
    events = events.concat(Ext_fx_easing_BoundMomentum.EVENTS());
    return Ext_fx_easing_Abstract.getEvents(events);
  };

  _createClass(Ext_fx_easing_BoundMomentum, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_fx_easing_Abstra.observedAttributes;
      Ext_fx_easing_BoundMomentum.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_fx_easing_BoundMomentum.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_fx_easing_BoundMomentum(properties, events) {
    return _Ext_fx_easing_Abstra.call(this, properties.concat(Ext_fx_easing_BoundMomentum.PROPERTIES()), events.concat(Ext_fx_easing_BoundMomentum.EVENTS())) || this;
  }

  var _proto = Ext_fx_easing_BoundMomentum.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_fx_easing_Abstra.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_fx_easing_Abstra.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_fx_easing_BoundMomentum;
}(Ext_fx_easing_Abstract);

export { Ext_fx_easing_BoundMomentum as default };