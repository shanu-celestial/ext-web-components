import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_tip_QuickTipManager =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_tip_QuickTipManager, _Ext_Base);

  Ext_tip_QuickTipManager.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_tip_QuickTipManager.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_tip_QuickTipManager.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_tip_QuickTipManager.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_tip_QuickTipManager.getEvents = function getEvents(events) {
    events = events.concat(Ext_tip_QuickTipManager.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_tip_QuickTipManager, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_tip_QuickTipManager.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_tip_QuickTipManager.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_tip_QuickTipManager(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_tip_QuickTipManager.PROPERTIES()), events.concat(Ext_tip_QuickTipManager.EVENTS())) || this;
  }

  var _proto = Ext_tip_QuickTipManager.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_tip_QuickTipManager;
}(Ext_Base);

export { Ext_tip_QuickTipManager as default };