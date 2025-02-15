import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

var Ext_grid_plugin_DragDrop =
/*#__PURE__*/
function (_Ext_plugin_Abstract) {
  _inheritsLoose(Ext_grid_plugin_DragDrop, _Ext_plugin_Abstract);

  Ext_grid_plugin_DragDrop.PROPERTIES = function PROPERTIES() {
    return ['allowCopy', 'containerScroll', 'copy', 'ddGroup', 'dragGroup', 'dragText', 'dragZone', 'dropGroup', 'dropZone', 'enableDrag', 'enableDrop', 'id', 'stateEvents'];
  };

  Ext_grid_plugin_DragDrop.EVENTS = function EVENTS() {
    return [{
      name: 'beforedrop',
      parameters: 'node,data,overModel,dropPosition,dropHandlers'
    }, {
      name: 'drop',
      parameters: 'node,data,overModel,dropPosition'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_grid_plugin_DragDrop.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_DragDrop.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  };

  Ext_grid_plugin_DragDrop.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_plugin_DragDrop.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  };

  _createClass(Ext_grid_plugin_DragDrop, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_plugin_Abstract.observedAttributes;
      Ext_grid_plugin_DragDrop.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_plugin_DragDrop.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_plugin_DragDrop(properties, events) {
    return _Ext_plugin_Abstract.call(this, properties.concat(Ext_grid_plugin_DragDrop.PROPERTIES()), events.concat(Ext_grid_plugin_DragDrop.EVENTS())) || this;
  }

  var _proto = Ext_grid_plugin_DragDrop.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_plugin_Abstract.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_plugin_Abstract.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_plugin_DragDrop;
}(Ext_plugin_Abstract);

export { Ext_grid_plugin_DragDrop as default };