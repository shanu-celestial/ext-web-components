import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_data_Session =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_data_Session, _Ext_Base);

  Ext_data_Session.PROPERTIES = function PROPERTIES() {
    return ['autoDestroy', 'dirty', 'ignoreDirty', 'listeners', 'parent', 'recordStateIsDirtyState', 'schema'];
  };

  Ext_data_Session.EVENTS = function EVENTS() {
    return [{
      name: 'dirtychange',
      parameters: 'sender,dirty'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_data_Session.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_Session.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_data_Session.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_Session.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_data_Session, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_data_Session.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_Session.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_Session(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_data_Session.PROPERTIES()), events.concat(Ext_data_Session.EVENTS())) || this;
  }

  var _proto = Ext_data_Session.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_Session;
}(Ext_Base);

export { Ext_data_Session as default };