import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_drag_Constraint =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_drag_Constraint, _Ext_Base);

  Ext_drag_Constraint.PROPERTIES = function PROPERTIES() {
    return ['element', 'horizontal', 'region', 'snap', 'source', 'vertical', 'x', 'y'];
  };

  Ext_drag_Constraint.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_drag_Constraint.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_drag_Constraint.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_drag_Constraint.getEvents = function getEvents(events) {
    events = events.concat(Ext_drag_Constraint.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_drag_Constraint, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_drag_Constraint.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_drag_Constraint.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_drag_Constraint(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_drag_Constraint.PROPERTIES()), events.concat(Ext_drag_Constraint.EVENTS())) || this;
  }

  var _proto = Ext_drag_Constraint.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_drag_Constraint;
}(Ext_Base);

export { Ext_drag_Constraint as default };