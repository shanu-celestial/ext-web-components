import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Mixin from '../../Ext/Mixin.js';

var Ext_mixin_Selectable =
/*#__PURE__*/
function (_Ext_Mixin) {
  _inheritsLoose(Ext_mixin_Selectable, _Ext_Mixin);

  Ext_mixin_Selectable.PROPERTIES = function PROPERTIES() {
    return ['allowDeselect', 'deselectOnContainerClick', 'disableSelection', 'lastFocused', 'lastSelected', 'mode', 'pruneRemoved', 'publishes', 'selected', 'selection', 'twoWayBindable'];
  };

  Ext_mixin_Selectable.EVENTS = function EVENTS() {
    return [{
      name: 'selectionchange',
      parameters: 'sender,records'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_mixin_Selectable.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_mixin_Selectable.PROPERTIES());
    return Ext_Mixin.getProperties(properties);
  };

  Ext_mixin_Selectable.getEvents = function getEvents(events) {
    events = events.concat(Ext_mixin_Selectable.EVENTS());
    return Ext_Mixin.getEvents(events);
  };

  _createClass(Ext_mixin_Selectable, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Mixin.observedAttributes;
      Ext_mixin_Selectable.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_mixin_Selectable.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_mixin_Selectable(properties, events) {
    return _Ext_Mixin.call(this, properties.concat(Ext_mixin_Selectable.PROPERTIES()), events.concat(Ext_mixin_Selectable.EVENTS())) || this;
  }

  var _proto = Ext_mixin_Selectable.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Mixin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Mixin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_mixin_Selectable;
}(Ext_Mixin);

export { Ext_mixin_Selectable as default };