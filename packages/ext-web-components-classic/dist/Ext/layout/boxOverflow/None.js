import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_layout_boxOverflow_None =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_layout_boxOverflow_None, _Ext_Base);

  Ext_layout_boxOverflow_None.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_layout_boxOverflow_None.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_layout_boxOverflow_None.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_layout_boxOverflow_None.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_layout_boxOverflow_None.getEvents = function getEvents(events) {
    events = events.concat(Ext_layout_boxOverflow_None.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_layout_boxOverflow_None, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_layout_boxOverflow_None.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_layout_boxOverflow_None.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_layout_boxOverflow_None(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_layout_boxOverflow_None.PROPERTIES()), events.concat(Ext_layout_boxOverflow_None.EVENTS())) || this;
  }

  var _proto = Ext_layout_boxOverflow_None.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_layout_boxOverflow_None;
}(Ext_Base);

export { Ext_layout_boxOverflow_None as default };