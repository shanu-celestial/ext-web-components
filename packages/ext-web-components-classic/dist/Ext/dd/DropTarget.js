import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dd_DDTarget from '../../Ext/dd/DDTarget.js';

var Ext_dd_DropTarget =
/*#__PURE__*/
function (_Ext_dd_DDTarget) {
  _inheritsLoose(Ext_dd_DropTarget, _Ext_dd_DDTarget);

  Ext_dd_DropTarget.PROPERTIES = function PROPERTIES() {
    return ['containerScroll', 'ddGroup', 'dropAllowed', 'dropNotAllowed', 'overClass'];
  };

  Ext_dd_DropTarget.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_dd_DropTarget.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_dd_DropTarget.PROPERTIES());
    return Ext_dd_DDTarget.getProperties(properties);
  };

  Ext_dd_DropTarget.getEvents = function getEvents(events) {
    events = events.concat(Ext_dd_DropTarget.EVENTS());
    return Ext_dd_DDTarget.getEvents(events);
  };

  _createClass(Ext_dd_DropTarget, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dd_DDTarget.observedAttributes;
      Ext_dd_DropTarget.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_dd_DropTarget.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_dd_DropTarget(properties, events) {
    return _Ext_dd_DDTarget.call(this, properties.concat(Ext_dd_DropTarget.PROPERTIES()), events.concat(Ext_dd_DropTarget.EVENTS())) || this;
  }

  var _proto = Ext_dd_DropTarget.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dd_DDTarget.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dd_DDTarget.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_dd_DropTarget;
}(Ext_dd_DDTarget);

export { Ext_dd_DropTarget as default };