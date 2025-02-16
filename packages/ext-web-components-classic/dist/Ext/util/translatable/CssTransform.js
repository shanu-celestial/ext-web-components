import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_translatable_Dom from '../../../Ext/util/translatable/Dom.js';

var Ext_util_translatable_CssTransform =
/*#__PURE__*/
function (_Ext_util_translatabl) {
  _inheritsLoose(Ext_util_translatable_CssTransform, _Ext_util_translatabl);

  Ext_util_translatable_CssTransform.PROPERTIES = function PROPERTIES() {
    return ['listeners'];
  };

  Ext_util_translatable_CssTransform.EVENTS = function EVENTS() {
    return [{
      name: 'animationend',
      parameters: 'sender,x,y'
    }, {
      name: 'animationframe',
      parameters: 'sender,x,y'
    }, {
      name: 'animationstart',
      parameters: 'sender,x,y'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_util_translatable_CssTransform.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_translatable_CssTransform.PROPERTIES());
    return Ext_util_translatable_Dom.getProperties(properties);
  };

  Ext_util_translatable_CssTransform.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_translatable_CssTransform.EVENTS());
    return Ext_util_translatable_Dom.getEvents(events);
  };

  _createClass(Ext_util_translatable_CssTransform, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_translatabl.observedAttributes;
      Ext_util_translatable_CssTransform.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_translatable_CssTransform.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_util_translatable_CssTransform(properties, events) {
    return _Ext_util_translatabl.call(this, properties.concat(Ext_util_translatable_CssTransform.PROPERTIES()), events.concat(Ext_util_translatable_CssTransform.EVENTS())) || this;
  }

  var _proto = Ext_util_translatable_CssTransform.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_translatabl.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_translatabl.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_util_translatable_CssTransform;
}(Ext_util_translatable_Dom);

export { Ext_util_translatable_CssTransform as default };