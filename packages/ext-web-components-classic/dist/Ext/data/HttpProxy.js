import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_proxy_Server from '../../Ext/data/proxy/Server.js';

var Ext_data_HttpProxy =
/*#__PURE__*/
function (_Ext_data_proxy_Serve) {
  _inheritsLoose(Ext_data_HttpProxy, _Ext_data_proxy_Serve);

  Ext_data_HttpProxy.PROPERTIES = function PROPERTIES() {
    return ['actionMethods', 'api', 'batchActions', 'batchOrder', 'binary', 'cacheString', 'directionParam', 'extraParams', 'filterParam', 'groupDirectionParam', 'groupParam', 'headers', 'idParam', 'limitParam', 'listeners', 'model', 'noCache', 'pageParam', 'paramsAsJson', 'password', 'reader', 'simpleGroupMode', 'simpleSortMode', 'sortParam', 'startParam', 'timeout', 'url', 'useDefaultXhrHeader', 'username', 'withCredentials', 'writer'];
  };

  Ext_data_HttpProxy.EVENTS = function EVENTS() {
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

  Ext_data_HttpProxy.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_HttpProxy.PROPERTIES());
    return Ext_data_proxy_Server.getProperties(properties);
  };

  Ext_data_HttpProxy.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_HttpProxy.EVENTS());
    return Ext_data_proxy_Server.getEvents(events);
  };

  _createClass(Ext_data_HttpProxy, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_proxy_Serve.observedAttributes;
      Ext_data_HttpProxy.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_HttpProxy.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_HttpProxy(properties, events) {
    return _Ext_data_proxy_Serve.call(this, properties.concat(Ext_data_HttpProxy.PROPERTIES()), events.concat(Ext_data_HttpProxy.EVENTS())) || this;
  }

  var _proto = Ext_data_HttpProxy.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_proxy_Serve.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_proxy_Serve.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_HttpProxy;
}(Ext_data_proxy_Server);

export { Ext_data_HttpProxy as default };