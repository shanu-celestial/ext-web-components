import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_MixedCollection from '../../Ext/util/MixedCollection.js';

var Ext_data_StoreManager =
/*#__PURE__*/
function (_Ext_util_MixedCollec) {
  _inheritsLoose(Ext_data_StoreManager, _Ext_util_MixedCollec);

  Ext_data_StoreManager.PROPERTIES = function PROPERTIES() {
    return ['allowFunctions', 'defaultSortDirection', 'listeners', 'multiSortLimit', 'sorters', 'sortRoot'];
  };

  Ext_data_StoreManager.EVENTS = function EVENTS() {
    return [{
      name: 'add',
      parameters: 'index,o,key'
    }, {
      name: 'beforesort',
      parameters: 'me,sorters'
    }, {
      name: 'clear',
      parameters: ''
    }, {
      name: 'remove',
      parameters: 'o,key'
    }, {
      name: 'replace',
      parameters: 'key,old,new'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_data_StoreManager.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_StoreManager.PROPERTIES());
    return Ext_util_MixedCollection.getProperties(properties);
  };

  Ext_data_StoreManager.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_StoreManager.EVENTS());
    return Ext_util_MixedCollection.getEvents(events);
  };

  _createClass(Ext_data_StoreManager, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_MixedCollec.observedAttributes;
      Ext_data_StoreManager.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_StoreManager.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_StoreManager(properties, events) {
    return _Ext_util_MixedCollec.call(this, properties.concat(Ext_data_StoreManager.PROPERTIES()), events.concat(Ext_data_StoreManager.EVENTS())) || this;
  }

  var _proto = Ext_data_StoreManager.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_MixedCollec.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_MixedCollec.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_StoreManager;
}(Ext_util_MixedCollection);

export { Ext_data_StoreManager as default };