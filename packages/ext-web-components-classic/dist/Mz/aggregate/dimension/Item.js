import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Mz_aggregate_dimension_Item =
/*#__PURE__*/
function (_Ext_Base) {
  _inheritsLoose(Mz_aggregate_dimension_Item, _Ext_Base);

  Mz_aggregate_dimension_Item.PROPERTIES = function PROPERTIES() {
    return ['aggregator', 'align', 'blankText', 'caseSensitiveSort', 'column', 'dataIndex', 'direction', 'exportStyle', 'filter', 'flex', 'formatter', 'grouperFn', 'header', 'id', 'labelRenderer', 'renderer', 'scope', 'showZeroAsBlank', 'sortable', 'sorterFn', 'sortIndex', 'values', 'width'];
  };

  Mz_aggregate_dimension_Item.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Mz_aggregate_dimension_Item.getProperties = function getProperties(properties) {
    properties = properties.concat(Mz_aggregate_dimension_Item.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Mz_aggregate_dimension_Item.getEvents = function getEvents(events) {
    events = events.concat(Mz_aggregate_dimension_Item.EVENTS());
    return Ext_Base.getEvents(events);
  };

  _createClass(Mz_aggregate_dimension_Item, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Mz_aggregate_dimension_Item.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Mz_aggregate_dimension_Item.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Mz_aggregate_dimension_Item(properties, events) {
    return _Ext_Base.call(this, properties.concat(Mz_aggregate_dimension_Item.PROPERTIES()), events.concat(Mz_aggregate_dimension_Item.EVENTS())) || this;
  }

  var _proto = Mz_aggregate_dimension_Item.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Mz_aggregate_dimension_Item;
}(Ext_Base);

export { Mz_aggregate_dimension_Item as default };