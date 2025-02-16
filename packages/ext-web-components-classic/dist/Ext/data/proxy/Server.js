import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_proxy_Proxy from '../../../Ext/data/proxy/Proxy.js';

var Ext_data_proxy_Server =
/*#__PURE__*/
function (_Ext_data_proxy_Proxy) {
  _inheritsLoose(Ext_data_proxy_Server, _Ext_data_proxy_Proxy);

  Ext_data_proxy_Server.PROPERTIES = function PROPERTIES() {
    return ['api', 'batchActions', 'batchOrder', 'cacheString', 'directionParam', 'extraParams', 'filterParam', 'groupDirectionParam', 'groupParam', 'idParam', 'limitParam', 'listeners', 'model', 'noCache', 'pageParam', 'reader', 'simpleGroupMode', 'simpleSortMode', 'sortParam', 'startParam', 'timeout', 'url', 'writer'];
  };

  Ext_data_proxy_Server.EVENTS = function EVENTS() {
    return [{
      name: 'exception',
      parameters: 'sender,response,operation'
    }, {
      name: 'metachange',
      parameters: 'sender,meta'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_data_proxy_Server.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_proxy_Server.PROPERTIES());
    return Ext_data_proxy_Proxy.getProperties(properties);
  };

  Ext_data_proxy_Server.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_proxy_Server.EVENTS());
    return Ext_data_proxy_Proxy.getEvents(events);
  };

  _createClass(Ext_data_proxy_Server, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_proxy_Proxy.observedAttributes;
      Ext_data_proxy_Server.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_proxy_Server.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_proxy_Server(properties, events) {
    return _Ext_data_proxy_Proxy.call(this, properties.concat(Ext_data_proxy_Server.PROPERTIES()), events.concat(Ext_data_proxy_Server.EVENTS())) || this;
  }

  var _proto = Ext_data_proxy_Server.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_proxy_Proxy.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_proxy_Proxy.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_proxy_Server;
}(Ext_data_proxy_Proxy);

export { Ext_data_proxy_Server as default };