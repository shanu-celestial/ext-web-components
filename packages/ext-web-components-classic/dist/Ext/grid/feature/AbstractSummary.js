import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_feature_Feature from '../../../Ext/grid/feature/Feature.js';

var Ext_grid_feature_AbstractSummary =
/*#__PURE__*/
function (_Ext_grid_feature_Fea) {
  _inheritsLoose(Ext_grid_feature_AbstractSummary, _Ext_grid_feature_Fea);

  Ext_grid_feature_AbstractSummary.PROPERTIES = function PROPERTIES() {
    return ['listeners', 'showSummaryRow'];
  };

  Ext_grid_feature_AbstractSummary.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_grid_feature_AbstractSummary.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_feature_AbstractSummary.PROPERTIES());
    return Ext_grid_feature_Feature.getProperties(properties);
  };

  Ext_grid_feature_AbstractSummary.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_feature_AbstractSummary.EVENTS());
    return Ext_grid_feature_Feature.getEvents(events);
  };

  _createClass(Ext_grid_feature_AbstractSummary, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_feature_Fea.observedAttributes;
      Ext_grid_feature_AbstractSummary.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_feature_AbstractSummary.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_feature_AbstractSummary(properties, events) {
    return _Ext_grid_feature_Fea.call(this, properties.concat(Ext_grid_feature_AbstractSummary.PROPERTIES()), events.concat(Ext_grid_feature_AbstractSummary.EVENTS())) || this;
  }

  var _proto = Ext_grid_feature_AbstractSummary.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_feature_Fea.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_feature_Fea.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_feature_AbstractSummary;
}(Ext_grid_feature_Feature);

export { Ext_grid_feature_AbstractSummary as default };