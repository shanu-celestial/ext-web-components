import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_feature_Grouping from '../../../Ext/grid/feature/Grouping.js';

var Ext_grid_feature_GroupingSummary =
/*#__PURE__*/
function (_Ext_grid_feature_Gro) {
  _inheritsLoose(Ext_grid_feature_GroupingSummary, _Ext_grid_feature_Gro);

  Ext_grid_feature_GroupingSummary.PROPERTIES = function PROPERTIES() {
    return ['collapseTip', 'collapsible', 'depthToIndent', 'enableGroupingMenu', 'enableNoGroups', 'expandTip', 'groupByText', 'groupers', 'groupHeaderTpl', 'hideGroupedHeader', 'listeners', 'remoteRoot', 'showGroupsText', 'showSummaryRow', 'startCollapsed'];
  };

  Ext_grid_feature_GroupingSummary.EVENTS = function EVENTS() {
    return [{
      name: 'groupclick',
      parameters: 'view,node,group,e'
    }, {
      name: 'groupcollapse',
      parameters: 'view,node,group'
    }, {
      name: 'groupcontextmenu',
      parameters: 'view,node,group,e'
    }, {
      name: 'groupdblclick',
      parameters: 'view,node,group,e'
    }, {
      name: 'groupexpand',
      parameters: 'view,node,group'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_grid_feature_GroupingSummary.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_feature_GroupingSummary.PROPERTIES());
    return Ext_grid_feature_Grouping.getProperties(properties);
  };

  Ext_grid_feature_GroupingSummary.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_feature_GroupingSummary.EVENTS());
    return Ext_grid_feature_Grouping.getEvents(events);
  };

  _createClass(Ext_grid_feature_GroupingSummary, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_feature_Gro.observedAttributes;
      Ext_grid_feature_GroupingSummary.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_feature_GroupingSummary.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_feature_GroupingSummary(properties, events) {
    return _Ext_grid_feature_Gro.call(this, properties.concat(Ext_grid_feature_GroupingSummary.PROPERTIES()), events.concat(Ext_grid_feature_GroupingSummary.EVENTS())) || this;
  }

  var _proto = Ext_grid_feature_GroupingSummary.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_feature_Gro.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_feature_Gro.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_feature_GroupingSummary;
}(Ext_grid_feature_Grouping);

export { Ext_grid_feature_GroupingSummary as default };