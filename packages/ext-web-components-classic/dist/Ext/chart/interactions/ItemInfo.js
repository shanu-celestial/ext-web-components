import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_interactions_Abstract from '../../../Ext/chart/interactions/Abstract.js';

var Ext_chart_interactions_ItemInfo =
/*#__PURE__*/
function (_Ext_chart_interactio) {
  _inheritsLoose(Ext_chart_interactions_ItemInfo, _Ext_chart_interactio);

  Ext_chart_interactions_ItemInfo.PROPERTIES = function PROPERTIES() {
    return ['chart', 'enabled', 'extjsGestures', 'gesture', 'listeners'];
  };

  Ext_chart_interactions_ItemInfo.EVENTS = function EVENTS() {
    return [{
      name: 'show',
      parameters: 'sender,item,panel'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_chart_interactions_ItemInfo.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_interactions_ItemInfo.PROPERTIES());
    return Ext_chart_interactions_Abstract.getProperties(properties);
  };

  Ext_chart_interactions_ItemInfo.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_interactions_ItemInfo.EVENTS());
    return Ext_chart_interactions_Abstract.getEvents(events);
  };

  _createClass(Ext_chart_interactions_ItemInfo, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_interactio.observedAttributes;
      Ext_chart_interactions_ItemInfo.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_interactions_ItemInfo.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_interactions_ItemInfo(properties, events) {
    return _Ext_chart_interactio.call(this, properties.concat(Ext_chart_interactions_ItemInfo.PROPERTIES()), events.concat(Ext_chart_interactions_ItemInfo.EVENTS())) || this;
  }

  var _proto = Ext_chart_interactions_ItemInfo.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_interactio.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_interactio.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_interactions_ItemInfo;
}(Ext_chart_interactions_Abstract);

export { Ext_chart_interactions_ItemInfo as default };