import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dd_DropZone from '../../Ext/dd/DropZone.js';

var Ext_view_DropZone =
/*#__PURE__*/
function (_Ext_dd_DropZone) {
  _inheritsLoose(Ext_view_DropZone, _Ext_dd_DropZone);

  Ext_view_DropZone.PROPERTIES = function PROPERTIES() {
    return ['containerScroll', 'ddGroup', 'dropAllowed', 'dropNotAllowed', 'overClass'];
  };

  Ext_view_DropZone.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_view_DropZone.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_view_DropZone.PROPERTIES());
    return Ext_dd_DropZone.getProperties(properties);
  };

  Ext_view_DropZone.getEvents = function getEvents(events) {
    events = events.concat(Ext_view_DropZone.EVENTS());
    return Ext_dd_DropZone.getEvents(events);
  };

  _createClass(Ext_view_DropZone, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dd_DropZone.observedAttributes;
      Ext_view_DropZone.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_view_DropZone.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_view_DropZone(properties, events) {
    return _Ext_dd_DropZone.call(this, properties.concat(Ext_view_DropZone.PROPERTIES()), events.concat(Ext_view_DropZone.EVENTS())) || this;
  }

  var _proto = Ext_view_DropZone.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dd_DropZone.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dd_DropZone.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_view_DropZone;
}(Ext_dd_DropZone);

export { Ext_view_DropZone as default };