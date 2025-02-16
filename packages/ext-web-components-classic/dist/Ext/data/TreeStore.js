import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_Store from '../../Ext/data/Store.js';

var Ext_data_TreeStore =
/*#__PURE__*/
function (_Ext_data_Store) {
  _inheritsLoose(Ext_data_TreeStore, _Ext_data_Store);

  Ext_data_TreeStore.PROPERTIES = function PROPERTIES() {
    return ['associatedEntity', 'asynchronousLoad', 'autoDestroy', 'autoLoad', 'autoSort', 'autoSync', 'batchUpdateMode', 'clearOnLoad', 'clearOnPageLoad', 'clearRemovedOnLoad', 'data', 'defaultRootId', 'defaultRootProperty', 'defaultRootText', 'fields', 'filterer', 'filters', 'folderSort', 'groupDir', 'grouper', 'groupField', 'lazyFill', 'listeners', 'model', 'nodeParam', 'pageSize', 'parentIdProperty', 'proxy', 'reloadOnClearSorters', 'remoteFilter', 'remoteSort', 'role', 'root', 'rootVisible', 'session', 'sorters', 'sortOnLoad', 'statefulFilters', 'storeId', 'trackRemoved'];
  };

  Ext_data_TreeStore.EVENTS = function EVENTS() {
    return [{
      name: 'add',
      parameters: 'store,records,index'
    }, {
      name: 'beforeload',
      parameters: 'store,operation'
    }, {
      name: 'beforeprefetch',
      parameters: 'sender,operation'
    }, {
      name: 'beforesort',
      parameters: 'store,sorters'
    }, {
      name: 'beforesync',
      parameters: 'options'
    }, {
      name: 'beginupdate',
      parameters: ''
    }, {
      name: 'clear',
      parameters: 'sender'
    }, {
      name: 'commit',
      parameters: 'store'
    }, {
      name: 'datachanged',
      parameters: 'sender'
    }, {
      name: 'endupdate',
      parameters: ''
    }, {
      name: 'filterchange',
      parameters: 'store,filters'
    }, {
      name: 'groupchange',
      parameters: 'store,grouper'
    }, {
      name: 'load',
      parameters: 'sender,records,successful,operation,node'
    }, {
      name: 'metachange',
      parameters: 'sender,meta'
    }, {
      name: 'nodeappend',
      parameters: 'sender,node,index'
    }, {
      name: 'nodebeforeappend',
      parameters: 'sender,node'
    }, {
      name: 'nodebeforecollapse',
      parameters: 'sender'
    }, {
      name: 'nodebeforeexpand',
      parameters: 'sender'
    }, {
      name: 'nodebeforeinsert',
      parameters: 'sender,node,refNode'
    }, {
      name: 'nodebeforemove',
      parameters: 'sender,oldParent,newParent,index'
    }, {
      name: 'nodebeforeremove',
      parameters: 'sender,node,isMove'
    }, {
      name: 'nodecollapse',
      parameters: 'sender'
    }, {
      name: 'nodeexpand',
      parameters: 'sender'
    }, {
      name: 'nodeinsert',
      parameters: 'sender,node,refNode'
    }, {
      name: 'nodemove',
      parameters: 'sender,oldParent,newParent,index'
    }, {
      name: 'noderemove',
      parameters: 'sender,node,isMove,context'
    }, {
      name: 'nodesort',
      parameters: 'sender,childNodes'
    }, {
      name: 'prefetch',
      parameters: 'sender,records,successful,operation'
    }, {
      name: 'refresh',
      parameters: 'sender'
    }, {
      name: 'reject',
      parameters: 'store'
    }, {
      name: 'remove',
      parameters: 'store,records,index,isMove'
    }, {
      name: 'rootchange',
      parameters: 'newRoot,oldRoot'
    }, {
      name: 'sort',
      parameters: 'store'
    }, {
      name: 'update',
      parameters: 'sender,record,operation,modifiedFieldNames,details'
    }, {
      name: 'write',
      parameters: 'store,operation'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_data_TreeStore.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_TreeStore.PROPERTIES());
    return Ext_data_Store.getProperties(properties);
  };

  Ext_data_TreeStore.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_TreeStore.EVENTS());
    return Ext_data_Store.getEvents(events);
  };

  _createClass(Ext_data_TreeStore, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_Store.observedAttributes;
      Ext_data_TreeStore.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_TreeStore.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_data_TreeStore(properties, events) {
    return _Ext_data_Store.call(this, properties.concat(Ext_data_TreeStore.PROPERTIES()), events.concat(Ext_data_TreeStore.EVENTS())) || this;
  }

  var _proto = Ext_data_TreeStore.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_Store.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_Store.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_data_TreeStore;
}(Ext_data_Store);

export { Ext_data_TreeStore as default };