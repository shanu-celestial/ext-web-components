import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_layout_container_Fit from '../../../Ext/layout/container/Fit.js';

var Ext_layout_container_Center =
/*#__PURE__*/
function (_Ext_layout_container) {
  _inheritsLoose(Ext_layout_container_Center, _Ext_layout_container);

  Ext_layout_container_Center.PROPERTIES = function PROPERTIES() {
    return ['animatePolicy', 'childEls', 'itemCls'];
  };

  Ext_layout_container_Center.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_layout_container_Center.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_layout_container_Center.PROPERTIES());
    return Ext_layout_container_Fit.getProperties(properties);
  };

  Ext_layout_container_Center.getEvents = function getEvents(events) {
    events = events.concat(Ext_layout_container_Center.EVENTS());
    return Ext_layout_container_Fit.getEvents(events);
  };

  _createClass(Ext_layout_container_Center, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_layout_container.observedAttributes;
      Ext_layout_container_Center.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_layout_container_Center.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_layout_container_Center(properties, events) {
    return _Ext_layout_container.call(this, properties.concat(Ext_layout_container_Center.PROPERTIES()), events.concat(Ext_layout_container_Center.EVENTS())) || this;
  }

  var _proto = Ext_layout_container_Center.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_layout_container.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_layout_container.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_layout_container_Center;
}(Ext_layout_container_Fit);

export { Ext_layout_container_Center as default };