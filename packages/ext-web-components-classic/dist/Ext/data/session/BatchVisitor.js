import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_data_session_BatchVisitor =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Ext_data_session_BatchVisitor, _Ext_Base);

  Ext_data_session_BatchVisitor.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_data_session_BatchVisitor.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_data_session_BatchVisitor.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_session_BatchVisitor.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_data_session_BatchVisitor.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_session_BatchVisitor.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Ext_data_session_BatchVisitor, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_data_session_BatchVisitor.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_session_BatchVisitor.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_session_BatchVisitor(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_data_session_BatchVisitor.PROPERTIES()), events.concat(Ext_data_session_BatchVisitor.EVENTS())) || this;
  }

  var _proto = Ext_data_session_BatchVisitor.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_session_BatchVisitor;
}(Ext_Base);

export { Ext_data_session_BatchVisitor as default };