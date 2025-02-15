import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_fx_animation_Pop from '../../../Ext/fx/animation/Pop.js';

var Ext_fx_animation_PopOut =
/*#__PURE__*/
function (_Ext_fx_animation_Pop) {
  _inheritsLoose(Ext_fx_animation_PopOut, _Ext_fx_animation_Pop);

  Ext_fx_animation_PopOut.PROPERTIES = function PROPERTIES() {
    return ['before', 'easing', 'listeners', 'out'];
  };

  Ext_fx_animation_PopOut.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_fx_animation_PopOut.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_fx_animation_PopOut.PROPERTIES());
    return Ext_fx_animation_Pop.getProperties(properties);
  };

  Ext_fx_animation_PopOut.getEvents = function getEvents(events) {
    events = events.concat(Ext_fx_animation_PopOut.EVENTS());
    return Ext_fx_animation_Pop.getEvents(events);
  };

  _createClass(Ext_fx_animation_PopOut, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_fx_animation_Pop.observedAttributes;
      Ext_fx_animation_PopOut.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_fx_animation_PopOut.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_fx_animation_PopOut(properties, events) {
    return _Ext_fx_animation_Pop.call(this, properties.concat(Ext_fx_animation_PopOut.PROPERTIES()), events.concat(Ext_fx_animation_PopOut.EVENTS())) || this;
  }

  var _proto = Ext_fx_animation_PopOut.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_fx_animation_Pop.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_fx_animation_Pop.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_fx_animation_PopOut;
}(Ext_fx_animation_Pop);

export { Ext_fx_animation_PopOut as default };