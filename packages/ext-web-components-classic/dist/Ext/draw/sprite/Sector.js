import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_sprite_Path from '../../../Ext/draw/sprite/Path.js';

var Ext_draw_sprite_Sector =
/*#__PURE__*/
function (_Ext_draw_sprite_Path) {
  _inheritsLoose(Ext_draw_sprite_Sector, _Ext_draw_sprite_Path);

  Ext_draw_sprite_Sector.PROPERTIES = function PROPERTIES() {
    return ['animation', 'centerX', 'centerY', 'dirty', 'endAngle', 'endRho', 'fillOpacity', 'fillStyle', 'globalAlpha', 'globalCompositeOperation', 'hidden', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'listeners', 'margin', 'miterLimit', 'parent', 'path', 'rotation', 'rotationCenterX', 'rotationCenterY', 'rotationRads', 'scaling', 'scalingCenterX', 'scalingCenterY', 'scalingX', 'scalingY', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'startAngle', 'startRho', 'strokeOpacity', 'strokeStyle', 'surface', 'transformFillStroke', 'translation', 'translationX', 'translationY', 'zIndex'];
  };

  Ext_draw_sprite_Sector.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_draw_sprite_Sector.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_draw_sprite_Sector.PROPERTIES());
    return Ext_draw_sprite_Path.getProperties(properties);
  };

  Ext_draw_sprite_Sector.getEvents = function getEvents(events) {
    events = events.concat(Ext_draw_sprite_Sector.EVENTS());
    return Ext_draw_sprite_Path.getEvents(events);
  };

  _createClass(Ext_draw_sprite_Sector, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_draw_sprite_Path.observedAttributes;
      Ext_draw_sprite_Sector.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_draw_sprite_Sector.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_draw_sprite_Sector(properties, events) {
    return _Ext_draw_sprite_Path.call(this, properties.concat(Ext_draw_sprite_Sector.PROPERTIES()), events.concat(Ext_draw_sprite_Sector.EVENTS())) || this;
  }

  var _proto = Ext_draw_sprite_Sector.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_draw_sprite_Path.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_draw_sprite_Path.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_draw_sprite_Sector;
}(Ext_draw_sprite_Path);

export { Ext_draw_sprite_Sector as default };