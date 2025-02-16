import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_sprite_Sprite from '../../../../Ext/draw/sprite/Sprite.js';

var Ext_chart_navigator_sprite_RangeMask =
/*#__PURE__*/
function (_Ext_draw_sprite_Spri) {
  _inheritsLoose(Ext_chart_navigator_sprite_RangeMask, _Ext_draw_sprite_Spri);

  Ext_chart_navigator_sprite_RangeMask.PROPERTIES = function PROPERTIES() {
    return ['animation', 'dirty', 'fillOpacity', 'fillStyle', 'globalAlpha', 'globalCompositeOperation', 'hidden', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'miterLimit', 'parent', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'strokeOpacity', 'strokeStyle', 'surface', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'zIndex'];
  };

  Ext_chart_navigator_sprite_RangeMask.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_chart_navigator_sprite_RangeMask.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_navigator_sprite_RangeMask.PROPERTIES());
    return Ext_draw_sprite_Sprite.getProperties(properties);
  };

  Ext_chart_navigator_sprite_RangeMask.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_navigator_sprite_RangeMask.EVENTS());
    return Ext_draw_sprite_Sprite.getEvents(events);
  };

  _createClass(Ext_chart_navigator_sprite_RangeMask, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_sprite_Spri.observedAttributes;
      Ext_chart_navigator_sprite_RangeMask.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_navigator_sprite_RangeMask.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_chart_navigator_sprite_RangeMask(properties, events) {
    return _Ext_draw_sprite_Spri.call(this, properties.concat(Ext_chart_navigator_sprite_RangeMask.PROPERTIES()), events.concat(Ext_chart_navigator_sprite_RangeMask.EVENTS())) || this;
  }

  var _proto = Ext_chart_navigator_sprite_RangeMask.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_sprite_Spri.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_sprite_Spri.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_chart_navigator_sprite_RangeMask;
}(Ext_draw_sprite_Sprite);

export { Ext_chart_navigator_sprite_RangeMask as default };