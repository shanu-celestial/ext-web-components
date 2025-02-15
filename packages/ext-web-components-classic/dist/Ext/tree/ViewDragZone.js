import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_view_DragZone from '../../Ext/view/DragZone.js';

var Ext_tree_ViewDragZone =
/*#__PURE__*/
function (_Ext_view_DragZone) {
  _inheritsLoose(Ext_tree_ViewDragZone, _Ext_view_DragZone);

  Ext_tree_ViewDragZone.PROPERTIES = function PROPERTIES() {
    return ['animRepair', 'containerScroll', 'ddGroup', 'dropAllowed', 'dropNotAllowed', 'repairHighlightColor', 'scrollEl'];
  };

  Ext_tree_ViewDragZone.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_tree_ViewDragZone.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_tree_ViewDragZone.PROPERTIES());
    return Ext_view_DragZone.getProperties(properties);
  };

  Ext_tree_ViewDragZone.getEvents = function getEvents(events) {
    events = events.concat(Ext_tree_ViewDragZone.EVENTS());
    return Ext_view_DragZone.getEvents(events);
  };

  _createClass(Ext_tree_ViewDragZone, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_view_DragZone.observedAttributes;
      Ext_tree_ViewDragZone.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_tree_ViewDragZone.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_tree_ViewDragZone(properties, events) {
    return _Ext_view_DragZone.call(this, properties.concat(Ext_tree_ViewDragZone.PROPERTIES()), events.concat(Ext_tree_ViewDragZone.EVENTS())) || this;
  }

  var _proto = Ext_tree_ViewDragZone.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_view_DragZone.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_view_DragZone.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_tree_ViewDragZone;
}(Ext_view_DragZone);

export { Ext_tree_ViewDragZone as default };